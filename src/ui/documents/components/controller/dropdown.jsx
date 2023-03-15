import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";

export default function Dropdown({ totalCount }) {
    const store = useContext(DocumentScreenContext).mainStore;

    return <div className="flex text-[0.75rem] leading-6 tracking-[0.17px]">
        <p>Số bản ghi:</p>
        <select
            value={store.pageIndex}
            onChange={(event) => {
                store.changePageIndex(Number(event.target.value))
            }}>
            {
                totalCount > 0
                    ? [...Array.from(
                        { length: totalCount },
                        (_, index) => index
                    )].map((index) => <option key={index} value={index}>
                        {index + 1 !== totalCount
                            ? (index + 1) * store.pageSize
                            : store.incomingDocList.totalCount}
                    </option>)
                    : <option key={0} value={0}>0</option>
            }
        </select>
    </div>
}
