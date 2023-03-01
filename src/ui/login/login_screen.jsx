import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react"
import LoginStore from "./store/login_store";

export const LoginScreen = ({ name, age }) => {
    const loginStore = useMemo(() => new LoginStore(), [])
    useEffect(() => { loginStore.getToken() }, [loginStore])

    const Screen = observer(() => <p>{loginStore.bearerToken}</p>)

    return <>
        <p>Hello {name}</p>
        <h5>Your age: {age}</h5>
        <Screen />
    </>
}
