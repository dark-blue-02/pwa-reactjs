import React, { useContext, useState } from "react";
import { HomepageContext } from "../../../home_screen";
import { DetailDocCount } from "./detail";
import { TotalDocCount } from "./total";


export default function DocumentCounter() {
    const today = new Date()
    const store = useContext(HomepageContext)

    return <div className=" bg-primary h-[186px] rounded-lg pl-5 py-4 pr-4">
        <SmallText>{today.getDay() < 7 ? `Thứ ${today.getDay() + 1}` : "Chủ nhật"}</SmallText>
        <SmallText>{`${today.getDate()} tháng ${today.getMonth()}, ${today.getFullYear()}`}</SmallText>
        <div className="h-3" />
        <Counter store={store} />
        <div className="h-3" />
    </div>
}

function SmallText({ children }) {
    return <p className="text-xs font-medium text-white leading-5">{children}</p>
}

function Counter({ store }) {
    const [showTotal, setShowTotal] = useState(true)

    return <div onClick={() => setShowTotal(!showTotal)}>
        {
            showTotal
                ? <TotalDocCount store={store} />
                : <DetailDocCount store={store} />
        }
    </div>
}