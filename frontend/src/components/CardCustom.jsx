import "../styles/component/_cardcustom.scss";

export default function CardCustom({ children, title, desc }) {
    return (
        <div className="wrapper-card rounded-tl-[2rem] rounded-br-[2rem] p-8 flex-1 space-y-6">
            <div className="icon-title flex items-center space-x-4">
                <div className="wrap-icon rounded-full bg-indigo-two-code p-2">
                    {children}
                </div>
                <h2>{title}</h2>
            </div>
            <div className="detail-card">
                <h4>{desc}</h4>
            </div>
        </div>
    )
}