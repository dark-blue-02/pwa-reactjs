import React from "react";
import filterIcon from "../../../../assets/svg/filter_outline.svg"
import Navbar from "./navbar";
import { useDialogManager } from "../../../common/dialog";
import FilterDialog from "../filter_dialog";
import Searchbar from "./search_bar";

export default function Header() {
    const filterDialogManager = useDialogManager(true)

    return <div className="flex flex-col">
        <div className="flex justify-between pr-5">
            <p className=" text-blue-grey text-[1.75rem] font-bold leading-[1.85rem] tracking-[-0.1px]">
                Văn bản nội bộ
            </p>
            <img src={filterIcon} alt="" onClick={() => filterDialogManager.open()} />
        </div>
        <div className=" h-4" />
        <Navbar />
        <div className=" h-5" />
        <Searchbar />
        <div className=" h-4" />
        {
            filterDialogManager.dialog(
                <FilterDialog closeDialog={() => filterDialogManager.closeDialog()} />,
                "",
                "",
                2000
            )
        }
    </div>
}

