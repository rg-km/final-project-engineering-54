import React from "react";
import axios from "../../api/axios";

import Dashboard from "./Dashboard";
import "../../styles/dashboard/_mydash.scss";

export default function Mydash() {

    const [user, setUser] = React.useState([])
    const [forumCount, setForumCount] = React.useState([])

    const getUser = async () => {
         await axios.get(`/user/id?id=${localStorage.id}`, {
            withCredentials: true,
        }).then( res => {
            setUser(res.data.users)
        }).catch( er => {
            console.log(er)
        })
    }
    const getForumCount = async () => {
        await axios.get(`/forum/count/id?users_id=${localStorage.id}`, {
             withCredentials: true,
         }).then(res => {
             setForumCount(res.data)
         }).catch( er => {
             console.log(er)
         })
    }

    React.useEffect( () => {
        getUser()
        getForumCount()
        // eslint-disable-next-line
    }, [])

    return (
        <Dashboard
            title="Dashboard | Codeswer"
            kw="dashboard codeswer"
            desc="Dashboard Codeswer"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""                
        >
            <div className="mydash-component">
                <div className="card-highlight w-full space-y-6">
                    <div className="heading-mydash inter space-y-2">
                        {
                            user ? (
                                user.map((e, i) => {
                                    return (
                                        <h1 key={i}>Halo, {e.name}</h1>
                                    )
                                })
                            )
                            : "Student tidak memiliki hak akses"
                        }
                        <h3>Tanya lagi yuk, bebas tanya apapun ke mentor.</h3>
                    </div>
                    <div className="total-card bg-white">
                        <div className="total-card-content inter">
                            <div className="title-items-total border-b border-solid border-gray-300">
                                <h4>Total Pertanyaan</h4>
                            </div>
                            <div className="value-items-total py-1">
                                <h1>
                                    <span className="number-value">
                                        {
                                            forumCount
                                        }
                                    </span>
                                    <span className="text-value text-gray-500 text-[18px]">  Pertanyaan</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </ Dashboard>
    )
}