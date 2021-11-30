<template>
  <section class="py-10 md:py-14 lg:py-20 bg-main">
    <div class="leading-7 container">
      <h2
        class="
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

      <div class="mt-8">
        <p class="text-12 md:text-16 dark-grey text-left">
          Belajar secara <span class="font-bold text-primary">group</span> (semi
          privat) membuat biaya kelas menjadi lebih murah.
        </p>
        <button
          class="
            hidden
            lg:block
            h-full
            text-18
            w-[200px]
            font-semibold
            border-2 border-primary
            rounded-[10px]
            md:px-14
            mt-4
            float-right
          "
        >
          Group
        </button>
      </div>

      <div
        class="
          hide-scroll-bar
          flex
          xl:flex-none xl:grid xl:grid-cols-4
          mt-4
          md:mt-[60px]
          overflow-x-scroll
          xl:overflow-x-visible
          p-2
          xl:p-0
        "
      >
        <ClassPrice
          v-for="(item, id) in groupClass"
          :key="id"
          :packet="item"
          :id="id"
        />
      </div>
    </div>
    <div class="leading-7 container mt-16">
      <div class="mt-8">
        <p class="text-12 md:text-16 dark-grey text-left">
          Belajar secara
          <span class="font-bold text-primary">full privat</span> membuat
          aktivitas belajar menjadi sangat efisien karena mentor akan membimbing
          hanya khusus untuk kamu.
        </p>
        <div>
          <button
            class="
              hidden
              lg:block
              h-full
              text-18
              w-[200px]
              font-semibold
              border-2 border-primary
              rounded-[10px]
              md:px-14
              mt-4
              float-right
            "
          >
            Private
          </button>
        </div>
      </div>
      <div
        class="
          hide-scroll-bar
          flex
          xl:flex-none xl:grid xl:grid-cols-4
          mt-4
          md:mt-[60px]
          overflow-x-scroll
          xl:overflow-x-visible
          p-2
          xl:p-0
        "
      >
        <ClassPrice
          v-for="(item, id) in privateClass"
          :key="id"
          :packet="item"
          :id="id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../atoms/Button.vue";
import ClassPrice from "../mollecules/ClassPrice.vue";
export default {
  components: { ClassPrice, Button },
  data() {
    return {
      activeClassList: [],
      privateClass: [
        {
          price: "2",
          priceType: "jt",
          classType: "Kelas Basic",
          className: "Modern Web",
          scheduling: ["Sebulan 8x pertemuan", "Eksklusif untuk 1 orang"],
          slug: "web-basic",
          isActive: true,
        },
        {
          price: "2,8",
          priceType: "jt",
          classType: "Kelas Frontend Tahap 1",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan", "Eksklusif untuk 1 orang"],
          slug: "front-end-1",
          isActive: true,
        },
        {
          price: "2,8",
          priceType: "jt",
          classType: "Kelas Frontend Tahap 2",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan", "Eksklusif untuk 1 orang"],
          slug: "front-end-2",
          isActive: true,
        },
        {
          price: "4,5",
          priceType: "jt",
          classType: "Bimbingan Tugas Akhir",
          className: "Website & Mobile Apps",
          scheduling: ["2 Bulan 16x pertemuan", "Eksklusif untuk 1 orang"],
          slug: "back-end",
          isActive: false,
        },
      ],
      groupClass: [
        {
          price: "750",
          priceType: "ribu",
          classType: "Kelas Basic",
          className: "Modern Web",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "web-basic",
          isActive: true,
        },
        {
          price: "950",
          priceType: "ribu",
          classType: "Kelas Frontend Tahap 1",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "front-end-1",
          isActive: true,
        },
        {
          price: "950",
          priceType: "ribu",
          classType: "Kelas Frontend Tahap 2",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "front-end-2",
          isActive: true,
        },
        {
          price: "950",
          priceType: "ribu",
          classType: "Kelas Backend",
          className: "(Node JS)",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "back-end",
          isActive: false,
        },
      ],
    };
  },
  mounted() {
    this.activeClassList = this.groupClass;
  },
};
</script>

<style></style>
