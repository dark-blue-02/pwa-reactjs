import { observer } from "mobx-react-lite";
import React, { useEffect, useMemo } from "react"
import LoginState from "./state/login_state";

export const LoginScreen = ({ name, age }) => {
    const loginState = useMemo(() => new LoginState(), []);
    useEffect(() => { loginState.getToken() }, [loginState]);

    const Screen = observer(() => <p>{loginState.bearerToken}</p>)

    return <>
        <p>Hello {name}</p>
        <h5>Your age: {age}</h5>
        <Screen />
    </>
}
