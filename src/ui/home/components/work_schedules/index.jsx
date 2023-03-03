import React, { useContext } from "react";
import { DateTime } from "../../../../utils";
import { observer } from "mobx-react-lite";
import { HomepageContext } from "../../home_screen";
import { convert } from "html-to-text";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../store/main_store";

export default function WorkSchedule() {
    const currentWeek = DateTime.currentWeek;
    const store = useContext(HomepageContext);

    return <div className="mt-4">
        <WeekdayList currentWeek={currentWeek} store={store} />
        <div className=" h-4" />
        <ListView store={store} />
    </div>
}

const WeekdayList = observer(
    /**
     * @param {{currentWeek: number[], store: HomepageStore}} obj
     */
    ({ currentWeek, store }) => {
        return <>
            {currentWeek.map((day, index) => {
                return <button
                    className="border rounded-lg border-blue-400 mx-4 w-8"
                    key={index}
                    onClick={() => { store.selectDayOfWeek(index + 1); }}>
                    {day}
                </button>;
            })}
        </>;
    }
)

const ListView = observer(
    /**
     * @param {{store: HomepageStore}} obj 
    */
    ({ store }) => {
        return <>
            {store.workScheduleList.length > 0 &&
                store.workScheduleList
                    .filter((item) => {
                        const dayOfWeek = new Date(Date.parse(item.startDate)).getDay();
                        return dayOfWeek === store.selectedDayOfWeek
                    })
                    .map((item, index) => {
                        const startTime = DateTime.getTimeOfDay({ date: new Date(Date.parse(item.startDate)) });
                        const endTime = item.endDate !== null
                            ? DateTime.getTimeOfDay({ date: new Date(Date.parse(item.endDate)) })
                            : "?";

                        return <div className="border rounded-lg border-blue-400 my-2 mx-2 px-2 py-2" key={index}>
                            <p>{`${startTime} - ${endTime}`}</p>
                            <p>{"Nội dung:"}</p>
                            <p>{convert(item.content)}</p>
                            <p>{"Địa điểm:"}</p>
                            <p>{convert(item.location)}</p>
                        </div>;
                    })}
        </>;
    }
)