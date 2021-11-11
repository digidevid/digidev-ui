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
      <img class="w-28 h-28" src="/bg-mentor.png" alt="" />
      <img
        class="w-24 h-24 rounded-full text-center mentor-image"
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

<style>
.mentor-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
