import { useContext } from "react"
import { DocumentScreenContext } from "../../document_screen"
import React from "react"

export default function TextField({ value, hint, onChange }) {
    const store = useContext(DocumentScreenContext).mainStore

    return <input
        className="flex border border-icon-normal rounded-lg py-4 pl-4 mr-5"
        type="text"
        value={value}
        placeholder={hint}
        onInput={(event) => {
            // @ts-ignore
            onChange(event.target.value)
            store.filterList()
        }}
    />
}