import React from "react"
import Swal from "sweetalert2"
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';
import { Dots } from 'loading-animations-react';
import BtnCustom from "../../components/BtnCustom";

import Dashboard from "./Dashboard"
import "../../styles/dashboard/_questions.scss";

export default function Mydash() {

  const [questions, setQuestions] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  const getQuestions = async () => {
    await axios.get(`/forum/users_id?users_id=${localStorage.id}`, {
      withCredentials: true,
    }).then(res => {
       setLoading(false)
        // console.log(res.data)
        setQuestions(res.data.forum)
     }).catch( er => {
         console.log(er)
     })
  }

  const deleteQuest = (id) => {
    axios.delete(`/forum/delete?id=${id}&users_id=${localStorage.id}`, {
        withCredentials: true
    }).then(res => {
        Swal.fire({
            toast: true,
            timer: 2500,
            icon: 'success',
            position: "top-end",
            showConfirmButton: false,
            title: 'Pertanyaan telah dihapus',
            customClass: {
                container: 'poppins'
            }    
            // console.log(res.data + res.status)
        })
        setQuestions(questions.filter((e)=> {
            return e.id !== id
        }))
        // console.log(res)
    }).catch( er => {
            console.log(er.message)
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
    
  React.useEffect( () => {
    getQuestions()
    // eslint-disable-next-line
  }, [])

  return (
    <Dashboard
      title="Pertanyaan Saya | Codeswer"
      kw="pertanyaan codeswer"
      desc="Daftar Pertanyan Saya Codeswer"
      ogUrl=""
      ogType=""
      ogTitle=""
      ogDesc=""
      twitTitle=""                
    >
      <div className="questions-component">
        <div className="heading-questions inter">
          <h1>Pertanyaan Saya</h1>
        </div>
        <Link
          to="/question/create"
          className="questions-create poppins"
        >
          <BtnCustom>Buat Pertanyaan</BtnCustom>
        </Link>
        <div className="card-questions-list w-full mt-12 space-y-7">
        {
          loading ?
            <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
            :
              questions.length > 0 ?
              questions.map((e,i) => {
                return (
                  <div key={i} className="card-questions-wrapper inter border border-solid border-gray-300">
                    <div className="card-questions-header mb-4 flex justify-between">
                      <h2>
                        {
                          e.title
                        }
                      </h2>
                      <div className="mentor-forum-course flex items-center">
                        <h3 className="p-2 bg-blue-500/30 rounded-[0.75rem]">
                            {e.course_name}
                        </h3>
                      </div>
                    </div>
                    <div className="card-questions-footer flex justify-between items-end">
                      <Link to={`/question/${e.id}`}>
                        <BtnCustom>Lihat Detail Pertanyaan</BtnCustom>
                      </Link>
                      <span
                         onClick={()=> deleteQuest(e.id)}
                      >
                        <ReactTooltip place="top" type="dark" effect="solid" className="sm:block hidden"/>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 rounded-full bg-red-200/80 text-red-800 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} data-tip='Hapus'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </span>
                    </div>
                  </div>
                )
              })
              :
              <div className="flex flex-col items-center justify-center space-y-10">
                <img className="max-w-[40%]" src="/asset/img/no-question.webp" alt='No Question' />
                <h3 className="text-gray-800 text-[1.5rem] font-medium poppins">Yuk mulai tanya ke mentor,</h3>
              </div>
        }
        </div>
      </div>
    </Dashboard>
  );
}
