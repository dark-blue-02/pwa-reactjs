import React from "react";
// @ts-ignore
import notifyIcon from "../../../../assets/svg/notify-icon.svg"

export default function Header() {
    return <div className="flex justify-between">
        <div className="flex-[10]">
            <p className=" text-xs text-icon-normal">Chào buổi sáng ✋</p>
            <div className=" h-2" />
            <div className="flex items-center">
                <p className=" font-medium text-lg leading-5">Đ/c</p>
                <div className=" w-2" />
                <p className=" font-bold text-3xl leading-7">Hoàng Anh Khoa</p>
            </div>
        </div>
        <div className="flex-1 w-5 h-5">
            <div className=" flex justify-end relative">
                <div className=" absolute bg-red rounded-full w-2 h-2 right-0 top-0" />
                <img src={notifyIcon} alt="notify" />
            </div>
        </div>
    </div>
}