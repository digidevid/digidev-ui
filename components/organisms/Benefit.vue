<template>
  <div id="benefit" class="py-20 relative w-full">
    <div class="absolute w-full top-40 left-0 -z-10">
      <img class="w-full" src="/images/vector/Vector123.png" alt="" />
    </div>
    <h2 class="text-40 font-semibold tracking-tight text-center">
      <span class="font-bold">Keunggulan</span> Digidev
    </h2>

    <div
      class="
        relative
        max-w-[1120px]
        pt-[72px]
        m-auto
        flex
        lg:flex-row
        space-x-4
        z-50
      "
    >
      <div class="relative w-2/5 px-[30px] py-10 rounded-xl shadow-xl bg-white">
        <div class="absolute w-14 h-14 bg-primary rounded-full top-[-25px]">
          <img class="vector" src="/images/vector/rating.png" alt="rating" />
        </div>
        <h4 class="text-[22px] mt-5 font-bold text-start">Berpengalaman</h4>
        <p class="text-start pt-2 text-[18px]">
          Mentor dengan segudang <span class="font-bold">pengalaman</span>
          yang berkarir di startup ternama.
        </p>
      </div>

      <div class="relative w-2/5 px-[30px] py-10 rounded-xl shadow-xl bg-white">
        <div class="absolute w-14 h-14 bg-primary rounded-full top-[-25px]">
          <img
            class="vector"
            src="/images/vector/exclusive.png"
            alt="exclusive"
          />
        </div>
        <h4 class="text-[22px] mt-5 font-bold text-start">
          Privat dan Ekslusif
        </h4>
        <p class="text-start pt-2 text-[18px]">
          Kelas dilaksanakan secara <span class="font-bold">offline</span>,
          privat dan eksklusif dengan mengikuti prokes.
        </p>
      </div>

      <div class="relative w-2/5 px-[30px] py-10 rounded-xl shadow-xl bg-white">
        <div class="absolute w-14 h-14 bg-primary rounded-full top-[-25px]">
          <img
            class="vector"
            src="/images/vector/curriculum.png"
            alt="curriculum"
          />
        </div>
        <h4 class="text-[22px] mt-5 font-bold text-start">
          Kurikulum Sesuai Dunia Kerja
        </h4>
        <p class="text-start pt-2 text-[18px]">
          Kurikulum yang dipelajari disesuaikan dengan
          <span class="font-bold">kebutuhan dunia kerja</span> saat ini.
        </p>
      </div>
      <div class="relative w-2/5 px-[30px] py-10 rounded-xl shadow-xl bg-white">
        <div class="absolute w-14 h-14 bg-primary rounded-full top-[-25px]">
          <img class="vector" src="/images/vector/money.png" alt="money" />
        </div>
        <h4 class="text-[22px] mt-5 font-bold text-start">
          Relatif Terjangkau
        </h4>
        <p class="text-start pt-2 text-[18px]">
          Dengan asas saling tolong menolong membuat kelas
          <span class="font-bold">lebih terjangkau</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
