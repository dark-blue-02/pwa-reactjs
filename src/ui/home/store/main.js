import { homeRepository } from "../../../repository";
import { DataState } from "../../../utils";
import { makeObservable, observable, action } from "mobx"

export default class HomepageStore {
    repository = homeRepository
    counterState = DataState.unknown
    counter = {
        unreadIncomingDocs: 0,
        unreadOutgoingDocs: 0,
        overdueTasks: 0,
        unreadWorks: 0,
        applications: 0,
    }
    workScheduleListState = DataState.unknown
    /**
     * @type {{
     *      startDate: any,
     *      endDate: any | null,
     *      content: any,
     *      location: any,
     * }[]}
     */
    workScheduleList = []

    constructor() {
        makeObservable(this, {
            counterState: observable,
            counter: observable,
            workScheduleList: observable,
            getCounter: action,
            getWorkScheduleList: action,
        })
    }

    async getCounter({ bearerToken }) {
        this.counterState = DataState.loading;
        const data = await this.repository.getCounter({ bearerToken });
        if (data !== null) {
            this.counterState = DataState.success;
            this.counter = {
                unreadIncomingDocs: data.unreadIncomingDocs,
                unreadOutgoingDocs: data.unreadOutgoingDocs,
                overdueTasks: data.overdueTasks,
                unreadWorks: data.unreadWorks,
                applications: data.applications,
            }
            return;
        }

        this.counterState = DataState.error;
    }

    async getWorkScheduleList({ bearerToken, fromDate, toDate }) {
        this.workScheduleListState = DataState.loading;
        const data = await this.repository.getWorkScheduleList({ bearerToken, fromDate, toDate });
        if (data !== null) {
            this.workScheduleListState = DataState.success;
            this.workScheduleList = data;
            return;
        }
    }
}