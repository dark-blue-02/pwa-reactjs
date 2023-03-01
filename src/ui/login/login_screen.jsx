import React, { useEffect, useMemo } from "react"
import LoginStore from "./store/login_store";
import { Components } from "./components";

export default function LoginScreen() {
    const loginStore = useMemo(() => new LoginStore(), [])
    useEffect(() => { loginStore.getToken() }, [loginStore])
    const components = Components;

    // observer(() => <p>{loginStore.bearerToken}</p>)
    return <div>
        {components.header}
    </div>
}
