import React from "react";
import "../../styles/dashboard/_profile.scss";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";

export default function Profile() {

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
    ]

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="profile-component">
            <div className="heading-profile inter">
                <h1>Detail Profile</h1>
            </div>
            <div className="avatar-wrapper w-[8rem] space-y-4">
                <img className="image-avatar object-cover rounded-full aspect-square"  src="/asset/img/user.jpg" alt="User"/>
                <input type="file" name="image" id="items_image" className="block  poppins"></input>
            </div>
            <form id="form_wrapper" className="poppins mt-8">
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
        </div>
    )
}