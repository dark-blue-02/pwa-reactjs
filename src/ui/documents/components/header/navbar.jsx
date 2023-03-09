import React from "react"
import { useState } from "react"

export default function Navbar() {
    const navItems = document.querySelectorAll("#nav-item1")
    const [indicatorPos, setIndicatorPos] = useState({
        left: "0",
        width: "0",
    })
    const navItemStyle = " text-9F9F9F text-sm font-semibold leading-[0.9rem] tracking-[-0.2px]"

    /**
     * @param {any} element
     */
    function updateIndicatorPosition(element) {
        setIndicatorPos({
            left: element.offsetLeft + "px",
            width: element.offsetWidth,
        })
        console.log(indicatorPos)
    }

    navItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            updateIndicatorPosition(event.target)
        })
    })

    const labels = [
        "Văn bản đến",
        "Văn bản đi",
    ]

    return <div className="flex relative h-10">
        <div
            className=" absolute h-[0.2rem] bottom-4 rounded-t-[0.125rem] bg-primary duration-500"
            style={{
                left: indicatorPos.left,
                width: indicatorPos.width,
                // display: indicatorPos.left === "0" ? 'none' : 'block',
            }}
        />
        {
            labels.map((label, index) => {
                return (
                    <>
                        <div id="nav-item1" key={index} className={navItemStyle}>
                            <p>{label}</p>
                        </div>
                        <Separator />
                    </>
                )
            })
        }
    </div>
}
const Separator = () => <div className="w-5" />
