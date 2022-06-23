import React from "react";

import "../styles/_terms.scss";
import Codeswer from "../layouts/Codeswer";

export default function Kebijakanprivasi() {
  const status = null;

  return (
    <Codeswer
      title="Terms | Codeswer"
      kw="codeswer terms, codeswer terms, codeswer terms, codeswer id terms, codeswer terms indonesia"
      desc="Kami mempunyai kebijakan privasi terkait penggunaan aplikasi Codeswer"
      ogUrl={status}
      ogType={status}
      ogTitle={status}
      ogDesc={status}
      twitTitle={status}
    >
      <article className="terms-component">
        <section id="container_terms">
          <article
            id="part_one"
            className="section-child bg-blue-code md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col"
          >
            <div
              id="one_left"
              className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full"
            >
              <h1>Syarat dan Ketentuan</h1>
            </div>
            <div id="one_right" className="md:w-[45%] w-full">
              <img
                src="/asset/img/lanpage3.1.webp"
                width={400}
                alt="Landing Page 1"
              />
            </div>
          </article>
          <article id="part_two" className="section-child space-y-5">
            <p className="poppins mt-2">
              Terimakasih telah mengunjungi Codeswer. Codeswer memiliki salah
              satu prioritas utama adalah privasi Pengguna kami. Pada halaman
              ini akan dijelaskan ketentuan-ketentuan terkait dengan Codswer.
              Dengan Kamu menggunakan platform Codswer, maka Kamu telah setuju
              dan patuh dengan Ketentuan Penggunaan platform ini.
            </p>
            <p className="poppins mt-2">
              Bila Kamu tidak setuju dengan Ketentuan Penggunaan platform yang
              dijelaskan, maka Kamu tidak diperkenankan menggunakan platform
              ini. Ketentuan Penggunaan ini berlaku terhadap seluruh pengguna
              dan pengunjung platform dan aplikasi Codswer. Setiap pengguna
              fitur, dan konten Codswer untuk selanjutnya secara bersama-sama
              akan disebut sebagai “Pengguna” atau “User”.
            </p>
            <p className="poppins mt-2">
              Ketentuan Penggunaan ini dapat diubah, dimodifikasi, ditambah,
              atau diamandemen dari waktu ke waktu berdasarkan kebijakan kami,
              dan dengan tanpa adanya pemberitahuan terlebih dahulu kepada Kamu.
              Kamu setuju dan menerima kewajiban Kamu untuk memeriksa Ketentuan
              Penggunaan ini secara rutin pada platform kami.
            </p>

            <h1>AKSES PLATFORM</h1>
            <p className="poppins mt-2">
              Dalam penggunaan platform ini, terdapat beberapa area dengan akses
              yang dibatasi sesuai dengan hak/lisensi Kamu. Tim Codswer memiliki
              hak untuk membatasi akses sebagian maupun keseluruhan platform,
              sesuai dengan kebijakan yang berlaku selama tidak mempengaruhi
              keamanan dan kenyamanan layanan Codswer.com. Penggunaan user ID
              dan password merupakan sepenuhnya hak dan tanggung jawab pengguna
              sekaligus pemilik akun dan password. Semua aktivitas dan
              penggunaan terkait pemilik user dan ID akan menjadi tanggung jawab
              pemilik yang terdaftar dalam database Codswer.com. Tim Codswer.com
              memiliki wewenang untuk mengubah atau menonaktifkan user ID
              terkait apabila di kemudian hari terdapat pelanggaran Ketentuan
              Penggunaan atau atas permintaan pemilik ID.
            </p>
            <h1>JAMINAN PRIVASI</h1>
            <p className="poppins mt-2">
              Kami berkomitmen untuk menjaga keamanan dan kerahasiaan data
              pribadi yang diberikan Pengguna saat mengakses dan menggunakan
              Platform (“Data Pribadi”). Dalam hal ini, Data Pribadi diberikan
              oleh Pengguna secara sadar dan tanpa adanya tekanan atau paksaan
              dari pihak manapun, serta ikut bertanggung jawab penuh dalam
              menjaga kerahasiaan Data Pribadi tersebut. Keamanan dan
              kerahasiaan akun Kamu, termasuk namun tidak terbatas pada seluruh
              data pribadi yang Kamu berikan kepada kami melalui formulir
              pendaftaran pada Platform kami, sepenuhnya merupakan tanggung
              jawab pribadi Kamu. Segala kerugian dan risiko yang timbul akibat
              atau sehubungan dengan kelalaian Kamu dalam menjaga keamanan dan
              kerahasiaan akun Kamu ditanggung oleh Kamu sendiri.
            </p>

            <h1>KETENTUAN PRIVASI</h1>
            <p className="poppins mt-2">
              Ketentuan Privasi ini berlaku selama tidak mempengaruhi keamanan
              dan kerahasiaan akun Kamu. Tim Codswer.com akan mengubah, atau
              menonaktifkan akun yang tidak memenuhi ketentuan ini. Kamu tidak
              akan mengambil bagian dalam perilaku apa pun yang mengorbankan,
              melecehkan, merendahkan, atau mengintimidasi individu atau
              kelompok individu berdasarkan agama, gender, orientasi seksual,
              ras, etnis, usia, atau cacat.
            </p>

            <h1>PENGEMBANGAN PLATFORM</h1>
            <p className="poppins mt-2">
              Codswer berhak untuk melakukan pengembangan, perubahan, dan/atau
              penyesuaian isi dan layanan platform secara tetap ataupun untuk
              waktu tertentu, dengan atau tanpa adanya pemberitahuan sebelumnya
              kepada pengguna platform. Keamanan dan kerahasiaan akun Kamu,
              termasuk namun tidak terbatas pada seluruh data pribadi yang Kamu
              berikan kepada kami melalui formulir pendaftaran pada Platform
              kami, sepenuhnya merupakan tanggung jawab pribadi Kamu. Segala
              kerugian dan risiko yang timbul akibat atau sehubungan dengan
              kelalaian Kamu dalam menjaga keamanan dan kerahasiaan akun Kamu
              ditanggung oleh Kamu sendiri.
            </p>
          </article>
        </section>
      </article>
    </Codeswer>
  );
}
