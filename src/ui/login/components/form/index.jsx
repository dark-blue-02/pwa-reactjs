import React from "react";
import userIcon from "../../.././../assets/svg/user.svg"
import passwordIcon from "../../.././../assets/svg/password.svg"
import { Input, InputAdornment } from "@mui/material";

export default function Form() {
    return <div className="flex flex-col">
        <Field title="Tài khoản" icon={userIcon} hint="Tên đăng nhập hoặc email" />
        <Field title="Mật khẩu" icon={passwordIcon} hint="Mật khẩu" />
    </div>
}

function Field({ title, icon, hint }) {
    return (
        <div className="flex flex-col items-start">
            <p className=" text-base font-semibold tracking-[-0.4px] leading-[22px]">{title}</p>
            <Input startAdornment={
                <InputAdornment position="start">
                    <img src={icon} alt="icon" />
                </InputAdornment>
            }></Input>
            <p className="hidden">{hint}</p>
            <div className="h-4">{hint}</div>
            <button>Truy cập</button>
        </div>
    );
}