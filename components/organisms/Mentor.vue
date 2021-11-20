<template>
  <section id="mentor" class="relative py-10 md:py-14 lg:py-20 bg-main">
    <div class="relative">
      <h2
        class="
          container
          relative
          w-full
          text-center
          mt-5
          mb-10
          text-24
          lg:text-40
          leading-tight
          font-semibold
        "
      >
        <span class="font-bold">Mentor</span> yang Tersedia
      </h2>
      <div
        class="
          flex
          space-x-8
          overflow-x-scroll
          hide-scroll-bar
          p-6
          xl:p-0 xl:justify-center xl:overflow-x-visible
          ml-2
          md:ml-8
          lg:ml-12
          xl:ml-0
        "
      >
        <div v-for="(mentor, id) in mentorlist" :key="id">
          <MentorCard :mentor="mentor" />
        </div>
      </div>
      <div class="container">
        <div
          class="
            relative
            px-6
            md:px-12
            lg:px-24
            xl:px-40
            mt-20
            py-12
            text-center
            leading-snug
            lg:leading-loose
            rounded-[25px]
            gradient-banner
          "
        >
          <div class="relative z-50">
            <h1 class="font-bold text-24 lg:text-40 pb-4">
              Ingin jadi mentor? Daftar yuk!
            </h1>
            <p class="dark-grey lg:text-20 text-14 leading-normal">
              Dapatkan penghasilan tambahan sekaligus memberikan bantuan kepada
              mereka yang sedang mempersiapkan skill untuk berkari sebagai
              profesional.
            </p>
            <Button
              content="Daftar jadi mentor"
              class="mt-5 md:mr-4 lg:text-18 text-14"
            />
          </div>
          <div class="absolute top-0 right-0 z-0 w-1/2 md:w-1/3 lg:w-auto">
            <img src="/images/vector/vector736.png" alt="banner illustration" />
          </div>
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
          skill: "Software Engineer",
          photo: "/images/mentor/faishal.png",
        },
        {
          name: "Ibnu Hazar",
          skill: "Frontend Developer",
          photo: "/images/mentor/ibnu.png",
        },
        {
          name: "M. Ihsan Batubara",
          skill: "Frontend Developer",
          photo: "/images/mentor/ihsan.png",
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
