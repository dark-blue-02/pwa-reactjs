import React, { useContext } from "react";
import { HomepageContext } from "../../../home_screen";
import { observer } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../../store/main";


export default function DocumentCounter() {
    const today = new Date()
    const store = useContext(HomepageContext)

    return <div>
        <p>{today.getDay() < 7 ? `Thứ ${today.getDay() + 1}` : "Chủ nhật"}</p>
        <p>{`${today.getDate()} tháng ${today.getMonth()}, ${today.getFullYear()}`}</p>
        <div className="h-4" />
        <Counter store={store} />
        <div className="h-4" />
    </div>
}

const Counter = observer(
    /**
     * @param {{store: HomepageStore}} obj 
     */
    ({ store }) =>
        <div>
            <p>{`${store.counter.unreadIncomingDocs} văn bản đi`}</p>
            <p>{`${store.counter.unreadOutgoingDocs} văn bản đến`}</p>
            <p>{`${store.counter.unreadWorks} công việc`}</p>
        </div>
)