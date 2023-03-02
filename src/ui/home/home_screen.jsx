import React from "react";
import { Components } from "./components";

export default function HomeScreen() {
    const components = Components;


    return <div className=" flex flex-col">
        {components.header}
        {components.documentCounter}
        {components.taskCounter}
    </div>
}