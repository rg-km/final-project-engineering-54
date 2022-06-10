import React from "react"

import "../styles/_home.scss";
import { Link } from "react-router-dom"
import Codeswer from "../layouts/Codeswer";
import ListLanpage2 from "../components/ListLanpage2";
import CardCustom from "../components/CardCustom";

export default function Home() {

    const status = null;

    return (
        <Codeswer
            title="Pecahkan Masalah Pemrograman Bersama Mentor Berpengalaman"
            kw="codeswer home, codeswer beranda, codeswer id home, codeswer beranda indonesia"
            desc="Codeswer. Website yang menyediakan layanan forum bersama mentor yang berpengalaman secara privasi untuk membantumu menyelesaikan masalah pemrogramanmu."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >

        <article className="home-component">
            <section id="container_home">
                <article id="part_one" className="section-child bg-blue-code md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col">
                    <div id="one_left" className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full">
                        <h1>Belajar Bahasa Programming Kapan Saja dan Menjawab Semua Masalah Kodingmu</h1>
                        <h3>
                            Tanyakan dan konseling bersama mentor-mentor yang sudah ahlinya dan berpengalaman secara privasi untuk membantumu menyelesaikan masalah pemrogramanmu.
                        </h3>
                        <button className="poppins mt-2">
                            <Link to="/">
                                Mulai Sekarang
                            </Link>
                        </button>
                    </div>
                    <div id="one_right" className="md:w-[45%] w-full">
                        <img src="/asset/img/lanpage1.1.webp" width={400} alt="Landing Page 1" />
                    </div>
                </article>
                <article id="part_two" className="section-child space-y-16">
                    <h1 className="poppins">Dapatkan bantuan bersama mentor berpengalaman</h1>
                    <div className="md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col poppins">
                        <div id="two_left" className="md:w-[45%] w-full">
                            <img src="/asset/img/lanpage2.webp" width={400} alt="Landing Page 1" />
                        </div>
                        <div id="two_right" className="space-y-9 md:items-start items-center">
                            <h2 className="md:text-start text-center">Forum mentoring dengan banyak mentor</h2>
                            <ul className="space-y-5">
                                <ListLanpage2 text="Menambah wawasan dan pengalaman coding">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </ListLanpage2>
                                <ListLanpage2 text="Selesaikan masalah kode dengan mentor berpengalaman">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>                            
                                </ListLanpage2>
                                <ListLanpage2 text="Dapatkan jawaban dari permasalah yang kompleks dan rumit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                                </ListLanpage2>
                            </ul>
                            <button className="poppins mt-2">
                                <Link to="/">
                                    Cari Mentormu
                                </Link>
                            </button>
                        </div>
                    </div>
                </article>
                <article id="part_three" className="section-child bg-indigo-two-code md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col">
                    <div id="three_left" className="flex-col md:items-start items-center md:text-left text-center space-y-4 poppins md:w-[55%] w-full">
                        <h5>Our Featured Blog</h5>
                        <h1>Blog seputar teknologi dan coding</h1>
                        <h3>
                            Kami menyediakan berbagai macam blog seputar teknologi dan berbagai macam blog bahasa pemrograman yang menarik.
                        </h3>
                        <button className="poppins mt-2 flex items-center space-x-2 text-purple-code">
                            <Link to="/">
                                Lihat blog terbaru
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                        </button>
                    </div>
                    <div id="three_right" className="md:w-[45%] w-full">
                        <img src="/asset/img/lanpage3.1.webp" width={400} alt="Landing Page 1" />
                    </div>
                </article>
                <article id="part_four" className="section-child space-y-16">
                    <h1 className="poppins">Pengalaman yang akan didapat di <span className="text-blue-code">Codeswer</span></h1>
                    <div id="container-card" className="md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10 md:flex-row flex-col poppins">
                        <CardCustom title="Berbagai Informasi Teknologi" desc="Berbagai macam variasi blog teknologi yang ter-update mulai dari bahasa pemrograman sampai perkembangan teknologi.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                        </CardCustom>
                        <CardCustom title="Bantuin coding dari ahlinya" desc="Bantuan permasalahan coding dan berbagi pengalaman dengan mentor yang ahli dan berpengalaman.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                        </CardCustom>
                        <CardCustom title="Penggunaan yang mudah" desc="Kemudahan untuk pengguna dalam setup pembelajaran dan proses bisnis dengan mentor.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                        </CardCustom>
                    </div>
                </article>
            </section>
        </article>

        </Codeswer>
    )
}