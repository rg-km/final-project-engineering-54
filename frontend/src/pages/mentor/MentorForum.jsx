import React from "react";
import Swal from "sweetalert2"
import { Dots } from 'loading-animations-react';
import { useParams, Navigate } from "react-router-dom"

import axios from "../../api/axios";
import Codeswer from "../../layouts/Codeswer";
import "../../styles/mentor/_mentorforum.scss";
import { Editor } from '@tinymce/tinymce-react';
import AuthorDetail from "../../components/AuthorDetail"

export default function MentorForum() {

    const { id } = useParams()

    const editorRef = React.useRef(null);
    const [questions, setQuestions] = React.useState([])
    const [mentor, setMentor] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [values, setValues] = React.useState({
        answer: "",
    });     

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
        await axios.get(`/mentor/id?id=${localStorage.id}`, {
            withCredentials: true,
         }).then(res => {
            // console.log(res.data)
            setMentor(res.data.user_mentor)
            setLoading(false)
         }).catch( er => {
             console.log(er)
         })
    } 

    const dataReq = {
        ...values,
        users_mentor_id: parseInt(localStorage.id)
    }
    
    const submitAnswer = async (e) => {
        e.preventDefault()
        await axios.put(`/forum/answer?id=${id}`,dataReq, {
            withCredentials: true,
        }).then(res => {
            if(res.status === 200) {
                Swal.fire({
                    toast: true,
                    timer: 1900,
                    icon: 'success',
                    position: "top-end",
                    showConfirmButton: false,
                    title: 'Jawaban telah terkirim',
                    customClass: {
                        container: 'poppins'
                    }
                })
            }
        }).catch( er => {
            Swal.fire({
                timer: 3000,
                icon: 'error',
                titleText: 'Coba lagi yuk',
                showConfirmButton: false,
                text: `Ada kesalahan teknis`,
                customClass: {
                    container: 'poppins',
                }
            })
        })
    }

    React.useEffect(() => {
        if(id)
        getQuestions()
        getMentor()
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
                                <article className="mentor-forum-component">
                                    <section id="container_mentor_forum">
                                        <div className="mentor-forum-heading inter">
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
                                                <div className="mentor-forum-course flex items-center mt-7">
                                                    <h3 className="p-2 bg-blue-500/30 rounded-[0.75rem]">
                                                        {e.course_name}
                                                    </h3>
                                                </div>
                                            </>
                                        </div>
                                        <div className="mentor-forum-detail mt-10 space-y-4">
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
                                            <div className="comment-box">
                                                <div className="max-w-full rounded-lg shadow-md mt-10">
                                                    <form onSubmit={submitAnswer} className="w-full p-4 inter space-y-6">
                                                        <label className="block mb-2">
                                                            <span className="text-gray-600">Add a reply</span>
                                                        </label>
                                                        <Editor 
                                                            scriptLoading={{ async: true }}
                                                            apiKey='j3akvdt0e6yupl1u6hcuj7w7v240k9feywwe2l9665xlvmv3'
                                                            textareaName="question"
                                                            initialValue="Mulai menulis disini" 
                                                            onInit={(evt, editor) => editorRef.current = editor}
                                                            onEditorChange={ newValue => setValues({ ...values, answer: newValue }) }
                                                            init={{
                                                                plugins: 'tinydrive preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                                                                menubar: 'file edit view insert format tools table help',
                                                                toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save | image media template link anchor codesample | ltr rtl',
                                                                toolbar_sticky: true,
                                                                autosave_ask_before_unload: true,
                                                                autosave_restore_when_empty: false,
                                                                image_advtab: true,
                                                                importcss_append: true,
                                                                images_file_types: 'jpg,svg,webp',
                                                                file_picker_types: 'image file media',
                                                                file_picker_callback: function (callback, value, meta) {
                                                                    if (meta.filetype === 'image') {
                                                                        var input = document.createElement('input');
                                                                        input.setAttribute('type', 'file');
                                                                        input.setAttribute('accept', '.jpg, .jpeg, .webp, .svg');
                                                                        input.click();
                                                                        input.onchange = function () {
                                                                            var file = input.files[0];
                                                                            var reader = new FileReader();
                                                                            reader.onload = function (e) {
                                                                                callback(e.target.result, {
                                                                                    alt: file.name
                                                                                });
                                                                            };
                                                                            reader.readAsDataURL(file);
                                                                        };
                                                                    }
                                                                },
                                                                image_caption: true,
                                                                quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                                                                toolbar_mode: 'sliding',
                                                                contextmenu: 'link image imagetools table',
                                                            }}
                                                            cloudChannel='6'
                                                        />
                                                        <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
                                                    </form>
                                                </div>
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
                                                    e.answer === '' ?
                                                    <div className="flex flex-col items-center justify-center space-y-10">
                                                        <img className="max-w-[25%]" src="/asset/img/no-question.webp" alt='No Question' />
                                                        <h3 className="text-gray-800 text-[1.5rem] font-medium poppins">Masih menunggu jawaban nih,</h3>
                                                    </div>
                                                    :
                                                    <>
                                                    {
                                                        loading ?
                                                        <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
                                                        :
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
                                                    </>
                                                }
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