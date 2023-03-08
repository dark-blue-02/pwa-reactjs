import { observer } from "mobx-react-lite";
import { DataState, DateTime } from "../../../../utils";
import React, { useContext } from "react";
import { convert as convertHtmlToText } from "html-to-text";
import { HomepageContext } from "../../home_screen";
import { Title, TimeDisplay, MultilineText, LinkifyText } from "./text";
import { CircularProgress } from "@mui/material";
import { ErrorView, NoDataView } from "../../../common/data_result";

export const ListView = observer(
    () => {
        const store = useContext(HomepageContext).store
        let scheduleList = store.workScheduleList;

        if (store.workScheduleList.length > 0) {
            scheduleList = store.workScheduleList
                .filter((item) => {
                    const dayOfWeek = new Date(Date.parse(item.startDate)).getDay();
                    return dayOfWeek === store.selectedDayOfWeek
                })
        }

        return <>
            {
                store.workScheduleListState === DataState.loading
                    ? <CircularProgress />
                    : store.workScheduleListState === DataState.error
                        ? <ErrorView />
                        : scheduleList.length === 0
                            ? <NoDataView />
                            : ListView()
            }
        </>

        function ListView() {
            return scheduleList.map((item, index) => {
                const startTime = DateTime.getTimeOfDay(new Date(Date.parse(item.startDate)))
                const endTime = item.endDate !== null
                    ? DateTime.getTimeOfDay(new Date(Date.parse(item.endDate)))
                    : "?";

                return <div
                    className=" flex flex-col bg-F8F8F8 rounded-lg border-blue-400 my-2 mx-2 px-4 py-4"
                    key={index}
                >
                    <div className="flex">
                        <Title>Thời gian: </Title>
                        <div className="w-1" />
                        <TimeDisplay start={startTime} end={endTime} />
                    </div>

                    <div className="h-3" />

                    <div className="flex">
                        <div className="flex flex-col flex-1">
                            <Title>{"Nội dung:"}</Title>
                            <div className="h-1" />
                            <MultilineText>
                                {convertHtmlToText(item.content === "" ? "Không có" : item.content)}
                            </MultilineText>
                        </div>

                        <div className="w-4" />

                        <div className="flex flex-col flex-1">
                            <Title>{"Địa điểm:"}</Title>
                            <div className="h-1" />
                            <LinkifyText>{item.location}</LinkifyText>
                        </div>
                        <div className=" flex-none"></div>
                    </div>
                </div>;
            })
        }
    }
)
