<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold leading-10">Informasi Kelas</h1>
    <p class="dark-grey lg:mt-4 text-14 lg:text-18">
      Berikut merupakan informasi singkat terkait kelas {{ classTitle }}.
    </p>
    <div
      class="bg-white text-14 lg:text-16 my-4 shadow-lg rounded-xl p-5 max-w-sm"
    >
      <ul class="list-disc pl-4" v-for="(item, id) in classInfo" :key="id">
        <li>{{ item }}</li>
      </ul>
      <!-- <h3 class="font-bold text-18">
        Training ({{ classInfo.classWeeks }} minggu)
      </h3>
      <p class="font-bold">{{ classInfo.classDays }}x pertemuan</p>
      <p class="dark-grey">22 Nov - 12 Jan 2022</p>
      <p class="dark-grey">Wed & Sat | 14:00 - 16:00</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classInfo: {
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
