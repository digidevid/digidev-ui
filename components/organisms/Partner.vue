<template>
  <section id="partner" class="bg-white py-10 md:py-14 lg:py-20 container">
    <h2
      class="
        relative
        text-24
        lg:text-40
        pb-10
        xl:pb-20
        z-10
        font-semibold
        text-center
      "
    >
      <span class="font-bold">Perusahaan</span> Rekanan
    </h2>
    <div
      class="
        grid grid-cols-2
        lg:grid-cols-4
        bg-white
        lg:py-8
        md:px-24
        lg:px-32
        w-full
        gap-4
        md:gap-8
        lg:gap-14
        items-center
        lg:rounded-full lg:shadow-xl
      "
    >
      <img
        v-for="(partner, id) in partnerList"
        :key="id"
        class="w-[100px] mx-auto"
        :src="`/images/partner/${partner.name}.png`"
        alt=""
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      partnerList: [
        {
          name: "SEAKUN",
        },
        {
          name: "IQRA",
        },
        {
          name: "CODEBOX",
        },
        {
          name: "IREDIUM",
        },
      ],
    };
  },
};
</script>

<style></style>
