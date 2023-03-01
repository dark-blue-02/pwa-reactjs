import React, { useEffect, useMemo } from "react"
import LoginStore from "./store/login_store";
import { Components } from "./components";

export default function LoginScreen() {
    const loginStore = useMemo(() => new LoginStore(), [])
    useEffect(() => { loginStore.getToken() }, [loginStore])
    const components = Components;

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
