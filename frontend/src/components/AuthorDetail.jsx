import Image from "../components/Image";

export default function AuthorDetail({children, text1, text2, classname, classname2, classname3, classImage, path,}) {
    return (
        <div className={`${classname} author-detail`}>
            <Image classname={`${classImage} mr-1`} path={path}/>
            <div className="name-date space-y-1">
                <h3 className={`${classname2} name-author`}>{text1}</h3>
                <h3 className={`${classname3} name-author`}>
                    {text2}
                    {children}
                </h3>
            </div>
        </div>
    )
}

AuthorDetail.defaultProps = {
    classImage: "w-[2.5rem]"
}