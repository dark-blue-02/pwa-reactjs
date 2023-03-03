import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import HomeScreen from "../../home/home_screen";
import DocumentScreen from "../../documents/document_screen";

export const routes = {
    login: '/',
    home: '/home',
    document: '/document',
}

export const mainRouter = createBrowserRouter([
    {
        path: routes.login,
        element: <App />,
    },
    {
        path: routes.home,
        element: <HomeScreen />,
    },
    {
        path: routes.document,
        element: <DocumentScreen />,
    }
])