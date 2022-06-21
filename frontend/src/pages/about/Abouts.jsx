import React from "react";

import "../../styles/_aboutus.scss";
import CardCustom from "../../components/CardCustom";

import Codeswer from "../../layouts/Codeswer";

export default function About() {
  const status = null;

  return (
    <Codeswer
      title="Masuk - Codeswer"
      kw="codeswer login, codeswer signin, codeswer masuk, codeswer id masuk, codeswer masuk indonesia"
      desc="Sudah punya akun Codeswer? Yuk masuk untuk mengakses fitur Codeswer."
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
            className="section-child bg-gradient-to-r from-sky-500 to-indigo-500 md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col"
          >
            <div
              id="one_left"
              className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full"
            >
              <h1>Solusi Masalah Pemograman Anda</h1>
            </div>
            <div id="one_right" className="md:w-[45%] w-full">
              <img
                src="/asset/img/lanpage3.1.webp"
                width={400}
                alt="Landing Page 1"
              />
            </div>
          </article>

          <article id="part_four" className="section-child space-y-16">
            <h1 className="poppins">Visi misi Codswer</h1>
            <div
              id="container-card"
              className="md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10 md:flex-row flex-col poppins"
            >
              <CardCustom
                title="Privasi Terjamin"
                desc="Keamanan data anda adalah prioritas kami"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3A39B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </CardCustom>
              <CardCustom
                title="Mentor Ahli"
                desc="Kami menyediakan mentor ahli untuk membantu anda dalam pemrograman"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3A39B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </CardCustom>
              <CardCustom
                title="Berbagi Informasi"
                desc="Kami menyediakan informasi terbaru seputar teknologi"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3A39B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </CardCustom>
            </div>
          </article>
        </section>
      </article>
    </Codeswer>
  );
}
