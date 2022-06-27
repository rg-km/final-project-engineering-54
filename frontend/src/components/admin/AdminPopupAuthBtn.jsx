import React from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../styles/admin/_adminpopupauthbtn.scss";

export default function PopupAuthBtn({classname}) {

    const {dispatch} = React.useContext(AuthContext);
    return (
        <aside className={`${classname} admin-popup-auth-btn absolute`}>
            <nav>
                <ul className="poppins font-medium">
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
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