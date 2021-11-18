<template>
  <div :class="`relative ${heroBackground} ${setHeight}`">
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
    <div :class="`px-6 md:px-8 lg:px-20 xl:px-[250px] ${setPaddingTop}`">
      <p
        class="
          text-white text-24
          md:text-32
          lg:text-52
          leading-relaxed
          max-w-[1116px]
        "
        v-if="!typeClass"
      >
        Siapkan dirimu menjadi profesional
        <span class="font-bold">Software Engineer</span> dengan belajar dan
        praktikum secara privat dan eksklusif (offline learning) bersama
        <span class="font-bold">Digidev</span>.
      </p>
      <p
        class="
          text-white text-24
          md:text-32
          lg:text-52
          leading-relaxed
          max-w-[1116px]
        "
        v-else
      >
        {{ titleClass }}
      </p>
      <Button class="mt-5" />
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
    setHeight() {
      return this.typeClass ? "" : "h-[640px] lg:h-[887px]";
    },
    setPaddingTop() {
      return this.typeClass ? "pt-[90px] pb-[130px]" : "py-24 lg:py-32";
    },
    heroBackground() {
      if (this.typeClass === "web-basic") {
        return "navigation-web-basic";
      } else if (this.typeClass === "front-end") {
        return "navigation-front-end";
      } else if (this.typeClass === "back-end") {
        return "navigation-back-end";
      } else if (this.typeClass === "full-stack") {
        return "navigation-full-stack";
      } else {
        return "navigation";
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
.navigation {
  background-image: url("~/static/images/hero/hero.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
.navigation-web-basic {
  background-image: url("~/static/images/hero/hero2.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
.navigation-front-end {
  background-image: url("~/static/images/hero/hero3.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
.navigation-back-end {
  background-image: url("~/static/images/hero/hero4.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
.navigation-full-stack {
  background-image: url("~/static/images/hero/hero5.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center center;
}
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
