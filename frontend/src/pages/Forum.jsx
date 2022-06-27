import React from "react";
import axios from "../api/axios";
import Codeswer from "../layouts/Codeswer";
import { AuthContext } from "../App";

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

                </section>
            </article>
        </Codeswer>

    )
}