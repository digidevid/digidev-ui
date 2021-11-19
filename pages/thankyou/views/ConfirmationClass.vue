<template>
  <div
    class="
      grid
      justify-center
      items-center
      bg-white
      rounded-t-[25px]
      lg:rounded-t-[55px]
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
        Terima kasih atas pesanan kamu
      </p>

      <div class="flex items-center justify-center">
        <div
          class="
            space-y-2
            p-6
            lg:w-[432px] lg:h-[180px]
            w-[312px]
            h-[174px]
            bg-white
            shadow-md
            rounded-[15px]
          "
        >
          <p class="text-gray-400 text-14 lg:text-16">Kelas</p>
          <p class="font-bold text-14 lg:text-16 text-[#363636]">
            Kelas Private Frontend Developer
          </p>
          <hr />
          <p class="text-gray-400 text-14 lg:text-16">Jadwal Kelas</p>
          <p class="font-bold text-14 lg:text-16 text-[#363636]">
            25 Desember 2021
          </p>
        </div>
      </div>

      <p class="text-12 lg:text-16 lg:pb-6 lg:pt-11 pt-6 pb-4 text-center mx-6">
        Silakan menyelesaikan pembayaran menggunakan
        <span class="font-bold">ATM Transfer - Mandiri</span>
        sesuai batas waktu yang ditentukan.
      </p>
      <p class="text-12 lg:text-16 text-gray-400 text-center mx-6">
        Hubungi langsung admin DigiDev dengan menekan button dibawah untuk
        melakukan konfirmasi pembayaran.
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/atoms/Button.vue";
export default {
  components: { Button },
};
</script>

<style></style>
