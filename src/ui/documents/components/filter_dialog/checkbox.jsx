import React, { useState } from "react";
import { color } from "../../../../utils/resource/color";

export default function useCheckbox() {
    const [checked, setChecked] = useState(false)

    return {
        checked: checked,
        component(title = "") {
            return <div className="flex items-center">
                <div
                    className="w-5 h-5 border-2 border-link rounded-[.125rem] z-0"
                    onClick={() => setChecked(!checked)}
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
        }
    }
}
