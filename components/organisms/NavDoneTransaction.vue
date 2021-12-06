<template>
  <div
    class="
      w-full
      h-[150px]
      md:h-[168px]
      lg:h-[200px]
      container-nav
      rounded-b-[25px]
      bg-gradient-to-br
      from-[#030F1F]
      via-[#0F2C58]
      to-[#1D478B]
    "
  >
    <div
      class="
        flex
        w-full
        justify-start
        items-center
        px-6
        md:px-8
        lg:px-20
        xl:px-60
        pt-3
        lg:pt-9
      "
    >
      <div>
        <nuxt-link to="/"
          ><img class="w-14" src="~/static/digidev-bw.png" alt="digidev brand"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeClass: "",
      isShowMenu: false,
    };
  },
  computed: {
    titleClass() {
      if (this.typeClass === "web-basic") {
        return "Kelas Basic Modern Web bersama Digidev";
      } else if (this.typeClass === "front-end-1") {
        return "Kelas Frontend Master 1 bersama Digidev";
      } else if (this.typeClass === "front-end-2") {
        return "Kelas Frontend Master 2 bersama Digidev";
      } else if (this.typeClass === "back-end") {
        return "Kelas Basic Backend bersama Digidev";
      } else if (this.typeClass === "full-stack") {
        return "Kelas Basic Fullstack bersama Digidev";
      }
    },
  },

  mounted() {
    this.typeClass = this.$route.query.paket_kelas;
  },
};
</script>
