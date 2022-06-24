import { useState } from "react";
import RequireStar from "../RequireStar";
import "../../styles/component/auth/_forminput.scss";

export default function FormInput(props) {

    const {label, forLabel, classStar, defValue, classInput, errorMessage, classname, onChange, ...inputProps} = props;
    
    const [focus, setFocus] = useState(false);

    const handleFocus = (e) => {
        setFocus(true);
    }

    return (
        <div className={` ${classname} form-control space-y-2`}> 
            <label htmlFor={forLabel} className="text-gray-800 font-medium">{label} <RequireStar classStar={classStar}/></label>
            {/* {curData && 
            <h3>{curData}</h3>} */}
            <input 
                {...inputProps}
                className={`${classInput} form-input w-full rounded-[0.5rem] pl-3 h-10 border border-gray-200 border-solid rouded-[1rem] focus:outline`} 
                onChange={onChange} 
                onBlur={handleFocus} 
                onFocus={ () => inputProps.name === "confirmPassword" && setFocus(true)} 
                focus={focus.toString()}
                defaultValue={defValue}
                />
            <h4 className="error-message text-red-500 text-[0.85rem] font-normal mt-3">{errorMessage}</h4>
        </div>
    )
}