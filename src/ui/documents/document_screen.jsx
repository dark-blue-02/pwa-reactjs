import React, { createContext } from "react";
import { EmptyDivBehindNavbar } from "../app/navbar/navbar";
import DocumentStore from "./store/main_store";
import { Components } from "./components";

export const DocumentScreenContext = createContext({
    mainStore: new DocumentStore(),
})

export default function DocumentScreen() {
    const components = Components
    const store = new DocumentStore()

    return <DocumentScreenContext.Provider value={{ mainStore: store }}>
        <div className="flex flex-col text-start ml-5 mt-4">
            {components.header}
            {components.table}
            {components.controller}
            <EmptyDivBehindNavbar />
        </div>
    </DocumentScreenContext.Provider>

}
