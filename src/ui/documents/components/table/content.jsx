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
                .filter((doc) => {
                    const isUnreadTask = store.uiState.filterUnreadTasks
                        ? doc.isRead !== true
                        : true
                    const matchDocStatus = store.uiState.filterDocStatus !== ""
                        ? doc.documentStatus === store.uiState.filterDocStatus
                        : true

                    const inTimeRange = store.uiState.filterStartDate !== "" && store.uiState.filterEndDate !== ""
                        ? DateTime.compare(
                            new Date(Date.parse(store.uiState.filterStartDate)),
                            new Date()
                        ) === -1
                        && DateTime.compare(
                            new Date(Date.parse(store.uiState.filterEndDate)),
                            new Date()
                        ) === 1
                        : true

                    console.log(store.uiState.filterStartDate)

                    return isUnreadTask && matchDocStatus && inTimeRange
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
