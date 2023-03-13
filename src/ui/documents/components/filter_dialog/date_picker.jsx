import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import { DatePicker } from "@mantine/dates";
import { useDialogManager } from "../../../common/dialog";

export default function DateSelector() {
    const store = useContext(DocumentScreenContext).mainStore
    const dialog = useDialogManager()

    return <>
        <div
            className="flex h-11 border rounded border-icon-normal"
            onClick={() => dialog.open()}
        />
        {
            dialog.dialog(
                <DatePicker
                    type="range"
                    onChange={(value) => store.updateFilter({ startDate: value[0], endDate: value[1] })}
                />,
                "Chọn ngày bắt đầu - kết thúc",
                "",
                2100,
            )
        }
    </>
}
