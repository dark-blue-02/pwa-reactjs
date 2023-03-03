import React, { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
// eslint-disable-next-line no-unused-vars
import DocumentStore from "../../store/main_store";
import { observer } from "mobx-react-lite";

export default function PaginationController() {
    const store = useContext(DocumentScreenContext).mainStore;

    return <Content store={store} />
}

const Content = observer(
    /**
     * @param {{store: DocumentStore}} obj 
     */
    ({ store }) => {
        const totalPages = Math.ceil(store.incomingDocList.totalCount / store.pageSize)

        return <div className=" flex mt-4 justify-center">
            <p>Số bản ghi:</p>
            <Dropdown store={store} totalCount={totalPages} />
            <div className="w-8" />
            <PageCountDisplay store={store} totalCount={totalPages} />
            <div className="w-4" />
            <Controller store={store} totalCount={totalPages} />
        </div>
    }
)
/**
 * @param {{store: DocumentStore, totalCount: number}} obj 
 */
function Dropdown({ store, totalCount }) {
    return <select value={store.pageIndex}
        onChange={(event) => {
            store.changePageIndex(Number(event.target.value))
        }}>
        {
            [...Array.from(
                { length: totalCount },
                (_, index) => index)]
                .map((index) => {
                    return <option key={index} value={index}>
                        {index + 1 !== totalCount
                            ? (index + 1) * store.pageSize
                            : store.incomingDocList.totalCount}
                    </option>
                })
        }
    </select>
}
/**
 * @param {{store: DocumentStore, totalCount: number}} obj 
 */
function PageCountDisplay({ store, totalCount }) {
    const first = `${store.pageIndex * store.pageSize + 1}`
    const last = store.pageIndex + 1 !== totalCount
        ? `${(store.pageIndex + 1) * store.pageSize}`
        : `${store.incomingDocList.totalCount}`
    const total = `${store.incomingDocList.totalCount}`

    return <p>{`${first}-${last} of ${total}`}</p>
}
/**
 * @param {{store: DocumentStore, totalCount: number}} obj 
 */
function Controller({ store, totalCount }) {
    return <div>
        <button className=" mr-4"
            onClick={() => store.changePageIndex(0)}
            disabled={store.pageIndex === 0}>
            {"<<"}
        </button>
        <button className=" mr-4"
            onClick={() => store.changePageIndex(store.pageIndex - 1)}
            disabled={store.pageIndex === 0}>
            {"◀️"}
        </button>
        <button className=" mr-4"
            onClick={() => store.changePageIndex(store.pageIndex + 1)}
            disabled={store.pageIndex === totalCount - 1}>
            {"▶️"}
        </button>
        <button className=" mr-4"
            onClick={() => store.changePageIndex(totalCount - 1)}
            disabled={store.pageIndex === totalCount - 1}>
            {">>"}
        </button>
    </div>
}
