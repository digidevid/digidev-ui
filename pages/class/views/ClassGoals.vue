<template>
  <div>
    <h1 class="text-20 lg:text-32 font-bold leading-10">Tujuan Kelas</h1>
    <p class="dark-grey lg:mt-4 text-14 lg:text-18">
      Berikut ini merupakan beberapa tujuan yang diharapkan akan diterima oleh
      siswa setelah mengikuti kelas {{ classTitle }}.
    </p>
    <div class="space-y-3 mt-6 xl:w-3/4">
      <div
        v-for="(item, id) in classGoals"
        :key="id"
        class="flex space-x-3 lg:space-x-5 items-start"
      >
        <p class="text-14 lg:text-24 text-primary font-semibold text-center">
          <span class="text-primary" v-if="item.id < 10">0</span>{{ item.id }}
        </p>
        <p class="text-14 lg:text-18 font-medium">
          {{ item.content }}
        </p>
      </div>
      <!-- <div class="grid grid-cols-12 items-start">
        <p></p>
      </div> -->
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
    classTitle: {
      type: String,
      default: "Basic Web",
    },
  },
};
</script>

<style></style>
