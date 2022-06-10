import { Link } from "react-router-dom"
import "../styles/component/_noauthbtn.scss"

export default function NoAuthBtn({classname}) {
    return (
        <ul id="nav_noauth_item" className={`${classname} poppins space-x-8`}>
            <li><Link to="/signup">Daftar</Link></li>
            <li><Link to="/login">Masuk</Link></li>
        </ul>
    )
} 