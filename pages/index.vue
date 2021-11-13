<template>
  <div>
    <Navigation />
    <Info />
    <Benefit />
    <Partner />
    <!-- <Service /> -->
    <Mentor />
    <Profession />
    <Class />
    <Flow />
    <Alumni />
    <Testimoni />
    <Footer />
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
import Profession from "../components/organisms/Profession.vue";
import Flow from "../components/organisms/Flow.vue";
import Alumni from "../components/organisms/Alumni.vue";

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
    Profession,
    Flow,
    Alumni,
  },
};
</script>

<style lang="scss" scoped>
body {
  font-family: "Poppins", sans-serif;
}
</style>
