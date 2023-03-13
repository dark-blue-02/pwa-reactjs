import { Modal } from "@mantine/core";
import React, { useState } from "react";

export function useFullScreenDialogManager() {
    const [open, setOpen] = useState(false);

    return {
        openDialog() { setOpen(true) },
        closeDialog() { setOpen(false) },
        dialog({ onCloseDialog = () => { }, children, style = "" }) {
            return <Modal
                className={style}
                opened={open}
                transitionProps={{ transition: 'slide-up', duration: 300, exitDuration: 300 }}
                onClose={() => {
                    onCloseDialog()
                    this.closeDialog()
                }}
                fullScreen
            >
                <div className="bg-white">{children}</div>
            </Modal>
        }
    }

}
