import { Modal } from "@mantine/core";
import React, { useState } from "react";

export function useDialogManager(fullscreen = false) {
    const [open, setOpen] = useState(false);

    return {
        isOpen: open,
        open() { setOpen(true) },
        closeDialog() { setOpen(false) },
        dialog(children, title = "", style = "", zIndex = 200, onCloseDialog = () => { }) {
            return <Modal
                className={style}
                opened={open}
                title={title}
                transitionProps={{ transition: 'slide-up', duration: 300, exitDuration: 300 }}
                centered
                yOffset={0}
                withCloseButton={false}
                overlayProps={{ blur: 3, }}
                fullScreen={fullscreen}
                zIndex={zIndex}
                onClose={() => {
                    onCloseDialog()
                    this.closeDialog()
                }}
            >
                <div className="bg-white">{children}</div>
            </Modal>
        }
    }

}
