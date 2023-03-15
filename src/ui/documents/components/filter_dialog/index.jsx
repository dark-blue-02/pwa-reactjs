import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import DateSelector from "../../../common/date_range_picker";
import CloseIcon from '@mui/icons-material/Close';
import { observer } from "mobx-react-lite";
import TextField from "./text_field";

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

            {/* <p className={titleStyle}>Lọc nhanh</p>
            <div className="h-2" />
            <div className="h-3" />
            <UnreadCheckbox /> */}

            <div className="h-7" />
            <p className={titleStyle}>Ngày bắt đầu - kết thúc</p>
            <div className="h-1" />
            <IncomingDatePicker />

            <div className="h-7" />
            <p className={titleStyle}>Ngày ban hành bắt đầu - kết thúc</p>
            <div className="h-1" />
            <IssuedDatePicker />

            {/* <div className="h-6" />
            <p className={titleStyle}>Trạng thái</p>
            <div className="h-1" />
            <DocStatusDropdown /> */}

            <div className="h-6" />
            <p className={titleStyle}>Người ký</p>
            <div className="h-1" />
            <SignerTextField />

            <div className="h-6" />
            <p className={titleStyle}>Cơ quan ban hành</p>
            <div className="h-1" />
            <AuthorityNameTextField />
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

const IncomingDatePicker = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <DateSelector
        title="Chọn ngày bắt đầu - kết thúc"
        startDate={store.uiState.filterIncomingStartDate}
        endDate={store.uiState.filterIncomingEndDate}
        onDateRangeChange={(value) => store.updateFilter({
            incomingStartDate: value[0],
            incomingEndDate: value[1]
        })}
    />
})

const IssuedDatePicker = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <DateSelector
        title="Chọn ngày ban hành bắt đầu - kết thúc"
        startDate={store.uiState.filterIssuedStartDate}
        endDate={store.uiState.filterIssuedEndDate}
        onDateRangeChange={(value) => store.updateFilter({
            issuedStartDate: value[0],
            issuedEndDate: value[1]
        })}
    />
})

const SignerTextField = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <TextField
        value={store.uiState.signer}
        hint="Người ký"
        onChange={(value) => store.updateFilter({ signer: value })}
    />
})

const AuthorityNameTextField = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <TextField
        value={store.uiState.authorityName}
        hint="Cơ quan ban hành"
        onChange={(value) => store.updateFilter({ authorityName: value })}
    />
})







