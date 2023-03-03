import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";
import { userLocalStorage } from "../../data";

export default function MainNavbar() {
    return <div>
        <nav className="absolute bottom-0 left-0 right-0 bg-emerald-300 flex justify-center">
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.home}>Trang chủ</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.document}>Lịch</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.document}>Văn bản</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.document}>Công việc</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2">
                <Link to={routes.document}>Khác</Link>
            </div>
            <div className="bg-violet-400 mx-3 px-2"
                onClick={() => userLocalStorage.deleteUserInfo()}>
                <Link to={routes.login}>Đăng xuất</Link>
            </div>
        </nav>
    </div>
}