// import "../../styles/component/auth/_authbtn.scss"

export default function NoAuthBtn({classname, children, onClick }) {

    return (
        <ul id="nav_auth_item" className={ `${classname} poppins space-x-8`} onClick={onClick}>
            <li>
                <button to="/user/signup" className="flex items-center">
                    {children}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M6 9l6 6 6-6"/></svg>
                </button>
            </li>
        </ul>
    )
} 