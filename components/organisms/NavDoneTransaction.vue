<template>
  <div
    class="
      w-full
      h-[200px]
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
      } else if (this.typeClass === "front-end") {
        return "Kelas Basic Frontend bersama Digidev";
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
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      this.isShowMenu = !this.isShowMenu;
      const icon = document.getElementById("menu");
      icon.classList.toggle("opened");
    },
    closeMenu() {
      this.isShowMenu = false;
      const icon = document.getElementById("menu");
      icon.classList.toggle("opened");
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
}
.line {
  fill: none;
  stroke: white;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
}
.line1 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.line2 {
  stroke-dasharray: 60 60;
  stroke-width: 6;
}
.line3 {
  stroke-dasharray: 60 207;
  stroke-width: 6;
}
.opened .line1 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
  stroke: #0a7dfa;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
  stroke: #0a7dfa;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
  stroke: #0a7dfa;
}
</style>
