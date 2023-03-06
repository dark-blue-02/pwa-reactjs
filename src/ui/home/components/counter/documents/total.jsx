import { observer } from "mobx-react-lite";
import React from "react";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../../store/main_store";

export const TotalDocCount = observer(
    /**
     * @param {{store: HomepageStore}} obj 
     */
    ({ store }) => {
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