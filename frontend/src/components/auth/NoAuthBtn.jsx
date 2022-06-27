import BtnCustom from "../BtnCustom"
import { NavLink } from "react-router-dom"
import "../../styles/component/auth/_noauthbtn.scss"

export default function NoAuthBtn({classname}) {
    return (
        <ul id="nav_noauth_item" className={`${classname} poppins space-x-8`}>
            <li>
                <NavLink to="/signup"
                className={({ isActive }) =>
                    isActive ? 'nav-active' : ''
                }
                >Daftar
                </NavLink>
            </li>
            <li>
                <NavLink to="/signin">
                    <BtnCustom>
                        Masuk
                    </BtnCustom>
                </NavLink>
            </li>
        </ul>
    )
} 