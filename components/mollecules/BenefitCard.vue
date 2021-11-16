<template>
  <div class="relative px-[30px] py-10 rounded-xl shadow-xl bg-white">
    <div class="absolute w-6 h-6 p-8 bg-primary rounded-full top-[-25px]">
      <img class="vector" :src="`${benefit.icon}`" alt="rating" />
    </div>
    <h4 class="text-18 lg:text-24 mt-5 font-bold text-start">
      {{ benefit.title }}
    </h4>
    <p class="text-start pt-2 text-16 lg:text-18">
      {{ benefit.start }} <span class="font-bold">{{ benefit.bold }}</span>
      {{ benefit.end }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    benefit: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
