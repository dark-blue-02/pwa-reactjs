import { MenuItem, Select } from "@mui/material"
import React, { useContext } from "react"
import { DocumentScreenContext } from "../../document_screen"
import { DocStatus } from "../../../../utils"
import { observer } from "mobx-react-lite"

export const DocStatusDropdown = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <Select
        value={store.uiState.filterDocStatus}
        onChange={(event) => store.updateFilter({ docStatus: event.target.value })}
        displayEmpty
    >
        <MenuItem value="">
            <p className="text-hint text-sm leading-[14.7px]">Chọn</p>
        </MenuItem>

        <MenuItem value={DocStatus.pending}>
            <p>Chờ xử lý</p>
        </MenuItem>

        <MenuItem value={DocStatus.inProgress}>
            <p>Đã bút phê</p>
        </MenuItem>

    </Select>
})

