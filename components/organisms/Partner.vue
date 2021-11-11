<template>
  <section class="bg-white pt-7 pb-14">
    <h2 class="text-[40px] px-[163px] pb-20">
      <span class="font-bold">Perusahaan</span> Rekanan
    </h2>
    <div class="px-44">
      <div
        class="
          flex flex-wrap
          bg-color-white
          shadow-lg
          px-44
          py-5
          w-full
          space-x-14
          items-center
          justify-center
          rounded-full
        "
      >
        <div v-for="(partner, id) in partnerList" :key="id">
          <PartnerList :partnerName="partner.partnerName" />
        </div>
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
          partnerName: "IREDIUM",
        },
        {
          partnerName: "IQRA",
        },
        {
          partnerName: "Iredium",
        },
        {
          partnerName: "Iredium",
        },
      ],
    };
  },
};
</script>

<style></style>
