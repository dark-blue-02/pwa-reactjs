import React, { useMemo, useState } from "react";
import userIcon from "../../.././../assets/svg/user.svg"
import passwordIcon from "../../.././../assets/svg/password.svg"
import { Input, InputAdornment } from "@mui/material";
import LoginStore from "../../store/login_store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../navigation/routers/main_router";

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
        <Field
            title="Mật khẩu"
            icon={passwordIcon}
            hint="Mật khẩu"
            onChange={(/** @type {string} */ text) => setPassword(text)}
        />
        <div className="h-4" />

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

const SubmitButton = observer(
    /**
     * 
     * @param {{
     *  loginStore: LoginStore, 
     *  username: string, 
     *  password: string,
     *  gotoHomeScreen: Function,
     * }} obj
     * @returns 
     */
    ({ loginStore, username, password, gotoHomeScreen }) =>
        <button onClick={() => {
            if (username === "" || password === "") {
                console.error("Username and password must not be empty")
                return
            }
            loginStore.getToken(username, password).then(() => {
                if (loginStore.loginState === 'success') {
                    gotoHomeScreen()
                }
            });
        }}>
            Truy cập
        </button>
)
