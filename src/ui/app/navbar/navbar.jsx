import React, { createContext, useMemo } from "react";
import { AppBar, Toolbar } from "@mui/material";
import NavbarStore from "../store/navbar_store";
import { NavItems } from "./nav_item";

export const NavBarContext = createContext({ store: new NavbarStore() })

// TODO: Navbar is hidden when overflow (phone only)
export default function MainNavbar() {
    const store = useMemo(() => new NavbarStore(), [])

    return <NavBarContext.Provider value={{ store: store }}>
        <AppBar
            className=" bg-white rounded-t-[32px] h-[6rem]"
            sx={{ top: 'auto', bottom: 0, backgroundColor: 'white' }}
        >
            <Toolbar className="flex">
                <NavItems />
            </Toolbar>
        </AppBar>
    </NavBarContext.Provider>
}

export const EmptyDivBehindNavbar = () => <div className="h-[100px]" />

