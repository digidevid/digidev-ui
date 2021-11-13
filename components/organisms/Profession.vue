<template>
  <div class="px-[163px]">
    <h1 class="leading-relaxed text-start font-bold text-4xl pb-3">
      Profesi yang bisa ditempati setelah lulus dari kelas belajar modern Web
      Development
    </h1>
    <p class="text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ut proin nunc
      amet felis phasellus felis.
    </p>
    <div class="grid w-full grid-cols-3 gap-0 sm:grid-cols-3 lg:grid-cols-4">
      <div v-for="item in items" :key="item.id">
        <ProfessionCard
          :bgProfessionCard="item.bgProfessionCard"
          :skill="item.skill"
          :vectorProfession="item.vectorProfession"
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
          bgProfessionCard: "[#FCFDFE]",
          skill: "Mobile Developer",
          vectorProfession: "development",
        },
        {
          bgProfessionCard: "white",
          skill: "Frontend Developer",
          vectorProfession: "web-design",
        },
        {
          bgProfessionCard: "[#FCFDFE]",
          skill: "Backend Developer",
          vectorProfession: "browser 1",
        },
        {
          bgProfessionCard: "white",
          skill: "Full Stack Developer",
          vectorProfession: "stack-overflow",
        },
      ],
    };
  },
};
</script>

<style></style>
