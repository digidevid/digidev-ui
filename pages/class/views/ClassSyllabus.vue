<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">
      Materi yang akan kamu pelajari
    </h1>
    <p class="dark-grey mt-4 text-18">
      Berikut ini silabus yang akan dipelajari di kelas {{ classTitle }}.
    </p>
    <div class="space-y-4 mt-6 w-3/4">
      <div
        v-for="(syllabus, id) in classSyllabus"
        :key="id"
        class="flex space-x-5 items-center"
      >
        <p class="text-[18px] text-primary font-semibold text-center">
          <span class="text-primary" v-if="id < 9">0</span>{{ id + 1 }}
        </p>
        <p class="col-span-11 text-[18px] font-medium">
          {{ syllabus }}
        </p>
      </div>
      <div class="grid grid-cols-12 items-start">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classSyllabus: {
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
