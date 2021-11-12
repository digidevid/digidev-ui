<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">FAQ Kelas</h1>
    <div class="mt-12 space-y-8">
      <QnaChevron v-for="(faq, id) in classFaq" :key="id" :faq="faq" />
    </div>
  </div>
</template>

<script>
import QnaChevron from "~/components/mollecules/QnaChevron";
export default {
  components: {
    QnaChevron,
  },
  props: {
    classFaq: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
