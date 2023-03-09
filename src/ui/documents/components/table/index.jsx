import React, { useContext, useEffect } from "react";
import { DocumentScreenContext } from "../../document_screen";
import Header from "./header";
import { Content } from "./content";
import TableRow from "./row";
import { observer } from "mobx-react-lite";
import { DataState } from "../../../../utils";
import { ErrorView, LoadingView, NoDataView } from "../../../common/data_state";

export default function Table() {
    const store = useContext(DocumentScreenContext).mainStore

    useEffect(() => {
        store.getIncomingDocList({ pageIndex: 0 })
    }, [store])

    return <Main />
}

const Main = observer(() => {
    const store = useContext(DocumentScreenContext).mainStore

    return <div className="relative overflow-x-scroll">
        {
            store.incomingDocListState === DataState.error
                ? <ErrorView />
                : store.incomingDocListState === DataState.loading
                    ? <LoadingView />
                    : store.incomingDocList.totalCount === 0
                        ? <NoDataView />
                        : <>
                            <Header />
                            <TableRow cells={["empty row"]} />
                            <Content />
                        </>
        }
    </div>
})
