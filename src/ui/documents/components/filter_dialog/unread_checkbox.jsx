import { observer } from "mobx-react-lite";
import { Checkbox } from "../../../common/checkbox";
import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";

export const UnreadCheckbox = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <Checkbox
        title="Văn bản chưa đọc"
        onClick={() => store.updateCheckbox(!store.uiState.filterUnreadTasks)}
        checked={store.uiState.filterUnreadTasks}
    />
})
