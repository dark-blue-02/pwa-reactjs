import React, { useContext } from "react"
import { DocumentScreenContext } from "../../document_screen"
import { DocStatus } from "../../../../utils"
import { observer } from "mobx-react-lite"
import { Select } from "@mantine/core"

export const DocStatusDropdown = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <Select
        value={store.uiState.filterDocStatus}
        placeholder="Chọn"
        zIndex={2100}
        clearable
        dropdownPosition="flip"
        onChange={(value) => store.updateFilter({ docStatus: value ?? "" })}
        data={[
            { value: DocStatus.pending, label: "Chờ xử lý" },
            { value: DocStatus.inProgress, label: "Đã bút phê" }
        ]}
    />
})

