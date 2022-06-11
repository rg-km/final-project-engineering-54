import React from "react"
// import AuthBtn from "./AuthBtn";
import NoAuthBtn from "./auth/NoAuthBtn";
import { classes } from "../utils/Utils"
import { Link } from 'react-router-dom';
import "../styles/component/_navbar.scss";

export default function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false);
    const open = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav id="navbar_component">   
                <div id="nav_brand">
                    <h1 className="poppins">
                        <Link to="/">
                            Codeswer
                            {/* <img src="../assets/images/brand-ori.png" width="60" alt="logo" /> */}
                        </Link>        
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
                        <li><Link to="/mentor">Find Mentor</Link></li>
                        <li><Link to="/docs">How It Works</Link></li>
                        <li><Link to="/blogs">Blog</Link></li>
                        <NoAuthBtn classname="noauth-links" />
                        {/* <AuthBtn classname="auth-links">
                            <h1 className="text-semibold text-[1rem] inline mr-2">Aditya Rizqi</h1>
                        </AuthBtn> */}
                    </ul>
                </div>

                <div id="nav_autentikasi">
                    <NoAuthBtn classname={"noauth-nav"}/>
                    {/* <AuthBtn classname={"auth-nav"}>
                        <img className="my-account rounded-full shadow-sm inline" src="/logo192.png" alt="User" width="40"/>
                    </AuthBtn> */}
                </div>
            </nav>
        </header>
    )
}