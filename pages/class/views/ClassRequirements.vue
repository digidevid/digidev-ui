<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold lg:leading-10">
      Syarat dan Ketentuan Kelas
    </h1>
    <p class="dark-grey mt-2 lg:mt-4 text-14 lg:text-18">
      Berikut ini syarat untuk mengikuti kelas {{ classTitle }}
    </p>
    <div class="mt-4 lg:mt-6 space-y-2">
      <div
        v-for="(requirement, id) in classRequirements"
        :key="id"
        class="flex space-x-3 items-center"
      >
        <img class="" src="/images/icons/tick.svg" alt="tick icon" />
        <p class="text-14 lg:text-16">{{ requirement }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classTitle: {
      type: String,
      default: "",
    },
    classRequirements: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
