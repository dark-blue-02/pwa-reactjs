import React, { useContext, useEffect } from "react";
import { DocumentScreenContext } from "../../document_screen";
import Header from "./header";
import { Content } from "./content";

export default function Table() {
    const store = useContext(DocumentScreenContext).mainStore

    useEffect(() => {
        store.getIncomingDocList({ pageIndex: 0 })
    },
        [store]
    )

    return <div className="relative overflow-x-scroll">
        <Header />
        <Content />
    </div>
}
