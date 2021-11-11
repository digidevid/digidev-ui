<template>
  <div :class="`bg-${bgProfessionCard} py-20 px-6  rounded-xl mt-20`">
    <div>
      <h1 class="font-bold text-xl pb-2">{{ skill }}</h1>
      <p>
        Mentor dengan segudang <span class="font-bold">pengalaman</span> yang
        berkarir di startup ternama.
      </p>
    </div>
    <div
      class="
        relative
        bg-white
        w-10
        h-10
        shadow-xl
        rounded-full
        mt-6
        float-right
      "
    >
      <button class="absolute top-3 left-3.5 items-center justify-center">
        <img src="/images/vector/Icon Artwork.png" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgProfessionCard: {
      type: String,
      default: "[#FCFDFE]",
    },
    skill: {
      type: String,
      default: "Mobile Developer",
    },
  },
};
</script>

<style></style>
