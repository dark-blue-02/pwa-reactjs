import React, { useContext, useEffect } from "react";
import { DocumentScreenContext } from "../../document_screen";
import TableRow from "./row";
import { DateTime } from "../../../../utils";
import { observer } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import DocumentStore from "../../store/main_store";

export default function Table() {
    const store = useContext(DocumentScreenContext).mainStore

    useEffect(
        () => {
            store.getIncomingDocList({ pageIndex: 0 })
        },
        [store]
    )

    return <div>
        <TableRow cells={["Số đến", "Số hiệu", "Ngày đến", "Ngày văn bản", "Trạng thái",
            "Trích yếu", "Cơ quan ban hành", "Lãnh đạo xử lý"]} />
        <Rows store={store} />
    </div>
}

const Rows = observer(
    /**
     * @param {{store: DocumentStore}} obj 
     */
    ({ store }) => {
        return <>
            {
                store.incomingDocList.totalCount > 0 &&
                store.incomingDocList.docs.map((doc, index) => {
                    return <TableRow key={index} cells={[
                        doc.incomingNumber,
                        doc.documentNumber,
                        DateTime.formatDate(
                            new Date(doc.incomingDate),
                            "/"),
                        doc.dateIssued == null
                            ? "-"
                            : DateTime.formatDate(
                                new Date(doc.dateIssued),
                                "/"),
                        doc.documentStatus,
                        doc.title,
                        doc.authorityIssuedName,
                        doc.handler ?? "-",
                    ]} />
                })
            }
        </>
    })