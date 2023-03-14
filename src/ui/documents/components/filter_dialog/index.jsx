import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import { DocStatusDropdown } from "./status_dropdown";
import DateSelector from "./date_picker";
import { UnreadCheckbox } from "./unread_checkbox";
import CloseIcon from '@mui/icons-material/Close';

export default function FilterDialog({ closeDialog }) {
    const store = useContext(DocumentScreenContext).mainStore

    const titleStyle = "font-semibold text-sm tracking-[-0.1px] text-label-form"
    const buttonStyle = "flex flex-1 rounded-lg h-[3.5rem] justify-center items-center"
    const buttonLabelStyle = "font-semibold text-base tracking-[-0.4px]"

    return <div className="flex flex-col justify-between h-[95vh] px-5">
        <div className="flex flex-col">
            <div className="flex self-end h-8">
                <div className="h-fit w-fit" onClick={closeDialog}>
                    <CloseIcon className="text-hint" />
                </div>
            </div>
            <div className="h-[3.75rem]" />

            <p className={titleStyle}>Lọc nhanh</p>
            <div className="h-2" />
            <div className="h-3" />
            <UnreadCheckbox />

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
            <button className={`${buttonStyle} bg-primary`} onClick={() => {
                store.filterList()
                closeDialog()
            }}>
                <p className={`${buttonLabelStyle} text-white`}>Áp dụng</p>
            </button>
        </div>
    </div>
}
