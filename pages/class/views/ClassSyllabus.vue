<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold lg:leading-10">
      Materi yang Akan Kamu Pelajari
    </h1>
    <p class="dark-grey mt-2 lg:mt-4 text-14 lg:text-18">
      Berikut ini silabus yang akan dipelajari di kelas {{ classTitle }}.
    </p>
    <div
      class="space-y-2 lg:space-y-4 mt-3 md:mt-6 lg:w-3/4"
      v-for="(syllabus, id) in classSyllabus"
      :key="id"
    >
      <div class="flex space-x-4 lg:space-x-5 items-center">
        <p class="text-14 lg:text-18 text-primary font-semibold text-center">
          <span class="text-primary" v-if="id < 9">0</span>{{ id + 1 }}
        </p>
        <p class="col-span-11 text-14 lg:text-18 font-medium">
          {{ syllabus.name }}
        </p>
      </div>
      <div>
        <ul class="list-disc ml-8 md:ml-16 text-14 lg:text-16">
          <li v-for="(subSyllabus, id) in syllabus.subSyllabus" :key="id">
            {{ subSyllabus }}
          </li>
        </ul>
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
