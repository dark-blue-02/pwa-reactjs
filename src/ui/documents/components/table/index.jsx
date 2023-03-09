import React, { useContext, useEffect } from "react";
import { DocumentScreenContext } from "../../document_screen";
import TableRow from "./row";
import { DateTime } from "../../../../utils";
import { observer } from "mobx-react-lite";
import Header from "./header";

export default function Table() {
    const store = useContext(DocumentScreenContext).mainStore

    useEffect(() => {
        store.getIncomingDocList({ pageIndex: 0 })
    },
        [store]
    )

    return <div className="relative overflow-x-scroll">
        <Header />
        <Rows />
    </div>
}

const Rows = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <>
        {
            store.incomingDocList.totalCount > 0 &&
            store.incomingDocList.docs.map((doc, index) => {
                const formattedIncomingDate = DateTime.formatDate(
                    new Date(doc.incomingDate),
                    "/"
                )
                const formattedDateIssued = doc.dateIssued == null
                    ? "-"
                    : DateTime.formatDate(new Date(doc.dateIssued), "/")

                return <TableRow key={index}
                    cells={[
                        doc.incomingNumber,
                        doc.documentNumber,
                        formattedIncomingDate,
                        formattedDateIssued,
                        doc.documentStatus,
                        doc.title,
                        doc.authorityIssuedName,
                        doc.handler ?? "-",
                    ]}
                    className={index + 1 === store.pageSize ? "rounded-b-lg" : ""}
                    bold={!doc.isRead}
                />
            })
        }
    </>
})
