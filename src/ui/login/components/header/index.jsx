import React from "react";
import logo from '../../../../assets/svg/blue-logo.svg'
import headsetLogo from '../../../../assets/svg/support.svg'

export default function Header() {
    return <div className="flex justify-between items-center">
        <Logo />
        <Support />
    </div>
}

function Logo() {
    return <img src={logo} className=" w-20 h-6 fill-primary" alt="" />
}

function Support() {
    return <div className=" flex flex-row">
        <img src={headsetLogo} alt="" />
        <div className="w-3" />
        <p className=" whitespace-nowrap text-black, font-semibold text-sm leading-4">
            Hỗ trợ
        </p>
    </div>
}