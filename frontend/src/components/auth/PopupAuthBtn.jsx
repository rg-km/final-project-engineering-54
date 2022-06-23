import React from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../styles/auth/_popupauthbtn.scss";

export default function PopupAuthBtn({classname}) {

    const {dispatch} = React.useContext(AuthContext);
    return (
        <aside className={`${classname} popup-auth-btn absolute`}>
            <nav>
                <ul className="poppins font-medium">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/question">Tanya</Link>
                    </li>
                    <li className="text-red-500 font-light">
                        <span className="outline-none"
                            onClick={() =>
                                dispatch({
                                    type: "LOGOUT"
                            })}
                        >Keluar</span>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}