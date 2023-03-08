import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";
import { userLocalStorage } from "../../data";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";

export default function MainNavbar() {
    const navItemStyle = "text-black mx-3 px-2"
    const indicatorStyle = " max-w-none"

    const [value, setValue] = React.useState(0);

    return <>
        <AppBar
            className=" bg-white rounded-t-[32px] h-[6rem]"
            sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}
        >
            <Toolbar className="flex justify-center">
                {/* <div className={navItemStyle}>
                    <Link to={routes.home}>Trang chủ</Link>
                </div>
                <div className={navItemStyle}>
                    <Link to={routes.document}>Lịch</Link>
                </div>
                <div className={navItemStyle}>
                    <Link to={routes.document}>Văn bản</Link>
                </div>
                <div className={navItemStyle}>
                    <Link to={routes.document}>Công việc</Link>
                </div>
                <div className={navItemStyle}>
                    <Link to={routes.document}>Khác</Link>
                </div>
                <div className={navItemStyle} onClick={deleteUserInfo}>
                    <Link to={routes.login}>Đăng xuất</Link>
                </div> */}
                <Tabs
                    value={value}
                    onChange={(_, value) => setValue(value)}
                    classes={{ indicator: indicatorStyle }}
                >
                    <Link to={routes.home} className={navItemStyle}>
                        <Tab value={0} label="Trang chủ" />
                    </Link>
                    <Link className={navItemStyle} to={routes.document}>
                        <Tab value={1} label="Lịch" />
                    </Link>
                    <Link className={navItemStyle} to={routes.document}>
                        <Tab value={2} label="Văn bản" />
                    </Link>
                    <Link className={navItemStyle} to={routes.document}>
                        <Tab value={3} label="Công việc" />
                    </Link>
                    <Link to={routes.document}>
                        <Tab className={navItemStyle} value={4} label="Khác" />
                    </Link>
                    <Link className={navItemStyle} to={routes.login} onClick={deleteUserInfo}>
                        <Tab value={5} label="Đăng xuất" />
                    </Link>
                </Tabs>
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