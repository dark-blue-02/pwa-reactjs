import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import { observer } from "mobx-react-lite";
import Dropdown from "./dropdown";
import PageCountDisplay from "./page_count";
import Controller from "./pagination";

export default function PaginationController() {
    return <Content />
}

const Content = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore;
    const totalPages = Math.ceil(store.incomingDocList.totalCount / store.pageSize)

    return <div className=" flex flex-1 mt-4 justify-center items-center">
        <Dropdown totalCount={totalPages} />
        <div className="w-8" />
        <PageCountDisplay totalCount={totalPages} />
        <div className="w-4" />
        <Controller totalCount={totalPages} />
    </div>
})
