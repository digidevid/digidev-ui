<template>
  <section id="partner" class="bg-white py-20 max-w-[1120px] m-auto">
    <h2 class="relative text-40 pb-20 z-10 font-semibold text-center">
      <span class="font-bold">Perusahaan</span> Rekanan
    </h2>
    <div
      class="
        flex flex-wrap
        bg-color-white
        px-44
        py-5
        w-full
        space-x-14
        items-center
        justify-center
        rounded-full
      "
      style="box-shadow: 0px 29px 62px -22px rgba(10, 125, 250, 0.04)"
    >
      <div v-for="(partner, id) in partnerList" :key="id">
        <PartnerList :partnerName="partner.partnerName" />
      </div>
    </div>
  </section>
</template>

<script>
import PartnerList from "../mollecules/PartnerList.vue";
export default {
  components: { PartnerList },
  data() {
    return {
      partnerList: [
        {
          partnerName: "SEAKUN",
        },
        {
          partnerName: "IQRA",
        },
        {
          partnerName: "CODEBOX",
        },
        {
          partnerName: "IREDIUM",
        },
      ],
    };
  },
};
</script>

<style></style>
