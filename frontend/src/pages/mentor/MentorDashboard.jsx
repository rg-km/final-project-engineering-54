import React from "react"
import { Navigate } from "react-router-dom"

import NavSideMentor from "./NavSideMentor";
import Codeswer from "../../layouts/Codeswer";
import "../../styles/mentor/_mentordashboard.scss";


export default function MentorDashboard({title, kw, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    if(!localStorage.id) {
        return <Navigate to="/signin" replace/>
    }

    return (
        <Codeswer
            title={title}
            kw={kw}
            desc={desc}
            ogUrl={ogUrl}
            ogType={ogType}
            ogTitle={ogTitle}
            ogDesc={ogDesc}
            twitTitle={twitTitle}                
        >

            <article className="mentor-dashboard-component">
                <section id="container_mentor_dashboard">
                    <article className="content-wrapper md:flex-row flex-col">
                        <NavSideMentor />
                        <div className="right-content md:w-[75%] w-full">
                            {children}
                        </div>
                    </article>
                </section>
            </article>

        </Codeswer>
    )
}