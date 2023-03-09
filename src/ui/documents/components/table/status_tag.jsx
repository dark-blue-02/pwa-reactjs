import React from "react";
import { color } from "../../../../utils/resource/color";

/**
 * @param {{status: "PENDING" | "INPROGRESS" | string}} obj 
 */
export default function StatusTag({ status }) {
    return <div
        className=" border rounded-[0.25rem] w-fit px-1"
        style={{
            color: status === 'PENDING' ? color.brown : color.black,
            backgroundColor: status === 'PENDING' ? color.light_yellow : color.E0F2FF,
            borderColor: status === 'PENDING' ? color.yellow : color.primary,
        }}
    >
        {
            status === 'PENDING' ? "Chờ xử lý" : "Đã bút phê"
        }
    </div>
}
