import React from "react";

/**
 * @param {{cells: any[]}} cells
 */
export default function TableRow({ cells }) {
    const cellWidths = [60, 90, 90, 120, 100, 270, 240, 150]

    return <div className="flex">
        {
            cells.length > 0 && cells.map((cell, index) =>
                <Cell content={cell}
                    index={index}
                    width={index <= cellWidths.length - 1 ? cellWidths[index] : 50}
                />
            )
        }
    </div>
}

function Cell({ content, index, width }) {
    return <div key={index} className={`flex w-[${width}px]`}>
        <p>|</p>
        <p className=" mx-2 text-xs">{content}</p>
    </div>
}