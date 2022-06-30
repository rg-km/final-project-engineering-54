import "../styles/component/_listlanpage2.scss"

export default function ListLanpage2({ children, text }) {
    return (
        <li className="listlanpage">
            {children}
            <span>{text}</span>
        </li>
    )
}