import React from "react"
import Swal from "sweetalert2"
import { NavLink } from "react-router-dom"
import { Dots } from 'loading-animations-react';

import axios from "../../api/axios";
import Image from "../../components/Image";

export default function NavSideMentor() {

    const [user, setUser] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const options = [
        {
            id: 1,
            name: "Dashboard",
            link: "/mentor/dashboard",
        },
        {
            id: 2,
            name: "Lihat Profil",
            link: "/mentor/profile",
        },
        {
            id: 3,
            name: "Daftar Pertanyaan",
            link: "/mentor/questions",
        }
    ]
    const [active, setActive] = React.useState(options[0].name);

    const handleClick = (e) => {
        setActive(e.target.innerText);
    }

    const getUser = async () => {
        await axios.get(`/mentor/id?id=${localStorage.id}`, {
            withCredentials: true,
        }).then(res => {
            setLoading(false)
            setUser(res.data.user_mentor)
        }).catch( er => {
            Swal.fire({
                timer: 5000,
                icon: 'error',
                titleText: 'Maaf, User tidak ada',
                showConfirmButton: false,
                text: `${er.message}`,
                customClass: {
                    container: 'poppins',
                }
            })
        })
    }

    React.useEffect(() => {
        getUser()   
        // eslint-disable-next-line
    }, [])

    return (
        <div className="left-content md:w-[25%] w-full sticky top-0 md:h-screen h-auto bg-indigo-two-code md:space-y-8 space-y-0">
            <div className="first-left flex-col md:flex hidden items-center">
                <div className="avatar-wrapper w-[8rem]">
                    {
                        loading ?
                        <Dots className="max-w-[8rem]" text=" " dotColors={['#656EE3']}/>
                        :
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
                <nav className="nav-dashboard md:pl-4 pl-0">
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
                        <li className="nav-item-dashboard poppins">
                            <NavLink to="/mentor/dashboard" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                                <h3>Dashboard</h3>
                            </NavLink>
                        </li>
                        <li className="nav-item-dashboard poppins">
                            <NavLink to="/mentor/profile" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                </svg>
                                <h3>Lihat Profil</h3>
                            </NavLink>
                        </li>
                        <li className="nav-item-dashboard poppins">
                            <NavLink to="/mentor/questions" className={({isActive}) =>
                                    isActive ? "active-visit" : ""
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                <h3>Daftar Pertanyaan</h3>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}