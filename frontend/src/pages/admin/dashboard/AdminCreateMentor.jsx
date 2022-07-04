import React from "react";
import Swal from "sweetalert2"
import { Navigate } from "react-router-dom"

import axios from "../../../api/axios";
import AdminDashboard from "./AdminDashboard";
import BtnCustom from "../../../components/BtnCustom";
import FormInput from "../../../components/auth/FormInput";
import "../../../styles/admin/dashboard/_admincreatementor.scss";

export default function AdminCreateMentor() {

    const [values, setValues] = React.useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [redirect, setRedirect] = React.useState(false)
    const [selected, setSelected] = React.useState(null)
    const inputs = [
        {
            key: 1,
            label: "Name",
            type: "text",
            name: "name",
            id: "name",
            errorMessage: "Nama harus memiliki minimal 3-20 karakter tanpa special character!",
            forLabel: "name",
            classname: "mt-0",
            pattern: "^[w a-zA-Z0-9]{3,50}$",
            required: true,
        },
        {
            key: 2,
            label: "Phone",
            type: "tel",
            name: "phone",
            id: "phone",
            errorMessage: "Max 10 digit angka. Format: 0899-9564-873; 08999564873; +62899-9564-873; +62 899-9564-873; +62 8999564873; +62 899 9564873; +628999564873;",
            forLabel: "phone",
            classname: "mt-7",
            pattern: "(08\\d{1,4}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{3,5}|08\\d{9,11}$)|(^\\+(?:[0-9] ?){6,13}[0-9]$)|(^(?:(?:\\+|0{0,2})62) ?\\d{0,3}(\\s*[\\-]\\s*)\\d{0,4}(\\s*[\\-]\\s*)\\d{0,5})",
            required: true,
        },
        {
            key: 3,
            label: "Address",
            type: "text",
            name: "address",
            id: "address",
            errorMessage: "Harus berupa alamat rumah yang lengkap, tidak boleh kosong!",
            forLabel: "address",
            classname: "mt-7",
            required: true,
        },
        {
            key: 4,
            label: "Email",
            type: "email",
            name: "email",
            id: "email",
            errorMessage: "Email harus berupa alamat email yang valid!",
            forLabel: "email",
            classname: "mt-7",
            required: true,
        },
        {
            key: 5,
            label: "Password",
            type: "password",
            name: "password",
            id: "password",
            errorMessage: "Password harus memiliki minimal 8-25 karakter dan mengandung 1 huruf, 1 angka, dan 1 special character!",
            forLabel: "password",
            classname: "mt-7",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$",
            required: true,
        },
        {
            key: 6,
            label: "Konfirmasi Password",
            type: "password",
            name: "confirmPassword",
            id: "confirmPassword",
            errorMessage: "Password harus sama dengan password di kolom atas!",
            forLabel: "confirmPassword",
            classname: "mt-7",
            pattern: values.password,
            required: true,
        },
    ]
    const options = [
        {
          id: 0,
          value: null, 
          name: "Pilih Materi",
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
    
    const dataReq = {
        ...values,
        courses_id: parseInt(selected)
    }
    
    const submitNewMentor = async (e) => {
        e.preventDefault();
        await axios.post("/mentor/create", dataReq, {
            withCredentials: true,
        })
        .then( res => {
            console.log(res.data)
            let timerInterval
            Swal.fire({
                timer: 2000,
                icon: 'success',
                showConfirmButton: false,
                title: 'Daftarin Mentor Berhasil',
                text: 'Selamat menjalakan tugas, Admin !',
                customClass: {
                    container: 'poppins'
                },
                didOpen: () => {
                    Swal.showLoading()
                  },
                  willClose: () => {
                    clearInterval(timerInterval)
                  }
                }).then((result) => {
                  if (result.dismiss === Swal.DismissReason.timer) {
                      setRedirect(true);                  
                  }
            })    
        })
        .catch( error => {
            let errorMessage = error.response;
            if (errorMessage.status !== 200) {
                Swal.fire({
                    timer: 5000,
                    icon: 'error',
                    titleText: 'Coba lagi yuk',
                    showConfirmButton: false,
                    text: `${errorMessage.data.error}`,
                    customClass: {
                        container: 'poppins',
                    }
                })
                // console.log(errorMessage.data.error);
            }
            return
        });
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        // console.log(values)
    }

    if (redirect) return <Navigate to="/admin/dashboard" />;

    // console.log(values)

    return (
        <AdminDashboard
            title=" Buat Akun Mentor | Admin Codeswer"
            kw="create mentor by admin codeswer"
            desc="create mentor by admin Codeswer"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""                
        >

            <div className="create-mentor-component">
                <div className="heading-create-mentor inter">
                    <h1>Buat Akun Mentor</h1>
                </div>
                <form id="form_wrapper" className="poppins mt-8" onSubmit={submitNewMentor}>
                    <select
                        id="course"
                        name="course"
                        defaultValue={selected}
                        onChange={e => {
                            setSelected(e.target.value)
                            // console.log(e.target.value)
                        }}
                        className="p-2 border border-gray-400 border-solid rounded-[0.25rem] poppins mb-8"
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
                    { 
                        inputs.map(input => (
                            <FormInput 
                                key={input.key} 
                                {...input} 
                                value={values[input.name]} 
                                onChange={onChange}/>
                        ))
                        
                    }
                    <BtnCustom type="submit" classname="poppins mt-8 w-full">
                        Buat
                    </BtnCustom>
                </form>
            </div>
        </AdminDashboard>
    )
}