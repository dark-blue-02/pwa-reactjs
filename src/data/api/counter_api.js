import axios from "axios";

export const counterApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/dashboard",
        timeout: 10000,
    }),
    async getCounter({ bearerToken }) {
        const response = await axios.get(
            `${this._instance.getUri()}/sidemenu_counter`,
            {
                params: {
                    type: ["WORK", "PROPOSAL", "INTERNAL_MESSAGE"],
                },
                headers: {
                    "Authorization": bearerToken,
                },
            },
        )

        return {
            unread_incoming: response.data.unread_incoming,
            unread_outgoing: response.data.unread_outgoing,
            overdue_task: response.data.overdue_task,
            work: response.data.work,
            proposal_other: response.data.proposal_other,
            unread_internal_message: response.data.unread_internal_message,
        }
    }
}