<template>
  <div>
    <Navigation @click-nav="scrollToSection" />
    <!-- <Info /> -->
    <Vacancy />
    <Benefit />
    <Partner />
    <!-- <Service /> -->
    <Mentor />
    <Profession />
    <ClassSection />
    <Class />
    <Flow />
    <PortofolioAlumni />
    <Testimoni />
    <Footer />
  </div>
</template>

<script>
import Navigation from "~/components/organisms/Navigation";
import Vacancy from "~/components/organisms/Vacancy";
import Hero from "~/components/organisms/Hero";
import Partner from "~/components/organisms/Partner";
import Benefit from "~/components/organisms/Benefit";
import Service from "~/components/organisms/Service";
import Mentor from "~/components/organisms/Mentor";
import ClassSection from "~/components/organisms/ClassSection";
import Class from "~/components/organisms/Class";
import Testimoni from "~/components/organisms/Testimoni";
import Footer from "~/components/organisms/Footer";
import Info from "../components/organisms/Info.vue";
import Profession from "../components/organisms/Profession.vue";
import Flow from "../components/organisms/Flow.vue";
import PortofolioAlumni from "../components/organisms/PortofolioAlumni.vue";
import axios from "axios";

export default {
  components: {
    Navigation,
    Vacancy,
    Hero,
    Partner,
    Benefit,
    Service,
    Mentor,
    ClassSection,
    Class,
    Testimoni,
    Footer,
    Info,
    Profession,
    Flow,
    PortofolioAlumni,
  },
  mounted() {
    this.accessHeroku();
  },
  methods: {
    scrollToSection(slug) {
      const section = document.getElementById("available-class");
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
    async accessHeroku() {
      try {
        const res = await axios.get("https://digidev-api.herokuapp.com");
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Poppins", sans-serif;
}
</style>
