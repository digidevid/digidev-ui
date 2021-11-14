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
          rounded-2xl
          gradient-banner
        "
      >
        <div class="relative z-50">
          <h1 class="font-bold text-[40px] pb-4">
            Ingin jadi mentor? Daftar yuk!
          </h1>
          <p class="text-[#2D2D2D] text-[20px] pb-4">
            Dapatkan penghasilan tambahan sekaligus memberikan bantuan kepada
            mereka yang sedang mempersiapkan skill untuk berkari sebagai
            profesional.
          </p>
          <Button />
        </div>
        <div class="absolute top-0 right-0 z-0">
          <img src="/images/vector/vector736.png" alt="" />
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

<style>
.gradient-banner {
  background: linear-gradient(
      0deg,
      #ffffff 10.12%,
      #2e89ff 1300.12%,
      rgba(255, 255, 255, 0) 250%
    ),
    #2e89ff;
}
</style>
