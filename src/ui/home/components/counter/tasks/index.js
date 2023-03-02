import React from "react";

export default function TaskCounter() {
    const expiredTaskCount = 0
    const applicationCount = 0

    return <div>
        <p>{`${expiredTaskCount} nhiệm vụ quá hạn`}</p>
        <p>{`${applicationCount} đơn hành chính cần giải quyết`}</p>
    </div>
}