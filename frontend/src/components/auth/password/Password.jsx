import { useState } from "react";
import RequireStar from "../../RequireStar";
import "../../../styles/component/auth/_forminput.scss";

export default function Password(props) {

    const {classStar, defValue, classInput, classname, onChange, required} = props;
    
    const [focus, setFocus] = useState(false);
    const handleFocus = (e) => {
        setFocus(true);
    }

    const [passwordType, setPasswordType] = useState("password")

    const changePasswordType = () => {
        passwordType === "password" ? setPasswordType("text") : setPasswordType("password")
    }

    return (
        <div className={` ${classname} form-control space-y-2 mt-6`}> 
            <div className="relative">
                <label htmlFor="password" className="text-gray-800 font-medium">Password <RequireStar classStar={classStar}/></label>
                <span className="absolute top-1 right-0" onClick={changePasswordType}>
                    {
                        passwordType === "password" ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                        :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                    }
                </span>
            </div>
            <input 
                id="password"
                name="password"
                type={passwordType}
                required={required}
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,25}$"
                className={`${classInput} form-input w-full rounded-[0.5rem] pl-3 h-10 border border-gray-200 border-solid rouded-[1rem] focus:outline`} 
                onChange={onChange} 
                onBlur={handleFocus} 
                focus={focus.toString()}
                defaultValue={defValue}
                />
            <h4 className="error-message text-red-500 text-[0.85rem] font-normal mt-3">
                Minimal 8-25 karakter dan mengandung 1 huruf, 1 angka, dan 1 special character!
            </h4>
        </div>
    )
}