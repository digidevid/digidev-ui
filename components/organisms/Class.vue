<template>
  <section
    class="
      py-8
      leading-7
      text-gray-900
      bg-white
      sm:py-12
      md:py-16
      lg:py-24
      max-w-[1120px]
      m-auto
    "
  >
    <div
      class="box-border mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl"
    >
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
            m-0
            text-3xl
            leading-tight
            tracking-tight
            text-black
            border-solid
            sm:text-4xl
            md:text-5xl
          "
        >
          <span class="font-semibold">Kelas</span> yang tersedia
        </h2>

        <div class="flex h-[55px] w-[177px]">
          <button
            class="bg-primary text-white h-full w-full rounded-l-[10px] px-8"
          >
            Private
          </button>
          <button
            class="
              bg-white
              h-full
              w-full
              border-2 border-primary
              rounded-r-[10px]
              px-8
            "
          >
            Group
          </button>
        </div>
      </div>
    </div>
    <div class="grid w-full grid-cols-3 gap-0 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="item in itemClass" :key="item.id">
        <ClassPrice
          :price="item.price"
          :classType="item.classType"
          :className="item.className"
          :scheduling="item.scheduling"
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
      itemClass: [
        {
          price: "1",
          classType: "Kelas Basic",
          className: "Modern Web",
          scheduling: "Sebulan 8x pertemuan",
        },
        {
          price: "1,5",
          classType: "Kelas Frontend",
          className: "(Vue Js)",
          scheduling: "Sebulan 8x pertemuan",
        },
        {
          price: "1,5",
          classType: "Kelas Backend",
          className: "(Node JS)",
          scheduling: "Sebulan 8x pertemuan",
        },
        {
          price: "2,8",
          classType: "Kelas Fullstack",
          className: "(Vue JS + Node JS)",
          scheduling: "Sebulan 8x pertemuan",
        },
      ],
    };
  },
};
</script>

<style></style>
