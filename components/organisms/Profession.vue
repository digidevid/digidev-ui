<template>
  <div class="container py-20">
    <h1 class="leading-snug text-start font-bold text-40 pb-3">
      Profesi yang bisa ditempati setelah lulus dari kelas belajar modern Web
      Development
    </h1>
    <p class="text-20 dark-grey">
      Berikut ini merupakan beberapa profesi yang bisa digeluti alumni yang
      sudah mengikuti program kelas yang diadakan oleh Digidev.
    </p>
    <div class="flex justify-center">
      <div v-for="(item, id) in items" :key="id">
        <ProfessionCard
          :bgProfessionCard="item.bgProfessionCard"
          :skill="item.skill"
          :vectorProfession="item.vectorProfession"
          :detail="item.detail"
          :id="id"
        />
      </div>
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
