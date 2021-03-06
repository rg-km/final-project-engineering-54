import React from "react"
import Swal from "sweetalert2"
import axios from "../../api/axios"
import { AuthContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/auth/_signin.scss";
import Codeswer from "../../layouts/Codeswer";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";
import Password from "../../components/auth/password/Password"

export default function Signin() {

    const status = null;

    const { dispatch } = React.useContext(AuthContext)
    const navigate = useNavigate ()

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
        }
    ]

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post("/user/login", values, {
            withCredentials: true,
        })
        .then(res => {
            // console.log(res.data)
            if(res.data.role === "user") {
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
                                navigate("/dashboard/my",{ replace: true })
                            }
                        })    
                }
            } else if(res.data.role === "mentor") {
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
                                navigate("/mentor/dashboard",{ replace: true })
                            }
                        })    
                }
            } else {
                Swal.fire({
                    timer: 5000,
                    icon: 'error',
                    titleText: 'Role Salah',
                    showConfirmButton: false,
                    text: `Anda tidak punya kode role tepat untuk akses fitur ini.`,
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
        // console.log(values)
    }

    return (
        <Codeswer
            title="Masuk - Codeswer"
            kw="codeswer login, codeswer signin, codeswer masuk, codeswer id masuk, codeswer masuk indonesia"
            desc="Sudah punya akun Codeswer? Yuk masuk untuk mengakses fitur Codeswer."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        <article className="signin-component">
            <section id="container_signin">
                <h1 className="inter">Selamat Datang di Codeswer</h1>
                <div id="container_card" className="poppins">
                    <div id="card_signin" className="md:w-[30rem] w-full px-10 pt-12 border-l border-y md:border-r-0 border-r border-gray-300">
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
                        <h3>
                            Belom punya akun?
                            <Link to="/signup"><span className="text-blue-code font-semibold"> Daftar di sini
                            </span></Link>
                        </h3>
                    </div>
                    <div id="image_signin" className="bg-indigo-two-code md:block hidden rounded-r-[1.5rem] px-10 pt-12">
                        <img src="/asset/img/signin.webp" alt="signin Illustration" width={400}/>
                    </div>
                </div>

            </section>
        </article>

        </Codeswer>
    )
}