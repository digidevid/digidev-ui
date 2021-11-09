<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">Informasi Kelas</h1>
    <p class="opacity-80">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, doloremque.
    </p>
    <div class="bg-white my-4 shadow-lg rounded-xl p-5 max-w-sm">
      <h3 class="font-bold">Training ({{ classInfo.classWeeks }} minggu)</h3>
      <p class="font-bold">{{ classInfo.classDays }}x pertemuan</p>
      <p class="opacity-80">22 Nov - 12 Jan 2022</p>
      <p class="opacity-80">Wed & Sat | 14:00 - 16:00</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
