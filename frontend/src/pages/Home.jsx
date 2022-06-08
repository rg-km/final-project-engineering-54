import React from "react"

import "../styles/_home.scss";
import Codeswer from "../layout/Codeswer";

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
            <h1>Hello World</h1>
        </article>

        </Codeswer>
    )
}