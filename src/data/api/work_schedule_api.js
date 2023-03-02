import axios from "axios";

export const workScheduleApi = {
    _instance: axios.create({
        baseURL: "https://stg.vimc.fafu.com.vn/api/v1/work-schedules",
        timeout: 10000,
    }),
    /**
     * @returns {Promise<{
     *      schedule_code: any,
     *      created_at: any,
     *      updated_at: any,
     *      start_at: any,
     *      end_at: any,
     *      title: any,
     *      event_notice: any,
     *      preparation: any,
     *      attenders: any,
     *      location: any,
     *      host: any,
     *      file_ids: any[],
     *      last_edit_by: any,
     *      assignees: any[],
     * }[]>}
     */
    async getWorkScheduleList({ bearerToken, fromDate, toDate }) {
        const response = await axios.get(`${this._instance.getUri()}`, {
            params: {
                from_date: fromDate,
                to_date: toDate,
            },
            headers: {
                "Authorization": bearerToken,
            },
        })

        return response.data
    }
}