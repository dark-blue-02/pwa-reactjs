import { observer } from "mobx-react-lite";
import React from "react";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../../store/main_store";

export const DetailDocCount = observer(
    /**
     * @param {{store: HomepageStore}} obj 
     */
    ({ store }) => {
        const elements = [
            {
                key: "văn bản đi",
                value: store.counter.unreadIncomingDocs,
            },
            {
                key: "văn bản đến",
                value: store.counter.unreadOutgoingDocs,
            },
            {
                key: "công việc",
                value: store.counter.unreadWorks,
            }
        ]

        // TODO: fade transition on click event
        return <div className="">
            {
                elements.map((it) => {
                    return <div className="flex items-end">
                        <LargeText>{it.value}</LargeText>
                        <div className="w-1" />
                        <SmallText>{it.key}</SmallText>
                    </div>
                })
            }
        </div>;
    }
)
function SmallText({ children }) {
    return <p className="text-base font-semibold text-white">{children}</p>
}

function LargeText({ children }) {
    return <p className="text-3xl font-semibold text-white">{children}</p>
}