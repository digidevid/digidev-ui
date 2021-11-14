<template>
  <div
    class="
      rounded-xl
      flex flex-col
      bg-white
      w-[270px]
      h-[344px]
      py-9
      shadow-xl
      items-center
      text-center
    "
  >
    <div class="relative rounded-full">
      <img
        class="w-[166px] h-[166px]"
        src="/bg-mentor.png"
        alt="mentor background"
      />
      <img
        class="w-[140px] h-[140px] rounded-full text-center mentor-image"
        :src="`${mentor.photo}`"
        alt="mentor"
      />
    </div>
    <div>
      <h2 class="font-bold pt-6">{{ mentor.name }}</h2>
      <p>{{ mentor.skill }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mentor: {
      type: Object,
      default: () => {},
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
