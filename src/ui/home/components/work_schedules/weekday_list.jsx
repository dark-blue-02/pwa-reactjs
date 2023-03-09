import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { DateTime } from "../../../../utils";
import { color } from "../../../../utils/resource/color";
import { HomepageContext } from "../../home_screen";
import React from "react";

export const WeekdayList = observer(
    () => {
        const store = useContext(HomepageContext).store
        const currentWeek = DateTime.currentWeek;
        return <div className="flex overflow-x-scroll">
            {currentWeek.map((day, index) => {
                const isSelected = store.selectedDayOfWeek - 1 === index

                return <div
                    className="border rounded-lg min-w-[52px] mx-4 pt-5 pb-4"
                    style={{
                        borderColor: isSelected ? color.primary : color.F3F3F3,
                        backgroundColor: isSelected ? color.primary : 'transparent',
                    }}
                    key={index}
                    onClick={() => { store.selectDayOfWeek(index + 1); }}>
                    <p
                        className=" text-xs font-medium text-label text-center"
                        style={{ color: isSelected ? 'white' : color.label }}
                    >
                        {index !== 6 ? `Thứ ${index + 2}` : "CN"}
                    </p>
                    <div className="h-3" />
                    <p
                        className="text-base text-label font-semibold tracking-[-0.4px] text-center"
                        style={{ color: isSelected ? 'white' : color.label }}
                    >
                        {day}
                    </p>
                </div>;
            })}
        </div>;
    }
)