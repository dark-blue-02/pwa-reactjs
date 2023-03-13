import React from "react";
import useCheckbox from "./checkbox";

export default function FilterDialog() {
    const priorityTaskCheckbox = useCheckbox()
    const unreadTaskCheckbox = useCheckbox()

    return <div className="flex flex-col max-h-screen pt-[3.75rem]">
        <p className="font-semibold text-sm tracking-[-0.1px] text-label-form">Lọc nhanh</p>
        <div className="h-2" />
        {priorityTaskCheckbox.component("Công việc ưu tiên")}
        <div className="h-3" />
        {unreadTaskCheckbox.component("Công việc chưa đọc")}
        <div className="h-7" />
    </div>
}
