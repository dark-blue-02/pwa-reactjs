import React from "react"
import { useState } from "react"
import { color } from "../../../../utils/resource/color"

export default function Navbar() {
    const navItemStyle = "text-sm font-semibold leading-[0.9rem] tracking-[-0.2px]"

    const labels = ["Văn bản đến", "Văn bản đi",]
    const [selectedIndex, setSelectedIndex] = useState(0)

    return <div className="flex relative h-10">
        {
            labels.map((label, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className={navItemStyle}
                            onClick={() => setSelectedIndex(index)}
                            style={{ color: selectedIndex === index ? color.primary : color["9F9F9F"] }}
                        >
                            <p>{label}</p>
                        </div>
                        <div className="w-5" />
                    </>
                )
            })
        }
    </div>
}
