import React from "react";
import TableRow from "./row";

export default function Header() {
    return <TableRow
        className=" absolute"
        cells={[
            "Số đến",
            "Số hiệu",
            "Ngày đến",
            "Ngày văn bản",
            "Trạng thái",
            "Trích yếu",
            "Cơ quan ban hành",
            "Lãnh đạo xử lý",
        ]}
        bold={true}
        isHeader={true}
    />
}
