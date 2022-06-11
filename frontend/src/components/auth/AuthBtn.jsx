import { Link } from "react-router-dom"
import "../styles/component/_authbtn.scss"

export default function NoAuthBtn({classname, children}) {
    return (
        <ul id="nav_auth_item" className={ `${classname} poppins space-x-8` }>
            <li>
                <Link to="/user/signup">
                    {children}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline"><path d="M6 9l6 6 6-6"/></svg>
                </Link>
            </li>
        </ul>
    )
} 