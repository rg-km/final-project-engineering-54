import React from "react"
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import { Dots } from 'loading-animations-react';
import BtnCustom from "../../components/BtnCustom";

import MentorDashboard from "./MentorDashboard"
import "../../styles/dashboard/_questions.scss";

export default function MentorQuestion() {

  const [questions, setQuestions] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [searchQuestion, setSearchQuestion] = React.useState("")

  const getQuestions = async () => {
    await axios.get(`/forum`, {
      withCredentials: true,
    }).then(res => {
       setLoading(false)
        console.log(res)
        setQuestions(res.data)
     }).catch( er => {
         console.log(er)
     })
  }

  const handleChange = (e) => {
      setSearchQuestion(e.target.value)
  }
    
  React.useEffect( () => {
    getQuestions()
    // eslint-disable-next-line
  }, [])

  return (
    <MentorDashboard
      title="Daftar Pertanyaan | Mentor Codeswer"
      kw="pertanyaan codeswer"
      desc="Daftar Pertanyaan dari Student Codeswer"
      ogUrl=""
      ogType=""
      ogTitle=""
      ogDesc=""
      twitTitle=""                
    >
      <div className="mentorquestions-component">
        <div className="block relative w-[30rem] max-w-full">
          <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                  <path
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                  </path>
              </svg>
          </span>
          <input placeholder="Search"
            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" 
            onChange={handleChange}
            id="search"
            name="search"
            />
        </div>
        <div className="card-questions-list w-full mt-12 space-y-5">
        {
          loading ?
            <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
            :
              questions.length > 0 ?
              // eslint-disable-next-line array-callback-return
              questions.filter( value => {
                if(searchQuestion === "") {return value}
                  else if (value.name.toLowerCase().includes(searchQuestion.toLowerCase().trim())) {
                      return value
                }
              })
              .map((e,i) => {
                return (
                  <div key={i} className="card-questions-wrapper inter border border-solid border-gray-300">
                    <div className="card-questions-header mb-4">
                      <Link to="/Mentor/questions/:name">
                        <h2>
                          {
                            e.title
                          }
                        </h2>
                      </Link>
                    </div>
                    <Link to={`/question/${e.id}`}>
                      <BtnCustom>Lihat Detail Pertanyaan</BtnCustom>
                    </Link>
                  </div>
                )
              })
              :
              <div className="flex flex-col items-center justify-center space-y-10">
                <img className="max-w-[40%]" src="/asset/img/no-question.webp" alt='No Question' />
                <h3 className="text-gray-800 text-[1.5rem] font-medium poppins">Belom ada pertanyaan,</h3>
              </div>
        }
        </div>
      </div>
    </MentorDashboard>
  );
}
