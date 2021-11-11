<template>
  <div>
    <h1 class="text-3xl font-bold leading-10">Tujuan Kelas</h1>
    <p class="opacity-80">
      Apa Saja yang Akan Anda Dapatkan Melalui Program Ini
    </p>
    <div class="space-y-3 mt-6 w-3/4">
      <div
        v-for="(item, id) in classGoals"
        :key="id"
        class="grid grid-cols-12 items-start"
      >
        <p class="text-2xl text-blue-500 font-bold text-center">
          0{{ item.id }}
        </p>
        <p class="col-span-11 text-[18px] font-medium">
          {{ item.content }}
        </p>
      </div>
      <div class="grid grid-cols-12 items-start">
        <p></p>
        <p class="font-medium col-span-11">*syarat dan ketentuan berlaku</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classGoals: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
