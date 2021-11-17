<template>
  <section class="relative z-50 lg:py-20 py-[92px] bg-white container">
    <h2 class="text-center lg:text-40 text-24 font-semibold">
      <span class="font-bold">Apa Kata </span> Mereka
    </h2>
    <TestimonyCard
      :data-testimonies="dataTestimonies"
      :current-testimony="activeTestimony"
      @nextTesti="nextTesti"
      @prevTesti="prevTesti"
    />
  </section>
</template>

<script>
import TestimonyCard from "../mollecules/TestimonyCard.vue";
export default {
  components: { TestimonyCard },
  mounted() {
    this.activeTestimony = this.dataTestimonies[0];
  },
  data() {
    return {
      activeTestimony: {},
      dataTestimonies: [
        {
          id: 1,
          name: "Ichsan ",
          fullName: "Ichsan Rafisyah",
          job: "Mahasiswa Kelas Basic Modern Web",
          photo: "/images/quotes/Ichsan.jpg",
          testi:
            "Kelas Basic Modern Web sangat recommended, dari saya yang kurang mengerti coding, hingga saya dapat memahami coding, mentornya sangat pengalaman, sabar dan friendly. Mentor nya sering berbagi pengalam di dunia kerja, saya jadi semangat terus mengembangkan ilmu di dunia programming, terima kasih untuk ilmu nya kepada mentor Digidev.",
        },
        {
          id: 2,
          name: "Ridho ",
          fullName: "Ridho Zuhriyal Lubis",
          job: "Mahasiswa Kelas Basic Modern Web",
          photo: "/images/quotes/Ridho.jpg",
          testi:
            "Alhamdulillah selama belajar di Digidev mentornya selalu baik  dan ramah, pembawaan materinya juga cukup mudah dipahami, ditambah kuis kuis yang diberikan dapat melatih dan lebih memahami materi. Pokoknya cocok buat yang lagi belajar jadi web developer.",
        },
        {
          id: 3,
          name: "Rahdiansyah",
          fullName: "Rahdiansyah",
          job: "Mahasiswa Kelas Basic Modern Web",
          photo: "/images/quotes/Rahdiansyah.jpg",
          testi:
            "Digidev ini benar-benar memberikan pemahaman yang baik tentang pemrograman. Dengan bahasa yang menarik, mudah dipahami, saya selaku orang non-IT dapat memahami kelas ini dengan baik. Terima kasih Digidev.",
        },
      ],
    };
  },
  methods: {
    nextTesti(id) {
      this.activeTestimony = this.dataTestimonies[id - 1 + 1];
    },
    prevTesti(id) {
      this.activeTestimony = this.dataTestimonies[id - 1 - 1];
    },
  },
};
</script>

<style></style>
