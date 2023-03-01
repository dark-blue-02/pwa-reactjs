import React from "react";

export default function TaskCounter({
    expiredTaskCount,
    applicationCount,
}) {
    return <div>
        <p>{`${expiredTaskCount} nhiệm vụ quá hạn`}</p>
        <p>{`${applicationCount} đơn hành chính cần giải quyết`}</p>
    </div>
}