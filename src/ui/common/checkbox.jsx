import React from "react";
import { color } from "../../utils/resource/color";
import { observer } from "mobx-react-lite";

export const Checkbox = observer(
    /**
     * @param {{title: string, onChange: () => void, checked: boolean}} obj 
     */
    ({ title = "", checked, onChange = () => { } }) => {
        return <div className="flex items-center">
            <div
                className="w-5 h-5 border-2 border-link rounded-[.125rem] z-0"
                onClick={onChange}
                style={{ backgroundColor: checked ? color.link : 'transparent' }}>
                {
                    checked &&
                    <p className="text-white leading-[1rem] text-center select-none font-bold">
                        ✓
                    </p>
                }
            </div>
            <div className="w-3 z-10" />
            <p className="text-23374D text-sm leading-[14.7px]">{title}</p>
        </div>
    })
