<template>
  <div
    class="
      rounded-xl
      flex flex-col
      bg-white
      w-[270px]
      pt-9
      shadow-xl
      items-center
      text-center
    "
  >
    <div class="rounded-full border-solid border-4 border-blue-500">
      <img
        class="
          w-28
          h-28
          rounded-full
          text-center
          border-solid border-white border-2
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
