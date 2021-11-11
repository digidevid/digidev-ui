<template>
  <div>
    <section class="w-full px-6 pb-12 antialiased bg-white">
      <div class="mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <Benefit />
        <Partner />
        <Service />
        <Mentor />
        <Class />
        <Testimoni />
        <Footer />
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "~/components/organisms/Navbar";
import Hero from "~/components/organisms/Hero";
import Partner from "~/components/organisms/Partner";
import Benefit from "~/components/organisms/Benefit";
import Service from "~/components/organisms/Service";
import Mentor from "~/components/organisms/Mentor";
import Class from "~/components/organisms/Class";
import Testimoni from "~/components/organisms/Testimoni";
import Footer from "~/components/organisms/Footer";
export default {
  components: {
    Navbar,
    Hero,
    Partner,
    Benefit,
    Service,
    Mentor,
    Class,
    Testimoni,
    Footer,
  },
};
</script>
