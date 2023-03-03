import axios from "axios";

export const internalDocApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/internal-documents",
        timeout: 5000,
    }),
    /**
     * @returns {Promise<{total_count: number, data: any[]}>}
     */
    async getIncomingDocs({ pageIndex, size, bearerToken }) {
        const response = await axios.get(
            `${this._instance.getUri()}/incomingv2`,
            {
                params: {
                    page: pageIndex,
                    size: size,
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