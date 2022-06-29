import React from "react"
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom"

import NavDash from "../dashboard/NavDash"
import Codeswer from "../../layouts/Codeswer";
import "../../styles/dashboard/_dashboard.scss";


export default function Dashboard({title, kw, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    const {state} = React.useContext(AuthContext);

    if(!state.isAuthenticated) {
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

            <article className="dashboard-component">
                <section id="container_dashboard">
                    <article className="content-wrapper md:flex-row flex-col">
                        <NavDash />
                        <div className="right-content md:w-[75%] w-full">
                            {children}
                        </div>
                    </article>
                </section>
            </article>

        </Codeswer>
    )
}