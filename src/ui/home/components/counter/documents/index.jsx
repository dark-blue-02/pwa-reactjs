import React, { useState } from "react";
import { DetailDocCount } from "./detail";
import { TotalDocCount } from "./total";
import drawing from "../../../../../assets/svg/wacky-drawing.svg";
import image from "../../../../../assets/svg/planning.svg";
import { TwoDigits } from "../../../../../utils";
import { Transition } from "@mantine/core";


export default function DocumentCounter() {
    const today = new Date()

    return <div className=" flex justify-between relative bg-primary h-[186px] rounded-lg pl-5 py-4 pr-4">
        <div className="flex flex-col">
            <SmallText>
                {today.getDay() < 7 ? `Thứ ${today.getDay() + 1}` : "Chủ nhật"}
            </SmallText>
            <SmallText>
                {
                    `${TwoDigits.numToTwoDigits(today.getDate())}` +
                    ` tháng ${TwoDigits.numToTwoDigits(today.getMonth() + 1)},` +
                    ` ${TwoDigits.numToTwoDigits(today.getFullYear())}`
                }
            </SmallText>
            <div className="h-3" />
            <Counter />
            <div className="h-3" />
            <img className=" absolute bottom-0 left-0 -z-20" src={drawing} alt="" />
        </div>
        <img src={image} alt="img" />
    </div>
}

function SmallText({ children }) {
    return <p className="text-xs font-medium text-white leading-5">{children}</p>
}

function Counter() {
    const [showTotal, setShowTotal] = useState(true)
    const animationDuration = 400

    return <div onClick={() => setShowTotal(!showTotal)}>
        <>
            <Transition mounted={showTotal}
                transition="slide-right"
                duration={animationDuration}
                exitDuration={animationDuration}
            >
                {(style) => <div key={0} className="absolute" style={style}>
                    <TotalDocCount />
                </div>
                }
            </Transition>
            <Transition mounted={!showTotal}
                transition="slide-right"
                duration={animationDuration}
                exitDuration={animationDuration}
            >
                {(style) => <div key={1} className="absolute" style={style}>
                    <DetailDocCount />
                </div>
                }
            </Transition>
        </>
    </div>
}
