import axios from "axios";

export const internalDocApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/internal-documents",
        timeout: 5000,
    }),
    /**
     * @returns {Promise<{total_count: number, data: any[]}>}
     */
    async getIncomingDocs({
        pageIndex,
        size,
        title = "",
        fromIncomingDate = "", toIncomingDate = "",
        fromIssuedDate = "", toIssuedDate = "",
        signer = "",
        authorityName = "",
        bearerToken,
    }) {
        const titleParam = title !== "" ? { title: title } : {}
        const incomingDateParams = fromIncomingDate !== "" && toIncomingDate !== ""
            ? {
                from_incoming_date: fromIncomingDate,
                to_incoming_date: toIncomingDate,
            }
            : {}
        const issuedDateParams = fromIssuedDate !== "" && toIssuedDate !== ""
            ? {
                from_date_issued: fromIssuedDate,
                to_date_issued: toIssuedDate,
            }
            : {}
        const signerParam = signer !== "" ? { signer: signer } : {}
        const authorityNameParam = authorityName !== "" ? { authority_name: authorityName } : {}

        const response = await axios.get(
            `${this._instance.getUri()}/incomingv2`,
            {
                params: {
                    page: pageIndex,
                    size: size,
                    ...titleParam,
                    ...incomingDateParams,
                    ...issuedDateParams,
                    ...signerParam,
                    ...authorityNameParam,
                },
                headers: {
                    "Authorization": bearerToken,
                },
            })
        return {
            total_count: response.data.total_count,
            data: response.data.data,
        }
    }
}
