<template>
  <section class="py-20 bg-main">
    <div class="leading-7 max-w-[1120px] mx-auto">
      <div class="box-border mx-auto border-solid max-w-7xl">
        <div
          class="
            flex
            justify-between
            items-center
            leading-7
            text-center
            border-0 border-gray-200
          "
        >
          <h2
            class="
              box-border
              mx-0
              text-40
              leading-tight
              tracking-tight
              border-solid
              font-semibold
            "
          >
            <span class="font-bold">Kelas</span> yang tersedia
          </h2>

          <div class="flex h-[55px]">
            <button
              class="
                font-semibold
                h-full
                text-18
                w-full
                rounded-l-[10px]
                px-14
                border-2 border-primary
              "
              :class="{
                'bg-primary text-white': activeClassList === groupClass,
              }"
              @click="activeClassList = groupClass"
            >
              Group
            </button>
            <button
              class="
                h-full
                text-18
                w-full
                font-semibold
                border-2 border-primary
                rounded-r-[10px]
                px-14
              "
              :class="{
                'bg-primary text-white': activeClassList === privateClass,
              }"
              @click="activeClassList = privateClass"
            >
              Private
            </button>
          </div>
        </div>
      </div>
      <div
        class="grid w-full grid-cols-3 gap-0 sm:grid-cols-3 lg:grid-cols-4 mt-4"
      >
        <div v-for="(item, id) in activeClassList" :key="id">
          <ClassPrice :packet="item" :id="id" />
        </div>
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
          scheduling: ["Sebulan 8x pertemuan"],
          slug: "web-basic",
        },
        {
          price: "2,8",
          priceType: "jt",
          classType: "Kelas Frontend",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan"],
          slug: "front-end",
        },
        {
          price: "2,8",
          priceType: "jt",
          classType: "Kelas Backend",
          className: "(Node JS)",
          scheduling: ["Sebulan 8x pertemuan"],
          slug: "back-end",
        },
        {
          price: "4",
          priceType: "jt",
          classType: "Kelas Fullstack",
          className: "(Vue JS + Node JS)",
          scheduling: ["2 bulan 16x pertemuan"],
          slug: "full-stack",
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
        },
        {
          price: "950",
          priceType: "ribu",
          classType: "Kelas Frontend",
          className: "(Vue Js)",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "front-end",
        },
        {
          price: "950",
          priceType: "ribu",
          classType: "Kelas Backend",
          className: "(Node JS)",
          scheduling: ["Sebulan 8x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "back-end",
        },
        {
          price: "1,8",
          priceType: "jt",
          classType: "Kelas Fullstack",
          className: "(Vue JS + Node JS)",
          scheduling: ["2 bulan 16x pertemuan", "Grup berisi maksimum 5 orang"],
          slug: "full-stack",
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
