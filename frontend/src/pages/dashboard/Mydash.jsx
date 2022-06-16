import "../../styles/dashboard/_mydash.scss";

export default function Mydash() {

    return (
        <div className="mydash-component">
            <div className="card-highlight w-full space-y-6">
                <div className="heading-mydash inter space-y-2">
                    <h1>Halo, Aditya Rizqi Ardhana !</h1>
                    <h3>Tanya lagi yuk, bebas tanya apapun ke mentor.</h3>
                </div>
                <div className="total-card bg-white">
                    <div className="total-card-content inter">
                        <div className="title-items-total border-b border-solid border-gray-300">
                            <h4>Total Pertanyaan</h4>
                        </div>
                        <div className="value-items-total py-1">
                            <h1>
                                <span className="number-value">10</span>
                                <span className="text-value text-gray-500 text-[18px]">  Pertanyaan</span>
                            </h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}