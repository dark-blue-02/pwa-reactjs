import { internalDocRepository } from "../../../repository";
import { DataState } from "../../../utils";
import { makeObservable, observable, action } from "mobx"

export default class DocumentStore {
    repository = internalDocRepository
    pageSize = 10
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

    constructor() {
        makeObservable(this, {
            incomingDocListState: observable,
            incomingDocList: observable,
            getIncomingDocList: action,
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
        }

    }
}