import { counterApi } from "../data";

export const homeRepository = {
    _counterApi: counterApi,
    async getCounter({ bearerToken }) {
        try {
            const data = await this._counterApi.getCounter({ bearerToken });
            return {
                unreadIncomingDocs: data.unread_incoming,
                unreadOutgoingDocs: data.unread_outgoing,
                overdueTasks: data.overdue_task,
                unreadWorks: data.proposal_other,
                applications: data.unread_internal_message,
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}