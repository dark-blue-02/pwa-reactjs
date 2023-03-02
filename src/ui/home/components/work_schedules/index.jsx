import React, { useContext } from "react";
import { DateTime } from "../../../../utils";
import { observer } from "mobx-react-lite";
import { HomepageContext } from "../../home_screen";
import { convert } from "html-to-text";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../store/main";

export default function WorkSchedule() {
    const currentWeek = DateTime.currentWeek;
    const store = useContext(HomepageContext);

    return <div className="mt-4">
        {
            currentWeek.map((day) => {
                return <button
                    className="border rounded-lg border-blue-400 mx-4"
                    key={day}>
                    {day}
                </button>
            })
        }
        <div className=" h-4" />
        <ListView store={store} />
    </div>
}

const ListView = observer(
    /**
     * @param {{store: HomepageStore}} obj 
    */
    ({ store }) =>
        <>
            {
                store.workScheduleList.length > 0 &&
                store.workScheduleList.map((item, index) => {
                    const startTime = DateTime.getTimeOfDay({ date: new Date(Date.parse(item.startDate)) })
                    const endTime = item.endDate !== null
                        ? DateTime.getTimeOfDay({ date: new Date(Date.parse(item.endDate)) })
                        : "?"
                    return <div className="border rounded-lg border-blue-400 my-2" key={index}>
                        <p>{`${startTime} - ${endTime}`}</p>
                        <p>{convert(item.content)}</p>
                        <p>{convert(item.location)}</p>
                    </div>
                })
            }
        </>
)