import React from "react";
import { DateTime } from "../../../../utils";

export default function WorkSchedule() {
    const currentWeek = DateTime.currentWeek;

    return <div className=" mt-4">
        {
            currentWeek.map((day) => {
                return <button className="bg-blue-400 mx-4" key={day}>
                    {day}
                </button>
            })
        }
    </div>
}