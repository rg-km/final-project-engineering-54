import React from "react"

import "../../styles/auth/_signin.scss";
import { Link } from "react-router-dom";
import Codeswer from "../../layouts/Codeswer";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";

export default function Login() {

    const status = null;

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
        {
            key: 2,
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
                    <div id="card_signin" className="px-10 pt-12 border-l border-y md:border-r-0 border-r border-gray-300">
                        <h2>Masuk</h2>
                        <form id="form_wrapper" 
                            onSubmit={handleSubmit}
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