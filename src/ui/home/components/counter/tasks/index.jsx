import React, { useContext } from "react";
import { HomepageContext } from "../../../home_screen";
import { observer } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../../store/main_store";

export default function TaskCounter() {
    const store = useContext(HomepageContext);

    return <div>
        <Counter store={store} />
    </div>
}

const Counter = observer(
    /**
     * @param {{store: HomepageStore}} obj 
    */
    ({ store }) =>
        <div>
            <p>{`${store.counter.overdueTasks} nhiệm vụ quá hạn`}</p>
            <p>{`${store.counter.applications} đơn hành chính cần giải quyết`}</p>
        </div>
)