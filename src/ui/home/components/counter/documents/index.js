import React from "react";

export default function DocumentCounter({
    incomingDocumentCount,
    outgoingDocumentCount,
    workCount
}) {
    const today = new Date();

    return <div>
        <p>{today.getDay()}</p>
        <p>{`${today.getDate()} tháng ${today.getMonth()}, ${today.getFullYear()}`}</p>
        <div className="h-4" />
        <p>{`${outgoingDocumentCount} văn bản đi`}</p>
        <p>{`${incomingDocumentCount} văn bản đến`}</p>
        <p>{`${workCount} công việc`}</p>
    </div>
}