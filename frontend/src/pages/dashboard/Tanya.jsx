import "../../styles/dashboard/_mydash.scss";

export default function Tanya() {
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
              <h4>Tulis Pertanyaan Anda</h4>
            </div>
            <div className="title-items-total border-b border-solid border-gray">
              <h3 class="font-bold">Judul</h3>
              <h2 class="text-xs">
                Jadilah spesifik dan bayangkan Anda mengajukan pertanyaan kepada
                orang lain
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
