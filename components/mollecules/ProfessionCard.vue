<template>
  <div
    :class="`bg-${bgProfessionCard} py-6 md:py-12 px-6 ${setBackground(id)}`"
  >
    <div>
      <img
        class="pb-5"
        :src="`/images/vector/${vectorProfession}.png`"
        :alt="`${vectorProfession}`"
      />
      <h1 class="font-bold text-18 lg:text-20 pb-2">{{ skill }}</h1>
      <p class="text-14 lg:text-16">
        {{ detail }}
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
      <button class="arrow-image">
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
    vectorProfession: {
      type: String,
      default: "development",
    },
    detail: {
      type: String,
      default:
        "Mentor dengan segudang pengalaman yang berkarir di startup ternama.",
    },
    id: {
      type: String | Number,
      default: "0",
    },
  },
  methods: {
    setBackground(id) {
      let idx = parseInt(id);
      return idx % 2 === 0 ? "bg-[#FCFDFE]" : "bg-[#FFFFFF] shadow-sm";
    },
  },
};
</script>

<style>
.arrow-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
