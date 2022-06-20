export const blogStore = [
    {
        id: 1,
        title: "Cara Mudah Mengatasi Error Pada Saat Ngoding",
        slug: "cara-mudah-mengatasi-error-pada-saat-ngoding",
        image: "/asset/img/blog/error_coding.webp",
        category: "Coding",
        slugCategory: "coding",
        readTime: 5,
        description: `Hai, Sahabat Codeswer yang berbahagia. Berjumpa lagi nih di website kita tercinta, semoga kalian gak bosen-bosen ya mampir baca artikel disini. Sehat selalu jaga kesehatan di rumah ya, terapkan pola hidup sehat dimasa pandemi yang masih belum usai ini. Oke, kali ini kita akan memberikan wangsit kepada kalian para coder. kita akan ngasih pencerahan bagaimana cara mengatasi error saat sedang ngoding. Bagi para programmer error ini sudah merupakan makanan sehari-hari mereka, kenapa? karena tidak mungkin suatu kode bisa langsung berjalan normal hanya dengan sekali pengetikan. Dan lagi mereka yang tidak pernah berjumpa error, artinya wawasan mereka tidak bertambah atau mereka dianggap belum belajar apa-apa kalau belum bertemu error.

        Berikut ini tips mengatasi error saat sedang ngoding
        
        <strong>1. Tenang & Kuasai</strong>
        
        Jadi, tips yang pertama ini adalah kalian harus santai saat nemu error ini karena jika kalian panik otak kalian tidak dapat berpikir dengan jernih. Otak kalian itu bingung ngebuat rute/jalur berpikir untuk mecahin solusi tadi.
        
        <strong>2. Membaca Error Message & Meneliti Source Code</strong>
        
        Saat kalian testing kode yang sudah kalian buat, pasti jika terjadi error dari source code tadi si bahasa pemrograman itu akan menampilkan message errrornya. Nah, pesan ini harus kalian baca pelan-pelan dan pahami maksudnya.
        
        Ada 3 jenis kesalahan secara umum :
        
        syntax error ( kesalahan ketika salah menuliskan aturan penulisan ), semantic error ( kesalahan yang hasilnya terdapat kesalahan makna ), dan logical error ( kesalahan yang muncul ketika menuliskan aturan ).
        
        Setelah kalian memahami pesan error-nya selanjutnya kalian lakukan cek ke kode-nya, dan lakukan perbaikan. Error yang terjadi kadang bisa juga karena kita salah mengakses suatu file/direktori, jadi pastikan nama ini sudah benar.
        
        <strong>3. Cari solusi</strong>
        
        Untuk mendapatkan solusi dari masalah error yang dialami, kamu bisa mencari penyelesaian itu disini yaitu di Forum Codeswer. Ada pepatah mengatakan “malu bertanya, sesat dijalan“, dari pada tambah error programnya akan lebih baik jika kalian bertanya kepada yang lebih ahli. Namun ada kalanya mereka pun tak bisa memberikan solusi, karena setiap rancangan program itu tergantung pada logika dari si pembuat program itu sendiri.
        
        <strong>4. Istirahat & Lakukan Hal Favorit</strong>
        
        Saat sedang mencoba mencari problem solving dari error yang kita alami pikiran kita bekerja ekstra sangat keras hingga dia mengalami kelelahan. Maka dari itu, kita butuh yang namanya istirahat supaya otak bisa kembali fresh dan bisa bekerja maksimal. Istirahat dapat memulihkan konsentrasi kita dan ada 2 hormon yang mempengaruhi daya konsentrasi kita yaitu noradrenalin dan serotonin. Jika kedua hormon tersebut menurun maka konsentrasi kita juga akan menurun dan untuk memulihkannya, salah satunya dengan beristirahat.
        
        Oke, guys sekian tips dari kita semoga membantu ya. `,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 11, 2022',
    },
    {
        id: 2,
        title: "Buat website kamu lebih menarik dengan animate.style",
        slug: "buat-website-kamu-lebih-menarik-dengan-animate-style",
        image: "/asset/img/blog/animate_css.webp",
        category: "Library",
        slugCategory: "library",
        readTime: 15,
        description: `Hi Codeswers! Kali ini kita akan membahas animate.css atau animate. Oke, langsung saja kita bahas. Animate.css atau Animatae.style merupakan sebuah library CSS3 yang dibuat oleh Dan Eden untuk mempermudah developer dalam membuat animasi pada element html tanpa harus membuatnya dari awal karena sudah disiapkan oleh animate.css. Fitur animate.css ini saya cukup sudah lumayan lengkap dari animasi masuk(in) sampai animasi keluar (out), cara penggunaan animate.css sangatlah mudah kita hanya perlu menambahkan class animasi yang ada pada animate.css ke element html yang ingin kita beri efek animasi.

        Nah untuk memakai animate. Ada beberapa step yang mesti dilakukan
        
        Kita perlu library animate.css nya dulu, bisa kita instal pada laptop kita atau bisa secara CDN, nah kali ini kita akan menggunakan CDN karena lebih mudah dan praktis, Link Untuk mengakes Animate.style, kunjungi official websitenya "<i>animate.style</i>"

        Kemudian, Buka file index.html atau file utama pada web kita yang berisi full body html.
        
        Pada tag <head> tambahkan baris kode berikut untuk memanggil file 'animate.css' kedalam website kamu.
        
        Cari element yang akan diberikan animasi, untuk contoh saya buat sebuah element html dengan text “An animated element”.
        
        <strong>An animated element</strong>

        Simpan dan jalankan pada browser, elemen diatas akan menghasilkan efek animasi fadeIn.

        <strong>Cara Penggunaan</strong>
        Pada dasarnya cara penggunaan animate.css ini sangat mudah, cukup tambahkan class css yang telah disediakan oleh animate.css pada element html yang akan kita berikan efek animasi. Sebagai contoh:
        
        animate__animated adalah class yang mesti ditambahkan kedalam elemen yang akan di beri animasi.
        
        animate__bounce adalah nama dari efek animasi yang diberikan yaitu bounce, oh iya untuk memanggil nama dari animasi jangan lupa tambahkan animate_ sebagai prefix.
        
        <strong>Hello Word</strong>
        
        Nah dengan animate.css atau animate style kita dapat membuat lebih menarik website kita agar tidak monoton dan pengujung website lebih tertarik terhadap website kita.`,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 12, 2022',
    },
    {
        id: 3,
        title: "CSS WAND, Hanya copy-paste website kamu punya animasi menarik",
        slug: "css-wand-hanya-copy-paste-website-kamu-punya-animasi-menarik",
        image: "/asset/img/blog/css-wand.webp",
        category: "Library",
        slugCategory: "library",
        readTime: 15,
        description: `Berbicara tentang animasi web, terkadang Anda hanya memerlukan beberapa grafik kustom sederhana tanpa harus menulis kode apa pun. Jika Anda mencari pustaka CSS untuk menambahkan elemen animasi sederhana, seperti kursor mengambang dan bayangan jatuh, <a href="https://www.csswand.dev/" target="_self" rel="noopener noreferrer"> </a> Tongkat CSS layak untuk dilihat.

            Lebih baik lagi, perintah CSS Wand hanya perlu dipotong dan ditempelkan ke kode Anda untuk diterapkan. Ini sedekat mungkin dengan pustaka CSS plug-and-play yang Anda harapkan.
        `,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 20, 2022',
    },
    {
        id: 4,
        title: "Apa sih popper.js itu? Yuk ketahui dan mungkin kamu tertarik untuk mencobanya!",
        slug: "cara-membuat-popover-dinamis-menu-mengambang-di-divi-dengan-popper-js",
        image: "/asset/img/blog/popper.webp",
        category: "Library",
        slugCategory: "library",
        readTime: 20,
        description: `<strong>Memposisikan tooltips dan popovers sulit. Popper siap membantu!</strong>

        Pernahkah Anda mendengar tentang perpustakaan bernama popper.js ? Pustaka ini memungkinkan Anda membuat popover di JavaScript. Menggunakan popover cukup umum akhir-akhir ini terutama karena membantu menampilkan informasi lebih lanjut mengenai elemen tertentu (tombol, tautan, dan yang lainnya). Alasan untuk mempertimbangkan popover dinamis terutama untuk memastikannya ditampilkan di tempat yang tepat mengenai posisi subjek di layar. Konkretnya, jika subjeknya adalah bagian bawah layar, popover akan muncul di bagian atas. Jika terletak di bagian atas layar, popover akan ditampilkan di bagian bawah, dan yang lainnya.

        Popper memecahkan semua masalah utama ini dengan cara yang elegan dan berkinerja tinggi. Ini adalah pustaka ~3 kB ringan yang bertujuan untuk menyediakan mesin pemosisian yang andal dan dapat diperluas yang dapat Anda gunakan untuk memastikan semua elemen popper Anda diposisikan di tempat yang tepat.

        Ketika Anda mulai menulis implementasi popper Anda sendiri, Anda akan segera mengalami semua masalah yang disebutkan di atas. Widget ini sangat umum di UI kami; kami telah bekerja keras untuk mencari tahu hal ini sehingga Anda tidak perlu menghabiskan waktu berjam-jam untuk memperbaiki dan menangani banyak kasus tepi yang telah kami hadapi saat membangun perpustakaan!

        Popper digunakan di perpustakaan populer seperti Bootstrap, Foundation, Material UI, dan banyak lagi. Sepertinya Anda telah menggunakan elemen popper di web yang diposisikan oleh Popper di beberapa titik dalam beberapa tahun terakhir.

        Karena kami menulis UI menggunakan perpustakaan abstraksi yang kuat seperti React atau Angular saat ini, Anda juga akan senang mengetahui Popper dapat sepenuhnya berintegrasi dengan mereka dan menjadi warga negara yang baik bersama dengan komponen Anda yang lain. Lihat react-popper pembungkus Popper resmi untuk React.

        Sumber: <strong>https://popper.js.org/</strong>
        `,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 20, 2022',
    },
    {
        id: 5,
        title: "3 Cara untuk perbaiki the CORS Error — and How the Access-Control-Allow-Origin Header Works",
        slug: "3-cara-untuk-perbaiki-the-cors-error-and-how-the-access-control-allow-origin-header-works",
        image: "/asset/img/blog/cors-error.png",
        category: "Coding",
        slugCategory: "coding",
        readTime: 22,
        description: `<strong>The Cors Error</strong>

        Saat bekerja dengan API dalam kode aplikasi Anda, sejujurnya, bug ini muncul lebih sering dari yang seharusnya. Dan setiap kali, reaksinya sama:

        <i>"Access to fetch at 'http://localhost:3000/api/v1/users' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."</i>

        <strong>Perbaiki pertama: instal plugin Allow-Control-Allow-Originn</strong>
        Perbaikan tercepat yang dapat Anda lakukan adalah menginstal ekstensi moesif CORS . Setelah terinstal, klik di browser Anda untuk mengaktifkan ekstensi. Pastikan label ikon berubah dari "mati" menjadi "hidup".

        Kemudian segarkan aplikasi Anda, dan permintaan API Anda sekarang akan berfungsi! 🎉

        <strong>Perbaiki kedua: Tapi perbaikan plugin menipu</strong>
        Plugin pasti mengatasi masalah ini. Namun, perbaikan ini hanya berlaku untuk mesin Anda sendiri. Dalam pengembangan lokal, tidak masalah untuk menginstal plugin yang dapat membantu Anda mengatasi kesalahan.

        Tetapi begitu Anda memublikasikan aplikasi Anda, Anda tidak dapat mengharapkan pengguna Anda untuk menginstal plugin juga. Itu bukan keputusan bisnis yang paling bijaksana…

        Pasti ada solusi yang lebih baik. Untuk sampai ke sana, mari kita jawab beberapa pertanyaan:

        <strong>Mengapa kesalahan CORS ada di tempat pertama?</strong>
        Kesalahan berasal dari mekanisme keamanan yang diterapkan browser yang disebut kebijakan asal yang sama.

        Kebijakan asal yang sama melawan salah satu serangan dunia maya paling umum di luar sana: pemalsuan permintaan lintas situs. Dalam manuver ini, situs web jahat mencoba memanfaatkan sistem penyimpanan cookie browser.

        Untuk setiap permintaan HTTP ke domain, browser melampirkan cookie HTTP apa pun yang terkait dengan domain itu. Ini sangat berguna untuk otentikasi, dan sesi pengaturan. Misalnya, Anda dapat masuk ke aplikasi web seperti facebook-clone.com. Dalam hal ini, browser Anda akan menyimpan cookie sesi yang relevan untuk domain facebook-clone.com:

        Dan ini bagus! Cookie sesi disimpan. Dan setiap kali Anda mengunjungi kembali tab facebook-clone.com, dan mengeklik di sekitar aplikasi, Anda tidak perlu masuk lagi. Sebagai gantinya, API akan mengenali cookie sesi yang disimpan pada permintaan HTTP lebih lanjut.

        Satu-satunya masalah adalah bahwa browser secara otomatis menyertakan cookie relevan yang disimpan untuk domain ketika permintaan lain dibuat untuk domain yang sama persis. Oleh karena itu, skenario seperti ini bisa terjadi. Katakanlah Anda mengeklik add popup trik khusus, membuka evil-site.com.

        Situs jahat juga memiliki kemampuan mengirim permintaan ke facebook-clone.com/api. Karena permintaan masuk ke domain facebook-clone.com, browser menyertakan cookie yang relevan. Situs jahat mengirimkan cookie sesi, dan mendapatkan akses terotentikasi ke klon facebook. Akun Anda telah berhasil diretas dengan serangan pemalsuan permintaan lintas situs.

        Untungnya, dalam situasi ini, seperti elang yang siap menyerang, browser akan masuk dan mencegah kode berbahaya membuat permintaan API seperti ini. Itu akan menghentikan situs jahat dan mengatakan “Diblokir oleh kebijakan asal yang sama. ️”

        <strong>Bagaimana cara kerja kebijakan asal yang sama?</strong>
        Di bawah tenda, browser memeriksa apakah asal-usul aplikasi web dan server cocok. Di atas, asal-usul disederhanakan ke aplikasi frontend dan domain server backend. Tapi sungguh, asalnya adalah kombinasi dari protokol, host, dan port. Misalnya, di <i><u>https://www,facebook-clone.com</u></i>, protokolnya adalah <i><u>https://</u></i >, hostnya adalah <i><u>www.facebook-clone.com</u></i> , dan nomor port tersembunyinya adalah 443 (nomor port biasanya digunakan untuk https).

        Untuk melakukan pemeriksaan asal yang sama, browser menyertai semua permintaan dengan permintaan khusus yang mengirimkan server penerima informasi domain. Misalnya, untuk aplikasi yang berjalan di localhost:3000, format permintaan khusus terlihat seperti ini:

        <i><pre>Origin: <u>http://localhost:3000</u></pre></i>

        Bereaksi terhadap permintaan khusus ini, server mengirimkan kembali header respons. Header ini berisi kunci Access-Control-Allow-Origin, untuk menentukan asal mana yang dapat mengakses sumber daya server. Kunci akan memiliki salah satu dari dua nilai:

        Satu: server bisa sangat ketat, dan tentukan bahwa hanya satu Origin yang dapat mengaksesnya:

        <pre><i>Access-Control-Allow-Origin: <u>http://localhost:3000</u></i></pre>

        Dua: server dapat membiarkan gerbang terbuka lebar, dan menentukan nilai wildcard untuk mengizinkan semua domain mengakses sumber dayanya:

        <pre><i>Access-Control-Allow-Origin: *</i></pre>

        Setelah browser menerima kembali informasi header ini, browser akan membandingkan domain frontend dengan nilai Access-Control-Allow-Origin dari server. Jika domain frontend tidak cocok dengan nilainya, browser akan menaikkan bendera merah dan memblokir permintaan API dengan kesalahan kebijakan CORS.

        <strong>Apakah plugin "memperbaikinya"?</strong>
        <strong>Singkatnya, tidak.</strong> Plugin access-control-allow-origin pada dasarnya mematikan kebijakan asal yang sama pada browser. Untuk setiap permintaan, header <pre>Access-Control-Allow-Origin: *</pre> akan ditambahkan ke respons. Ini menipu browser, dan menimpa header CORS yang dimiliki server dengan nilai wildcard terbuka.

        Sekarang, tidak apa-apa untuk membiarkan plugin ini dalam pengembangan lokal. Mungkin Anda sudah mengetahui bahwa server menetapkan header <pre>Access-Control-Allow-Origin</pre> sebagai domain frontend yang dipublikasikan untuk aplikasi Anda. Kemudian dengan segala cara, gunakan plugin dalam pengembangan untuk memungkinkan domain localhost membuat permintaan di dalam browser.
       
        Tetapi jika Anda menggunakan API lain, plugin belum "memperbaiki" masalah tersebut. Seperti yang disebutkan sebelumnya, Anda tidak ingin meminta pengguna Anda menginstal plugin untuk mengakses kode Anda.

        <strong>Perbaiki dua: kirim permintaan Anda ke proxy</strong>
        Anda tidak dapat meminta pengguna Anda untuk mengelabui browser mereka dengan menginstal plugin yang menerapkan header di frontend. Tetapi Anda dapat mengontrol alamat backend yang akan dituju oleh permintaan API aplikasi web.

        Server cors-anywhere adalah proxy yang menambahkan header CORS ke permintaan. Proxy bertindak sebagai perantara antara klien dan server. Dalam hal ini, server proxy cors-anywhere beroperasi di antara aplikasi web frontend yang membuat permintaan, dan server yang merespons dengan data. Mirip dengan plugin Allow-control-allow-origin, ia menambahkan header <pre>Access-Control-Allow-Origin: *</pre> yang lebih terbuka ke respons.

        Ini bekerja seperti ini. Katakanlah frontend Anda mencoba membuat permintaan GET ke:

        <pre><u>https://joke-api-strict-cors.appspot.com/jokes/random</u></pre>

        Tetapi api ini tidak memiliki nilai <pre>Access-Control-Allow-Origin</pre> yang mengizinkan domain aplikasi web untuk mengaksesnya. Jadi, alih-alih, kirim permintaan GET Anda ke:

        <pre><u>http://cors-anywhere.appspot.com/https://joke-api-strict-cors.appspot.com/jokes/random</u></pre>

        Server proxy menerima <pre><u>https://joke-api-strict-cors.appspot.com/jokes/random</u></pre> dari url di atas. Kemudian itu membuat permintaan untuk mendapatkan respons server itu. Dan akhirnya, proxy menerapkan <pre>Access-Control-Allow-Origin: *</pre> ke respons asli itu.

        Solusi ini sangat bagus karena berfungsi baik dalam pengembangan maupun produksi. Singkatnya, Anda memanfaatkan fakta bahwa kebijakan asal yang sama hanya diterapkan dalam komunikasi browser-ke-server. Yang berarti itu tidak harus diterapkan dalam komunikasi server-ke-server!

        Satu-satunya kelemahan dari proxy cors-anywhere adalah bahwa seringkali perlu beberapa saat untuk menerima tanggapan. Latensi cukup tinggi untuk membuat aplikasi Anda tampak agak lamban.

        Ini membawa kita ke pendekatan final yang lebih baik.

        <strong>Perbaiki tiga: buat proxy Anda sendiri</strong>
        Perbaikan yang saya sarankan dalam situasi seperti ini, adalah membangun proxy Anda sendiri! Persis seperti solusi sebelumnya, Anda menggunakan fakta bahwa kebijakan asal yang sama tidak diterapkan dalam komunikasi server-ke-server. Selain itu, Anda menghilangkan kekhawatiran latency. Anda tidak perlu membagikan proxy cors-anywhere dengan konsumen lain, dan Anda dapat mendedikasikan sumber daya sebanyak yang Anda butuhkan untuk server Anda sendiri.

        Berikut beberapa kode Node.js cepat yang menggunakan kerangka kerja web ekspres untuk membuat server proxy di sekitar <pre><u>https://joke-api-strict-cors.appspot.com/</u></pre> yang sama dari atas:

        <code>
            const express = require('express');
            const request = require('request');
            
            const app = express();
            
            app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            next();
            });
            
            app.get('/jokes/random', (req, res) => {
            request(
                { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
                (error, response, body) => {
                if (error || response.statusCode !== 200) {
                    return res.status(500).json({ type: 'error', message: err.message });
                }
            
                res.json(JSON.parse(body));
                }
            )
            });
            
            const PORT = process.env.PORT || 3000;
            app.listen(PORT, () => console.log("listening on ${'PORT'}"));
        </code>

        Bagaimana cara kerjanya? Proxy menggunakan middleware ekspres untuk menerapkan header <pre>Access-Control-Allow-Origin: *</pre> ke setiap respons dari server. Pada titik akhir GET <pre>jokes/random</pre> sendiri, proxy meminta lelucon acak dari server lain. Kebijakan asal yang sama tidak masuk untuk memblokir permintaan, meskipun domainnya berbeda. Bagaimanapun, ini adalah permintaan server-ke-server. Terakhir, proxy membuat respons ke pemohon asli (aplikasi di browser) yang terdiri dari data yang dihasilkan dan header <pre>Access-Control-Allow-Origin: *</pre> yang diterapkan middleware.

        <strong>Kesimpulan</strong>
        Kesalahan CORS dapat menjadi kutukan bagi pengembang frontend. Namun begitu Anda memahami kebijakan asal yang sama di balik kesalahan tersebut, dan bagaimana hal itu melawan serangan pemalsuan permintaan lintas situs yang berbahaya, itu menjadi sedikit lebih tertahankan.

        Pada akhirnya, dengan perbaikan ini, Anda tidak perlu berkeringat lagi melihat kesalahan CORS merah di log konsol browser Anda lagi. Sebagai gantinya, di hadapannya, Anda akan mencabut plugin atau proxy, dan berseru:
        
        <strong>"I HAVE THE POWER"</strong>

        Sumber: <strong>https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9</strong>
        `,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 20, 2022',
    },
    
]