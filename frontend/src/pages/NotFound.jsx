import React from "react"
import Codeswer from "../layouts/Codeswer";

export default function NotFound() {
    const status = null;

    return (
        <Codeswer
            title="Pecahkan Masalah Pemrograman Bersama Mentor Berpengalaman"
            kw="codeswer home, codeswer beranda, codeswer id home, codeswer beranda indonesia"
            desc="Codeswer. Website yang menyediakan layanan forum bersama mentor yang berpengalaman secara privasi untuk membantumu menyelesaikan masalah kodinganmu."
            ogUrl={status}
            ogType={status}
            ogTitle={status}
            ogDesc={status}
            twitTitle={status}
        >
            <article className="notfound-component">
                <h1>404</h1>
            </article>
        </Codeswer>
    )
}