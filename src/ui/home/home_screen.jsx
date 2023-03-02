import React, { createContext, useEffect, useMemo } from "react";
import { Components } from "./components";
import HomepageStore from "./store/main";
import { DateTime, bearerToken } from "../../utils";

export const HomepageContext = createContext(new HomepageStore());

export default function HomeScreen() {
    const components = Components;

    const store = useMemo(() => new HomepageStore(), [])
    useEffect(
        () => {
            store.getCounter({ bearerToken: bearerToken })
            store.getWorkScheduleList({
                bearerToken: bearerToken,
                fromDate: DateTime.firstDayOfWeek,
                toDate: DateTime.lastDayOfWeek,
            })
        },
        [store],
    )

    return <HomepageContext.Provider value={store}>
        <div className=" flex flex-col">
            {components.header}
            {components.documentCounter}
            {components.taskCounter}
            {components.workSchedule}
        </div>
    </HomepageContext.Provider>
}