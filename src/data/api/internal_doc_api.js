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
        bearerToken,
    }) {
        const titleParams = title !== "" ? { title: title } : {}
        const dateRangeParams = fromIncomingDate !== "" && toIncomingDate !== ""
            ? {
                from_incoming_date: fromIncomingDate,
                to_incoming_date: toIncomingDate,
            }
            : {}

        const response = await axios.get(
            `${this._instance.getUri()}/incomingv2`,
            {
                params: {
                    page: pageIndex,
                    size: size,
                    ...titleParams,
                    ...dateRangeParams,
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
