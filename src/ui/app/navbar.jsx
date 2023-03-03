import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";

export default function MainNavbar() {
    return <div>
        <nav className="absolute bottom-0 left-0 right-0 bg-emerald-300 flex justify-center">
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.home}>Homepage</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.login}>Login</Link>
            </div>
        </nav>
    </div>
}