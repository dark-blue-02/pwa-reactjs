import React, { useContext } from "react";
import { HomepageContext } from "../../../home_screen";
import { observer } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import HomepageStore from "../../../store/main_store";
import { color } from "../../../../../utils/resource/color";

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
        <div className="flex">
            <Container
                count={store.counter.overdueTasks}
                colorCount={color.red}
                type={"Nhiệm vụ"}
                detail={"quá hạn"}
                colorDetail={color.dark_red}
                backgroundColor={color.dark_red}
            />
            <div className="w-6" />
            <Container
                count={store.counter.applications}
                colorCount={color.blue}
                type={"Đơn hành chính"}
                detail={"cần giải quyết"}
                colorDetail={color.blue}
                backgroundColor={color.dark_blue}
            />
        </div>
)

function Container({ count, colorCount, type, detail, colorDetail, backgroundColor }) {
    return <div
        className={`flex flex-1 flex-col pt-7 pl-4 pb-6 rounded-lg`}
        style={{ backgroundColor: `${backgroundColor}1A` }}
    >
        <p
            className="font-bold text-[42px] leading-[46.2px] text-center"
            style={{ color: colorCount }}
        >
            {count > 9 ? "9+" : count}
        </p>
        <div className="h-3" />
        <p className=" text-black font-semibold text-base leading-4 tracking-[-0.4px]">
            {type}
        </p>
        <div className="h-2" />
        <p
            className="font-medium text-xs leading-3"
            style={{ color: colorDetail }}
        >
            {detail}
        </p>
    </div>
}