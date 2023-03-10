import React, { createContext, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import HomeIcon from "../../assets/svg/home.svg"
import CalendarIcon from "../../assets/svg/calendar.svg"
import DocumentIcon from "../../assets/svg/page-list.svg"
import WorkIcon from "../../assets/svg/multi-page.svg"
import OtherIcon from "../../assets/svg/list.svg"
import NavbarStore from "./store/navbar_store";
import { observer } from "mobx-react-lite";

const NavBarContext = createContext({ store: new NavbarStore() })

export default function MainNavbar() {
    const store = useMemo(() => new NavbarStore(), [])

    return <NavBarContext.Provider value={{ store: store }}>
        <AppBar
            className=" bg-white rounded-t-[32px] h-[6rem]"
            sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}
        >
            <Toolbar className="flex">
                <NavItems />
            </Toolbar>
        </AppBar>
    </NavBarContext.Provider>
}

// TODO: Navbar is hidden when overflow (phone only)
const NavItems = observer(() => {
    const navItemStyle = "text-black text-sm font-bold leading-6 tracking-[-0.2px]"
    const store = useContext(NavBarContext).store

    const labels = [
        <p>Trang chủ</p>,
        <p>Lịch</p>,
        <p>Văn bản</p>,
        <p>Công việc</p>,
        <p>Khác</p>,
    ]

    const icons = [
        <img src={HomeIcon} alt="home" />,
        <img src={CalendarIcon} alt="schedule" />,
        <img src={DocumentIcon} alt="document" />,
        <img src={WorkIcon} alt="work" />,
        <img src={OtherIcon} alt="other" />,
    ]

    const paths = [routes.home, routes.home, routes.document, routes.home, routes.home]

    return <Tabs
        className="flex justify-center px-8 pt-4 overflow-x-scroll w-screen"
        value={store.selectedIndex}
        variant="fullWidth"
        centered
    >
        {
            labels.map((label, index) => {
                return (
                    <Tab
                        key={index}
                        value={index}
                        onClick={() => store.setSelectedIndex(index)}
                        label={
                            <>
                                <div id="nav-item" key={index} className={navItemStyle}>
                                    <Link to={paths[index]}>
                                        {store.selectedIndex !== index ? icons[index] : label}
                                    </Link>
                                </div>
                                <Separator />
                            </>
                        }
                    />
                )
            })
        }
    </Tabs>

})

export const EmptyDivBehindNavbar = () => <div className="h-[100px]" />

const Separator = () => <div className="w-10" />
