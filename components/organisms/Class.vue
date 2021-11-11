<template>
  <!-- Section 6 -->
  <section
    class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24"
  >
    <div
      class="
        box-border
        px-4
        mx-auto
        border-solid
        sm:px-6
        md:px-6
        lg:px-8
        max-w-7xl
      "
    >
      <div
        class="
          flex flex-col
          items-center
          leading-7
          text-center text-gray-900
          border-0 border-gray-200
        "
      >
        <h2
          class="
            box-border
            m-0
            text-3xl
            font-semibold
            leading-tight
            tracking-tight
            text-black
            border-solid
            sm:text-4xl
            md:text-5xl
          "
        >
          Simple, Transparent Pricing
        </h2>
        <p
          class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl"
        >
          Pricing to fit the needs of any companie size.
        </p>
      </div>
    </div>
    <div
      class="
        px-[163px]
        grid
        w-full
        grid-cols-3
        gap-0
        sm:grid-cols-3
        lg:grid-cols-4
      "
    >
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
import ClassPrice from "../mollecules/ClassPrice.vue";
export default {
  components: { ClassPrice },
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
          className: "Vue JS + Node JS",
          scheduling: "Sebulan 8x pertemuan",
        },
      ],
    };
  },
};
</script>

<style></style>
