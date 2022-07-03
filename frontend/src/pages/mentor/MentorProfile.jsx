import React from "react";
import Swal from "sweetalert2"
import ReactTooltip from 'react-tooltip';
import { Navigate } from "react-router-dom"
import { Dots } from 'loading-animations-react';

import axios from "../../api/axios";
import MentorDashboard from "./MentorDashboard";
import "../../styles/dashboard/_profile.scss";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";
import Password from "../../components/auth/password/Password";

export default function MentorProfile() {

    const [mentor, setMentor] = React.useState([])
    const [photoPrev, setPhotoPrev] = React.useState("/asset/img/user/default.svg")
    const [photo, setPhoto] = React.useState(null)
    const [values, setValues] = React.useState({
        about: "",
        name: "",
        phone: "",
        password: "",
        address: "",
    });
    const [loading, setLoading] = React.useState(true)
    const [redirect, setRedirect] = React.useState(false)

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
        }
    ]

    const getUser = async () => {
        await axios.get(`/mentor/id?id=${localStorage.id}`, {
            withCredentials: true,
        }).then(res => {
            setLoading(false)
            setMentor(res.data.user_mentor)
        }).catch( er => {
            setLoading(false)
            Swal.fire({
                timer: 5000,
                icon: 'error',
                titleText: 'Maaf, User tidak ada',
                showConfirmButton: false,
                text: `${er.message}`,
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

    const changeInputImage = (e) => {
        setPhoto(e.target.files[0].name)
        setPhotoPrev(URL.createObjectURL(e.target.files[0]))
        // console.log(image)
    }

    const dataReq = {photo, ...values}
    const handleEdit = async (e) => {
        e.preventDefault()
        await axios.put(`/mentor/update?id=${localStorage.id}`,dataReq, {
            withCredentials: true,
        }).then(res => {
            if(res.status === 200) {
                Swal.fire({
                    toast: true,
                    timer: 1900,
                    icon: 'success',
                    position: "top-end",
                    showConfirmButton: false,
                    title: 'Data telah disimpan',
                    customClass: {
                        container: 'poppins'
                    }
                })
                setRedirect(true)
            }
        }).catch( er => {
            Swal.fire({
                timer: 3000,
                icon: 'error',
                titleText: 'Coba lagi yuk',
                showConfirmButton: false,
                text: `Ada kesalahan teknis`,
                customClass: {
                    container: 'poppins',
                }
            })
        })
    }

    React.useEffect( () => {
        getUser()

        // eslint-disable-next-line
    }, [])

    if(redirect) { 
        return <Navigate to="/mentor/dashboard"/> 
    }      
    // console.log(values)

    return (
        <MentorDashboard
            title="Profile | Codeswer"
            kw="profile codeswer"
            desc="profile Codeswer"
            ogUrl=""
            ogType=""
            ogTitle=""
            ogDesc=""
            twitTitle=""                
        >

            <div className="profile-component">
                <div className="heading-profile inter">
                    <h1>Detail Profile</h1>
                </div>
                <div className="avatar-wrapper w-[8rem] space-y-4">
                    <ReactTooltip place="right" type="dark" effect="solid" className="sm:block hidden"/>
                    <img data-tip='Preview Image' className="image-avatar object-cover rounded-full aspect-square" src={`${photoPrev}`} alt="User"/>
                    <input type="file" name="photo" id="photo" className="block poppins" onChange={changeInputImage}></input>
                </div>
                <form id="form_wrapper" className="poppins mt-8" onSubmit={handleEdit}>
                    { 
                        loading ?
                        <Dots className="max-w-[10rem]" text=" " dotColors={['#3A39B4', '#656EE3']}/>
                        :
                        <>
                            {
                                mentor.map((e,i) => {
                                    return (
                                        <div key={i} className="about-wrapper mb-8 space-y-2">
                                            <label htmlFor="about" className="text-gray-800 font-medium">About</label>
                                            <textarea name="about" id="about" className="w-[55%] max-w-full p-1 block border border-gray-400" defaultValue={e.about} onChange={onChange}></textarea>
                                        </div>
                                    )
                                })
                            }
                            {
                                inputs.map((input, i) => (
                                    mentor.map((e, i) => {
                                        return(
                                            input.label === "Name" ? <FormInput 
                                                                        key={input.key}
                                                                        classStar="hidden" 
                                                                        {...input}
                                                                        defValue={e.name} 
                                                                        onChange={onChange}/>
                                            :
                                            input.label === "Phone" ? <FormInput 
                                                                        key={input.key}
                                                                        classStar="hidden" 
                                                                        {...input}
                                                                        defValue={e.phone} 
                                                                        onChange={onChange}/>
                                            :
                                            input.label === "Address" ? <FormInput 
                                                                            key={input.key}
                                                                            classStar="hidden" 
                                                                            {...input}
                                                                            defValue={e.address} 
                                                                            onChange={onChange}/>
                                            :
                                            input.label === "Email" ? <FormInput 
                                                                        key={input.key}
                                                                        classStar="hidden" 
                                                                        {...input}
                                                                        defValue={e.email} 
                                                                        onChange={onChange}/>
                                            : "Student tidak memiliki hak akses"
                                        )
                                    })
                                    )
                                )
                            }
                            <Password 
                                required={false}
                                onChange={onChange}
                            />
                        </>
                    }
                    <BtnCustom type="submit" classname="poppins mt-8 w-full">
                        Simpan
                    </BtnCustom>
                </form>
            </div>
        </MentorDashboard>
    )
}