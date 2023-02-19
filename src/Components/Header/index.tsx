import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";

function Header() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <Outlet />
        </>
    )
}

export default Header;
