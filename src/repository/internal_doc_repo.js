import { internalDocApi } from "../data";
import { Result, refreshTokenIfExpired, savedBearerToken } from "../utils";

export const internalDocRepository = {
    _api: internalDocApi,
    async getIncomingDocs({
        pageIndex,
        pageSize,
        title = "",
        toIncomingDate = "",
        fromIncomingDate = "",
    }) {
        const refreshTokenResult = await refreshTokenIfExpired()
        if (refreshTokenResult === Result.failed) {
            return null;
        }

        try {
            const data = await this._api.getIncomingDocs({
                pageIndex: pageIndex,
                size: pageSize,
                title: title,
                fromIncomingDate: fromIncomingDate,
                toIncomingDate: toIncomingDate,
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
