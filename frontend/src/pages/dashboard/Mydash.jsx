import useSWR from 'swr'
import React from "react";
import axios from "../../api/axios";
import { Dots } from 'loading-animations-react';

import Dashboard from "./Dashboard";
import "../../styles/dashboard/_mydash.scss";

export default function Mydash() {
    
    const { data: user } = useSWR( `http://localhost:8080/api/user/id?id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data.users))

    const { data: forumLength } = useSWR(`http://localhost:8080/api/forum/count/id?users_id=${localStorage.id}`, async url => await axios.get(url, { withCredentials: true }).then( res => res.data))

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
                            user ?
                                user.map((e, i) => {
                                    return (
                                        <h1 key={i}>Halo, {e.name}</h1>
                                    )
                                })
                            :
                            <Dots className="max-w-[8rem]" text=" " dotColors={['#ffff']}/>
                        }
                        <h3>Tanya yuk, bebas tanya apapun ke mentor.</h3>
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
                                            forumLength
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