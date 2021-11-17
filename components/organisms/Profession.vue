<template>
  <div class="container py-10 md:py-14 lg:py-20">
    <h1 class="leading-snug font-bold text-24 lg:text-40 pb-3">
      Profesi yang bisa ditempati setelah lulus dari kelas belajar modern Web
      Development
    </h1>
    <p class="text-14 md:text-20 dark-grey">
      Berikut ini merupakan beberapa profesi yang bisa digeluti alumni yang
      sudah mengikuti program kelas yang diadakan oleh Digidev.
    </p>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-4
        md:gap-6
        xl:gap-0
        mt-8
        lg:mt-20
      "
    >
      <ProfessionCard
        v-for="(item, id) in items"
        :key="id"
        :bgProfessionCard="item.bgProfessionCard"
        :skill="item.skill"
        :vectorProfession="item.vectorProfession"
        :detail="item.detail"
        :id="id"
      />
    </div>
  </div>
</template>

<script>
import ProfessionCard from "../mollecules/ProfessionCard.vue";
export default {
  components: { ProfessionCard },

  data() {
    return {
      items: [
        {
          bgProfessionCard: "white",
          skill: "Frontend Developer",
          vectorProfession: "web-design",
          detail: "Setelah mengikuti kelas Basic Web dan Frontend Digidev",
        },
        {
          bgProfessionCard: "[#FCFDFE]",
          skill: "Backend Developer",
          vectorProfession: "browser 1",
          detail: "Setelah mengikuti kelas Basic Web dan Backend Digidev",
        },
        {
          bgProfessionCard: "white",
          skill: "Full Stack Developer",
          vectorProfession: "stack-overflow",
          detail: "Setelah mengikuti kelas Frontend dan Backend Digidev",
        },
        {
          bgProfessionCard: "[#FCFDFE]",
          skill: "Mobile Developer",
          vectorProfession: "development",
          detail: "Setelah mengikuti kelas Mobile Apps Digidev",
        },
      ],
    };
  },
};
</script>

<style></style>
