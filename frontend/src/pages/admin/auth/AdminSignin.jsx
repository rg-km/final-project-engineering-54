import React from "react"
import Swal from "sweetalert2"
import axios from "../../../api/axios"
import { AuthContext } from "../../../App";
import { Navigate } from "react-router-dom";

import Admin from "../../../layouts/Admin";
import "../../../styles/admin/_adminsignin.scss";
import BtnCustom from "../../../components/BtnCustom";
import FormInput from "../../../components/auth/FormInput";

export default function AdminSignin() {

    const status = null;

    const { dispatch } = React.useContext(AuthContext)

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });
    const [redirect, setRedirect] = React.useState(false);

    const inputs = [
        {
            key: 1,
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
            key: 2,
            label: "Password",
            type: "password",
            name: "password",
            id: "password",
            errorMessage: "Minimal 8-25 karakter dan mengandung 1 huruf, 1 angka, dan 1 special character!",
            forLabel: "password",
            classname: "mt-7",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$",
            required: true,
        },
    ]

    const handleSubmit = async(e) => {
        e.preventDefault();

        await axios.post("/user/login", values, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            // console.log(res.data)
            if(res.status === 200) {
                dispatch({
                    type: "LOGIN",
                    payload: res.data
                })
                let timerInterval
                Swal.fire({
                    timer: 1000,
                    icon: 'success',
                    showConfirmButton: false,
                    title: 'Login Berhasil',
                    text: 'Tunggu sebentar',
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
            }
        })
        .catch( error => {
            let errorMessage = error.response;
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
        })

    }
    
    if (redirect) return <Navigate to="/admin/dashboard" replace />;
    
    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Admin
            title="Masuk - Admin Codeswer"
            kw="admin codeswer login, admin codeswer signin, admin codeswer masuk, admin codeswer id masuk, admin codeswer masuk indonesia"
            desc="Sudah punya akun admin Codeswer? Yuk masuk untuk mengakses fitur admin Codeswer."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        <article className="signin-admin-component">
            <section id="container_signin_admin">
                <h1 className="inter">Selamat Datang Admin</h1>
                <div id="container_card" className="poppins">
                    <div id="card_signin_admin" className="md:w-[30rem] w-full px-10 py-12 border-l border-y md:border-r-0 border-r border-gray-300">
                        <h2>Masuk</h2>
                        <form id="form_wrapper" 
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {inputs.map((input) => (
                                <FormInput
                                    key={input.key}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}
                            <BtnCustom type="submit" classname="poppins mt-8 w-full">
                                Masuk
                            </BtnCustom>
                        </form>
                    </div>
                    <div id="image_signin_admin" className="bg-indigo-two-code md:block hidden rounded-r-[1.5rem] px-10 pt-12">
                        <img src="/asset/img/signin.webp" alt="signin Illustration" width={400}/>
                    </div>
                </div>

            </section>
        </article>

        </Admin>
    )
}