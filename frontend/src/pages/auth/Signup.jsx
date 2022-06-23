import React from "react"
import Swal from "sweetalert2"
import axios from "../../api/axios"

import "../../styles/auth/_signup.scss";
import Codeswer from "../../layouts/Codeswer";
import BtnCustom from "../../components/BtnCustom";
import { NavLink, Navigate } from "react-router-dom";
import FormInput from "../../components/auth/FormInput";

export default function Signup() {

    const status = null;

    const [values, setValues] = React.useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    
    const [redirect, setRedirect] = React.useState(false);

    const inputs = [
        {
            key: 1,
            label: "Name",
            type: "text",
            name: "name",
            id: "name",
            errorMessage: "Namea harus memiliki minimal 3-20 karakter tanpa special character!",
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
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/user/register", values)
        .then( res => {
            let timerInterval
            Swal.fire({
                timer: 2000,
                icon: 'success',
                showConfirmButton: false,
                title: 'Daftar Berhasil',
                text: 'Silahkan masuk ke Codeswer',
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

    if (redirect) return <Navigate to="/signin" />;

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Codeswer
            title="Daftar - Codeswer"
            kw="codeswer signup, codeswer daftar, codeswer id daftar, codeswer daftar indonesia"
            desc="Belom punya akun Codeswer? Yuk daftar untuk masuk ke Codeswer."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        <article className="signup-component">
            <section id="container_signup">
                <h1 className="inter">Selamat Datang di Codeswer</h1>
                <div id="container_card" className="poppins">
                    <div id="card_signup" className="md:[w-30rem] px-10 pt-12 border-l border-y md:border-r-0 border-r border-gray-300">
                        <h2>Daftar</h2>
                        <form id="form_wrapper" onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {inputs.map(input => (
                                <FormInput 
                                    key={input.key} 
                                    {...input} 
                                    value={values[input.name]} 
                                    onChange={onChange}/>
                            ))}
                            <BtnCustom type="submit" classname="poppins mt-8 w-full">
                                Daftar
                            </BtnCustom>
                        </form>
                        <h3>
                            Sudah punya akun?
                            <NavLink to="/signup"><span className="text-blue-code font-semibold"> Masuk di sini
                            </span></NavLink>
                        </h3>
                    </div>
                    <div id="image_signup" className="bg-indigo-two-code md:block hidden rounded-r-[1.5rem] px-10 pt-12">
                        <img src="/asset/img/signup.webp" alt="signin Illustration" width={400}/>
                    </div>
                </div>

            </section>
        </article>

        </Codeswer>
    )
}