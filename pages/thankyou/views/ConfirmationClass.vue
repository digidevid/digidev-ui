<template>
  <div
    class="
      grid
      justify-center
      items-center
      bg-white
      rounded-t-[25px]
      lg:rounded-t-[55px]
      pb-[164px]
    "
  >
    <div class="grid justify-center items-center">
      <div class="grid items-center justify-center pt-2 lg:pt-24 lg:pb-7 pb-2">
        <img
          class="lg:w-24 w-20"
          src="/images/vector/CircleWavyCheck.png"
          alt=""
        />
      </div>

      <h1 class="text-center font-bold lg:text-32 text-20">
        Pendaftaran kamu berhasil!
      </h1>
      <p class="text-center lg:text-24 text-16 pt-2 lg:pb-8 pb-6">
        Terima kasih atas kepercayaan kamu
      </p>

      <div class="flex items-center justify-center">
        <div
          class="
            space-y-2
            p-5
            lg:w-[432px]
            w-[312px]
            bg-white
            shadow-md
            rounded-[15px]
          "
        >
          <p class="text-gray-400 text-14 lg:text-16">Kelas</p>
          <p class="font-bold text-14 lg:text-16 text-[#363636]">
            {{ titleClass }}
          </p>
          <hr />
          <p class="text-gray-400 text-14 lg:text-16">Lokasi Kelas</p>
          <p class="font-bold text-14 lg:text-16 text-[#363636]">{{ city }}</p>
        </div>
      </div>

      <p
        class="
          text-12
          lg:text-16 lg:pb-6 lg:pt-11
          pt-6
          pb-4
          text-center
          mx-6
          md:w-[658px]
        "
      >
        Untuk proses pembayaran akan dilakukan setelah selesai proses briefing
        dengan Digidev. Kamu akan segera dihubungi admin Digidev dalam 1 x 24
        jam.
      </p>
      <p class="text-12 lg:text-16 text-gray-400 text-center mx-6 md:w-[622px]">
        Atau kamu bisa langsung menghubungi admin Digidev dengan menekan tombol
        di bawah untuk konfirmasi pendaftaran.
      </p>
      <div class="w-full flex justify-center items-center">
        <Button
          class="
            mt-6
            lg:mt-12
            w-56
            lg:w-72 lg:text-18
            text-[14px]
            lg:py-4
            py-3
            px-2
          "
          content="Konfirmasi ke Whatsapp"
          @click="clickConfirm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      typeClass: "",
      city: "",
    };
  },
  mounted() {
    this.typeClass = this.$route.query["class-name"];
    this.city = this.$route.query["city"];
  },
  methods: {
    clickConfirm() {
      window.open("https://api.whatsapp.com/send?phone=6281264562826");
    },
  },
  computed: {
    titleClass() {
      if (this.typeClass === "web-basic") {
        return "Kelas Basic Modern Web";
      } else if (this.typeClass === "front-end-1") {
        return "Kelas Frontend Master 1";
      } else if (this.typeClass === "front-end-2") {
        return "Kelas Frontend Master 2";
      } else if (this.typeClass === "back-end") {
        return "Kelas Basic Backend";
      } else if (this.typeClass === "full-stack") {
        return "Kelas Basic Fullstack";
      }
    },
  },
};
</script>

<style></style>
