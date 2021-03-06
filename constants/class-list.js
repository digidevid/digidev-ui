export const classList = [
  {
    id: 1,
    name: "Basic Modern Web Development",
    slug: "web-basic",
    classDays: 8,
    classWeeks: 4,
    convenienceFee: 0,
    summaryInfo: [
      "Belajar & Praktik (4 Minggu)",
      "Tersedia Modul belajar dalam bentuk code dan video tutorial",
      "Tersedia Code Sandbox di dalam modul belajar",
      "8x Pertemuan",
      "1 Pertemuan berdurasi 3 jam (2 jam materi dan praktik, 1 jam tugas)",
      "Kuota Terbatas",
      "Waktu fleksible (mengikuti jadwal siswa)",
    ],
    locations: [
      "Medan",
      "Jakarta (coming soon)",
      "Bandung (coming soon)",
      "Malang (coming soon)",
    ],
    syllabus: [
      {
        id: 1,
        name: "Pengenalan tentang Website, Frontend, Backend, Database",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 2,
        name: "Pengenalan penggunaan Tools yang digunakan untuk ngoding",
        subSyllabus: [
          "Text Editor (VSC)",
          "Server Local (Node)",
          "Git",
          "Terminal (CMD, Powershell, Gitbash)",
        ],
        isOpen: false,
      },
      {
        id: 3,
        name: "Pengenalan tentang terminal, CLI, direktori file",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 4,
        name: "Pengenalan tentang komponen utama web (HTML, CSS, JS) beserta analoginya",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 5,
        name: "Pengenalan detail HTML",
        subSyllabus: [
          "Element",
          "Tag (single tag, paired tag)",
          "Attribute (class, id, dll)",
          "Content",
        ],
        isOpen: false,
      },
      {
        id: 6,
        name: "Pengenalan detail CSS",
        subSyllabus: [
          "CSS Syntax (Selector, Property, Value)",
          "Cara menggunakan CSS (inline html, di dalam tag style, file css terpisah)",
          "Selector CSS (dengan menggunakan tag, id, class)",
          "Box model CSS",
          "Margin & padding",
          "Background color",
          "Position & display",
          "Border",
          "Width & height",
          "Font (color, font-weight, font-size, font-family)",
          "Z-index",
          "Flexbox",
          "Grid",
          "Responsive web design",
        ],
        isOpen: false,
      },
      {
        id: 7,
        name: "Library CSS - TailwindCSS",
        subSyllabus: ["CDN", "Tailwind Responsive"],
        isOpen: false,
      },
      {
        id: 8,
        name: "Pengenalan penggunaan Git & Github",
        subSyllabus: [
          "Membuat akun github",
          "Membuat repositori",
          "clone, pull, commit, push",
        ],
        isOpen: false,
      },
      {
        id: 9,
        name: "Pengenalan dasar Javascript",
        subSyllabus: [
          "Tipe-tipe data berupa string, number, boolean, function, object, array, regex (opsional)",
          "String backtic",
          "Operators (Arithmetic, Comparison, Logical Operators)",
          "Condition (if, if else, else)",
          "Looping Array",
          "Function (function invocation, function return, function parameters)",
          "Manipulasi DOM (get element, create element, modification element, event listener)",
          "Manipulasi Array (push / pop, splice, slice, shift / unshift)",
        ],
        isOpen: false,
      },
      {
        id: 10,
        name: "Introduction Vue js & Nuxt js",
        subSyllabus: [],
        isOpen: false,
      },
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Grup",
        image: "/images/class/group.jpg",
        oriPrice: 1.2,
        oriPriceType: "jt",
        price: 950,
        priceType: "ribu",
        realPrice: 950000,
        isPreOrder: true,
        details: [
          "Eksklusif tatap muka",
          "Modul belajar berupa modul guide & video tutorial",
          "8x pertemuan",
          "Grup belajar (maksimum 5 siswa)",
          "Mentor berpengalaman",
          "Kurikulum terupdate dunia kerja",
          "Pertemuan offline (wajib)",
          "Gabung ke grup whatsapp dengan siswa lain",
          "Sertifikat",
        ],
      },
      {
        id: 2,
        name: "Kelas Privat",
        image: "/images/class/private.jpg",
        oriPrice: 2.4,
        oriPriceType: "jt",
        price: 1.9,
        priceType: "jt",
        realPrice: 1900000,
        isPreOrder: false,
        details: [
          "Eksklusif untuk 1 siswa",
          "Modul belajar berupa modul guide & video tutorial",
          "8x pertemuan",
          "Mentor berpengalaman",
          "Kurikulum terupdate dunia kerja",
          "Pertemuan offline (tatap muka) atau online (daring)",
          "Gabung ke grup whatsapp dengan siswa lain",
          "Sertifikat",
        ],
      },
    ],
    goals: [
      {
        id: 1,
        content:
          "Siswa memahami dengan baik apa itu website, frontend dan backend",
      },
      {
        id: 2,
        content:
          "Siswa bisa menggunakan tools yang direkomendasikan Digidev dengan baik",
      },
      {
        id: 3,
        content:
          "Siswa memahami dengan baik HTML dan mampu membuat code berbasis HTML ",
      },
      {
        id: 4,
        content:
          "Siswa memahami dengan baik CSS dan mampu men-styling element HTML dengan menggunakan CSS",
      },
      {
        id: 5,
        content:
          "Siswa memahami dengan baik Javascript, mampu memanipulasi Element HTML dan/atau style (CSS), melakukan opsional rendering dan melakukan looping menggunakan Javascript",
      },
      {
        id: 6,
        content:
          "Siswa mampu membuat projek sederhana menggunakan HTML, CSS dan Javascript",
      },
    ],
    faq: [
      {
        question:
          "Bisakah kelas ini untuk orang awam (tidak bisa programming)?",
        answer:
          "Kelas Basic Modern Web ini memang disasarkan untuk kamu yang belum memiliki pengetahuan sama sekali tentang dunia web development.",
        isActive: false,
      },
      {
        question: "Apa saja syarat untuk mengikuti kelas ini?",
        answer:
          "Memiliki laptop pribadi dengan minimum spek ram 4 GB, core i3, kondisi laptop sehat, Memahami basic penggunaan komputer, seperti install sebuah aplikasi, menggunakan file explorer dan browser, Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline).",
        isActive: false,
      },
      {
        question: "Apakah kelas ini bisa dilaksanakan secara online?",
        answer:
          "Kelas Basic Modern Web ini dilaksanakan secara offline (langsung tatap muka) maupun online (daring). Namun untuk online, hanya berlaku untuk pendaftaran dengan tipe privat (1 on 1 dengan mentor).",
        isActive: false,
      },
      {
        question:
          "Apakah akan mendapatkan sertifikat setelah selesai mengikuti kelas?",
        answer:
          "Setiap siswa yang telah selesai mengikuti kelas apapun di Digidev akan mendapatkan sertifikat sesuai dengan kelas yang diikuti dengan syarat mengikuti kelas sampai akhir.",
        isActive: false,
      },
      {
        question: "Kapan jadwal kelas dilaksanakan?",
        answer:
          "Jadwal kelas akan ditentukan pada saat briefiing (meeting awal) antara tim Digidev, mentor dan siswa. Jadi kamu diharuskan untuk hadir saat briefing kelas yang dipilih. Jika tidak hadir maka dianggap batal mengikuti kelas.",
        isActive: false,
      },
      {
        question: "Dimana kelas akan dilaksanakan?",
        answer:
          "Lokasi kelas berada di learning space milik Digidev (Jl. Harmonika Baru no.5a lt.2, Medan Selayang, Medan).",
        isActive: false,
      },
    ],
    tutors: [
      {
        id: 1,
        name: "Faishal Arif",
        location: "Medan - Jakarta Selatan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        linkedin: "https://www.linkedin.com/in/fshlarf/",
        github: "https://github.com/fshlarf",
        company: "ex-Blanja.com, ex-Elevenia, ex-Bonza, Seakun.id",
        bio: "Faishal Arif adalah seorang Software Engineer dengan pengalaman di dunia profesional selama 4 tahun. Saat ini sedang berkarir sebagai CEO di startup yang dibangunnya yaitu Seakun.id. Memiliki skill dan pengalaman di dunia modern web development untuk frontend, backend maupun mobile apps development.",
      },
      {
        id: 2,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.png",
        job: "Frontend Software Engineer",
        linkedin: "https://www.linkedin.com/in/ibnu-hazar/",
        github: "https://github.com/ibnuhazar101",
        company: "Iredium.com, Seakun.id",
        bio: "Sebelumnya bekerja di dunia telekomunikasi, Ibnu menjadi Junior Software Engineer yang memulai karir nya di dunia Web Development di tahun 2021. Selain bekerja full time di Seakun.id, Ibnu juga bekerja part time di Iredium.com.",
      },
      {
        id: 3,
        name: "Harry Kurniawan",
        location: "Jakarta",
        photo: "/images/mentor/harry.png",
        job: "Software Engineer",
        linkedin: "https://www.linkedin.com/in/harry-kurniawan-71533665/",
        github: "https://github.com/mzhar91",
        company: "ex Berrybenka, ex Elevenia Biz",
        bio: "Harry adalah seorang Software Engineer dengan pengalaman di dunia profesional selama lebih dari 5 tahun khususnya di dunia Back End Engineering. Menguasai beberapa bahasa pemrograman seperti PHP, Javascript, Go, JAVA.",
      },
      {
        id: 4,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/ihsan.png",
        job: "Software Engineer",
        linkedin:
          "https://www.linkedin.com/in/muhammad-ihsan-batubara-07b982117/",
        github: "https://github.com/ihsanbara94",
        company: "Digidev.id",
        bio: "Menjadi salah satu siswa lulusan digidev di kelas basic modern web dan frontend, Ihsan bergabung dengan digidev sebagai frontend engineer sekaligus mentor untuk membagikan ilmu nya ke siswa digidev selanjutnya.",
      },
    ],
    requirements: [
      "Memiliki laptop pribadi dengan minimum spesifikasi ram 4 GB, intel Core i3, kondisi laptop sehat.",
      "Mengerti dasar-dasar penggunaan laptop dan browser (seperti instalasi software, dsb).",
      "Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline) dan menunjukkan sertifikat vaksin.",
    ],
  },
  {
    id: 2,
    name: "Frontend Master (Vue Js)",
    slug: "front-end",
    classDays: 8,
    classWeeks: 4,
    locations: [
      "Medan",
      "Jakarta (coming soon)",
      "Yogyakarta (coming soon)",
      "Bandung (coming soon)",
    ],
    requirements: [
      "Memiliki laptop pribadi dengan minimum spesifikasi ram 4 GB, intel Core i3, kondisi laptop sehat.",
      "Sudah memahami dasar pemrograman, dasar HTML, CSS dan Javascript.",
      "Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline) dan menunjukkan sertifikat vaksin.",
    ],
    summaryInfo: [
      "Mendalami Frontend Master",
      "Belajar & Praktik (4 Minggu)",
      "8x Pertemuan",
      "1 Pertemuan berdurasi 3 jam (2 jam materi dan praktik, 1 jam tugas)",
      "Kuota Terbatas",
      "Waktu fleksible (mengikuti jadwal siswa)",
    ],
    syllabus: [
      {
        id: 1,
        name: "Perngenalan Framework Javascript",
        subSyllabus: ["Pengenalan Vue Js", "Penggunaan sederhana Vue Js (CDN)"],
        isOpen: false,
      },
      {
        id: 2,
        name: "Pengenalan Nuxt",
        subSyllabus: [
          "Inisiasi Project Nuxt",
          "Struktur folder",
          "Package json",
          "Nuxt Config",
          "Run project Nuxt",
        ],
        isOpen: false,
      },
      {
        id: 3,
        name: "Penjelasan dan praktik secara detail tentang Vue",
        subSyllabus: [
          "Struktur element didalam vue",
          "Lifecycle vue",
          "Property Vue Instance (data, methods, computed, mounted, watch)",
        ],
        isOpen: false,
      },
      {
        id: 4,
        name: "Penjelasan dan implementasi Vue Attribute",
        subSyllabus: [
          "v-model",
          "v-if, v-else-if, v-else",
          "v-show",
          "v-for",
          "v-on",
          "v-bind",
        ],
        isOpen: false,
      },
      {
        id: 5,
        name: "Redirect page Nuxt (Routing)",
        subSyllabus: ["nuxt-link", "$router", "$route (query param link)"],
        isOpen: false,
      },
      {
        id: 6,
        name: "Membuat dan memanggil component",
        subSyllabus: ["import component", "props", "emit", "v-slot"],
        isOpen: false,
      },
      {
        id: 7,
        name: "Mengolah dan memproses API dalam Vue Js menggunakan Axios",
        subSyllabus: [
          "Pengenalan tools Postman",
          "GET",
          "POST",
          "PUT",
          "DELETE",
        ],
        isOpen: false,
      },
      {
        id: 8,
        name: "Install library & plugins",
        subSyllabus: [
          "Integrasi TailwindCSS ke project Nuxt",
          "Menambah google font ke project Nuxt",
          "Membuat global custom CSS",
        ],
        isOpen: false,
      },
      {
        id: 9,
        name: "Deploy project Nuxt ke production",
        subSyllabus: [],
        isOpen: false,
      },
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Grup",
        image: "/images/class/group.jpg",
        oriPrice: 1.5,
        oriPriceType: "jt",
        price: 1.2,
        priceType: "jt",
        realPrice: 1200000,
        isPreOrder: true,
        details: [
          "Eksklusif tatap muka",
          "Modul belajar berupa modul guide & video tutorial",
          "8x pertemuan",
          "Grup belajar (maksimum 5 siswa)",
          "Mentor berpengalaman",
          "Kurikulum terupdate dunia kerja",
          "Pertemuan offline (wajib)",
          "Gabung ke grup whatsapp dengan siswa lain",
          "Sertifikat",
        ],
      },
      {
        id: 2,
        name: "Kelas Privat",
        image: "/images/class/private.jpg",
        oriPrice: 3,
        oriPriceType: "jt",
        price: 2.4,
        priceType: "jt",
        realPrice: 2400000,
        isPreOrder: false,
        details: [
          "Eksklusif untuk 1 siswa",
          "Modul belajar berupa modul guide & video tutorial",
          "8x pertemuan",
          "Mentor berpengalaman",
          "Kurikulum terupdate dunia kerja",
          "Pertemuan offline (tatap muka) atau online (daring)",
          "Gabung ke grup whatsapp dengan siswa lain",
          "Sertifikat",
        ],
      },
    ],
    goals: [
      {
        id: 1,
        content: "Siswa memahami tentang framework Vue Js",
      },
      {
        id: 2,
        content: "Siswa mampu menginisiasi projek Nuxt (Framework Vue Js)",
      },
      {
        id: 3,
        content: "Siswa memahami dengan baik sebuah file Vue",
      },
      {
        id: 4,
        content: "Siswa memahami dengan baik Lifecycle Vue",
      },
      {
        id: 5,
        content:
          "Siswa memahami dan mampu mengimplementasi Property Vue Js (data, methods, mounted, dll)",
      },
      {
        id: 6,
        content:
          "Siswa memahami dan mampu mengimplementasi Vue Attribute (v-if, v-for dll)",
      },
      {
        id: 7,
        content:
          "Siswa memahami dan mampu mengimplementasi perpindahan page dalam projek Nuxt",
      },
      {
        id: 8,
        content:
          "Siswa memahami dan mampu mengimplementasi pembuatan dan pemanggilan component Vue",
      },
      {
        id: 9,
        content: "Siswa mampu mengolah dan memproses API",
      },
      {
        id: 10,
        content:
          "Siswa mampu menginstall library dan plugins dalam projek Nuxt",
      },
      {
        id: 11,
        content: "Siswa mampu mendeploy projek Vue / Nuxt ke Production",
      },
    ],
    faq: [
      {
        question:
          "Bisakah kelas ini untuk orang awam (tidak bisa programming)?",
        answer:
          "Kelas Frontend Master ini tidak cocok untuk orang yang belum memiliki basic. Siswa harus memiliki basic/dasar pemrograman seperti dasar HTML, CSS dan Javasctript untuk mengikuti kelas ini.",
        isActive: false,
      },
      {
        question: "Apa saja syarat untuk mengikuti kelas ini?",
        answer:
          "Memiliki laptop pribadi dengan minimum spek ram 4 GB, core i3, kondisi laptop sehat, Sudah memahami dasar pemrograman, dasar HTML, CSS dan Javascript, Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline).",
        isActive: false,
      },
      {
        question: "Apakah kelas ini bisa dilaksanakan secara online?",
        answer:
          "Kelas Frontend Master ini dilaksanakan secara offline (langsung tatap muka) maupun online (daring). Namun untuk online, hanya berlaku untuk pendaftaran dengan tipe privat (1 on 1 dengan mentor).",
        isActive: false,
      },
      {
        question:
          "Apakah akan mendapatkan sertifikat setelah selesai mengikuti kelas?",
        answer:
          "Setiap siswa yang telah selesai mengikuti kelas apapun di Digidev akan mendapatkan sertifikat sesuai dengan kelas yang diikuti dengan syarat mengikuti kelas sampai akhir.",
        isActive: false,
      },
      {
        question: "Kapan jadwal kelas dilaksanakan?",
        answer:
          "Jadwal kelas akan ditentukan pada saat briefiing (meeting awal) antara tim Digidev, mentor dan siswa. Jadi kamu diharuskan untuk hadir saat briefing kelas yang dipilih. Jika tidak hadir maka dianggap batal mengikuti kelas.",
        isActive: false,
      },
      {
        question: "Dimana kelas akan dilaksanakan?",
        answer:
          "Lokasi kelas berada di learning space milik Digidev (Jl. Harmonika Baru no.5a lt.2, Medan Selayang, Medan).",
        isActive: false,
      },
    ],
    tutors: [
      {
        id: 1,
        name: "Faishal Arif",
        location: "Medan - Jakarta Selatan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        linkedin: "https://www.linkedin.com/in/fshlarf/",
        github: "https://github.com/fshlarf",
        company: "ex-Blanja.com, ex-Elevenia, ex-Bonza, Seakun.id",
        bio: "Faishal Arif adalah seorang Software Engineer dengan pengalaman di dunia profesional selama 4 tahun. Saat ini sedang berkarir sebagai CEO di startup yang dibangunnya yaitu Seakun.id. Memiliki skill dan pengalaman di dunia modern web development untuk frontend, backend maupun mobile apps development.",
      },
      {
        id: 2,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.png",
        job: "Frontend Software Engineer",
        linkedin: "https://www.linkedin.com/in/ibnu-hazar/",
        github: "https://github.com/ibnuhazar101",
        company: "Iredium.com, Seakun.id",
        bio: "Sebelumnya bekerja di dunia telekomunikasi, Ibnu menjadi Junior Software Engineer yang memulai karir nya di dunia Web Development di tahun 2021. Selain bekerja full time di Seakun.id, Ibnu juga bekerja part time di Iredium.com.",
      },
    ],
    requirements: [
      "Memiliki laptop pribadi dengan minimum spesifikasi ram 4 GB, intel Core i3, kondisi laptop sehat.",
      "Sudah memahami dasar pemrograman, dasar HTML, CSS dan Javascript.",
      "Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline) dan menunjukkan sertifikat vaksin.",
    ],
  },
  {
    id: 3,
    name: "Backend Web Development (Node Js)",
    slug: "back-end",
    classDays: 8,
    classWeeks: 4,
    locations: ["Medan", "Jakarta", "Surabaya", "Bali"],
    summaryInfo: [
      "Belajar & Praktik (4 Minggu)",
      "8x Pertemuan",
      "Kuota Terbatas",
      "Waktu dan Lokasi fleksible (mengikuti jadwal siswa)",
    ],
    syllabus: [
      {
        id: 1,
        name: "Pengenalan tentang Website, Frontend, Backend, Database",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 2,
        name: "Pengenalan penggunaan Tools yang digunakan untuk ngoding",
        subSyllabus: [
          "Text Editor (VSC)",
          "Server Local (Node)",
          "Git",
          "Terminal (CMD, Powershell, Gitbash)",
        ],
        isOpen: false,
      },
      {
        id: 3,
        name: "Pengenalan tentang terminal, CLI, direktori file",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 4,
        name: "Pengenalan tentang komponen utama web (HTML, CSS, JS) beserta analoginya",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 5,
        name: "Pengenalan detail HTML",
        subSyllabus: [
          "Element",
          "Tag (single tag, paired tag)",
          "Attribute (class, id, dll)",
          "Content",
        ],
        isOpen: false,
      },
      {
        id: 6,
        name: "Pengenalan detail CSS",
        subSyllabus: [
          "CSS Syntax (Selector, Property, Value)",
          "Cara menggunakan CSS (inline html, di dalam tag style, file css terpisah)",
          "Selector CSS (dengan menggunakan tag, id, class)",
          "Box model CSS",
          "margin & padding",
          "background-color",
          "position & display",
          "border",
          "width & height",
          "font (color, font-weight, font-size, font-family)",
          "z-index",
          "flexbox",
          "grid",
          "responsive web design",
        ],
        isOpen: false,
      },
      {
        id: 7,
        name: "Library CSS - TailwindCSS",
        subSyllabus: ["CDN", "Tailwind Responsive"],
        isOpen: false,
      },
      {
        id: 8,
        name: "Pengenalan penggunaan Git & Github",
        subSyllabus: [
          "Buat akun github",
          "Buat repositori",
          "clone, pull, push",
        ],
        isOpen: false,
      },
      {
        id: 9,
        name: "Pengenalan dasar Javascript",
        subSyllabus: [
          "Tipe data (string, number, boolean, function, object, array, regex (opsional)",
          "String Bactic",
          "Operators (Arithmetic, Comparison, Logical Operators)",
          "Condition (if, if else, else)",
          "Looping Array",
          "Function (function invocation, function return, function parameters)",
          "DOM Manipulation (get element, create element, modification element, event listener)",
          "Manipulation array (push / pop, split, splice, slice, shift / unshift)",
        ],
        isOpen: false,
      },
      {
        id: 10,
        name: "Introduction Vue js & Nuxt js",
        subSyllabus: [],
        isOpen: false,
      },
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Privat",
        image: "/images/class/private.jpg",
        price: 1.5,
        priceType: "jt",
        isPreOrder: false,
        details: [
          "4 minggu (8x pertemuan)",
          "pertemuan offline",
          "Kurikulum terupdate",
          "Instruktur berpengalaman",
          "Dibutuhkan fulltime commitment",
          "Eksklusif untuk 1 mentee",
        ],
      },
      {
        id: 2,
        name: "Kelas Grup",
        image: "/images/class/group.jpg",
        price: 800,
        priceType: "ribu",
        isPreOrder: true,
        details: [
          "4 minggu (8x pertemuan)",
          "pertemuan offline",
          "Kurikulum terupdate",
          "Instruktur berpengalaman",
          "Dibutuhkan fulltime commitment",
          "1 grup terdiri dari 5 mentee",
        ],
      },
    ],
    goals: [
      {
        id: 1,
        content:
          "Anda akan mengerti ilmu digital marketing yang dapat diterapkan dalam pekerjaan Anda",
      },
      {
        id: 2,
        content:
          "Dengan memahami cara kerja digital marketing, Anda akan dapat memiliki marketing yang jauh lebih efektif dan tepat sasaran",
      },
      {
        id: 3,
        content:
          "Anda akan mengerti ilmu digital marketing yang dapat diterapkan dalam pekerjaan Anda",
      },
    ],
    faq: [
      {
        question: "Bagaimana peluang karier seorang data scientist?",
        answer: "Bagaimana peluang karier seorang data scientist?",
        isActive: false,
      },
      {
        question:
          "Berapa spec minimum laptop untuk mengikuti program Job Connector ini?",
        answer:
          "Berapa spec minimum laptop untuk mengikuti program Job Connector ini?",
        isActive: false,
      },
      {
        question:
          "Apa saja profesi yang dapat saya tempati setelah lulus dari program ini?",
        answer:
          "Apa saja profesi yang dapat saya tempati setelah lulus dari program ini?",
        isActive: false,
      },
      {
        question: "Apakah ada test masuk untuk mengikuti program ini?",
        answer: "Apakah ada test masuk untuk mengikuti program ini?",
        isActive: false,
      },
    ],
    tutors: [
      {
        id: 1,
        name: "Faishal Arif",
        location: "Medan - Jakarta Selatan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        linkedin: "https://www.linkedin.com/in/fshlarf/",
        github: "https://github.com/fshlarf",
        company: "ex-Blanja.com, ex-Elevenia, Seakun.id",
        bio: "Faishal Arif adalah seorang Software Engineer dengan pengalaman di dunia profesional selama 4 tahun. Saat ini sedang berkarir sebagai CEO di startup yang dibangunnya yaitu Seakun.id. Memiliki skill dan pengalaman di dunia modern web development untuk frontend, backend maupun mobile apps development.",
      },
      {
        id: 2,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.png",
        job: "Frontend Software Engineer",
        linkedin: "https://www.linkedin.com/in/ibnu-hazar/",
        github: "https://github.com/ibnuhazar101",
        company: "Iredium.com, Seakun.id",
        bio: "Sebelumnya bekerja di dunia telekomunikasi, Ibnu menjadi Junior Software Engineer yang memulai karir nya di dunia Web Development di tahun 2021. Selain bekerja full time di Seakun.id, Ibnu juga bekerja part time di Iredium.com.",
      },
      {
        id: 3,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/ihsan.png",
        job: "Software Engineer",
        linkedin:
          "https://www.linkedin.com/in/muhammad-ihsan-batubara-07b982117/",
        github: "https://github.com/ihsanbara94",
        company: "Digidev.id",
        bio: "Menjadi salah satu siswa lulusan digidev di kelas basic modern web dan frontend, Ihsan bergabung dengan digidev sebagai frontend engineer sekaligus mentor untuk membagikan ilmu nya ke siswa digidev selanjutnya.",
      },
    ],
    requirements: [
      "Memiliki laptop pribadi dengan minimum spesifikasi ram 4 GB, intel Core i3, kondisi laptop sehat.",
      "Mengerti dasar-dasar penggunaan laptop dan browser (seperti instalasi software, dsb).",
      "Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline) dan menunjukkan sertifikat vaksin.",
    ],
  },
  {
    id: 4,
    name: "Fullstack Web Development",
    slug: "full-stack",
    classDays: 16,
    classWeeks: 8,
    locations: ["Medan", "Jakarta", "Yogyakarta", "Bali", "Palembang"],
    summaryInfo: [
      "Belajar & Praktik (4 Minggu)",
      "16x Pertemuan",
      "Kuota Terbatas",
      "Waktu dan Lokasi fleksible (mengikuti jadwal siswa)",
    ],
    syllabus: [
      {
        id: 1,
        name: "Pengenalan tentang Website, Frontend, Backend, Database",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 2,
        name: "Pengenalan penggunaan Tools yang digunakan untuk ngoding",
        subSyllabus: [
          "Text Editor (VSC)",
          "Server Local (Node)",
          "Git",
          "Terminal (CMD, Powershell, Gitbash)",
        ],
        isOpen: false,
      },
      {
        id: 3,
        name: "Pengenalan tentang terminal, CLI, direktori file",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 4,
        name: "Pengenalan tentang komponen utama web (HTML, CSS, JS) beserta analoginya",
        subSyllabus: [],
        isOpen: false,
      },
      {
        id: 5,
        name: "Pengenalan detail HTML",
        subSyllabus: [
          "Element",
          "Tag (single tag, paired tag)",
          "Attribute (class, id, dll)",
          "Content",
        ],
        isOpen: false,
      },
      {
        id: 6,
        name: "Pengenalan detail CSS",
        subSyllabus: [
          "CSS Syntax (Selector, Property, Value)",
          "Cara menggunakan CSS (inline html, di dalam tag style, file css terpisah)",
          "Selector CSS (dengan menggunakan tag, id, class)",
          "Box model CSS",
          "margin & padding",
          "background-color",
          "position & display",
          "border",
          "width & height",
          "font (color, font-weight, font-size, font-family)",
          "z-index",
          "flexbox",
          "grid",
          "responsive web design",
        ],
        isOpen: false,
      },
      {
        id: 7,
        name: "Library CSS - TailwindCSS",
        subSyllabus: [
          "CDN",
          "Watch",
          "Just in Time (JIT) mode",
          "Tailwind Responsive",
        ],
        isOpen: false,
      },
      {
        id: 8,
        name: "Pengenalan penggunaan Git & Github",
        subSyllabus: [
          "Buat akun github",
          "Buat repositori",
          "clone, branch, checkout, pull, add, commit, push",
          "Push existing projek ke repo",
          "Pull Request",
        ],
        isOpen: false,
      },
      {
        id: 9,
        name: "Pengenalan dasar Javascript",
        subSyllabus: [
          "Primitiv data (string, number, boolean, function, object, array, regex (opsional)",
          "String Bactic",
          "Operators (Arithmetic, Comparison, Logical Operators)",
          "Condition (if, if else, else)",
          "Looping Array",
          "Function (function invocation, function return, function parameters)",
          "DOM Manipulation (get element, create element, modification element, event listener)",
          "Manipulation array (push / pop, split, splice, slice, shift / unshift)",
        ],
        isOpen: false,
      },
      {
        id: 10,
        name: "Introduction Vue js & Nuxt js",
        subSyllabus: [],
        isOpen: false,
      },
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Privat",
        image: "/images/class/private.jpg",
        price: 2.8,
        priceType: "jt",
        isPreOrder: false,
        details: [
          "8 minggu (16x pertemuan)",
          "pertemuan offline",
          "Kurikulum terupdate",
          "Instruktur berpengalaman",
          "Dibutuhkan fulltime commitment",
          "Eksklusif untuk 1 mentee",
        ],
      },
      {
        id: 2,
        name: "Kelas Grup",
        image: "/images/class/group.jpg",
        price: 1.7,
        priceType: "jt",
        isPreOrder: true,
        details: [
          "8 minggu (16x pertemuan)",
          "pertemuan offline",
          "Kurikulum terupdate",
          "Instruktur berpengalaman",
          "Dibutuhkan fulltime commitment",
          "1 grup terdiri dari 5 mentee",
        ],
      },
    ],
    goals: [
      {
        id: 1,
        content:
          "Anda akan mengerti ilmu digital marketing yang dapat diterapkan dalam pekerjaan Anda",
      },
      {
        id: 2,
        content:
          "Dengan memahami cara kerja digital marketing, Anda akan dapat memiliki marketing yang jauh lebih efektif dan tepat sasaran",
      },
      {
        id: 3,
        content:
          "Anda akan mengerti ilmu digital marketing yang dapat diterapkan dalam pekerjaan Anda",
      },
    ],
    faq: [
      {
        question: "Bagaimana peluang karier seorang data scientist?",
        answer: "Bagaimana peluang karier seorang data scientist?",
        isActive: false,
      },
      {
        question:
          "Berapa spec minimum laptop untuk mengikuti program Job Connector ini?",
        answer:
          "Berapa spec minimum laptop untuk mengikuti program Job Connector ini?",
        isActive: false,
      },
      {
        question:
          "Apa saja profesi yang dapat saya tempati setelah lulus dari program ini?",
        answer:
          "Apa saja profesi yang dapat saya tempati setelah lulus dari program ini?",
        isActive: false,
      },
      {
        question: "Apakah ada test masuk untuk mengikuti program ini?",
        answer: "Apakah ada test masuk untuk mengikuti program ini?",
        isActive: false,
      },
    ],
    tutors: [
      {
        id: 1,
        name: "Faishal Arif",
        location: "Medan - Jakarta Selatan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        linkedin: "https://www.linkedin.com/in/fshlarf/",
        github: "https://github.com/fshlarf",
        company: "ex-Blanja.com, ex-Elevenia, Seakun.id",
        bio: "Faishal Arif adalah seorang Software Engineer dengan pengalaman di dunia profesional selama 4 tahun. Saat ini sedang berkarir sebagai CEO di startup yang dibangunnya yaitu Seakun.id. Memiliki skill dan pengalaman di dunia modern web development untuk frontend, backend maupun mobile apps development.",
      },
      {
        id: 2,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.png",
        job: "Frontend Software Engineer",
        linkedin: "https://www.linkedin.com/in/ibnu-hazar/",
        github: "https://github.com/ibnuhazar101",
        company: "Iredium.com, Seakun.id",
        bio: "Sebelumnya bekerja di dunia telekomunikasi, Ibnu menjadi Junior Software Engineer yang memulai karir nya di dunia Web Development di tahun 2021. Selain bekerja full time di Seakun.id, Ibnu juga bekerja part time di Iredium.com.",
      },
      {
        id: 3,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/ihsan.png",
        job: "Software Engineer",
        linkedin:
          "https://www.linkedin.com/in/muhammad-ihsan-batubara-07b982117/",
        github: "https://github.com/ihsanbara94",
        company: "Digidev.id",
        bio: "Menjadi salah satu siswa lulusan digidev di kelas basic modern web dan frontend, Ihsan bergabung dengan digidev sebagai frontend engineer sekaligus mentor untuk membagikan ilmu nya ke siswa digidev selanjutnya.",
      },
    ],
    requirements: [
      "Memiliki laptop pribadi dengan minimum spesifikasi ram 4 GB, intel Core i3, kondisi laptop sehat.",
      "Mengerti dasar-dasar penggunaan laptop dan browser (seperti instalasi software, dsb).",
      "Sudah divaksin minimal 1x dan mengikuti prokes (untuk kelas offline) dan menunjukkan sertifikat vaksin.",
    ],
  },
];
