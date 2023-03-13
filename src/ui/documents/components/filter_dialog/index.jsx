import React from "react";
import useCheckbox from "./checkbox";

export default function FilterDialog() {
    const priorityTaskCheckbox = useCheckbox()
    const unreadTaskCheckbox = useCheckbox()

    const titleStyle = "font-semibold text-sm tracking-[-0.1px] text-label-form"

    return <div className="flex flex-col max-h-screen pt-[3.75rem]">
        <p className={titleStyle}>Lọc nhanh</p>
        <div className="h-2" />
        {priorityTaskCheckbox.component("Công việc ưu tiên")}
        <div className="h-3" />
        {unreadTaskCheckbox.component("Công việc chưa đọc")}
        <div className="h-7" />
        <p className={titleStyle}>Ngày bắt đầu - kết thúc</p>
        <div className="h-1" />
        <div className="h-6" />
        <p className={titleStyle}>Trạng thái</p>
        <div className="h-1" />
    </div>
}
