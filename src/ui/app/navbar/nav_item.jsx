import { Transition } from "@mantine/core"
import { Tabs, Tab } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useContext } from "react"
import React from "react"
import { Link } from "react-router-dom"
import { routes } from "../../navigation/routers/main_router"
import { NavBarContext } from "./navbar"
import HomeIcon from "../../../assets/svg/home.svg"
import CalendarIcon from "../../../assets/svg/calendar.svg"
import DocumentIcon from "../../../assets/svg/page-list.svg"
import WorkIcon from "../../../assets/svg/multi-page.svg"
import OtherIcon from "../../../assets/svg/list.svg"

export const NavItems = observer(() => {
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

    return <Tabs
        className="flex justify-center px-8 pt-4 overflow-x-scroll w-screen"
        value={store.selectedIndex}
        variant={window.innerWidth < 640 ? "scrollable" : "fullWidth"}
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
                                <AnimatedTab
                                    start={store.selectedIndex === index}
                                    index={index}
                                >
                                    {label}
                                </AnimatedTab>
                                <AnimatedTab
                                    start={store.selectedIndex !== index}
                                    index={index}
                                    absolute
                                >
                                    {icons[index]}
                                </AnimatedTab>
                                <div className="w-10" />
                            </>
                        }
                    />
                )
            })
        }
    </Tabs>
})

function AnimatedTab({ start = true, index, children, absolute = false }) {
    const animationDuration = 400
    const navItemStyle = "text-black text-sm font-bold leading-6 tracking-[-0.2px]"
    const paths = [routes.home, routes.home, routes.document, routes.home, routes.home]

    return <Transition mounted={start}
        transition="scale"
        duration={animationDuration}
        exitDuration={animationDuration}
    >
        {(style) => <div
            key={index}
            className={`${navItemStyle} ${absolute ? "absolute" : ""}`}
            style={style}
        >
            <Link to={paths[index]}>{children}</Link>
        </div>}
    </Transition>
}
