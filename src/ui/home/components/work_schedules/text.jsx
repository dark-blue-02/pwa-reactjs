import Linkify from "linkify-react"
import React from "react"

export function Title({ children }) {
    return <p className="text-black text-sm font-semibold leading-[14.7px]">
        {children}
    </p>
}

export function TimeDisplay({ start, end }) {
    return <p className=" text-primary font-medium text-sm leading-[14.7px]">
        {start} - {end}
    </p>
}

export function MultilineText({ children }) {
    return <p className="text-label text-sm leading-[22px] text-ellipsis break-all">
        {children}
    </p>
}

export function LinkifyText({ children }) {
    const linkStyle = "text-primary text-sm leading-[22px] text-ellipsis break-all"

    return <div className="text-label text-sm leading-[22px] text-ellipsis break-all" >
        <Linkify as="p" options={{ className: linkStyle }}>
            {children}
        </Linkify>
    </div>
}