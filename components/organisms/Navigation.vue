<template>
  <div class="navigation">
    <div class="flex w-full justify-between items-center px-[163px] pt-9">
      <div>
        <a href="#"
          ><img class="max-w-[56px]" src="~/static/digidev-bw.png" alt=""
        /></a>
      </div>
      <div class="flex space-x-5 text-white text-lg">
        <a href="#">Keunggulan</a>
        <a href="#">Mentor</a>
        <a href="#">Rekanan</a>
        <a href="#">Alumni</a>
      </div>
    </div>
    <div class="px-[163px] space-y-5 pt-[150px]">
      <p class="text-white text-52 leading-relaxed">
        <span class="font-bold"> Siapkan dirimu</span> menjadi profesional
        Software Engineer dengan belajar dan praktikum secara privat dan
        eksklusif (offline learning) bersama
        <span class="font-bold">DigiDev</span>.
      </p>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },
};
</script>

<style lang="scss" scoped>
.navigation {
  background-image: url("~/static/images/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 887px;
}
</style>
