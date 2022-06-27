import React from "react";
import axios from "../api/axios";
import { AuthContext } from "../App";
import Codeswer from "../layouts/Codeswer";
import AuthorDetail from "../components/AuthorDetail"

import "../styles/_forum.scss"

export default function Forum() {

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
            <article className="forum-component">
                <section id="container_forum">
                    <div className="forum-heading inter">
                        <AuthorDetail 
                            classImage="w-[3.5rem]"
                            path="/asset/img/user/default.svg" 
                            text1="Author" 
                            text2="Aditya" 
                            classname="flex items-center space-x-3 w-full" 
                            classname2="text-[#8A8888] text-[1.25rem] text-extralight" 
                            classname3="text-gray-800 text-[1.10rem] font-medium "
                            >
                        </AuthorDetail>
                    </div>
                    <div className="forum-detail mt-10 space-y-4">
                        <div className="title-forum">
                            <h1 className="poppins">Judul Pertanyaan</h1>
                        </div>
                        <div className="messages-question inter">
                            <p 
                                className="whitespace-pre-line align-bottom text-[1.2rem] leading-[2rem] ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam vel ligula dignissim ornare. Integer a lacus vitae nulla varius ultricies. Vestibulum ac nisi ut ex cursus egestas at nec elit. Cras non porta augue, vestibulum faucibus diam. Mauris pretium auctor ex, id sodales sapien imperdiet in. Etiam pharetra, arcu convallis rutrum lacinia, ligula dui semper nulla, vitae consequat nibh turpis nec lectus. Fusce vel metus vel eros gravida congue at quis ante. Pellentesque vitae sapien ac eros fermentum bibendum. Curabitur tellus ante, bibendum eu risus id, elementum interdum lectus. Donec erat libero, semper in molestie faucibus, vestibulum nec nibh. Pellentesque ipsum mauris, malesuada id egestas et, malesuada ut velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo nulla, faucibus eu massa vel, ultricies pretium nulla. Morbi ac condimentum nunc.

                                Morbi massa purus, hendrerit sit amet orci eget, pretium volutpat arcu. Etiam varius, dolor vel vulputate semper, massa massa tempus est, in dignissim ex velit non libero. Vestibulum metus ante, euismod eget nibh a, venenatis gravida mauris. Quisque pulvinar ex sed leo sodales, eget porta velit ullamcorper. In hac habitasse platea dictumst. Quisque consectetur tempor sem ut mollis. In non lorem arcu. Proin lorem mauris, fringilla ut dictum in, rutrum eget nibh. Ut dapibus ante eros, ac vulputate odio placerat vel. Sed vitae enim nec ex laoreet blandit sed at ante. Donec ex lectus, consectetur quis urna in, dignissim vehicula lectus. Proin venenatis varius sem, vitae tempor erat pretium ut. Sed placerat auctor metus eget euismod. Donec turpis est, bibendum at condimentum ut, dignissim nec ex. Vestibulum at commodo eros.
                            </p>
                        </div>
                        <div className="comment-box">
                            <div class="max-w-lg rounded-lg shadow-md">
                                <form action="" class="w-full p-4 inter">
                                    <label class="block mb-2">
                                        <span class="text-gray-600">Add a comment</span>
                                        <textarea class="w-full mt-2 h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1" rows="3"></textarea>
                                    </label>
                                    <button class="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
                                </form>
                            </div>
                        </div>
                        <hr
                            style={{
                            height: '1px',
                            marginTop: `5rem`,
                            color: 'rgb(209 213 219 / 1)',
                            background: 'rgb(209 213 219 / 1)',
                            borderColor: 'rgb(209 213 219 / 1)',
                            }}
                        />
                        <div className="answer-box space-y-4">
                            <div className="title-answer">
                                <h1 className="poppins">Jawaban</h1>
                            </div>
                            <div className="messages-question inter">
                                <p 
                                    className="whitespace-pre-line align-bottom leading-[2rem] text-[18px] bg-indigo-two-code inter p-[1rem]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel diam vel ligula dignissim ornare. Integer a lacus vitae nulla varius ultricies. Vestibulum ac nisi ut ex cursus egestas at nec elit. Cras non porta augue, vestibulum faucibus diam. Mauris pretium auctor ex, id sodales sapien imperdiet in. Etiam pharetra, arcu convallis rutrum lacinia, ligula dui semper nulla, vitae consequat nibh turpis nec lectus. Fusce vel metus vel eros gravida congue at quis ante. Pellentesque vitae sapien ac eros fermentum bibendum. Curabitur tellus ante, bibendum eu risus id, elementum interdum lectus. Donec erat libero, semper in molestie faucibus, vestibulum nec nibh. Pellentesque ipsum mauris, malesuada id egestas et, malesuada ut velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo nulla, faucibus eu massa vel, ultricies pretium nulla. Morbi ac condimentum nunc.

                                    Morbi massa purus, hendrerit sit amet orci eget, pretium volutpat arcu. Etiam varius, dolor vel vulputate semper, massa massa tempus est, in dignissim ex velit non libero. Vestibulum metus ante, euismod eget nibh a, venenatis gravida mauris. Quisque pulvinar ex sed leo sodales, eget porta velit ullamcorper. In hac habitasse platea dictumst. Quisque consectetur tempor sem ut mollis. In non lorem arcu. Proin lorem mauris, fringilla ut dictum in, rutrum eget nibh. Ut dapibus ante eros, ac vulputate odio placerat vel. Sed vitae enim nec ex laoreet blandit sed at ante. Donec ex lectus, consectetur quis urna in, dignissim vehicula lectus. Proin venenatis varius sem, vitae tempor erat pretium ut. Sed placerat auctor metus eget euismod. Donec turpis est, bibendum at condimentum ut, dignissim nec ex. Vestibulum at commodo eros.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>
            </article>
        </Codeswer>

    )
}