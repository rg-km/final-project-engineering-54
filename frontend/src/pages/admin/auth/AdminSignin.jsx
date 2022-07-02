import React from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

import axios from "../../../api/axios"
import { AuthContext } from "../../../App";
import Admin from "../../../layouts/Admin";
import "../../../styles/admin/_adminsignin.scss";
import BtnCustom from "../../../components/BtnCustom";
import FormInput from "../../../components/auth/FormInput";
import Password from "../../../components/auth/password/Password"

export default function AdminSignin() {

    const status = null;
    const navigate = useNavigate()

    const { dispatch } = React.useContext(AuthContext)

    const [values, setValues] = React.useState({
        email: "",
        password: "",
    });

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
            if(res.data.role === "admin") {
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
                        title: 'Berhasil Masuk',
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
                                navigate("/admin/dashboard",{ replace: true })
                            }
                    })    
                }
            } else {
                Swal.fire({
                    timer: 5000,
                    icon: 'error',
                    titleText: 'Role Salah',
                    showConfirmButton: false,
                    text: `Anda tidak punya akses untuk fitur ini.`,
                    customClass: {
                        container: 'poppins',
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
                            <Password 
                                required="required"
                                onChange={onChange}
                            />
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