<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">Lokasi belajar yang tersedia</h1>
    <p class="dark-grey text-18">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, doloremque.
    </p>
    <div class="grid grid-cols-2 mt-8">
      <div
        v-for="(city, id) in classLocations"
        :key="id"
        class="flex space-x-2 items-center mt-2"
      >
        <img src="/images/icons/location.svg" alt="location pin" />
        <p class="text-18">{{ city }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classLocations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
