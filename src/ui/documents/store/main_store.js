import { internalDocRepository } from "../../../repository";
import { DataState } from "../../../utils";
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
        filterPriorityTasks: false,
        filterUnreadTasks: false,
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
        })
    }

    async getIncomingDocList({ pageIndex }) {
        this.incomingDocListState = DataState.loading
        const data = await this.repository.getIncomingDocs({
            pageIndex: pageIndex,
            pageSize: this.pageSize
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
        this.getIncomingDocList({ pageIndex: index })
    }

    //* UI Event:

    /**
     * @param {string} query
     */
    updateSearchQuery(query) {
        this.uiState = {
            ...this.uiState,
            searchQuery: query
        }
    }

    updateFilter({
        priorityTasks = this.uiState.filterPriorityTasks,
        unreadTasks = this.uiState.filterUnreadTasks,
    }) {
        this.uiState = {
            ...this.uiState,
            filterPriorityTasks: priorityTasks,
            filterUnreadTasks: unreadTasks,
        }
    }
}
