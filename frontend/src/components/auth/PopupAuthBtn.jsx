import React from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../../App";
import "../../styles/auth/_popupauthbtn.scss";

export default function PopupAuthBtn({classname, onClickOutside, show}) {

    const {dispatch} = React.useContext(AuthContext);

    // const ref = React.useRef(null);

    /* React.useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    }, [ onClickOutside ]);
    
    if(!show)
    return null; */

    return (
        <aside className={`${classname} popup-auth-btn absolute`}>
            <nav>
                <ul className="poppins font-medium">
                    <li>
                        <Link to="/dashboard/my">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/question/create">Tanya</Link>
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