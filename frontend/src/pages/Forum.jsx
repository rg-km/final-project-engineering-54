import React from "react";
import { Dots } from 'loading-animations-react';
import { useParams, Navigate } from "react-router-dom"

import axios from "../api/axios";
import Codeswer from "../layouts/Codeswer";
import AuthorDetail from "../components/AuthorDetail"

import "../styles/_forum.scss"

export default function Forum() {

    const { id } = useParams()

    const [questions, setQuestions] = React.useState([])
    const [mentor, setMentor] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const getQuestions = async () => {
        await axios.get(`/forum/id?id=${id}`, {
            withCredentials: true,
         }).then(res => {
            // console.log(res.data)
            setQuestions(res.data.forum)
            setLoading(false)
         }).catch( er => {
             console.log(er)
         })
    }    

    const getMentor = async () => {
        await axios.get(`/mentor/id?id=3`, {
            withCredentials: true,
         }).then(res => {
            // console.log(res.data)
            setMentor(res.data.user_mentor)
            setLoading(false)
         }).catch( er => {
             console.log(er)
         })
    } 

    React.useEffect(() => {
        if(id)
        getQuestions()
        getMentor()
        // console.log(questions)
        //eslint-disable-next-line
    }, [id]);
    
    if(!localStorage.id) {
        return <Navigate to="/signin" replace/>  
    }

    return (
       
            loading ? 
                <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
            :
                questions &&
                questions.map((e, i) => {
                    return (
                        <div key={i}>
                            <Codeswer
                                title={e.title}
                                kw={`${e.course_name} codeswer`}
                                desc={`${e.course_desc} - ${e.course_name}`}
                                ogUrl={""}
                                ogType={""}
                                ogTitle={""}
                                ogDesc={""}
                                twitTitle={""}
                            >
                                <article className="forum-component">
                                    <section id="container_forum">
                                        <div className="forum-heading inter">
                                            <>
                                                <AuthorDetail 
                                                    classImage="w-[3.5rem]"
                                                    path={`/asset/img/user/${e.photo}`}
                                                    text1="Author" 
                                                    text2={e.name} 
                                                    classname="flex items-center space-x-3 w-full" 
                                                    classname2="text-[#8A8888] text-[1.25rem] text-extralight" 
                                                    classname3="text-gray-800 text-[1.10rem] font-medium "
                                                    >
                                                </AuthorDetail>
                                                <div className="forum-course flex items-center mt-7">
                                                    <h3 className="p-2 bg-blue-500/30 rounded-[0.75rem]">
                                                        {e.course_name}
                                                    </h3>
                                                </div>
                                            </>
                                        </div>
                                        <div className="forum-detail mt-10 space-y-4">
                                            <div className="title-forum">
                                                <h1 className="poppins">
                                                    {e.title}
                                                </h1>
                                            </div>
                                            <div className="messages-question inter">
                                                <p 
                                                    dangerouslySetInnerHTML={{ __html: e.question }}
                                                    className="whitespace-pre-line align-bottom text-[1.2rem] leading-[2rem] ">
                                                    
                                                </p>
                                            </div>
                                            <hr
                                                style={{
                                                height: '1px',
                                                marginTop: `5rem`,
                                                color: 'rgb(209 213 219 / 1)',
                                                background: 'rgb(209 213 219 / 1)',
                                                borderColor: 'rgb(209 213 219 / 1)',
                                                }}
                                            />
                                            <div className="answer-box space-y-4">
                                                <div className="title-answer mb-5">
                                                    <h1 className="poppins">Jawaban</h1>
                                                </div>
                                                {
                                                    mentor.map((e,i) => {
                                                        return (
                                                            <span key={i}>
                                                                <AuthorDetail 
                                                                    classImage="w-[3.5rem]"
                                                                    path={`/asset/img/user/${e.photo}`}
                                                                    text1="Author" 
                                                                    text2={e.name} 
                                                                    classname="flex items-center space-x-3 w-full" 
                                                                    classname2="text-[#8A8888] text-[1.25rem] text-extralight" 
                                                                    classname3="text-gray-800 text-[1.10rem] font-medium "
                                                                    >
                                                                </AuthorDetail>
                                                            </span>
                                                        )
                                                    })
                                                }
                                                <div className="messages-question inter">
                                                    <p 
                                                        dangerouslySetInnerHTML={{ __html: e.answer }}
                                                        className="whitespace-pre-line align-bottom leading-[2rem] text-[18px] bg-indigo-two-code inter p-[1rem]">
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </article>
                            </Codeswer>
                        </div>
                    )
                })
    )
}