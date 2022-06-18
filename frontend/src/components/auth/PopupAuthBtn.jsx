import { Link } from "react-router-dom";
import "../../styles/auth/_popupauthbtn.scss";

export default function PopupAuthBtn({classname}) {
    return (
        <aside className={`${classname} popup-auth-btn absolute py-2`}>
            <nav>
                <ul className="poppins font-medium">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-red-500 font-light">
                        <Link to="/logout">Keluar</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}