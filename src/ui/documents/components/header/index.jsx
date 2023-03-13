import React from "react";
import filterIcon from "../../../../assets/svg/filter_outline.svg"
import Navbar from "./navbar";
import { useFullScreenDialogManager } from "../../../common/fullscreen_dialog";
import FilterDialog from "../filter_dialog";
import Searchbar from "./search_bar";

export default function Header() {
    const filterDialogManager = useFullScreenDialogManager()

    return <div className="flex flex-col">
        <div className="flex justify-between pr-5">
            <p className=" text-blue-grey text-[1.75rem] font-bold leading-[1.85rem] tracking-[-0.1px]">
                Văn bản nội bộ
            </p>
            <img src={filterIcon} alt="" onClick={() => filterDialogManager.openDialog()} />
        </div>
        <div className=" h-4" />
        <Navbar />
        <div className=" h-4" />
        <Searchbar />
        <div className=" h-4" />
        {filterDialogManager.dialog({ children: <FilterDialog /> })}
    </div>
}

