import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../../App";
import HomeScreen from "../../home/home_screen";
import DocumentScreen from "../../documents/document_screen";
import LoginScreen from "../../login/login_screen";

export const routes = {
    app: '/',
    login: '/login',
    home: '/home',
    document: '/document',
}

export const mainRouter = createBrowserRouter([
    {
        path: routes.app,
        element: <App />,
        children: [
            {
                path: routes.home,
                element: <HomeScreen />,
            },
            {
                path: routes.document,
                element: <DocumentScreen />,
            }
        ]
    },
    {
        path: routes.login,
        element: <LoginScreen />,
    }
])