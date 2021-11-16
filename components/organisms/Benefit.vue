<template>
  <div id="benefit" class="py-10 md:py-14 lg:py-20 relative w-full">
    <div class="absolute w-full bottom-4 xl:top-40 left-0 -z-10">
      <img
        class="w-full"
        src="/images/vector/Vector123.png"
        alt="background benefit"
      />
    </div>

    <div class="container">
      <h2 class="text-24 lg:text-40 font-semibold tracking-tight text-center">
        <span class="font-bold">Keunggulan</span> Digidev
      </h2>
      <div
        class="
          relative
          pt-[72px]
          grid grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-12
          xl:gap-4
          z-50
        "
      >
        <BenefitCard
          v-for="(benefit, id) in dataBenefits"
          :key="id"
          :benefit="benefit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitCard from "~/components/mollecules/BenefitCard";
export default {
  components: {
    BenefitCard,
  },
  data() {
    return {
      dataBenefits: [
        {
          title: "Berpengalaman",
          icon: "/images/vector/rating.png",
          start: "Mentor dengan segudang",
          bold: "pengalaman",
          end: "yang berkarir di startup ternama.",
        },
        {
          title: "Privat dan Ekslusif",
          icon: "/images/vector/exclusive.png",
          start: "Kelas dilaksanakan secara",
          bold: "offline",
          end: "privat dan eksklusif dengan mengikuti prokes.",
        },
        {
          title: "Kurikulum Sesuai Dunia Kerja",
          icon: "/images/vector/curriculum.png",
          start: "Kurikulum yang dipelajari disesuaikan dengan",
          bold: "kebutuhan dunia kerja",
          end: "saat ini.",
        },
        {
          title: "Relatif Terjangkau",
          icon: "/images/vector/money.png",
          start: "Dengan asas saling tolong menolong membuat kelas",
          bold: "lebih terjangkau.",
          end: "",
        },
      ],
    };
  },
};
</script>

<style>
.vector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
