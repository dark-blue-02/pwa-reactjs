import React, { useMemo, useState } from "react";
import userIcon from "../../.././../assets/svg/user.svg"
import passwordIcon from "../../.././../assets/svg/password.svg"
import { Input, InputAdornment } from "@mui/material";
import LoginStore from "../../store/login_store";

export default function Form() {
    const loginStore = useMemo(() => new LoginStore(), [])
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    return <div className="flex flex-col">
        <Field
            title="Tài khoản"
            icon={userIcon}
            hint="Tên đăng nhập hoặc email"
            onChange={(/** @type {string} */ text) => setUsername(text)}
        />
        <Field
            title="Mật khẩu"
            icon={passwordIcon}
            hint="Mật khẩu"
            onChange={(/** @type {string} */ text) => setPassword(text)}
        />
        <div className="h-4" />

        <button onClick={() => {
            if (username === "" || password === "") {
                console.error("Username and password must not be empty")
                return
            }
            loginStore.getToken(username, password);
        }}>
            Truy cập
        </button>
    </div>
}

function Field({ title, icon, hint, onChange }) {
    return (
        <div className="flex flex-col items-start">
            <p className=" text-base font-semibold tracking-[-0.4px] leading-[22px]">{title}</p>
            <Input
                onChange={(event) => onChange(event.target.value)}
                startAdornment={
                    <InputAdornment position="start">
                        <img src={icon} alt="icon" />
                    </InputAdornment>
                } />
            <p className="hidden">{hint}</p>
        </div>
    );
}