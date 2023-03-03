import React, { useEffect } from "react"
import { Components } from "./components";
import { tokenLocalStorage } from "../../data";
import { useNavigate } from "react-router-dom";
import { routes } from "../navigation/routers/main_router";

export default function LoginScreen() {
    const components = Components;
    const navigate = useNavigate()

    useEffect(() => {
        if (isUserHadLoggedIn()) navigate(routes.home)
    }, [navigate])

    // observer(() => <p>{loginStore.bearerToken}</p>)
    return <div className="flex flex-[1] flex-col justify-between pt-6 pl-7 pr-6 pb-0 ">
        {components.header}
        <div className=" flex flex-col">
            {components.title}
            <div className=" h-12" />
            {components.form}
        </div>
        <div></div>
    </div>
}

function isUserHadLoggedIn() {
    const userInfo = tokenLocalStorage.getUserInfo()
    return userInfo.username != null && userInfo.password != null
}
