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
          <div className="headline poppins text-center pt-[10rem] space-y-8">
            <h1 className="title-headline">ABOUT US</h1>
            <h1 className="sub-headline px-[5rem]">To solve and answer people who code problems in coding</h1>
          </div>
          <div className="card-about md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10 md:flex-row flex-col poppins pt-[5rem] pb-[5rem] px-[3rem]">
            <CardCustom2 title="Solution" desc="To solve programming code problems with many expert mentors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </CardCustom2>
            <CardCustom2 title="Tutorials" desc="Many tutotials and tips programming given by mentors and our blogs">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </CardCustom2>
            <CardCustom2 title="Connect" desc="Connect with great and experienced mentors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </CardCustom2>
          </div>
        </section>
      </article>
    </Codeswer>
  );
}
