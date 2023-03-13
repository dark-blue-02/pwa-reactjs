import React from "react";
import { color } from "../../../../utils/resource/color";
import { DocStatus } from "../../../../utils";

/**
 * @param {{status: string}} obj 
 */
export default function StatusTag({ status }) {
    return <div
        className=" border rounded-[0.25rem] w-fit px-1"
        style={{
            color: status === DocStatus.pending ? color.brown : color.black,
            backgroundColor: status === DocStatus.pending ? color.light_yellow : color.E0F2FF,
            borderColor: status === DocStatus.pending ? color.yellow : color.primary,
        }}
    >
        {
            status === DocStatus.pending ? "Chờ xử lý" : "Đã bút phê"
        }
    </div>
}
