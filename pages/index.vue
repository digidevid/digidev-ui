<template>
  <div>
    <Navigation />
    <Info />
    <Benefit />
    <Partner />
    <!-- <Service /> -->
    <Mentor />
    <Class />
    <Testimoni />
    <Footer /> -->
  </div>
</template>

<script>
import Navigation from "~/components/organisms/Navigation";
import Hero from "~/components/organisms/Hero";
import Partner from "~/components/organisms/Partner";
import Benefit from "~/components/organisms/Benefit";
import Service from "~/components/organisms/Service";
import Mentor from "~/components/organisms/Mentor";
import Class from "~/components/organisms/Class";
import Testimoni from "~/components/organisms/Testimoni";
import Footer from "~/components/organisms/Footer";
import Info from "../components/organisms/Info.vue";

export default {
  components: {
    Navigation,
    Hero,
    Partner,
    Benefit,
    Service,
    Mentor,
    Class,
    Testimoni,
    Footer,
    Info,
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Poppins", sans-serif;
}
</style>
