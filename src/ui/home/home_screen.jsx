import React, { createContext, useEffect, useMemo } from "react";
import { Components } from "./components";
import HomepageStore from "./store/main";
import { bearerToken } from "../../utils";

export const HomepageContext = createContext(new HomepageStore());

export default function HomeScreen() {
    const components = Components;

    const store = useMemo(() => new HomepageStore(), [])
    useEffect(
        () => {
            store.getCounter({ bearerToken: bearerToken })
            store.getWorkScheduleList({
                bearerToken: bearerToken,
                fromDate: '2023-01-30',
                toDate: '2023-02-10'
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