import React from "react"

import "../../styles/auth/_signup.scss";
import { Link } from "react-router-dom";
import Codeswer from "../../layouts/Codeswer";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";

export default function Signup() {

    const status = null;

    const [values, setValues] = React.useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            key: 1,
            label: "Username",
            type: "text",
            name: "username",
            id: "username",
            errorMessage: "Username harus memiliki minimal 3-20 karakter tanpa special character!",
            forLabel: "username",
            classname: "mt-0",
            pattern: "^[a-zA-Z0-9]{3,20}$",
            required: true,
        },
        {
            key: 2,
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
            key: 3,
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
            key: 4,
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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    console.log(values)
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
                    <div id="card_signup" className="px-10 pt-12 border-l border-y md:border-r-0 border-r border-gray-300">
                        <h2>Daftar</h2>
                        <form id="form_wrapper" onSubmit={handleSubmit}>
                            {inputs.map(input => (
                                <FormInput 
                                    key={input.key} 
                                    {...input} 
                                    value={values[input.name]} 
                                    onChange={onChange}/>
                            ))}
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
                    <div id="image_signup" className="bg-indigo-two-code md:block hidden rounded-r-[1.5rem] px-10 pt-12">
                        <img src="/asset/img/signup.webp" alt="signin Illustration" width={400}/>
                    </div>
                </div>

            </section>
        </article>

        </Codeswer>
    )
}