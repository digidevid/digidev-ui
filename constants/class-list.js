export const classList = [
  {
    id: 1,
    name: "Basic Modern Web Development",
    slug: "web-basic",
    classDays: 8,
    classWeeks: 4,
    summaryInfo: [
      "Belajar & Praktik (4 Minggu)",
      "8x Pertemuan",
      "Kuota Terbatas",
      "Waktu dan Lokasi fleksible (mengikuti jadwal siswa)",
    ],
    locations: [
      "Medan",
      "Jakarta (coming soon)",
      "Bandung (coming soon)",
      "Malang (coming soon)",
    ],
    syllabus: [
      "Pengenalan tentang Website, Frontend, Backend, Database",
      "Pengenalan penggunaan Tools yang digunakan untuk ngoding",
      "Pengenalan tentang komponen utama web (HTML, CSS, JS) beserta analoginya",
      "Pengenalan detail HTML",
      "Pengenalan detail CSS",
      "Library CSS - TailwindCSS",
      "Pengenalan penggunaan Git & Github",
      "Pengenalan dasar Javascript",
      "Introduction Vue js & Nuxt js",
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Grup",
        price: 750,
        priceType: "ribu",
        realPrice: 750000,
        isPreOrder: true,
        details: [
          "Eksklusif tatap muka",
          "8x pertemuan",
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
        price: 2,
        priceType: "jt",
        realPrice: 2000000,
        isPreOrder: false,
        details: [
          "Eksklusif untuk 1 siswa",
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
        question: "Diaman kelas akan dilaksanakan?",
        answer:
          "Lokasi kelas akan ditentukan pada saat (meeting awal) antara tim Digidev, mentor dan siswa. Lokasi bisa di rumah siswa, cafe, atau learning space milik Digidev.",
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
        company: "ex-Blanja.com, ex-Elevenia, Seakun.id",
        bio: "Faishal Arif adalah seorang Software Engineer dengan pengalaman di dunia profesional selama 4 tahun. Saat ini sedang berkarir sebagai CEO di startup yang dibangunnya yaitu Seakun.id. Memiliki skill dan pengalaman di dunia modern web development untuk frontend, backend maupun mobile apps development.",
      },
      {
        id: 2,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.jpg",
        job: "Frontend Software Engineer",
        company: "Iredium.com, Seakun.id",
        bio: "Ibnu adalah seorang Junior Software Engineer yang memulai karir nya di dunia Web Development di tahun 2021. Selain bekerja fulltime di Seakun.id, Ibnu juga bekerja parttime di Iredium.com.",
      },
      {
        id: 3,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/uncu.png",
        job: "Software Engineer",
        company: "Digidev.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
    ],
  },
  {
    id: 2,
    name: "Frontend Web Development (Vue Js)",
    slug: "front-end",
    classDays: 8,
    classWeeks: 4,
    locations: ["Medan", "Jakarta", "Yogyakarta", "Bandung"],
    syllabus: [
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Privat",
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
        location: "Medan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        id: 2,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/uncu.png",
        job: "Software Engineer",
        company: "Digidev.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        id: 3,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.jpg",
        job: "Software Engineer",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
    ],
  },
  {
    id: 3,
    name: "Backend Web Development (Node Js)",
    slug: "back-end",
    classDays: 8,
    classWeeks: 4,
    locations: ["Medan", "Jakarta", "Surabaya", "Bali"],
    syllabus: [
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Privat",
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
        location: "Medan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        id: 2,
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/uncu.png",
        job: "Software Engineer",
        company: "Digidev.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        id: 3,
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.jpg",
        job: "Software Engineer",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
    ],
  },
  {
    id: 4,
    name: "Fullstack Web Development",
    slug: "full-stack",
    classDays: 16,
    classWeeks: 8,
    locations: ["Medan", "Jakarta", "Yogyakarta", "Bali", "Palembang"],
    syllabus: [
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
      "Pengenalan Modern Web Development",
    ],
    classTypes: [
      {
        id: 1,
        name: "Kelas Privat",
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
        name: "Faishal Arif",
        location: "Medan",
        photo: "/images/mentor/faishal.png",
        job: "CEO & Founder",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        name: "M. Ihsan Batubara",
        location: "Medan",
        photo: "/images/mentor/uncu.png",
        job: "Software Engineer",
        company: "Digidev.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
      {
        name: "Ibnu Hazar",
        location: "Medan",
        photo: "/images/mentor/ibnu.jpg",
        job: "Software Engineer",
        company: "Seakun.id",
        bio: "Memiliki pengalaman 10+ tahun dan pernah bekerja di perusahaan besar seperti Unilever. Sebelumnya, Intan juga telah memimpin berbagai project dari brand seperti XL Axiata, Nestle, dan lainnya.",
      },
    ],
  },
];
