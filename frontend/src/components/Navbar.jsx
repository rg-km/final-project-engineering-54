import React from "react"
// import AuthBtn from "./auth/AuthBtn";

import Image from "./Image";
import NoAuthBtn from "./auth/NoAuthBtn";
import { classes } from "../utils/Utils";
import "../styles/component/_navbar.scss";
import { NavLink } from 'react-router-dom';

import PopupAuthBtn from "./auth/PopupAuthBtn";

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }

    const [isPopup, setIsPopup] = React.useState(false);

    const openPopup = () => {
        setIsPopup(!isPopup);
    }

    


    return (
        <header>
            <nav id="navbar_component">   
                <div id="nav_brand">
                    <h1 className="poppins">
                        <NavLink to="/">
                            Codeswer
                            {/* <img src="../assets/images/brand-ori.png" width="60" alt="logo" /> */}
                        </NavLink>        
                    </h1>
                </div>

                <div id="nav_icon" onClick={open}  className={
                    classes(isOpen ? "open" : false, "space-y-2")
                }>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div id="nav_links">
                    <ul id="nav_links_item" className="poppins">
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                } to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({ isActive }) =>
                                        isActive ? 'nav-active' : ''
                                } to="/docs">
                                How It Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs"
                                className={({ isActive }) =>
                                    isActive ? 'nav-active' : ''
                                }>
                                Blog
                            </NavLink>
                        </li>
                        <NoAuthBtn classname="noauth-links" />
                        {/* <AuthBtn classname={classes(isPopup ? "underline underline-offset-8" : "", "rounded-[5px] auth-links")} onClick={openPopup}>
                            <h1 className="text-semibold text-[1rem] inline mr-2">Aditya Rizqi</h1>
                            <PopupAuthBtn classname={classes(isPopup ? "active-popup py-2" : "py-0", "right-[4.65rem] top-[13.5rem] " )}/>
                        </AuthBtn> */}
                    </ul>
                </div>

                <div id="nav_autentikasi">
                    <NoAuthBtn classname={"noauth-nav"}/>
                    {/* <AuthBtn classname={classes(isPopup ? "ring-offset-2 ring ring-indigo-code" : "", "rounded-[5px] auth-nav" )} onClick={openPopup}>
                        <Image classname="w-[2.5rem] mr-1"/>
                    </AuthBtn>   */}
                    <PopupAuthBtn classname={classes(isPopup ? "active-popup py-2" : "py-0", "popauth-nav right-0 top-[3.25rem] " )}/>
                </div>
            </nav>
        </header>
    )
}