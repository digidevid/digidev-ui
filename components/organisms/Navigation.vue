<template>
  <div :class="`navigation ${setHeight}`">
    <div class="flex w-full justify-between items-center px-[240px] pt-9">
      <div>
        <nuxt-link to="/"
          ><img class="max-w-[56px]" src="~/static/digidev-bw.png" alt=""
        /></nuxt-link>
      </div>
      <ul class="flex space-x-14 text-white text-lg" v-if="!typeClass">
        <li class="cursor-pointer" @click="scrollToSection('benefit')">
          Keunggulan
        </li>
        <li class="cursor-pointer" @click="scrollToSection('mentor')">
          Mentor
        </li>
        <li class="cursor-pointer" @click="scrollToSection('partner')">
          Rekanan
        </li>
        <li class="cursor-pointer" @click="scrollToSection('portofolio')">
          Portofolio Alumni
        </li>
      </ul>
    </div>
    <div :class="`px-[250px] space-y-5 ${setPaddingTop}`">
      <p
        class="text-white text-52 leading-relaxed max-w-[1116px]"
        v-if="!typeClass"
      >
        Siapkan dirimu menjadi profesional <br />
        <span class="font-bold">Software Engineer</span> dengan belajar dan
        praktikum secara privat dan eksklusif (offline learning) bersama
        <span class="font-bold">Digidev</span>.
      </p>
      <p
        class="text-white font-semibold text-52 leading-relaxed max-w-[1116px]"
        v-else
      >
        {{ titleClass }}
      </p>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      typeClass: "",
    };
  },
  computed: {
    titleClass() {
      if (this.typeClass === "web-basic") {
        return "Kelas Basic Modern Web bersama Digidev";
      } else if (this.typeClass === "front-end") {
        return "Kelas Basic Frontend bersama Digidev";
      } else if (this.typeClass === "back-end") {
        return "Kelas Basic Backend bersama Digidev";
      } else if (this.typeClass === "full-stack") {
        return "Kelas Basic Fullstack bersama Digidev";
      }
    },
    setHeight() {
      return this.typeClass ? "" : "h-[887px]";
    },
    setPaddingTop() {
      return this.typeClass ? "pt-[90px] pb-[130px]" : "py-[130px]";
    },
  },
  mounted() {
    this.typeClass = this.$route.query.paket_kelas;
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  background-image: url("~/static/images/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>
