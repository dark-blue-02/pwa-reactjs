import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";
import { userLocalStorage } from "../../data";
import { AppBar, Toolbar } from "@mui/material";

export default function MainNavbar() {
    const navItemStyle = "text-black mx-3 px-2"

    const navItems = document.querySelectorAll("#nav-item")
    const [indicatorPos, setIndicatorPos] = useState({
        left: "0",
        width: "0",
    })

    /**
     * @param {any} element
     */
    function updateIndicatorPosition(element) {
        // setIndicatorLeft(element.offsetLeft + (element.outerWidth / 2) + "px")
        setIndicatorPos({ left: element.offsetLeft + "px", width: element.offsetWidth })
    }

    navItems.forEach(item => {
        item.addEventListener("click", (event) => {
            updateIndicatorPosition(event.target)
        })
    })

    return <>
        <AppBar
            className=" bg-white rounded-t-[32px] h-[6rem]"
            sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}
        >
            <Toolbar className="flex justify-center">
                <div
                    id="nav-indicator"
                    className=" absolute bottom-2 h-[3px] rounded-t-[2px] bg-primary duration-500"
                    style={{
                        left: indicatorPos.left,
                        width: indicatorPos.width,
                        display: indicatorPos.left === "0" ? 'none' : 'block',
                    }}
                />
                <div id="nav-item" className={navItemStyle}>
                    <Link to={routes.home}>Trang chủ</Link>
                </div>
                <div id="nav-item" className={navItemStyle}>
                    <Link to={routes.document}>Lịch</Link>
                </div>
                <div id="nav-item" className={navItemStyle}>
                    <Link to={routes.document}>Văn bản</Link>
                </div>
                <div id="nav-item" className={navItemStyle}>
                    <Link to={routes.document}>Công việc</Link>
                </div>
                <div id="nav-item" className={navItemStyle}>
                    <Link to={routes.document}>Khác</Link>
                </div>
                <div id="nav-item" className={navItemStyle} onClick={deleteUserInfo}>
                    <Link to={routes.login}>Đăng xuất</Link>
                </div>
            </Toolbar>
        </AppBar>
    </>
}

export function EmptyDivBehindNavbar() {
    return <div className="h-[100px]" />
}

function deleteUserInfo() {
    userLocalStorage.deleteUserInfo()
}