export default function Image({ classname, path }) {
    return (
        <img className={`${classname} image-avatar object-cover rounded-full aspect-square`}  src={path} alt="User"/>
    )
}


Image.defaultProps = {
    path: "/asset/img/user/default.svg",
}