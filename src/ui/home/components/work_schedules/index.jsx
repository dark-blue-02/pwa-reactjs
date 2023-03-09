import React from "react";
import { ListView } from "./schedule_list";
import { WeekdayList } from "./weekday_list";

export default function WorkSchedule() {
    return <div className="mt-4">
        <p className="text-black text-lg font-semibold leading-[18.9px]">Lịch cơ quan</p>
        <div className=" h-4" />
        <WeekdayList />
        <div className=" h-4" />
        <ListView />
    </div>
}