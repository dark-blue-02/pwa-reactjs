import React, { useContext } from "react";
import useCheckbox from "./checkbox";
import { DocumentScreenContext } from "../../document_screen";
import { DocStatusDropdown } from "./status_dropdown";
import DateSelector from "./date_picker";

export default function FilterDialog({ closeDialog }) {
    const store = useContext(DocumentScreenContext).mainStore
    const unreadTaskCheckbox = useCheckbox(store.uiState.filterUnreadTasks)

    const titleStyle = "font-semibold text-sm tracking-[-0.1px] text-label-form"
    const buttonStyle = "flex flex-1 rounded-lg h-[3.5rem] justify-center items-center"
    const buttonLabelStyle = "font-semibold text-base tracking-[-0.4px]"

    return <div className="flex flex-col justify-between h-screen pt-[3.75rem] px-5">
        <div className="flex flex-col">
            <p className={titleStyle}>Lọc nhanh</p>
            <div className="h-2" />
            <div className="h-3" />
            {unreadTaskCheckbox.component(
                {
                    checked: store.uiState.filterUnreadTasks,
                    title: "Văn bản chưa đọc",
                    onChange: (value) => store.updateFilter({ unreadTasks: value }),
                }
            )}

            <div className="h-7" />
            <p className={titleStyle}>Ngày bắt đầu - kết thúc</p>
            <div className="h-1" />
            <DateSelector />

            <div className="h-6" />
            <p className={titleStyle}>Trạng thái</p>
            <div className="h-1" />
            <DocStatusDropdown />
        </div>

        <div className="flex">
            <button className={`${buttonStyle} bg-item-bg`} onClick={() => store.resetFilter()}>
                <p className={`${buttonLabelStyle} text-primary`}>Nhập lại</p>
            </button>
            <div className="w-3" />
            <button className={`${buttonStyle} bg-primary`} onClick={closeDialog}>
                <p className={`${buttonLabelStyle} text-white`}>Áp dụng</p>
            </button>
        </div>
    </div>
}
