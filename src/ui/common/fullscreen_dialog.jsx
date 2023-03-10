import { Modal } from "@mantine/core";
import React, { useState } from "react";

// export default function FullscreenDialog({
//     onClose = () => { },
//     children,
//     style = ""
// }) {
//     const [isOpen, setIsOpen] = useState(true)

//     return <Modal
//         className={style}
//         opened={isOpen}
//         onClose={() => setIsOpen(false)}
//         transitionProps={{ transition: 'slide-up', duration: 300, exitDuration: 300 }}
//         fullScreen
//     >
//         <div className="bg-white">
//             {children}
//         </div>
//     </Modal>
// }

export function FullScreenDialogManager() {
    return {
        _isOpen: false,
        openDialog() { this._isOpen = true },
        closeDialog() { this._isOpen = false },
        dialog(onCloseDialog = () => { }, children, style = "") {
            return <Modal
                className={style}
                opened={this._isOpen}
                onClose={() => {
                    onCloseDialog()
                    this.closeDialog()
                }}
                transitionProps={{ transition: 'slide-up', duration: 300, exitDuration: 300 }}
                fullScreen
            >
                <div className="bg-white">
                    {children}
                </div>
            </Modal>
        }
    }

}
