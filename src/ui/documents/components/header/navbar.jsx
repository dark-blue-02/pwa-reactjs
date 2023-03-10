import React from "react"
import { useState } from "react"
import { color } from "../../../../utils/resource/color"
import { MantineProvider, SegmentedControl } from "@mantine/core"
import { Tab, Tabs } from "@mui/material"

export default function Navbar() {
    const navItemStyle = "text-sm font-semibold leading-[0.9rem] tracking-[-0.2px] py-[0.625rem] px-4"

    const labels = ["Văn bản đến", "Văn bản đi",]
    const [selectedIndex, setSelectedIndex] = useState("0")

    return <div className="flex relative">
        <Navbar />
        <BottomIndicator />
    </div>

    function Navbar() {
        return <MantineProvider
            theme={{
                colors: {
                    "light-gray": ["#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8", "#F8F8F8"]
                }
            }}
        >
            <SegmentedControl
                className=" bg-transparent"
                radius={16}
                color={"light-gray"}
                value={selectedIndex.toString()}
                onChange={setSelectedIndex}
                transitionDuration={500}
                transitionTimingFunction="linear"
                // @ts-ignore
                data={
                    labels.map((label, index) => {
                        return {
                            label: (
                                <>
                                    <div
                                        key={index}
                                        className={navItemStyle}
                                        style={{
                                            color: selectedIndex === index.toString()
                                                ? color.primary
                                                : color["9F9F9F"]
                                        }}
                                    >
                                        <p>{label}</p>
                                    </div>
                                </>
                            ),
                            value: index.toString(),
                        }
                    })
                } />
        </MantineProvider>
    }

    function BottomIndicator() {
        return <div className=" absolute">
            <Tabs value={selectedIndex}
                onChange={(event) => setSelectedIndex(/* @ts-ignore */
                    event.target
                )}
            >
                {
                    labels.map((label, index) => {
                        return <Tab
                            key={index}
                            value={index.toString()}
                            label={
                                <>
                                    <div
                                        key={index}
                                        className="pb-5"
                                        style={{ color: 'transparent' }}
                                    >
                                        <p>{label}</p>
                                    </div>
                                </>
                            }
                        />
                    })
                }
            </Tabs>
        </div>
    }
}
