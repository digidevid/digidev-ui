<template>
  <div class="max-w-[1200px] mx-auto py-20">
    <h2
      class="
        relative
        w-full
        text-center
        mt-5
        mb-10
        text-40
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
        grid-cols-3
        gap-0
        sm:grid-cols-3
        lg:grid-cols-4
      "
    >
      <div v-for="item in elemenContent" :key="item.id">
        <FlowCard
          :vectorElement="item.vectorElement"
          :headerContent="item.headerContent"
          :paragraphContent="item.paragraphContent"
        />
      </div>
      <div class="w-full absolute flex justify-center space-x-28 top-12">
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
            "Tunggu admin digidev menghubungi kamu untuk melakukan persiapan kelas.",
        },
        {
          vectorElement: "CreditCard",
          headerContent: "Pembayaran",
          paragraphContent:
            "Lakukan pembayaran agar kelas bisa dilaksakan. Kamu akan diinvite ke dalam grup  whatsapp setelah melakukan pembayaran.",
        },
        {
          vectorElement: "Crosshair",
          headerContent: "Penentuan Lokasi & Waktu Belajar",
          paragraphContent:
            "Diskusi lokasi dan waktu belajar. Proses belajar akan dilaksanakan secara offline (agar eksklusif) dengan mengikuti prokes.",
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
