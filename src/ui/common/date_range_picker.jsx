import React from "react";
import { DatePicker } from "@mantine/dates";
import { useDialogManager } from "./dialog";
import { DateTime } from "../../utils";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function DateSelector({ title, zIndex = 2100, startDate, endDate, onDateRangeChange }) {
    const dialog = useDialogManager()

    return <>
        <InputField
            openTimePickerDialog={dialog.open}
            startDate={startDate}
            endDate={endDate}
        />
        {
            dialog.dialog(
                <DialogContent
                    closeDialog={dialog.closeDialog}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={onDateRangeChange}
                />,
                title,
                "",
                zIndex,
            )
        }
    </>
}

function InputField({ openTimePickerDialog, startDate, endDate, }) {
    const startAt = DateTime.toString(startDate, "/")
    const endAt = DateTime.toString(endDate, "/")

    return <div
        className="flex h-fit p-3 border rounded border-icon-normal justify-between items-center"
        onClick={() => openTimePickerDialog()}
    >
        <p className="text-sm leading-[14.7px] text-23374D">
            {
                startDate !== "" && endDate !== "" &&
                `${startAt} - ${endAt}`
            }
        </p>
        <ArrowDropDownIcon className="text-primary" />
    </div>
}

function DialogContent({ closeDialog, startDate, endDate, onChange }) {
    return <div className="flex items-center justify-between">
        <DatePicker
            type="range"
            defaultValue={[
                DateTime.fromString(startDate),
                DateTime.fromString(endDate)
            ]}
            onChange={onChange}
        />
        <button
            className="py-2 px-4 rounded-lg bg-primary h-fit text-white font-bold self-end"
            onClick={closeDialog}
        >
            Xong
        </button>
    </div>
}
