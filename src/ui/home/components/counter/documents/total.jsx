import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { HomepageContext } from "../../../home_screen";

export const TotalDocCount = observer(
    () => {
        const store = useContext(HomepageContext).store

        const total = store.counter.unreadIncomingDocs
            + store.counter.unreadOutgoingDocs
            + store.counter.unreadWorks

        return <div className="">
            <LargeText>{"Bạn có"}</LargeText>
            <LargeText>{`${total} tài liệu`}</LargeText>
            <LargeText>{"chưa đọc"}</LargeText>
        </div>;
    }
)

function LargeText({ children }) {
    return <p className="text-[28px] font-bold text-white leading-9">{children}</p>
}