import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import HomeScreen from "../home/home_screen";

export const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'home',
        element: <HomeScreen />,
    }
])