<template>
  <div
    class="
      rounded-xl
      flex flex-col
      bg-white
      w-[270px]
      py-9
      shadow-xl
      items-center
      text-center
    "
  >
    <div class="relative rounded-full">
      <img class="w-30 h-28" src="/bg-mentor.png" alt="" />
      <img
        class="
          w-24
          h-24
          absolute
          opacity-800
          rounded-full
          text-center
          top-2
          right-[7.7px]
        "
        :src="`/images/mentor/${mentorName}.jpg`"
        alt="mentor"
      />
    </div>
    <div>
      <h2 class="font-bold pt-6">{{ mentorName }}</h2>
      <p>{{ skill }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mentorName: {
      type: String,
      default: "Faishal Arif",
    },
    skill: {
      type: String,
      default: "Full Stack Develover",
    },
  },
};
</script>

<style></style>
