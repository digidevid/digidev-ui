<template>
  <div class="container py-10 md:py-14 lg:py-20">
    <h2
      class="
        relative
        w-3/4
        md:w-full
        lg:text-center
        mt-5
        mb-8
        md:mb-10
        text-24
        lg:text-40
        leading-tight
        font-semibold
      "
    >
      <span class="font-bold">Tahapan Mengikuti</span> Program Kelas
    </h2>
    <div
      class="
        relative
        grid
        w-full
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        md:gap-4
      "
    >
      <div v-for="item in elemenContent" :key="item.id">
        <FlowCard
          :vectorElement="item.vectorElement"
          :headerContent="item.headerContent"
          :paragraphContent="item.paragraphContent"
        />
      </div>
      <div
        class="w-full absolute hidden xl:flex justify-center space-x-28 top-12"
      >
        <div>
          <img src="/images/vector/Vector-a.png" alt="Vector-a" />
        </div>
        <div>
          <img class="pt-5" src="/images/vector/Vector-b.png" alt="Vector-b" />
        </div>
        <div>
          <img src="/images/vector/Vector-c.png" alt="Vector-c" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlowCard from "../mollecules/FlowCard.vue";
export default {
  components: { FlowCard },
  data() {
    return {
      elemenContent: [
        {
          vectorElement: "NotePencil",
          headerContent: "Daftar",
          paragraphContent:
            "Tunggu admin digidev menghubungi kamu untuk diinvite ke dalam grup whatsapp agar dapat mengatur jadwal briefing.",
        },
        {
          vectorElement: "Crosshair",
          headerContent: "Penentuan Lokasi & Waktu Belajar",
          paragraphContent:
            "Diskusi lokasi dan waktu belajar. Proses belajar akan dilaksanakan secara offline (agar eksklusif) dengan mengikuti prokes.",
        },
        {
          vectorElement: "CreditCard",
          headerContent: "Pembayaran",
          paragraphContent:
            "Lakukan pembayaran 3 hari sebelum kelas dimulai, atau siswa dianggap batal mengikuti kelas.",
        },
        {
          vectorElement: "ChalkboardTeacher",
          headerContent: "Kelas dilaksanakan",
          paragraphContent:
            "Kelas dilaksanakan sesuai dengan Lokasi dan Waktu Belajar yang sudah ditentukan bersama.",
        },
      ],
    };
  },
};
</script>

<style></style>
