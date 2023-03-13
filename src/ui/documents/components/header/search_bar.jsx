import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";

export default function Searchbar() {
    const store = useContext(DocumentScreenContext).mainStore

    return <input
        className="flex bg-item-bg rounded-xl py-4 pl-4 mr-5"
        type="text"
        placeholder="Tìm kiếm"
        onInput={(event) => {
            // @ts-ignore
            store.updateSearchQuery(event.target.value)
        }}
    />
}
