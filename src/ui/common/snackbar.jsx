import React from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

/**
 * @param {{
 *  message: string, 
 *  onClose: any, 
 *  open: boolean,
 * }} props
 */
export default function ErrorSnackbar({ message, onClose, open }) {
    return <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
    // message="Sai tên tài khoản hoặc mật khẩu"
    >
        <Alert severity="error"
            sx={{ width: "100%" }}
            onClose={onClose}
        >
            {message}
        </Alert>
    </Snackbar>
}