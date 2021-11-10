<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">
      Materi yang akan kamu pelajari
    </h1>
    <p class="dark-grey">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure fuga nam
      eum eius cupiditate quidem nobis labore quasi dolor ipsa.
    </p>
    <div class="space-y-4 mt-6 w-3/4">
      <div
        v-for="(syllabus, id) in classSyllabus"
        :key="id"
        class="flex space-x-5 items-center"
      >
        <p class="text-[18px] text-blue-500 font-bold text-center">
          <span class="text-blue-500" v-if="id < 9">0</span>{{ id + 1 }}
        </p>
        <p class="col-span-11 text-[18px] font-bold">
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
  },
};
</script>

<style></style>
