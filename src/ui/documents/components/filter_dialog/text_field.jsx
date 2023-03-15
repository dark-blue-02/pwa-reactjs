import React from "react"

export default function TextField({ value, hint, onChange }) {
    return <input
        className="flex border border-icon-normal rounded-lg py-4 pl-4"
        type="text"
        value={value}
        placeholder={hint}
        onInput={(event) => {
            // @ts-ignore
            onChange(event.target.value)
        }}
    />
}
