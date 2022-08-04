import "../styles/component/_cardcustom2.scss";

export default function CardCustom2({ children, title, desc }) {
    return (
        <div className="wrapper-card rounded-tl-[2rem] rounded-br-[2rem] p-8 flex-1 space-y-6">
            <div className="icon-title flex flex-col items-center justify-center space-y-6">
                <div className="wrap-icon rounded-full bg-indigo-two-code p-2">
                    {children}
                </div>
                <h2>{title}</h2>
            </div>
            <div className="detail-card text-center">
                <h4>{desc}</h4>
            </div>
        </div>
    )
}