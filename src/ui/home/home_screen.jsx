import React, { createContext, useEffect, useMemo } from "react";
import { Components } from "./components";
import HomepageStore from "./store/main_store";
import { DateTime } from "../../utils";
import { EmptyDivBehindNavbar } from "../app/navbar/navbar";

export const HomepageContext = createContext({ store: new HomepageStore() });

export default function HomeScreen() {
    const components = Components;

    const store = useMemo(() => new HomepageStore(), [])
    useEffect(
        () => {
            store.getCounter()
            store.getWorkScheduleList({
                fromDate: DateTime.firstDayOfWeek,
                toDate: DateTime.lastDayOfWeek,
            })
        },
        [store],
    )

    return <HomepageContext.Provider value={{ store: store }}>
        <div className=" flex flex-col px-8 pt-2 text-start">
            {components.header}
            <div className="h-4" />
            {components.documentCounter}
            <div className="h-4" />
            {components.taskCounter}
            <div className="h-4" />
            {components.workSchedule}
            <EmptyDivBehindNavbar />
        </div>
    </HomepageContext.Provider>
}
