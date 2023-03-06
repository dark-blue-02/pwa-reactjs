import { observer } from "mobx-react-lite";
import React from "react";
import { DataState } from "../../../../utils";
// eslint-disable-next-line no-unused-vars
import LoginStore from "../../store/login_store";
import ErrorSnackbar from "../../../common/snackbar";

export const AlertSnackBar = observer(
    /**
     * @param {{store: LoginStore}} obj
     */
    ({ store }) => {
        return <ErrorSnackbar
            message="Sai tên tài khoản hoặc mật khẩu"
            onClose={() => store.resetDataState()}
            open={store.loginState === DataState.error}
        />
    }
)