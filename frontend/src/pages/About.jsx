import React from "react";

import "../styles/_about.scss";
import Codeswer from "../layouts/Codeswer";
import CardCustom2 from "../components/CardCustom2";

export default function About() {
  const status = null;

  return (
    <Codeswer
      title="About | Codeswer"
      kw="codeswer about us, codeswer id about us, codeswer about us indonesia, codeswer tentang kami, codeswer tentang kami indonesia, codeswer tentang kami id, tentang kami codeswer"
      desc="Halaman About Us From Codeswer"
      ogUrl={status}
      ogType={status}
      ogTitle={status}
      ogDesc={status}
      twitTitle={status}
    >
      <article className="about-component">
        <section id="container_about">
          <div className="headline poppins text-center sm:pt-[10rem] pt-[6rem] space-y-8">
            <h1 className="title-headline">TENTANG KAMI</h1>
            <h1 className="sub-headline sm:px-[5rem] px-0">To solve and answer people who code problems in coding</h1>
          </div>
          <div className="card-about md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10 md:flex-row flex-col poppins pt-[5rem] pb-[5rem] px-[3rem]">
            <CardCustom2 title="Solution" desc="Untuk memecahkan masalah kode pemrograman dengan banyak mentor yang sudah berpengalaman">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </CardCustom2>
            <CardCustom2 title="Tutorials" desc="Banyak tutorial dan tips programming yang diberikan oleh mentor dan dari blog yang sudah kami berikan">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </CardCustom2>
            <CardCustom2 title="Connect" desc="Terhubung dengan mentor yang hebat dan berpengalaman">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </CardCustom2>
          </div>
        </section>
      </article>
    </Codeswer>
  );
}
