import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import BtnToTop from "../components/BtnToTop";
import NavAdmin from "../components/admin/NavAdmin";

export default function Admin({ title, key, desc, ogUrl, ogType, ogTitle, ogDesc, twitTitle, children}) {

    const location = useLocation();
    function getFooter() {
        const admin = "admin"
        if(location.pathname === `/${admin}/dashboard` || location.pathname === `/${admin}/profile` || location.pathname === `/${admin}/questions`) return
        return <Footer />
    }

    return (
        <React.Fragment>
            <Helmet>
                    {/* <link rel="apple-touch-icon" sizes="180x180" href="./static/util/img/babies/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="./static/util/img/babies/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="./static/util/img/babies/favicon-16x16.png" />
                    <link rel="manifest" href="./static/util/img/babies/site.webmanifest" />   */}
                    <title>{title}</title>

                    <meta name="keywords" content={key}/>
                    <meta name="description" content={desc}/>
                    <meta property="og:url" content={ogUrl}/>
                    <meta property="og:type" content={ogType}/>
                    <meta property="og:title" content={ogTitle}/>
                    <meta property="og:description" content={ogDesc}/>
                    <meta name="twitter:title" content={twitTitle}/>


                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=JetBrains+Mono:100,200,300,regular,500,600,700,800,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900" rel="stylesheet" />

            </Helmet>
            
            <NavAdmin />
            {children}
            {getFooter()}

            <BtnToTop />

        </React.Fragment>
    );
}

Admin.defaultProps = {
    title: 'Admin Codeswer - Codeswer Data Management',
    key: 'admin codeswer, admin codeswer indonesia, admin codeswer id, admin codeswer programming, admin codeswer mentor, admin codeswer mentoring, admin codeswer forum',
    desc: 'Admin Codeswer. Website untuk memanagement data-data di codeswer.',
    ogUrl: null,
    ogType: null,
    ogTitle: null,
    ogDesc: null,
    twitTitle: null,
}