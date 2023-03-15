import { internalDocRepository } from "../../../repository";
import { DataState, DateTime } from "../../../utils";
import { makeObservable, observable, action } from "mobx"

export default class DocumentStore {
    repository = internalDocRepository
    pageSize = 10
    pageIndex = 0
    incomingDocListState = DataState.unknown
    incomingDocList = {
        totalCount: 0,
        /**
         * @type {{
         *  documentCode: string,
         *  incomingNumber: string,
         *  documentNumber: string,
         *  dateIssued: string | null,
         *  incomingDate: string,
         *  isRead: boolean,
         *  documentStatus: string,
         *  title: string,
         *  authorityIssuedName: string,
         *  handler: string | null,
         * }[]}
         */
        docs: [],
    }
    uiState = {
        searchQuery: "",
        filterUnreadTasks: false,
        filterDocStatus: "",
        filterIncomingStartDate: "",
        filterIncomingEndDate: "",
        filterIssuedStartDate: "",
        filterIssuedEndDate: "",
        signer: "",
        authorityName: "",
    }

    constructor() {
        makeObservable(this, {
            incomingDocListState: observable,
            incomingDocList: observable,
            pageIndex: observable,
            uiState: observable,
            getIncomingDocList: action,
            changePageIndex: action,
            updateSearchQuery: action,
            updateCheckbox: action,
            updateFilter: action,
            resetFilter: action,
            filterList: action,
        })
    }

    async getIncomingDocList({
        pageIndex,
        title = "",
        fromIncomingDate = "", toIncomingDate = "",
        fromIssuedDate = "", toIssuedDate = "",
        signer = "",
        authorityName = "",
    }) {
        this.incomingDocListState = DataState.loading
        const data = await this.repository.getIncomingDocs({
            pageIndex: pageIndex,
            pageSize: this.pageSize,
            title: title,
            fromIncomingDate: fromIncomingDate,
            toIncomingDate: toIncomingDate,
            fromIssuedDate: fromIssuedDate,
            toIssuedDate: toIssuedDate,
            signer: signer,
            authorityName: authorityName,
        })
        if (data !== null) {
            this.incomingDocListState = DataState.success
            this.incomingDocList = data
            return
        }

        this.incomingDocListState = DataState.error
    }

    /**
     * @param {number} index
     */
    changePageIndex(index) {
        this.pageIndex = index
        this.filterList(index)
    }

    formatDate(date) {
        return date === "" ? "" : DateTime.toString(date, "-", true)
    }

    filterList(pageIndex = this.pageIndex) {
        this.getIncomingDocList({
            pageIndex: pageIndex,
            title: this.uiState.searchQuery,
            fromIncomingDate: this.formatDate(this.uiState.filterIncomingStartDate),
            toIncomingDate: this.formatDate(this.uiState.filterIncomingEndDate),
            fromIssuedDate: this.formatDate(this.uiState.filterIssuedStartDate),
            toIssuedDate: this.formatDate(this.uiState.filterIssuedEndDate),
            signer: this.uiState.signer,
            authorityName: this.uiState.authorityName,
        })
    }

    //* UI Event:

    updateCheckbox(check) {
        this.uiState = {
            ...this.uiState,
            filterUnreadTasks: check,
        }
    }

    updateSearchQuery(query) {
        this.uiState = {
            ...this.uiState,
            searchQuery: query
        }
    }

    updateFilter({
        unreadTasks = this.uiState.filterUnreadTasks,
        docStatus = this.uiState.filterDocStatus,
        incomingStartDate = this.uiState.filterIncomingStartDate,
        incomingEndDate = this.uiState.filterIncomingEndDate,
        issuedStartDate = this.uiState.filterIssuedStartDate,
        issuedEndDate = this.uiState.filterIssuedStartDate,
        signer = this.uiState.signer,
        authorityName = this.uiState.authorityName,
    }) {
        this.uiState = {
            ...this.uiState,
            filterUnreadTasks: unreadTasks,
            filterDocStatus: docStatus,
            filterIncomingStartDate: incomingStartDate ?? "",
            filterIncomingEndDate: incomingEndDate ?? "",
            filterIssuedStartDate: issuedStartDate ?? "",
            filterIssuedEndDate: issuedEndDate ?? "",
            signer: signer ?? "",
            authorityName: authorityName ?? "",
        }
    }

    resetFilter() {
        this.uiState = {
            ...this.uiState,
            filterUnreadTasks: false,
            filterDocStatus: "",
            filterIncomingStartDate: "",
            filterIncomingEndDate: "",
            checkBoxchecked: false,
            filterIssuedStartDate: "",
            filterIssuedEndDate: "",
            signer: "",
            authorityName: "",
        }
    }
}
