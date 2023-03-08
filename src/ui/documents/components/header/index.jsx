import React from "react";
import filterIcon from "../../../../assets/svg/filter_outline.svg"
import Navbar from "./navbar";
import Searchbar from "./search_bar";

export default function Header() {
    return <>
        <div className="flex justify-between pr-5">
            <p className=" text-blue-grey text-[1.75rem] font-bold leading-[1.85rem] tracking-[-0.1px]">
                Văn bản nội bộ
            </p>
            <img src={filterIcon} alt="" />
        </div>
        <div className=" h-4" />
        <Navbar />
        <div className=" h-4" />
        <Searchbar />
        <div className=" h-4" />
    </>
}

