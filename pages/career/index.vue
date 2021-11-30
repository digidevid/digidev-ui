<template>
  <div>
    <Navbar class="-mb-32 md:-mb-20" />
    <div
      class="grid lg:mb-8 mb-6 justify-center"
      v-for="(career, id) in dataCareer"
      :key="id"
    >
      <FormCard :career="career" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/organisms/Footer";
import Navbar from "../career/views/Navbar.vue";
import FormCard from "./views/FormCard.vue";
export default {
  components: { Footer, Navbar, FormCard },
  data() {
    return {
      dataCareer: [
        {
          className: " Mentor Frontend Developer",
          salary: "Rp2.000.000 - Rp5.000.000",
          requirement: [
            "Degree in computer science or related field.",
            "Understanding of key design principles.",
            "Proficiency in HTML, CSS, JavaScript, and jQuery.",
            "Understanding of server-side CSS.",
            "Experience with graphic design applications such as Adobe Illustrator.",
            "Experience with responsive and adaptive design.",
          ],
        },
        {
          className: " Mentor Backend Developer",
          salary: "Rp2.000.000 - Rp5.000.000",
          requirement: [
            "Degree in computer science or related field.",
            "Understanding of key design principles.",
            "Proficiency in HTML, CSS, JavaScript, and jQuery.",
            "Understanding of server-side CSS.",
            "Experience with graphic design applications such as Adobe Illustrator.",
            "Experience with responsive and adaptive design.",
          ],
        },
        {
          className: " Mentor Mobile Developer",
          salary: "Rp2.000.000 - Rp5.000.000",
          requirement: [
            "Degree in computer science or related field.",
            "Understanding of key design principles.",
            "Proficiency in HTML, CSS, JavaScript, and jQuery.",
            "Understanding of server-side CSS.",
            "Experience with graphic design applications such as Adobe Illustrator.",
            "Expdesign.",
          ],
        },
        {
          className: " Mentor Full Stack Developer",
          salary: "Rp2.000.000 - Rp5.000.000",
          requirement: [
            "Degree in computer science or related field.",
            "Understanding of key design principles.",
            "Proficiency in HTML, CSS, JavaScript, and jQuery.",
            "Understanding of server-side CSS.",
            "Experience with graphic design applications such as Adobe Illustrator.",
            "Expdesign.",
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
