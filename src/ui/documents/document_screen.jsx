import React, { createContext } from "react";
import MainNavbar from "../app/navbar";
import DocumentStore from "./store/main_store";
import { Components } from "./components";

export const DocumentScreenContext = createContext({
    mainStore: new DocumentStore(),
})

export default function DocumentScreen() {
    const components = Components
    const store = new DocumentStore()

    return <DocumentScreenContext.Provider value={{ mainStore: store }}>
        <div className="flex flex-col">
            {components.header}
            {components.table}
            {components.controller}
            <MainNavbar />
        </div>
    </DocumentScreenContext.Provider>

}