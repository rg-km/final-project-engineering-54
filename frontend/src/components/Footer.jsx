import { Link } from 'react-router-dom';
import "../styles/component/_footer.scss";
import BtnCustom from '../components/BtnCustom';

export default function Footer() {

    return (
        <footer>
            <section>
                <article id="links" className="sm:flex-row flex-col sm:gap-x-36 gap-x-0 sm: gap-y-16 sm:gap-y-0 py-10">
                    <div id="nav_brand">
                        <h1 className="poppins 5xs:text-center">
                            <Link to="/">
                                Codeswer
                                {/* <img src="../assets/images/brand-ori.png" width="60" alt="logo" /> */}
                            </Link>        
                        </h1>
                        <h4 className="poppins text-gray-200 font-light mt-2 leading-8 5xs:text-center">
                            Pecahkan Masalah Pemrograman Bersama <br className="3xs:hidden" />Mentor yang Ahli dan Berpengalaman
                        </h4>
                        <a href="mailto:adityarizqiardhana@gmail.com" className="poppins">
                            <BtnCustom classname="mt-6 5xs:mx-auto">
                                Contact Us
                            </BtnCustom>
                        </a>
                    </div>
                    <div id="nav_links" className="grid grid-cols-2 sm:gap-x-20 5xs:grid-cols-1 5xs:justify-items-center 5xs:text-center 5xs:gap-y-8">
                        <article className="nav-links-list space-y-5 poppins">
                            <h1>Codeswer</h1>
                            <ul id="nav_links_item" className="space-y-4 text-gray-200 font-light">
                                <li><Link to="/blogs">Blog</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/docs">How It Works</Link></li>
                            </ul>
                        </article>
                        <article className="nav-links-list space-y-5 poppins">
                            <h1>Layanan</h1>
                            <ul id="nav_links_item" className="space-y-4 text-gray-200 font-light">
                                <li><Link to="/mentoring">Forum Mentoring</Link></li>
                                <li><Link to="/mentor">Mentor Us</Link></li>
                            </ul>
                        </article>
                    </div>
                </article>
                <article id="copyright" className="py-6 border-t border-gray-500 border-solid 5xs:text-center">
                    <div className="font-light text-[1rem] poppins text-gray-200">
                        <p className="leading-loose">©{
                            new Date().getFullYear()
                        }. <span className="font-medium">All right reserved. Codeswer</span>
                        </p>
                    </div>
                </article>
            </section>
        </footer>
    )
}