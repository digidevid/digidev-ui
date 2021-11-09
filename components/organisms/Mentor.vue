<template>
  <section class="relative py-20 overflow-hidden bg-white">
    <span
      class="
        absolute
        top-0
        right-0
        flex flex-col
        items-end
        mt-0
        -mr-16
        opacity-60
      "
    >
      <span
        class="
          container
          hidden
          w-screen
          h-32
          max-w-xs
          mt-20
          transform
          rounded-full rounded-r-none
          md:block md:max-w-xs
          lg:max-w-lg
          2xl:max-w-3xl
          bg-blue-50
        "
      ></span>
    </span>

    <span class="absolute bottom-0 left-0"> </span>

    <div class="relative px-16 mx-auto max-w-7xl">
      <h2
        class="
          relative
          w-full
          text-center
          mt-5
          mb-10
          text-3xl
          font-bold
          leading-tight
          lg:text-4xl
        "
      >
        Mentor yang Tersedia
      </h2>
      <div class="grid w-full grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="(mentor, id) in mentorlist" :key="id">
          <CardMentor :mentorName="mentor.mentorName" :skill="mentor.skill" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardMentor from "../mollecules/CardMentor.vue";

export default {
  components: { CardMentor },
  data() {
    return {
      mentorlist: [
        {
          mentorName: "Faishal Arif",
          skill: "Full Stack Develover",
        },
        {
          mentorName: "Ibnu Hazar",
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
