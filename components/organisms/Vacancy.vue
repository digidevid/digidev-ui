<template>
  <div
    class="
      relative
      py-10
      md:py-14
      lg:py-20
      -mt-20
      bg-white
      md:rounded-t-[55px]
      rounded-t-[25px]
    "
  >
    <div class="container">
      <img
        class="absolute w-40 md:w-1/5 z-0 top-0 left-0"
        src="/images/info-illust.png"
        alt="info illustration"
      />
      <h1 class="relative z-20 text-24 md:text-40 font-bold">
        Lowongan Pekerjaan Software Engineer
        <span class="font-semibold">di Indonesia</span>
      </h1>
      <p class="dark-grey text-14 md:text-20 mt-4 xl:mt-0">
        Sebelum kamu mulai belajar, Yuk cek cakupan lowongan untuk posisi
        software engineer yang tersedia saat ini. Berikut beberapa contoh
        lowongan aktif yang tersedia di
        <a
          class="text-primary font-medium"
          target="_blank"
          href="http://kalibrr.com"
          >Kalibrr</a
        >.
      </p>
    </div>
    <div
      class="
        hide-scroll-bar
        relative
        z-20
        flex
        space-x-8
        xl:justify-center
        mt-4
        lg:mt-8
        xl:mt-20
        overflow-x-scroll
        xl:overflow-x-visible
        p-4
        xl:p-0
      "
    >
      <div
        v-for="(list, id) in firstList"
        :key="id"
        class="
          relative
          bg-white
          w-60
          h-40
          overflow-hidden
          rounded-xl
          shadow-lg
          cursor-pointer
          transition
          duration-500
          ease-in-out
          hover:scale-110
          flex-none
        "
      >
        <a class="" target="_blank" :href="`${list.url}`">
          <img
            class="w-full center-content"
            :src="`${list.image}`"
            alt="software engineer job vacancy"
          />
        </a>
      </div>
    </div>
    <div
      class="
        hide-scroll-bar
        relative
        z-20
        flex
        space-x-8
        xl:justify-center
        mt-3
        xl:mt-8
        overflow-x-scroll
        xl:overflow-x-visible
        p-4
        xl:p-0
      "
    >
      <div
        v-for="(list, id) in secondList"
        :key="id"
        class="
          relative
          bg-white
          w-60
          h-40
          overflow-hidden
          rounded-xl
          shadow-lg
          cursor-pointer
          transition
          duration-500
          ease-in-out
          hover:scale-110
          flex-none
        "
      >
        <a class="" target="_blank" :href="`${list.url}`">
          <img
            class="w-full center-content"
            :src="`${list.image}`"
            alt="software engineer job vacancy"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
      firstList: [
        {
          image: "/images/vacancy/job1.png",
          url: "https://jobseeker.kalibrr.com/c/nomura-research-institute/jobs/165772/frontend-engineer?similar_job_code=&app_source=job-board-mobile-3-7-15-2709",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job2.png",
          url: "https://jobseeker.kalibrr.com/c/asani/jobs/188089/software-engineer-front-end?similar_job_code=&app_source=job-board-mobile-2-15-15-2709",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job3.png",
          url: "https://jobseeker.kalibrr.com/c/smd-ventures-ilc/jobs/182448/frontend-developer?similar_job_code=&job_ref=&app_source=job-board-mobile-1-11-15-133",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job4.png",
          url: "https://jobseeker.kalibrr.com/c/prosehat/jobs/186858/full-stack-developer?similar_job_code=&job_ref=&app_source=job-board-mobile-1-15-15-2709",
          isHovering: false,
        },
      ],
      secondList: [
        {
          image: "/images/vacancy/job5.png",
          url: "https://jobseeker.kalibrr.com/c/paket-id/jobs/184353/software-engineer?similar_job_code=&job_ref=&app_source=job-board-mobile-1-4-15-2709",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job6.png",
          url: "https://jobseeker.kalibrr.com/c/mitramas-infosys-global/jobs/145304/software-engineer-backend?similar_job_code=&job_ref=&app_source=job-board-mobile-1-3-15-2709",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job7.png",
          url: "https://jobseeker.kalibrr.com/c/pintap/jobs/171952/frontend-engineer?similar_job_code=&app_source=job-board-mobile-4-15-15-2537",
          isHovering: false,
        },
        {
          image: "/images/vacancy/job8.png",
          url: "https://jobseeker.kalibrr.com/c/pt-telkom-indonesia-persero-tbk/jobs/180674/back-end-developer?similar_job_code=&app_source=job-board-mobile-2-15-15-201",
          isHovering: false,
        },
      ],
    };
  },
};
</script>

<style>
.center-content {
  position: absolute;
  z-index: 40;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
