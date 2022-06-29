import React from "react"
import { AuthContext } from "../../../App";
import { Navigate } from "react-router-dom"

import Admin from "../../../layouts/Admin";
import "../../../styles/admin/dashboard/_admindashboard.scss";
import NavSideAdmin from "../../../components/admin/dashboard/NavSideAdmin"


export default function Dashboard({title, kw, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    const {state} = React.useContext(AuthContext);

    if(!state.isAuthenticated) {
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
                    <NavSideAdmin />
                    <div className="right-content md:w-[75%] w-full">
                        {children}
                    </div>
                </article>
            </section>
        </article>

        </Admin>
    )
}