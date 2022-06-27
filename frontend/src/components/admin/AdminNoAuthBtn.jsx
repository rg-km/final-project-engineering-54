import BtnCustom from "../BtnCustom"
import { NavLink } from "react-router-dom"
import "../../styles/admin/_adminnoauthbtn.scss"

export default function AdminNoAuthBtn({classname}) {
    return (
        <ul id="admin_nav_noauth_item" className={`${classname} poppins space-x-8`}>
            <li>
                <NavLink to="/admin/signin">
                    <BtnCustom>
                        Masuk
                    </BtnCustom>
                </NavLink>
            </li>
        </ul>
    )
} 