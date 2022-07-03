import React, { useState } from "react"
import { Navigate } from "react-router-dom"

import Admin from "../../../layouts/Admin";
import { classes } from "../../../utils/Utils";
import "../../../styles/admin/dashboard/_admindashboard.scss";
import NavSideAdmin from "../../../components/admin/dashboard/NavSideAdmin"


export default function Dashboard({title, kw, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    const [isMinimize, setIsMinimize] = useState(false)
    const fullscreen = ( () => {setIsMinimize(!isMinimize);});

    if(!localStorage.id) {
        return <Navigate to="/admin/signin" replace/>  
    }

    return (
        <Admin
            title={title}
            kw={kw}
            desc={desc}
            ogUrl={ogUrl}
            ogType={ogType}
            ogTitle={ogTitle}
            ogDesc={ogDesc}
            twitTitle={twitTitle}                
        >

        <article className="admin-dashboard-component">
            <section id="container_admin_dashboard">
                <article className="content-wrapper md:flex-row flex-col">
                    <NavSideAdmin 
                        isMinimize={isMinimize}
                        setIsMinimize={setIsMinimize}
                    />
                    <div className={classes(isMinimize ? "md:w-[100%]": "md:w-[75%]", "right-content md:w-[75%] w-full")}>
                        <div className={ classes(isMinimize ? "block" : "hidden" ,"wrapper-btn-minimize px-[1.5rem] pt-[1.5rem]")}>
                            <div className="btn-minimize cursor-pointer" onClick={fullscreen}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.25rem] w-[2.25rem] bg-indigo-code text-white rounded-full p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                        {children}
                    </div>
                </article>
            </section>
        </article>

        </Admin>
    )
}