import { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import React from "react";

export default function PageCountDisplay({ totalCount }) {
    const store = useContext(DocumentScreenContext).mainStore;

    const first = `${store.pageIndex * store.pageSize + 1}`
    const last = store.pageIndex + 1 !== totalCount
        ? `${(store.pageIndex + 1) * store.pageSize}`
        : `${store.incomingDocList.totalCount}`
    const total = `${store.incomingDocList.totalCount}`

    return <p className="flex text-[0.75rem] leading-6 tracking-[0.17px]">
        {`${first}-${last} of ${total}`}
    </p>
}
