<template>
  <section class="flex items-center justify-center py-20 bg-white min-w-screen">
    <!-- <div v-for="item in items" :key="item.id"> -->
    <TestimoniCard />
    <!-- </div> -->
  </section>
</template>

<script>
import TestimoniCard from "../mollecules/TestimoniCard.vue";
export default {
  components: { TestimoniCard },
};
</script>

<style></style>
