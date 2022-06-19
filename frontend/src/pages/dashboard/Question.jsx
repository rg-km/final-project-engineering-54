import React, { useRef } from "react"
import "../../styles/dashboard/_question.scss";

import { Editor } from '@tinymce/tinymce-react';
import BtnCustom from "../../components/BtnCustom";

export default function Question() {

  const [values, setValues] = React.useState({
    subject: "",
    messages: ""
  });

  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    console.log(values)
  }

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    log()
    console.log(values)
  }


  return (
    <main className="question-component">
      <form className="box-question w-full space-y-4" 
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <div className="title-question space-y-3">
          <h1 className="poppins">Judul Pertanyaan</h1>
          <textarea className="field-title-question inter" name="subject" placeholder="Untitled" onKeyDown={handleKeyDown} onChange={handleChange} pattern="^[\s\S]{0,255}$"></textarea>
        </div>
        <div className="messages-question inter">
          <Editor 
            apiKey='j3akvdt0e6yupl1u6hcuj7w7v240k9feywwe2l9665xlvmv3'
            textareaName="messages"
            initialValue="Mulai menulis disini" 
            onInit={(evt, editor) => editorRef.current = editor}
            onEditorChange={ newValue => setValues({ ...values, messages: newValue }) }
            init={{
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
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
  );
}
