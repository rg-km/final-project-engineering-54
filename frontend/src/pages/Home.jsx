import React from "react"

import "../styles/_home.scss";
import { Link } from "react-router-dom"
import Codeswer from "../layouts/Codeswer";
import BtnCustom from "../components/BtnCustom";
import CardCustom from "../components/CardCustom";
import ListCustom from "../components/ListCustom";

export default function Home() {

    return (
        <Codeswer
            title="Pecahkan Masalah Pemrograman Bersama Mentor Berpengalaman"
            kw="codeswer home, codeswer beranda, codeswer id home, codeswer beranda indonesia"
            desc="Codeswer. Website yang menyediakan layanan forum bersama mentor yang berpengalaman secara privasi untuk membantumu menyelesaikan masalah pemrogramanmu."
            ogUrl={""}
            ogType={""}
            ogTitle={""}
            ogDesc={""}
            twitTitle={""}
        >

        <article className="home-component">
            <section id="container_home">
                <article id="part_one" className="section-child bg-blue-code md:gap-x-3 gap-x-0 md:gap-y-0 gap-y-20 md:flex-row flex-col">
                    <div id="one_left" className="flex-col md:items-start items-center md:text-left text-center space-y-7 poppins md:w-[55%] w-full">
                        <h1>Belajar Bahasa Programming Kapan Saja dan Menjawab Semua Masalah Kodingmu</h1>
                        <h3>
                            Tanyakan dan konseling bersama mentor-mentor yang sudah ahlinya dan berpengalaman secara privasi untuk membantumu menyelesaikan masalah pemrogramanmu.
                        </h3>
                        {
                            localStorage.id ?
                                localStorage.role === "mentor" ?
                                    <Link to="/mentor/dashboard">
                                        <BtnCustom classname="poppins mt-2">
                                                Mulai Jawab
                                        </BtnCustom>
                                    </Link>
                                :
                                localStorage.role === "admin" ?
                                    <Link to="/admin/dashboard">
                                        <BtnCustom classname="poppins mt-2">
                                                Mulai Pantau
                                        </BtnCustom>
                                    </Link>
                                :
                                    localStorage.role === "user" ?
                                        <Link to="/dashboard/questions">
                                            <BtnCustom classname="poppins mt-2">
                                                    Mulai Sekarang
                                            </BtnCustom>
                                        </Link>
                                :
                                        <Link to="/question/create">
                                            <BtnCustom classname="poppins mt-2">
                                                    Mulai Sekarang
                                            </BtnCustom>
                                        </Link>
                            :
                                <Link to="/signin">
                                    <BtnCustom classname="poppins mt-2">
                                            Mulai Sekarang
                                    </BtnCustom>
                                </Link>

                        }
                    </div>
                    <div id="one_right" className="md:w-[45%] w-full">
                        <img src="/asset/img/lanpage3.1.webp" width={400} alt="Landing Page 1" />
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
                                <ListCustom text="Menambah wawasan dan pengalaman coding">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                </ListCustom>
                                <ListCustom text="Selesaikan masalah kode dengan mentor berpengalaman">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>                            
                                </ListCustom>
                                <ListCustom text="Dapatkan jawaban dari permasalah yang kompleks dan rumit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                                </ListCustom>
                            </ul>
                            {
                                localStorage.id ?
                                    localStorage.role === "mentor" ?
                                        <Link to="/mentor/questions">
                                            <BtnCustom classname="poppins mt-2">
                                                Jawab yuk
                                            </BtnCustom>
                                        </Link>
                                    :
                                    localStorage.role === "user" ?
                                        <Link to="/question/create">
                                            <BtnCustom classname="poppins mt-2">
                                                Tanya yuk
                                            </BtnCustom>
                                        </Link>
                                    :
                                    localStorage.role === "admin" ?
                                        <Link to="/admin/dashboard">
                                            <BtnCustom classname="poppins mt-2">
                                                Pantau yuk
                                            </BtnCustom>
                                        </Link>
                                    :
                                        false
                                :
                                    <Link to="/signup">
                                            <BtnCustom classname="poppins mt-2">
                                                Daftar yuk
                                            </BtnCustom>
                                    </Link>
                            }
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
                        <Link to="/blogs">
                            <button className="poppins mt-2 flex items-center gap-x-2 text-purple-code">
                                Lihat blog terbaru
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                            </button>
                        </Link>
                    </div>
                    <div id="three_right" className="md:w-[45%] w-full">
                        <img src="/asset/img/lanpage1.2.svg" width={400} alt="Landing Page 1" />
                    </div>
                </article>
                <article id="part_four" className="section-child space-y-16">
                    <h1 className="poppins">Pengalaman yang akan didapat di <span className="text-blue-code">Codeswer</span></h1>
                    <div id="container-card" className="md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10 md:flex-row flex-col poppins">
                        <CardCustom title="Berbagai Informasi Teknologi" desc="Berbagai macam variasi blog teknologi yang ter-update mulai dari bahasa pemrograman sampai perkembangan teknologi.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                        </CardCustom>
                        <CardCustom title="Bantuin coding dari ahlinya" desc="Bantuan permasalahan coding dan berbagi pengalaman dengan mentor yang ahli dan berpengalaman.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        </CardCustom>
                        <CardCustom title="Penggunaan yang mudah" desc="Kemudahan untuk pengguna dalam setup pembelajaran dan proses bisnis dengan mentor.">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3A39B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
                        </CardCustom>
                    </div>
                </article>
            </section>
        </article>

        </Codeswer>
    )
}