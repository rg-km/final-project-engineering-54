import Swal from "sweetalert2"
import axios from "../../api/axios"
import React, { useRef } from "react"
import { AuthContext } from "../../App";
import { Navigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import "../../styles/dashboard/_question.scss";
import { Editor } from '@tinymce/tinymce-react';
import BtnCustom from "../../components/BtnCustom";

export default function Question() {
  const {state} = React.useContext(AuthContext);

  const [values, setValues] = React.useState({
    title: "",
    question: ""
  });

  const [redirect, setRedirect] = React.useState(false);

  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const editorRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    // if (editorRef.current) {
    //   setContent(editorRef.current.getContent());
    // }
    const courseId = [1,2];
    const dataReq = {
      ...values,
      users_id: state.id,
      // course_id: 2,
      courses_id: courseId[Math.floor(Math.random() * courseId.length)]
    }
    await axios.post("/forum/question", dataReq, {
        withCredentials: true,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(res => {
        // console.log(res.data)
        Swal.fire({
          toast: true,
          timer: 3000,
          icon: 'success',
          position: "top-end",
          showConfirmButton: false,
          title: 'Pertanyaan berhasil dibuat',
          customClass: {
              container: 'poppins'
          },  
        })   
        setValues({
          title: "",
          question: ""      
        })
        setRedirect(true)
    })
    .catch( error => {
        Swal.fire({
            timer: 5000,
            icon: 'error',
            titleText: 'Coba lagi yuk',
            showConfirmButton: false,
            text: `${error.message}`,
            customClass: {
                container: 'poppins',
            }
        })
    })
    // console.log(dataReq)
  }
  if (redirect) return <Navigate to="/dashboard/questions" replace />;

  return (
    <Dashboard
      title="Buat Pertanyaan | Codeswer"
      kw="pertanyaan codeswer"
      desc="Buat Pertanyan Saya Codeswer"
      ogUrl=""
      ogType=""
      ogTitle=""
      ogDesc=""
      twitTitle=""                
    >
      <main className="question-component">
        <form className="box-question w-full space-y-4" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="title-question space-y-3">
            <h1 className="poppins">Judul Pertanyaan</h1>
            <textarea className="field-title-question inter" name="title" placeholder="Untitled" onKeyDown={handleKeyDown} onChange={handleChange} pattern="^[\s\S]{0,255}$"></textarea>
          </div>
          <div className="messages-question inter">
            <Editor 
              scriptLoading={{ async: true }}
              apiKey='j3akvdt0e6yupl1u6hcuj7w7v240k9feywwe2l9665xlvmv3'
              textareaName="question"
              initialValue="Mulai menulis disini" 
              onInit={(evt, editor) => editorRef.current = editor}
              onEditorChange={ newValue => setValues({ ...values, question: newValue }) }
              init={{
                plugins: [
                  'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                  'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                  'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                ],
                toolbar: 'undo redo | blocks | ' +
                  'bold italic forecolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
              }}
              cloudChannel='6'
            />
          </div>
          <BtnCustom type="submit" classname="poppins mt-8 w-full">
            Kirim
          </BtnCustom>
        </form>
      </main>
    </Dashboard>
  );
}
