import { observer } from "mobx-react-lite";
import { DateTime } from "../../../../utils";
import React from "react";
import { convert as convertHtmlToText } from "html-to-text";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../store/main_store";
import Linkify from "linkify-react";

export const ListView = observer(
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
                                    {/* <MultilineText>{item.location}</MultilineText> */}
                                    <LinkifyText>
                                        {item.location}
                                    </LinkifyText>
                                </div>
                                <div className=" flex-none"></div>
                            </div>
                        </div>;
                    })}
        </>;
    }
)

function Title({ children }) {
    return <p className="text-black text-sm font-semibold leading-[14.7px]">
        {children}
    </p>
}

function TimeDisplay({ start, end }) {
    return <p className=" text-primary font-medium text-sm leading-[14.7px]">
        {start} - {end}
    </p>
}

function MultilineText({ children }) {
    return <p className="text-label text-sm leading-[22px] text-ellipsis break-all">
        {children}
    </p>
}

function LinkifyText({ children }) {
    const linkStyle = "text-primary text-sm leading-[22px] text-ellipsis break-all"

    return <div className="text-label text-sm leading-[22px] text-ellipsis break-all" >
        <Linkify as="p" options={{ className: linkStyle }}>
            {children}
        </Linkify>
    </div>
}