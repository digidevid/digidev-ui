<template>
  <section id="mentor" class="relative py-20 overflow-hidden bg-main">
    <div class="relative px-16 mx-auto max-w-7xl sm:w-full">
      <h2
        class="
          relative
          w-full
          text-center
          mt-5
          mb-10
          text-20
          lg:text-40
          leading-tight
          font-semibold
        "
      >
        <span class="font-bold">Mentor</span> yang Tersedia
      </h2>
      <div class="flex w-full justify-center space-x-8">
        <div v-for="(mentor, id) in mentorlist" :key="id">
          <MentorCard :mentor="mentor" />
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
          <h1 class="font-bold text-20 lg:text-40 pb-4">
            Ingin jadi mentor? Daftar yuk!
          </h1>
          <p class="text-[#2D2D2D] lg:text-20 text-14">
            Dapatkan penghasilan tambahan sekaligus memberikan bantuan kepada
            mereka yang sedang mempersiapkan skill untuk berkari sebagai
            profesional.
          </p>
          <Button content="Daftar jadi mentor" class="mt-5 text-18 text-14" />
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
          name: "Faishal Arif",
          skill: "Frontend Develover",
          photo: "/images/mentor/faishal.png",
        },
        {
          name: "M. Ihsan Batubara",
          skill: "Frontend Develover",
          photo: "/images/mentor/uncu.png",
        },
        {
          name: "Ibnu Hazar",
          skill: "Frontend Develover",
          photo: "/images/mentor/ibnu.jpg",
        },
        {
          name: "Irwan Soleh Siregar",
          skill: "Frontend Develover",
          photo: "/images/mentor/irwan.jpg",
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
