import React from "react";
import { color } from "../../../../utils/resource/color";

export default function TableRow({ cells, className = "", bold = false, isHeader = false }) {
    const cellWidths = [60, 90, 90, 120, 100, 270, 240, 150]
    const textStyle = "ml-2 text-sm leading-6 text-ellipsis whitespace-nowrap overflow-hidden"
    const separatorStyle = "font-bold text-E0E0E0"
    const headerStyle = "border-t border-b-0 border-primary rounded-t-lg bg-primary text-white"

    return <div
        className={`flex w-fit border-x border-b py-4 ${className} ${isHeader ? headerStyle : ""}`}
        style={{ borderColor: isHeader ? color.primary : color.E0E0E0 }}
    >
        {
            cells.length > 0 && cells.map((cell, index) => {
                const width = index <= cellWidths.length - 1 ? cellWidths[index] : 50

                return <div key={index} className="flex text-left items-center ">
                    {index !== 0 && <p className={separatorStyle}>|</p>}

                    <div className={textStyle}
                        style={{
                            width: `${width}px`,
                            fontWeight: bold ? "bold" : "normal"
                        }}
                    >
                        {cell}
                    </div>
                </div>
            })
        }
    </div>
}
