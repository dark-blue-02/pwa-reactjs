import React, { useMemo, useState } from "react";
// @ts-ignore
import userIcon from "../../../../assets/svg/user.svg"
// @ts-ignore
import passwordIcon from "../../../../assets/svg/password.svg"
import { Input, InputAdornment } from "@mui/material";
import LoginStore from "../../store/login_store";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../navigation/routers/main_router";
import { SubmitButton } from "./submit_button";
import { AlertSnackBar } from "./alert";

export default function Form() {
    const loginStore = useMemo(() => new LoginStore(), [])
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    const navigate = useNavigate()

    function navigateToHomeScreen() {
        navigate(routes.home)
    }

    return <div className="flex flex-col">
        <Field
            title="Tài khoản"
            icon={userIcon}
            hint="Tên đăng nhập hoặc email"
            onChange={(/** @type {string} */ text) => setUsername(text)}
        />
        <div className="h-3" />
        <Field
            title="Mật khẩu"
            icon={passwordIcon}
            hint="Mật khẩu"
            onChange={(/** @type {string} */ text) => setPassword(text)}
        />
        <div className="h-4" />
        <p className=" text-right text-sm underline text-label tracking-[-0.2px] leading-6">
            Quên mật khẩu
        </p>
        <div className="h-4" />
        <AlertSnackBar store={loginStore} />
        <SubmitButton
            loginStore={loginStore}
            username={username}
            password={password}
            gotoHomeScreen={navigateToHomeScreen}
        />
    </div>
}

function Field({ title, icon, hint, onChange }) {
    return (
        <div className="flex flex-col items-start">
            <p className=" text-base font-semibold tracking-[-0.4px] leading-[22px]">{title}</p>
            <div className=" h-3" />
            <Input
                className="text-base leading-[22px] tracking-[-0.6px] bg-F8F8F8 rounded-lg p-4"
                size="small"
                fullWidth={true}
                placeholder={hint}
                disableUnderline={true}
                onChange={(event) => onChange(event.target.value)}
                startAdornment={
                    <InputAdornment position="start">
                        <img src={icon} alt="icon" />
                    </InputAdornment>
                } />
        </div>
    );
}