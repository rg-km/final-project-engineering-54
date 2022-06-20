import React from 'react';
import Swal from "sweetalert2";
import ReactTooltip from 'react-tooltip';
import "../../styles/component/_btnsosmedshare.scss";

export default function BtnSosmedShare({classBtnShare, title, fill, size}) {

    const [isCopied, setIsCopied] = React.useState(false);

    const SwalCopyText = Swal.mixin({
        toast: true,
        timer: 3000,
        position: 'top',
        customClass: {
            title: "flex items-center poppins",
            confirmButton: 'indigo text-white w-full poppins',
        }

    });

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
          return await navigator.clipboard.writeText(text);
        } 
        return document.execCommand('copy', true, text);
    }

    const handleCopyClick = () => {
        const url = window.location.href;
        copyTextToClipboard(url)
          .then(() => {
            setIsCopied(true);
            SwalCopyText.fire({
                icon: 'success',
                title: "Copied!",
            })
            setTimeout(() => {
              setIsCopied(false);
            }, 1500);
          })
          .catch((err) => {
            console.log(err);
          });
    }

    return (
        <>
            <div className={`${classBtnShare} box-icon-share space-x-6`}>
            <ReactTooltip place="top" type="dark" effect="solid" className="sm:block hidden"/>
                <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&text=${title}`} target="_self" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer icon-share-facebook"
                    data-tip='Facebook'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
                </a>
                <a 
                    href={`https://twitter.com/share?url=${window.location.href}&text=${title}`} 
                    target="_self" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer icon-share-twitter"
                    data-tip='Twitter'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg>
                </a>
                <a 
                    href={`https://www.linkedin.com/shareArticle?url=${window.location.href}&title=${title}`} 
                    target="_self" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer icon-share-linkedin"
                    data-tip='Linkedin'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.965v6.278z"/></svg>
                </a>
                <a 
                    href={`https://api.whatsapp.com/send?text=${title}`} 
                    target="_self" 
                    rel="noopener noreferrer" 
                    className="cursor-pointer icon-share-whatsapp"
                    data-tip='Whatsapp'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill}><path d="M12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24zm.14 4.5a7.34 7.34 0 0 0-6.46 10.82l.15.26L4.5 19.5l4.08-1.3a7.38 7.38 0 0 0 10.92-6.4c0-4.03-3.3-7.3-7.36-7.3zm0 1.16c3.41 0 6.19 2.76 6.19 6.15a6.17 6.17 0 0 1-9.37 5.27l-.23-.15-2.38.76.77-2.28a6.08 6.08 0 0 1-1.17-3.6 6.17 6.17 0 0 1 6.19-6.15zM9.66 8.47a.67.67 0 0 0-.48.23l-.14.15c-.2.23-.5.65-.5 1.34 0 .72.43 1.41.64 1.71l.14.2a7.26 7.26 0 0 0 3.04 2.65l.4.14c1.44.54 1.47.33 1.77.3.33-.03 1.07-.43 1.22-.85.15-.42.15-.78.1-.85-.02-.05-.08-.08-.15-.12l-1.12-.54a5.15 5.15 0 0 0-.3-.13c-.17-.06-.3-.1-.41.09-.12.18-.47.58-.57.7-.1.1-.18.13-.32.08l-.4-.18a4.64 4.64 0 0 1-2.13-1.98c-.1-.18-.01-.28.08-.37l.27-.31c.1-.1.12-.18.18-.3a.3.3 0 0 0 .01-.26l-.1-.23-.48-1.15c-.15-.36-.3-.3-.4-.3l-.35-.02z"/></svg>
                </a>
                <div className="icon-copy-link" onClick={handleCopyClick} data-tip='Copy link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                    {isCopied ? true : false}
                </div>
            </div>
        </>
    )
}

BtnSosmedShare.defaultProps = {
    size: '24',
}