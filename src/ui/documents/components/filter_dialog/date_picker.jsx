import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import { DatePicker } from "@mantine/dates";
import { useDialogManager } from "../../../common/dialog";
import { DateTime } from "../../../../utils";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function DateSelector() {
    const store = useContext(DocumentScreenContext).mainStore
    const dialog = useDialogManager()

    const startDate = DateTime.toString(store.uiState.filterStartDate, "/")
    const endDate = DateTime.toString(store.uiState.filterEndDate, "/")

    return <>
        <div
            className="flex h-fit p-3 border rounded border-icon-normal justify-between items-center"
            onClick={() => dialog.open()}
        >
            <p className="text-sm leading-[14.7px] text-23374D">
                {
                    store.uiState.filterStartDate !== "" && store.uiState.filterEndDate !== "" &&
                    `${startDate} - ${endDate}`
                }
            </p>
            <ArrowDropDownIcon className="text-primary" />
        </div>
        {
            dialog.dialog(
                <div className="flex items-center justify-between">
                    <DatePicker
                        type="range"
                        defaultValue={[
                            DateTime.fromString(store.uiState.filterStartDate),
                            DateTime.fromString(store.uiState.filterEndDate),
                        ]}
                        onChange={(value) => store.updateFilter({
                            startDate: value[0],
                            endDate: value[1]
                        })}
                    />
                    <button
                        className="py-2 px-4 rounded-lg bg-primary h-fit text-white font-bold self-end"
                        onClick={dialog.closeDialog}
                    >
                        Xong
                    </button>
                </div>,
                "Chọn ngày bắt đầu - kết thúc",
                "",
                2100,
            )
        }
    </>
}
