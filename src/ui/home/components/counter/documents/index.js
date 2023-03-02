import React from "react";

export default function DocumentCounter() {
    const incomingDocumentCount = 0
    const outgoingDocumentCount = 0
    const workCount = 0
    const today = new Date();

    return <div>
        <p>{today.getDay() < 7 ? `Thứ ${today.getDay() + 1}` : "Chủ nhật"}</p>
        <p>{`${today.getDate()} tháng ${today.getMonth()}, ${today.getFullYear()}`}</p>
        <div className="h-4" />
        <p>{`${outgoingDocumentCount} văn bản đi`}</p>
        <p>{`${incomingDocumentCount} văn bản đến`}</p>
        <p>{`${workCount} công việc`}</p>
        <div className="h-4" />
    </div>
}