<template>
  <div class="bg-main">
    <div id="available-class" class="container py-10 md:py-14 lg:py-20">
      <h2
        class="
          leading-7
          text-24
          lg:text-40
          leading-tight
          tracking-tight
          font-semibold
          text-center
          lg:text-left
        "
      >
        <span class="font-bold">Kelas</span> yang tersedia
      </h2>
      <div
        class="
          mt-4
          lg:mt-12
          grid grid-cols-1
          lg:grid-cols-3
          xl:grid-cols-4
          gap-2
          md:gap-8
        "
      >
        <ClassCard
          v-for="(item, id) in dataClasses"
          :key="id"
          :data-class="item"
          :id="id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClassCard from "~/components/mollecules/ClassCard.vue";
export default {
  components: {
    ClassCard,
  },
  data() {
    return {
      items: 4,
      dataClasses: [
        {
          id: 1,
          name: "Kelas Web Basic",
          image: "/images/hero/hero2.jpeg",
          slug: "web-basic",
          isActive: true,
          classType: [
            {
              name: "Grup",
              oriPrice: 1200000,
              price: 950000,
            },
            {
              name: "Privat",
              oriPrice: 2400000,
              price: 1900000,
            },
          ],
          benefits: [
            "Tersedia kelas grup dan privat",
            "Sertifikat",
            "HTML, CSS, Javascript, Git",
          ],
        },
        {
          id: 2,
          name: "Kelas Frontend Master",
          image: "/images/hero/hero3.jpeg",
          slug: "front-end",
          isActive: true,
          classType: [
            {
              name: "Grup",
              oriPrice: 1500000,
              price: 1200000,
            },
            {
              name: "Privat",
              oriPrice: 3000000,
              price: 2400000,
            },
          ],
          benefits: [
            "Tersedia kelas grup dan privat",
            "Sertifikat",
            "Vue Js, Nuxt Js, API, Axios, Deployment",
          ],
        },
        {
          id: 3,
          name: "Kelas Backend Master",
          image: "/images/hero/hero4.jpeg",
          slug: "back-end",
          isActive: false,
          classType: [
            {
              name: "Grup",
              oriPrice: 1500000,
              price: 1200000,
            },
            {
              name: "Privat",
              oriPrice: 3000000,
              price: 2400000,
            },
          ],
          benefits: [
            "Tersedia kelas grup dan privat",
            "Sertifikat",
            "Node Js, Express Js, API, SQL",
          ],
        },
        {
          id: 4,
          name: "Kelas Administrasi Perkantoran",
          image: "/images/hero/hero-office.jpeg",
          slug: "office",
          isActive: false,
          classType: [
            {
              name: "Grup",
              oriPrice: 1150000,
              price: 900000,
            },
            {
              name: "Privat",
              oriPrice: 2300000,
              price: 1800000,
            },
          ],
          benefits: [
            "Tersedia kelas grup dan privat",
            "Sertifikat",
            "Microsoft Office (Word, Excel, Power Point), Surat Elektronik",
          ],
        },
        // {
        //   id: 4,
        //   name: "Kelas Bimbingan Tugas Akhir",
        //   image: "/images/hero/hero5.jpeg",
        //   slug: "tugas-akhir",
        //   isActive: false,
        //   classType: [
        //     {
        //       name: "Privat",
        //       price: 4500000,
        //     },
        //   ],
        //   benefits: [
        //     "Tersedia kelas privat",
        //     "Sertifikat",
        //     "Materi sesuai Tugas Akhir",
        //   ],
        // },
      ],
    };
  },
};
</script>

<style></style>
