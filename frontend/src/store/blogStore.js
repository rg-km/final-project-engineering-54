export const blogStore = [
    {
        id: 1,
        title: "Cara Mudah Mengatasi Error Pada Saat Ngoding",
        slug: "cara-mudah-mengatasi-error-pada-saat-ngoding",
        image: "/asset/img/blog/error_coding.webp",
        description: `Hai, Sahabat Codeswer yang berbahagia. Berjumpa lagi nih di website kita tercinta, semoga kalian gak bosen-bosen ya mampir baca artikel disini. Sehat selalu jaga kesehatan di rumah ya, terapkan pola hidup sehat dimasa pandemi yang masih belum usai ini. Oke, kali ini kita akan memberikan wangsit kepada kalian para coder. kita akan ngasih pencerahan bagaimana cara mengatasi error saat sedang ngoding. Bagi para programmer error ini sudah merupakan makanan sehari-hari mereka, kenapa? karena tidak mungkin suatu kode bisa langsung berjalan normal hanya dengan sekali pengetikan. Dan lagi mereka yang tidak pernah berjumpa error, artinya wawasan mereka tidak bertambah atau mereka dianggap belum belajar apa-apa kalau belum bertemu error.

        Berikut ini tips mengatasi error saat sedang ngoding
        
        Tenang & Kuasai
        
        Jadi, tips yang pertama ini adalah kalian harus santai saat nemu error ini karena jika kalian panik otak kalian tidak dapat berpikir dengan jernih. Otak kalian itu bingung ngebuat rute/jalur berpikir untuk mecahin solusi tadi.
        
        Membaca Error Message & Meneliti Source Code
        
        Saat kalian testing kode yang sudah kalian buat, pasti jika terjadi error dari source code tadi si bahasa pemrograman itu akan menampilkan message errrornya. Nah, pesan ini harus kalian baca pelan-pelan dan pahami maksudnya.
        
        Ada 3 jenis kesalahan secara umum :
        
        syntax error ( kesalahan ketika salah menuliskan aturan penulisan ), semantic error ( kesalahan yang hasilnya terdapat kesalahan makna ), dan logical error ( kesalahan yang muncul ketika menuliskan aturan ).
        
        Setelah kalian memahami pesan error-nya selanjutnya kalian lakukan cek ke kode-nya, dan lakukan perbaikan. Error yang terjadi kadang bisa juga karena kita salah mengakses suatu file/direktori, jadi pastikan nama ini sudah benar.
        
        Cari solusi
        
        Untuk mendapatkan solusi dari masalah error yang dialami, kamu bisa mencari penyelesaian itu disini yaitu di Forum Codeswer. Ada pepatah mengatakan “malu bertanya, sesat dijalan“, dari pada tambah error programnya akan lebih baik jika kalian bertanya kepada yang lebih ahli. Namun ada kalanya mereka pun tak bisa memberikan solusi, karena setiap rancangan program itu tergantung pada logika dari si pembuat program itu sendiri.
        
        Istirahat & Lakukan Hal Favorit
        
        Saat sedang mencoba mencari problem solving dari error yang kita alami pikiran kita bekerja ekstra sangat keras hingga dia mengalami kelelahan. Maka dari itu, kita butuh yang namanya istirahat supaya otak bisa kembali fresh dan bisa bekerja maksimal. Istirahat dapat memulihkan konsentrasi kita dan ada 2 hormon yang mempengaruhi daya konsentrasi kita yaitu noradrenalin dan serotonin. Jika kedua hormon tersebut menurun maka konsentrasi kita juga akan menurun dan untuk memulihkannya, salah satunya dengan beristirahat.
        
        Oke, guys sekian tips dari kita semoga membantu ya. `,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 11, 2022',
    },
    {
        id: 2,
        title: "Buat website kamu lebih menarik dengan animate.style",
        slug: "buat-website-kamu-lebih-menarik-dengan-animate.style",
        image: "/asset/img/blog/animate_css.webp",
        description: `Hi Codeswers! Kali ini kita akan membahas animate.css atau animate. Oke, langsung saja kita bahas. Animate.css atau Animatae.style merupakan sebuah library CSS3 yang dibuat oleh Dan Eden untuk mempermudah developer dalam membuat animasi pada element html tanpa harus membuatnya dari awal karena sudah disiapkan oleh animate.css. Fitur animate.css ini saya cukup sudah lumayan lengkap dari animasi masuk(in) sampai animasi keluar (out), cara penggunaan animate.css sangatlah mudah kita hanya perlu menambahkan class animasi yang ada pada animate.css ke element html yang ingin kita beri efek animasi.

        Nah untuk memakai animate. Ada beberapa step yang mesti dilakukan
        
        Kita perlu library animate.css nya dulu, bisa kita instal pada laptop kita atau bisa secara CDN, nah kali ini kita akan menggunakan CDN karena lebih mudah dan praktis, Link Untuk mengakes Animate.style Klik Disini
        Buka file index.html atau file utama pada web kita yang berisi full body html.
        Pada tag <head> tambahkan baris kode berikut untuk memanggil file animate.css kedalam website kamu.
          <head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
        </head>
        . Cari element yang akan diberikan animasi, untuk contoh saya buat sebuah element html dengan text “An animated element”.
        <h1 class="animate__animated animate__fadeInLeft">An animated element</h1>
        Simpan dan jalankan pada browser, elemen diatas akan menghasilkan efek animasi fadeIn.
        Cara Penggunaan
        Pada dasarnya cara penggunaan animate.css ini sangat mudah, cukup tambahkan class css yang telah disediakan oleh animate.css pada element html yang akan kita berikan efek animasi. Sebagai contoh:
        
        animate__animated adalah class yang mesti ditambahkan kedalam elemen yang akan di beri animasi.
        
        animate__bounce adalah nama dari efek animasi yang diberikan yaitu bounce, oh iya untuk memanggil nama dari animasi jangan lupa tambahkan animate_ sebagai prefix.
        
        <h1 class="animate__animated animate__bounce">Hello Word</h1>
        
        Nah dengan animate.css atau animate style kita dapat membuat lebih menarik website kita agar tidak monoton dan pengujung website lebih tertarik terhadap website kita.`,
        authorName: 'Aditya Rizqi Ardhana',
        authorImage: '/asset/img/user.jpg',
        createdAt: 'June 12, 2022',
    }
]