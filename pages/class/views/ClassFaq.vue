<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold leading-10">FAQ Kelas</h1>
    <div class="mt-5 lg:mt-10 space-y-4 lg:space-y-8">
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
    classTitle: {
      type: String,
      default: "Basic Web",
    },
  },
};
</script>

<style></style>
