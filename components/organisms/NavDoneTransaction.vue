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
      v-if="isShowMenu"
      class="
        lg:hidden
        absolute
        z-70
        top-2
        right-2
        w-2/3
        md:w-1/3
        rounded-xl
        p-6
        md:p-7
        bg-white
      "
    >
      <ul class="space-y-8 text-18 mt-14 text-right tracking-wide">
        <li
          class="cursor-pointer uppercase font-semibold"
          @click="scrollToSection('benefit')"
        >
          Keunggulan
        </li>
        <li
          class="cursor-pointer uppercase font-semibold"
          @click="scrollToSection('mentor')"
        >
          Mentor
        </li>
        <li
          class="cursor-pointer uppercase font-semibold"
          @click="scrollToSection('partner')"
        >
          Rekanan
        </li>
        <li
          class="cursor-pointer uppercase font-semibold"
          @click="scrollToSection('portofolio')"
        >
          Portofolio Alumni
        </li>
      </ul>
    </div>
    <div
      class="
        flex
        w-full
        justify-between
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
      <div class="lg:hidden relative z-100">
        <button
          id="menu"
          class="menu"
          @click="isShowMenu = !isShowMenu"
          onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
          aria-label="Main Menu"
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              class="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path class="line line2" d="M 20,50 H 80" />
            <path
              class="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>
      <ul
        class="hidden lg:flex space-x-14 text-white text-16"
        v-if="!typeClass"
      >
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
  stroke: #2d2d2d;
}
.opened .line2 {
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
  stroke: #2d2d2d;
}
.opened .line3 {
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
  stroke: #2d2d2d;
}
</style>
