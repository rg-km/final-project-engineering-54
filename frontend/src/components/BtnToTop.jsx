import React from 'react';
import {classes} from "../utils/Utils";
import "../styles/component/_btntotop.scss";

export default function BtnTopTop() {

    const [buttontotop, setButontotop] = React.useState(false);

    const changePosition = () => { window.scrollY > 0 ? setButontotop(true) : setButontotop(!buttontotop)}
    window.addEventListener('scroll', changePosition);
    
    return (
        <svg id="button_scroll_top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="arcs"
        className={
            classes(buttontotop ? 'right-8': "-right-20", 'sm:w-10 w-[1.5rem] text-purple-code hover:bg-indigo-code hover:text-indigo-two-code hover:p-1 hover:rounded-full fixed bottom-4 cursor-pointer')
        }
        onClick={() => {
            window.scroll({
                top: 0,
                behaviour: "smooth",
            });
        }}

        ><path d="M18 15l-6-6-6 6"/></svg>
    )
}