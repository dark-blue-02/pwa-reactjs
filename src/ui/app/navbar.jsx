import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";
import { AppBar, Toolbar } from "@mui/material";
import HomeIcon from "../../assets/svg/home.svg"
import CalendarIcon from "../../assets/svg/calendar.svg"
import DocumentIcon from "../../assets/svg/page-list.svg"
import WorkIcon from "../../assets/svg/multi-page.svg"
import OtherIcon from "../../assets/svg/list.svg"
import NavbarStore from "./store/navbar_store";
import { observer } from "mobx-react-lite";

export default function MainNavbar() {
    const store = useMemo(() => new NavbarStore(), [])

    return <>
        <AppBar
            className=" bg-white rounded-t-[32px] h-[6rem]"
            sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}
        >
            <Toolbar className="flex justify-center">
                <NavItems store={store} selectedIndex={store.selectedIndex} />
            </Toolbar>
        </AppBar>
    </>
}

//TODO: laggy and indicator's width is wrong 
const NavItems = observer(
    /**
     * 
     * @param {{selectedIndex: number, store: NavbarStore}} obj
     * @returns 
     */
    ({ selectedIndex, store }) => {
        const navItemStyle = "text-black text-sm font-bold leading-6 tracking-[-0.2px]"

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
            setIndicatorPos({
                left: element.offsetLeft + "px",
                width: element.offsetWidth,
            })
        }

        navItems.forEach((item, index) => {
            item.addEventListener("click", (event) => {
                updateIndicatorPosition(event.target)
                store.setSelectedIndex(index)
            })
        })

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

        return <>
            <div
                id="nav-indicator"
                className=" absolute bottom-2 h-[3px] rounded-t-[2px] bg-primary duration-500"
                style={{
                    left: indicatorPos.left,
                    width: indicatorPos.width,
                    display: indicatorPos.left === "0" ? 'none' : 'block',
                }}
            />
            {
                labels.map((label, index) => {
                    return (
                        <>
                            <div id="nav-item" key={index} className={navItemStyle}>
                                <Link to={paths[index]}>
                                    {selectedIndex !== index ? icons[index] : label}
                                </Link>
                            </div>
                            <Separator />
                        </>
                    )
                })
            }
        </>
    })

export const EmptyDivBehindNavbar = () => <div className="h-[100px]" />

const Separator = () => <div className="w-10" />