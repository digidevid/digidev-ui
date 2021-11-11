<template>
  <section class="relative py-20 overflow-hidden bg-white">
    <div class="relative px-16 mx-auto max-w-7xl">
      <h2
        class="
          relative
          w-full
          text-center
          mt-5
          mb-10
          text-3xl
          leading-tight
          lg:text-4xl
        "
      >
        <span class="font-bold">Mentor</span> yang Tersedia
      </h2>
      <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="(mentor, id) in mentorlist" :key="id">
          <MentorCard :mentorName="mentor.mentorName" :skill="mentor.skill" />
        </div>
      </div>
      <div></div>
      <div
        class="
          relative
          px-40
          mt-20
          py-12
          text-center
          leading-loose
          bg-gradient-to-b
          from-gray-200
          to-white
          rounded-2xl
        "
      >
        <div class="">
          <h1 class="font-bold text-5xl pb-4">
            Ingin jadi mentor? Daftar yuk!
          </h1>
          <p class="text-[#2D2D2D] text-[20px] pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            semper aliquam vel ipsum id urna enim, duis.
          </p>
          <Button />
        </div>
        <div class="absolute top-0 right-0 z-0 opacity-50">
          <img src="/vector736.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../atoms/Button.vue";
import MentorCard from "../mollecules/MentorCard.vue";

export default {
  components: { MentorCard, Button },
  data() {
    return {
      mentorlist: [
        {
          mentorName: "Faishal Arif",
          skill: "Full Stack Develover",
        },
        {
          mentorName: "Faishal Arif",
          skill: "Full Stack Develover",
        },
        {
          mentorName: "Faishal Arif",
          skill: "Full Stack Develover",
        },
        {
          mentorName: "Faishal Arif",
          skill: "Full Stack Develover",
        },
      ],
    };
  },
};
</script>

<style></style>
