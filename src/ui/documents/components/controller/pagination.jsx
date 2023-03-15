import { useContext } from "react";
import { DocumentScreenContext } from "../../document_screen";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { color } from "../../../../utils/resource/color";

export default function Controller({ totalCount }) {
    const store = useContext(DocumentScreenContext).mainStore;
    const iconSize = 20

    const cantGoToPrevious = store.pageIndex === 0
    const cantGoToNext = store.pageIndex === totalCount - 1 || totalCount === 0

    return <div className="flex">
        <button
            onClick={() => store.changePageIndex(0)}
            disabled={cantGoToPrevious}>
            <SkipPreviousIcon sx={{
                width: iconSize,
                color: cantGoToPrevious ? color.icon_normal : color.black
            }} />
        </button>
        <div className="w-4" />
        <button
            onClick={() => store.changePageIndex(store.pageIndex - 1)}
            disabled={cantGoToPrevious}>
            <ChevronLeftIcon sx={{
                width: iconSize,
                color: cantGoToPrevious ? color.icon_normal : color.black
            }} />
        </button>
        <div className="w-4" />
        <button
            onClick={() => store.changePageIndex(store.pageIndex + 1)}
            disabled={cantGoToNext}>
            <NavigateNextIcon sx={{
                width: iconSize,
                color: cantGoToNext ? color.icon_normal : color.black
            }} />
        </button>
        <div className="w-4" />
        <button
            onClick={() => store.changePageIndex(totalCount - 1)}
            disabled={cantGoToNext}>
            <SkipNextIcon sx={{
                width: iconSize,
                color: cantGoToNext ? color.icon_normal : color.black
            }} />
        </button>
    </div>
}
