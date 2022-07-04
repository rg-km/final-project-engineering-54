import React from "react"
import Swal from "sweetalert2"
import axios from "../api/axios";
import AuthBtn from "./auth/AuthBtn";
import { Dots } from 'loading-animations-react';

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
    
    const [user, setUser] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    
    React.useEffect(() => {
        if(localStorage.id) {
            const getUser = async () => {
                await axios.get(`/user/id?id=${localStorage.id}`, {
                    withCredentials: true,
                }).then(res => { 
                    setLoading(false)   
                    setUser(res.data.users)
                }).catch( er => {
                    let errorMessage = er.response;
                    Swal.fire({
                        timer: 5000,
                        icon: 'error',
                        titleText: 'Maaf, Token Expired',
                        showConfirmButton: false,
                        text: `${errorMessage.data.er}`,
                        customClass: {
                            container: 'poppins',
                        }
                    })
                })
            }
            getUser()
        }
        // eslint-disable-next-line
    }, [])
    
    return (
        <header>
            <nav id="navbar_component">   
                <div id="nav_brand">
                    <h1 className="poppins">
                        <NavLink to="/">
                            <img src="/asset/img/logo-codeswer.png" width={180} alt="logo" />
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
                        {
                            loading ?
                            <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
                            :
                            localStorage.id ?
                                <AuthBtn classname={classes(isPopup ? "underline underline-offset-8" : "", "rounded-[5px] auth-links")} onClick={openPopup}>
                                    {
                                        user &&
                                        user.map((e, i) => {
                                            return (
                                                <h1 key={i} className="text-semibold text-[1rem] inline mr-2">{e.name}</h1>
                                            )
                                        })
                                    }
                                    <PopupAuthBtn classname={classes(isPopup ? "active-popup py-2" : "py-0", "right-[4.65rem] top-[13.5rem] " )}/>
                                </AuthBtn>
                                :
                                <NoAuthBtn classname="noauth-links" />
                        }
                    </ul>
                </div>

                <div id="nav_autentikasi">
                    {
                        localStorage.id ?
                            <>
                                {
                                    loading ?
                                    <Dots className="max-w-[5rem]" text=" " dotColors={['#4B5563']}/>
                                    :
                                    <AuthBtn classname={classes(isPopup ? "ring-offset-2 ring ring-indigo-code" : "", "rounded-[5px] auth-nav" )} onClick={openPopup}>
                                        {
                                            user.map((e, i) => {
                                                return (
                                                    <span key={i}>
                                                        <Image classname="w-[2.5rem] mr-1" path={`/asset/img/user/${e.photo}`}/>
                                                    </span>
                                                )
                                            })
                                        }
                                    </AuthBtn>  
                                }
                                <PopupAuthBtn classname={classes(isPopup ? "active-popup py-2" : "py-0", "popauth-nav right-0 top-[3.25rem] " )}/>
                            </>
                            :
                            <NoAuthBtn classname={"noauth-nav"}/>
                    }
                </div>
            </nav>
        </header>
    )
}