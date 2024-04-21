import React from 'react'
import { useState } from "react";
import NavLinks from "./NavLinks";
import './NavBar.css';
import { PiHamburgerBold } from "react-icons/pi";

const MobileNaigation = () => {
    const [click, setclick] = useState(false);
    const Hamburger = <PiHamburgerBold className="HamburgerMenu"
        size="30px" color="white" onClick={() => setclick(!click)} />
    return (
        <nav className="MobileNaigation">
            {/* <h2 className="logo">Logo</h2> */}
            {Hamburger}
            {click &&<NavLinks />}
        </nav>
    )
}

export default MobileNaigation;