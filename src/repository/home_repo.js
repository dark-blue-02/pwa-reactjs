import { counterApi, workScheduleApi } from "../data";
import { Result, refreshTokenIfExpired, savedBearerToken } from "../utils";

export const homeRepository = {
    _counterApi: counterApi,
    _workScheduleApi: workScheduleApi,
    async getCounter() {
        try {
            const data = await this._counterApi.getCounter({ bearerToken: savedBearerToken });
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
    },

    async getWorkScheduleList({ fromDate, toDate }) {
        // TODO: can't call API when token is expired, can be fix by refresh app
        const refreshTokenResult = await refreshTokenIfExpired()
        if (refreshTokenResult === Result.failed) {
            return null;
        }

        try {
            const data = await this._workScheduleApi.getWorkScheduleList({
                bearerToken: savedBearerToken,
                fromDate: fromDate,
                toDate: toDate,
            })
            return data.map((item) => {
                return {
                    startDate: item.start_at,
                    endDate: item.end_at,
                    content: item.event_notice,
                    location: item.location,
                }
            })
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}