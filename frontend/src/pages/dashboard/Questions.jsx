import { Link } from "react-router-dom";
import BtnCustom from "../../components/BtnCustom";

import "../../styles/dashboard/_questions.scss";

export default function Mydash() {
  return (
    <div className="questions-component">
      <div className="heading-questions inter">
        <h1>Pertanyaan Saya</h1>
      </div>
      <Link
        to="/question"
        className="questions-create poppins"
      >
        <BtnCustom>Buat Pertanyaan</BtnCustom>
      </Link>
      <div className="card-questions-list w-full mt-12">
        <div className="card-questions-wrapper inter border border-solid border-gray-300">
          <div className="card-questions-header mb-4">
            <Link to="/dashboard/questions/:name">
              <h2>Bagaimana cara membuat login dengan python</h2>
            </Link>
          </div>
          <Link to="/dashboard/questions/:name">
            <BtnCustom>Lihat Detail Pertanyaan</BtnCustom>
          </Link>
        </div>
      </div>
    </div>
  );
}
