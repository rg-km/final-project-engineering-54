import React from "react";
import Swal from "sweetalert2"
import axios from "../../api/axios";
import { AuthContext } from "../../App";
import "../../styles/dashboard/_profile.scss";
import BtnCustom from "../../components/BtnCustom";
import FormInput from "../../components/auth/FormInput";

export default function Profile() {

    const [user, setUser] = React.useState([])
    const {state} = React.useContext(AuthContext);

    const [values, setValues] = React.useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        address: "",
    });

    const [image, setImage] = React.useState("default.svg")

    const inputs = [
        {
            key: 1,
            label: "Name",
            type: "text",
            name: "name",
            id: "name",
            errorMessage: "Name harus memiliki minimal 3-20 karakter tanpa special character!",
            forLabel: "name",
            classname: "mt-0",
            pattern: "^[a-zA-Z0-9]{3,20}$",
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
            label: "Email",
            type: "email",
            name: "email",
            id: "email",
            errorMessage: "Email harus berupa alamat email yang valid!",
            forLabel: "email",
            classname: "mt-7",
        },
        {
            key: 4,
            label: "Password",
            type: "password",
            name: "password",
            id: "password",
            errorMessage: "Password harus memiliki minimal 8-25 karakter dan mengandung 1 huruf, 1 angka, dan 1 special character!",
            forLabel: "password",
            classname: "mt-7",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$",
        },
        {
            key: 5,
            label: "Address",
            type: "text",
            name: "address",
            id: "address",
            errorMessage: "Harus berupa alamat rumah yang lengkap, tidak boleh kosong!",
            forLabel: "address",
            classname: "mt-7",
        },
    ]

    const getUser = async () => {
        const resp = await axios.get(`/user/id?id=${state.id}`, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            },
        }).catch( er => {
            let errorMessage = er.response;
            Swal.fire({
                timer: 5000,
                icon: 'error',
                titleText: 'Maaf, User tidak ada',
                showConfirmButton: false,
                text: `${errorMessage.data.er}`,
                customClass: {
                    container: 'poppins',
                }
            })
        })
        setUser(resp.data.users)
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }

    const changeInputImage = (e) => {
        setImage(e.target.files[0].name)
        console.log(image)
    }


    const handleEdit = async (e) => {
        e.preventDefault()
        await axios.put(`/user/update`, values, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        }).then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
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

    return (
        
        <div className="profile-component">
            <div className="heading-profile inter">
                <h1>Detail Profile</h1>
            </div>
            <div className="avatar-wrapper w-[8rem] space-y-4">
                <img className="image-avatar object-cover rounded-full aspect-square" src={`/asset/img/user/${image}`} alt="User"/>
                <input type="file" name="image" id="image" className="block poppins" onChange={changeInputImage}></input>
            </div>
            <form id="form_wrapper" className="poppins mt-8" onSubmit={handleEdit}>
                { 
                    inputs.map((input, i) => (
                        user.map((e, i) => {
                            return(
                                input.label === "Name" ? <FormInput 
                                                            key={input.key}
                                                            classStar="hidden" 
                                                            {...input}
                                                            curData={e.name} 
                                                            value={values[input.name]} 
                                                            onChange={onChange}/>
                                :
                                input.label === "Phone" ? <FormInput 
                                                            key={input.key}
                                                            classStar="hidden" 
                                                            {...input}
                                                            curData={e.phone} 
                                                            value={values[input.name]} 
                                                            onChange={onChange}/>
                                :
                                input.label === "Email" ? <FormInput 
                                                            key={input.key}
                                                            classStar="hidden" 
                                                            {...input}
                                                            curData={e.email} 
                                                            value={values[input.name]} 
                                                            onChange={onChange}/>
                                :
                                input.label === "Password" ? <FormInput 
                                                                key={input.key}
                                                                classStar="hidden" 
                                                                {...input}
                                                                curData={e.password} 
                                                                value={values[input.name]} 
                                                                onChange={onChange}/>
                                :
                                input.label === "Address" ? <FormInput 
                                                                key={input.key}
                                                                classStar="hidden" 
                                                                {...input}
                                                                curData={e.address} 
                                                                value={values[input.name]} 
                                                                onChange={onChange}/>
                                : "Student tidak memiliki hak akses"
                            )
                        })
                        )
                    )
                }
                <BtnCustom type="submit" classname="poppins mt-8 w-full">
                    Simpan
                </BtnCustom>
            </form>
        </div>
    )
}