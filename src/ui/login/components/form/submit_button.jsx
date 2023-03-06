import { observer } from "mobx-react-lite";
// eslint-disable-next-line no-unused-vars
import { default as LoginStore } from "../../store/login_store";
import { DataState } from "../../../../utils";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export const SubmitButton = observer(
    /**
     * @param {{
     *  loginStore: LoginStore, 
     *  username: string, 
     *  password: string,
     *  gotoHomeScreen: Function,
     * }} obj
     * @returns 
     */
    ({ loginStore, username, password, gotoHomeScreen }) => {
        return <button
            className=" bg-primary py-4 rounded-lg h-14 flex justify-center items-center"
            onClick={() => {
                if (username === "" || password === "") {
                    console.error("Username and password must not be empty");
                    return;
                }
                loginStore.getTokenThenSaveIt(username, password).then(() => {
                    if (loginStore.loginState === 'success') {
                        gotoHomeScreen();
                    }
                });
            }}>{loginStore.loginState !== DataState.loading
                ? <p className="text-base font-bold tracking-[-0.4px] text-white">Truy cập</p>
                : <CircularProgress sx={{ color: "white" }} />}
        </button>;
    }
)