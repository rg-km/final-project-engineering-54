import React from "react"
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import BtnCustom from "../../components/BtnCustom";

import Dashboard from "./Dashboard"
import "../../styles/dashboard/_questions.scss";

export default function Mydash() {

  const {state} = React.useContext(AuthContext);
  const [questions, setQuestions] = React.useState([])

  const getQuestions = async () => {
    await axios.get(`/forum/id?users_id=${state.id}`, {
        withCredentials: true,
     }).then(res => {
        // console.log(res.data)
        setQuestions(res.data.forum)
     }).catch( er => {
         console.log(er)
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
          to="/dashboard/question"
          className="questions-create poppins"
        >
          <BtnCustom>Buat Pertanyaan</BtnCustom>
        </Link>
        <div className="card-questions-list w-full mt-12 space-y-5">
        {
          questions.map((e,i) => {
            return (
              <div key={i} className="card-questions-wrapper inter border border-solid border-gray-300">
                <div className="card-questions-header mb-4">
                  <Link to="/dashboard/questions/:name">
                    <h2>
                      {
                        e.title
                      }
                    </h2>
                  </Link>
                </div>
                <Link to="/forum">
                  <BtnCustom>Lihat Detail Pertanyaan</BtnCustom>
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
    </Dashboard>
  );
}
