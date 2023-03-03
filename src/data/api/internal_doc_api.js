import axios from "axios";

export const internalDocApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/internal-documents",
        timeout: 5000,
    }),
    async getIncomingDocs({ pageIndex, size, bearerToken }) {
        const response = await axios.get(
            `${this._instance.getUri()}/incoming`,
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