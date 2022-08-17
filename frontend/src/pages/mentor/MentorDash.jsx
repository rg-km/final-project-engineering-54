import React from "react";
import Swal from "sweetalert2"
import axios from "../../api/axios";

import "../../styles/mentor/_mentordash.scss";
import MentorDashboard from "./MentorDashboard";

export default function MentorDash() {

    const [mentor, setMentor] = React.useState([])
    const [forumCount, setForumCount] = React.useState([])

    const getMentor = async () => {
        await axios.get(`/mentor/id?id=${localStorage.id}`, {
            withCredentials: true,
        }).then(res => {
            // console.log(res.data)
            setMentor(res.data.user_mentor)
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
    const getForumCount = async () => {
        await axios.get(`/forum/count`, {
             withCredentials: true,
         }).then(res => {
             setForumCount(res.data)
         }).catch( er => {
             console.log(er)
         })
    }

    React.useEffect( () => {
        getMentor()
        getForumCount()
        // eslint-disable-next-line
    }, [])

    return (
        <MentorDashboard
            title="Dashboard | Mentor Codeswer"
            kw="dashboard mentor codeswer"
            desc="Dashboard Mentor Codeswer"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""                
        >
            <div className="mentordash-component">
                <div className="card-highlight w-full space-y-6">
                    <div className="heading-mentordash inter space-y-2">
                        {
                            mentor ? (
                                mentor.map((e, i) => {
                                    return (
                                        <h1 key={i}>Halo, Mentor {e.name}</h1>
                                    )
                                })
                            )
                            : "Student tidak memiliki hak akses"
                        }
                        <h3>Yuk mentor, jawab semua pertanyaan dari murid.</h3>
                    </div>
                    <div className="total-card bg-white">
                        <div className="total-card-content inter">
                            <div className="title-items-total border-b border-solid border-gray-300">
                                <h4>Total Pertanyaan Murid</h4>
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
        </ MentorDashboard>
    )
}