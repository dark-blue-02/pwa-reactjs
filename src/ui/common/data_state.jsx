import React from "react";
import errorImg from "../../assets/img/404.png";
import noDataImg from "../../assets/img/no-data.png";
import CircularProgress from "@mui/material/CircularProgress";

function containerStyle() {
    const style = "flex flex-col justify-center items-center"
    return style
}

function textStyle() {
    const style = "font-bold text-xl leading-9 tracking-[-1px]"
    return style
}


export function ErrorView({ className = "" }) {
    return <div className={`${containerStyle()} ${className}`}>
        <img src={errorImg} alt="404" />
        <div className=" h-4" />
        <p className={textStyle()}>Hệ thống xảy ra sự cố</p>
    </div>
}

export function NoDataView({ className = "" }) {
    return <div className={`${containerStyle()} ${className}`}>
        <img src={noDataImg} alt="no data" />
        <div className=" h-4" />
        <p className={textStyle()}>Không có dữ liệu</p>
    </div>
}

export function LoadingView({ className = "" }) {
    return <div className={`${containerStyle()} ${className}`}>
        <CircularProgress />
    </div>
}

