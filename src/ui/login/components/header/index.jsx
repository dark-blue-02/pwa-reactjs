import React from "react";
import eOfficeLogo from '../../../../assets/svg/my-e-office-logo.svg'
import headsetLogo from '../../../../assets/svg/support.svg'

export default function Header() {
    return <div className="flex pt-6 pl-7 pr-4 justify-between items-center">
        <Logo />
        <Support />
    </div>
}

function Logo() {
    return <img src={eOfficeLogo} className=" w-20 h-6 fill-primary" alt="" />
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