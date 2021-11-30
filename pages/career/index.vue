<template>
  <div>
    <Navbar class="-mb-14 md:-mb-20" />
    <div
      class="container lg:mb-8 mb-6"
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
          class: "frontend",
          className: " Mentor Frontend Developer",
          salary: "Rp1.000.000 - Rp3.000.000",
          requirement: [
            "Berpengalaman sebagai Frontend Developer minimal 1 tahun.",
            "Memahami dan menguasai HTML, CSS dan Javascript.",
            "Memahami dan menguasai framework Vue / React.",
            "Menguasai penggunaan Git.",
            "Memahami dan menguasai Tailwind atau Bootstrap.",
            "Memiliki tools / laptop pribadi.",
            "Memiliki kemampuan mengajar.",
          ],
        },
        {
          class: "backend",
          className: " Mentor Backend Developer",
          salary: "Rp1.000.000 - Rp3.000.000",
          requirement: [
            "Berpengalaman sebagai Backend Developer minimal 1 tahun.",
            "Memahami dan menguasai bahasa pemrograman Javascript / Go / Java /  Python.",
            "Memahami dan menguasai penggunaan database Sql dan no-Sql.",
            "Menguasai penggunaan Git.",
            "Memahami dan menguasai Object Oriented Programming (OOP).",
            "Memiliki tools / laptop pribadi.",
            "Memiliki kemampuan mengajar.",
          ],
        },
        {
          class: "mobile-apps",
          className: " Mentor Mobile Developer",
          salary: "Rp1.000.000 - Rp3.000.000",
          requirement: [
            "Berpengalaman sebagai Frontend Developer / Mobile Apps Developer minimal 1 tahun.",
            "Memahami dan menguasai framework React Native / Flutter.",
            "Memahami prinsip dasar layouting di aplikasi mobile.",
            "Menguasai penggunaan Git.",
            "Memiliki tools / laptop pribadi.",
            "Memiliki kemampuan mengajar.",
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
