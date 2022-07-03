import Swal from "sweetalert2"
import axios from "../../api/axios"
import React, { useRef } from "react"
import { Navigate } from "react-router-dom";
// import { Dots } from 'loading-animations-react';

import Dashboard from "./Dashboard";
import { AuthContext } from "../../App";
import "../../styles/dashboard/_question.scss";
import { Editor } from '@tinymce/tinymce-react';
import BtnCustom from "../../components/BtnCustom";

export default function Question() {
  const {state} = React.useContext(AuthContext);

  const [values, setValues] = React.useState({
    title: "",
    question: "",
  });
  const [redirect, setRedirect] = React.useState(false);
  const [selected, setSelected] = React.useState(null)
  const editorRef = useRef(null);

  const options = [
    {
      id: 0,
      value: null, 
      name: "Pilih Topik",
    },
    {
      id: 1,
      value: 1, 
      name: "Go",
    },
    {
      id: 2,
      value: 2, 
      name: "React JS",
    }
  ]

  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const dataReq = {
    ...values,
    users_id: state.id,
    courses_id: parseInt(selected)
  }

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
        <form className="box-question w-full space-y-7" 
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="title-question space-y-3">
            <h1 className="poppins">Judul Pertanyaan</h1>
            <textarea className="field-title-question inter" name="title" placeholder="Untitled" onKeyDown={handleKeyDown} onChange={handleChange} pattern="^[\s\S]{0,3000}$"></textarea>
          </div>
          <div className="course-question space-y-3">
            <h1 className="poppins">Topik Materi</h1>
            <select
              id="course"
              name="course"
              defaultValue={selected}
              onChange={e => {
                setSelected(e.target.value)
                // console.log(e.target.value)
              }}
              className="p-2 border border-gray-400 border-solid rounded-[0.25rem] poppins"
            >
              {
                options.map((e, i) => {
                  return (
                    <option key={i} value={e.value}>
                      {e.name}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div className="messages-question inter">
              {
                <Editor 
                  scriptLoading={{ async: true }}
                  apiKey='j3akvdt0e6yupl1u6hcuj7w7v240k9feywwe2l9665xlvmv3'
                  textareaName="question"
                  initialValue="Mulai menulis disini" 
                  onInit={(evt, editor) => editorRef.current = editor}
                  onEditorChange={ newValue => setValues({ ...values, question: newValue }) }
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
              }
          </div>
          <BtnCustom type="submit" classname="poppins mt-8 w-full">
            Kirim
          </BtnCustom>
        </form>
      </main>
    </Dashboard>
  );
}
