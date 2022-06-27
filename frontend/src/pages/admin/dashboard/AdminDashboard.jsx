import React from "react"
import Swal from "sweetalert2"
import axios from "../../../api/axios";
import { AuthContext } from "../../../App";
import { NavLink, Outlet, Navigate } from "react-router-dom"

import Image from "../../../components/Image";
import Codeswer from "../../../layouts/Codeswer";
import "../../../styles/admin/dashboard/_admindashboard.scss";


export default function Dashboard({title, kw, desc, ogUrl, ogType, ogDesc, twitTitle}) {

    const status = null;
    const [user, setUser] = React.useState([])
    const {state} = React.useContext(AuthContext);

    const options = [
        {
            id: 1,
            name: "Dashboard",
            link: "/dashboard",
        },
        {
            id: 2,
            name: "Lihat Profil",
            link: "/profile",
        },
        {
            id: 3,
            name: "Pertanyaan Saya",
            link: "/questions",
        }
    ]

    const [active, setActive] = React.useState(options[0].name);

    const handleClick = (e) => {
        setActive(e.target.innerText);
    }

    const getUser = async () => {
        const resp = await axios.get(`/user/id?id=${state.id}`, {
            withCredentials: true,
        }).catch( er => {
            let errorMessage = er.response;
            Swal.fire({
                timer: 5000,
                icon: 'error',
                titleText: 'Maaf, User tidak ada',
                showConfirmButton: false,
                text: `${errorMessage.data.er}`,
                customClass: {
                    container: 'poppins',
                }
            })
        })
        setUser(resp.data.users)
    }

    React.useEffect(() => {
        getUser()
        // eslint-disable-next-line
    }, [user])

    if(!state.isAuthenticated) {
        return <Navigate to="/admin/signin" replace/>  
    }

    return (
        <Codeswer
            title="Admin Dashboard - Codeswer"
            kw="codeswer dashboard, codeswer dashboard, codeswer id dashboard, codeswer dashboard indonesia"
            desc="Admin Codeswer. Website untuk memanagement data-data di codeswer."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}                
        >

        <article className="admin-dashboard-component">
            <section id="container_admin_dashboard">
                <article className="content-wrapper md:flex-row flex-col">
                    <div className="left-content md:w-[25%] w-full sticky top-0 md:h-screen h-auto bg-indigo-two-code md:space-y-8 space-y-0">
                        <div className="first-left flex-col md:flex hidden items-center">
                            <div className="avatar-wrapper w-[8rem]">
                                {
                                    user &&
                                    user.map((e, i)=> {
                                        return (
                                            <span key={i}>
                                                <Image path={`/asset/img/user/${e.photo}`}/>
                                            </span>
                                        )
                                    })

                                }
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
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="right-content md:w-[75%] w-full">
                        <Outlet />
                    </div>
                </article>
            </section>
        </article>

        </Codeswer>
    )
}