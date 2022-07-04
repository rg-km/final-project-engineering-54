import React from "react"
import { NavLink } from "react-router-dom"

import { classes } from "../../../utils/Utils"

export default function NavSideAdmin({isMinimize, setIsMinimize}) {

    const options = [
        {
            id: 1,
            name: "Dashboard",
            link: "/admin/dashboard",
        },
        {
            id: 2,
            name: "Lihat Profil",
            link: "/admin/mentor/create",
        },
    ]
    const [active, setActive] = React.useState(options[0].name);
    
    const fullscreen = ( () => {setIsMinimize(!isMinimize);});

    const handleClick = (e) => {
        setActive(e.target.innerText);
    }

    return (
        <div className={ classes(isMinimize ? "md:w-0 overflow-hidden" : "md:w-[25%]", "left-content w-full sticky top-0 md:h-screen h-auto bg-indigo-two-code md:space-y-8 space-y-0")}>
            <div className="first-left flex-col md:flex hidden items-center">
                <div className="avatar-wrapper w-[14rem]">
                    <img src="/asset/img/logo-codeswer.png" alt="Codeswer"/>
                </div>
            </div>
            <div className="second-left">
                <nav className="nav-admin-dashboard md:pl-4 pl-0">
                    <details className="md:hidden block poppins relative w-full mr-[1rem]">
                        <summary className="summary-navside">
                            {active}
                        </summary>
                        <ul>
                            {
                                options.map(option => (
                                    <li key={option.id}>
                                        <NavLink to={option.link} onClick={handleClick}
                                                className={({ isActive }) =>
                                                    isActive ? 'active-visit' : ''
                                                }
                                        >{option.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </details>
                    <ul className="space-y-4 md:block hidden">
                        <li className="nav-item-admin-dashboard poppins">
                            <NavLink to="/admin/dashboard" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                                <h3>Dashboard</h3>
                            </NavLink>
                        </li>
                        <li className="nav-item-admin-dashboard poppins">
                            <NavLink to="/admin/mentor/create" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                <h3>Mentor</h3>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={ classes(isMinimize ? "hidden" : "block" ,"three-left")}>
                <div className="btn-minimize flex fixed bottom-5 left-[10rem] cursor-pointer" onClick={fullscreen}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.25rem] w-[2.25rem] text-white bg-indigo-code p-2 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
            </div>
        </div>

    )
}