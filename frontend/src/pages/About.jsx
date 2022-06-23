import React from "react";
// import { Link } from "react-router-dom";

import "../styles/_about.scss";
import Codeswer from "../layouts/Codeswer";
import CardCustom from "../components/CardCustom";
// import BtnCustom from "../components/BtnCustom";

export default function About() {
  const status = null;

  return (
    <Codeswer
      title="About Us | Codeswer"
      kw="codeswer about us, codeswer about us, codeswer about us, codeswer id about us, codeswer about us indonesia"
      desc="Halaman About Us From Codeswer"
      ogUrl={status}
      ogType={status}
      ogTitle={status}
      ogDesc={status}
      twitTitle={status}
    >
      <article className="about-component">
        <section id="container_about">
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

          <article
            id="part_one"
            className="section-child bg-gradient-to-r from-cyan-500 to-blue-500 md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col"
          >
            <div
              id="three_left"
              className="flex-col md:items-start items-center md:text-left text-center space-y-4 poppins md:w-[55%] w-full"
            >
              <div
                id="one_left"
                className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full"
              >
                <h1>Membantu Permasalahan Anda</h1>
              </div>
            </div>
            <div id="one_rightt" className="md:w-[45%] w-full">
              <img
                src="/asset/img/lanpage1.2.svg"
                width={400}
                alt="Landing Page 1"
              />
            </div>
          </article>

          {/* <article id="part_two" className="section-child space-y-16">
            <div className="md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col poppins">
              <div id="two_left" className="md:w-[45%] w-full">
                <img
                  src="/asset/img/lanpage2.webp"
                  width={400}
                  alt="Landing Page 1"
                />
              </div>
              <div
                id="two_right"
                className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full"
              >
                <h2 className="md:text-end text-center">
                  Tertarik Buat Gabung?
                </h2>
                <Link to="/signup">
                  <BtnCustom classname="poppins mt-2">Daftar yuk</BtnCustom>
                </Link>
              </div>
            </div>
          </article> */}
        </section>
      </article>
    </Codeswer>
  );
}
