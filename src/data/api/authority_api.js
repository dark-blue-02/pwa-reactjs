import axios from "axios";

export const authorityApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/authority-issueds",
        timeout: 10000,
    }),
    /**
     * @returns {Promise<{id: number, name: string}[]>}
     */
    async getIncomingAuthorities({ bearerToken }) {
        const response = await axios.get(
            this._instance.getUri(),
            {
                params: { type: "INCOMING" },
                headers: {
                    "Authorization": bearerToken,
                },
            },
        )
        return response.data
    }
}
