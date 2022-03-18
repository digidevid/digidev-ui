<template>
  <div :class="`navigation ${setHeight}`">
    <div
      class="
        flex
        w-full
        justify-start
        items-center
        px-[24px]
        sm:px-[24px]
        md:px-[160px]
        :px-[160px]
        pt-9
      "
    >
      <div>
        <nuxt-link to="/"
          ><img class="max-w-[56px]" src="~/static/logo/digidev-bw.png" alt=""
        /></nuxt-link>
      </div>
    </div>
    <div
      :class="`lg:px-[160px] md:px-[160px] sm:px-[24px] px-[24px] space-y-5 ${setPaddingTop}`"
    >
      <p
        class="
          text-white text-26
          sm:text-26
          md:text-52
          lg:text-52
          leading-relaxed
          max-w-[1116px]
        "
        v-if="!typeClass"
      >
        Form Pendaftaran <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
        return "Kelas Frontend Master bersama Digidev";
      } else if (this.typeClass === "back-end") {
        return "Kelas Backend Master bersama Digidev";
      } else if (this.typeClass === "full-stack") {
        return "Kelas Basic Fullstack bersama Digidev";
      }
    },
    setHeight() {
      return this.typeClass ? "" : "h-[350px]";
    },
    setPaddingTop() {
      return this.typeClass ? "pt-[40px] pb-[800px]" : "my-[40px]";
    },
  },
  mounted() {
    this.typeClass = this.$route.query.paket_kelas;
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  background-image: url("~/static/images/hero/hero.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}
</style>
