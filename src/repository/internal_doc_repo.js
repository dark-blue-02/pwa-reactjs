import { internalDocApi } from "../data";
import { savedBearerToken } from "../utils";

export const internalDocRepository = {
    _api: internalDocApi,
    async getIncomingDocs({ pageIndex, pageSize }) {
        try {
            const data = await this._api.getIncomingDocs({
                pageIndex: pageIndex,
                size: pageSize,
                bearerToken: savedBearerToken
            });
            return {
                totalCount: data.total_count,
                docs: data.data.map((item) => {
                    return {
                        documentCode: item.code,
                        incomingNumber: item.incoming_number,
                        documentNumber: item.document_number,
                        dateIssued: item.date_issued,
                        incomingDate: item.incoming_date,
                        isRead: item.status_internal_incoming !== "UNREAD",
                        documentStatus: item.document_status,
                        title: item.title,
                        authorityIssuedName: item.authority_issued_name,
                        handler: item.handler,
                    }
                })
            };
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}