import { observer } from "mobx-react-lite"
import React from "react"
import { useContext } from "react"
import { DateTime } from "../../../../utils"
import { DocumentScreenContext } from "../../document_screen"
import TableRow from "./row"
import StatusTag from "./status_tag"

export const Content = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <>
        {
            store.incomingDocList.totalCount > 0 &&
            store.incomingDocList.docs
                .filter((doc) => {
                    const searchQuery = store.uiState.searchQuery
                    return doc.incomingNumber.toString().includes(searchQuery)
                        || doc.documentNumber.toString().includes(searchQuery)
                        || doc.title.includes(searchQuery)
                })
                .map((doc, index) => {
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
                            <StatusTag status={doc.documentStatus} />,
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
