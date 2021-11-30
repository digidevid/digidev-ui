<template>
  <div>
    <div
      class="bg-white border-solid border-1 shadow-lg rounded-[10px] p-4 lg:p-8"
    >
      <h1 class="lg:text-24 text-18 pb-4 lg:pb-6">
        Daftar sebagai <span class="font-bold"> {{ career.className }} </span>
      </h1>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p class="font-semibold text-14 lg:text-16">Persyaratan</p>
          <ol
            class="
              list-decimal
              lg:list-inside
              list-outside
              text-12
              lg:text-14
              px-3
              lg:p-0
            "
          >
            <div v-for="(requirement, id) in career.requirement" :key="id">
              <li>{{ requirement }}</li>
            </div>
          </ol>
        </div>

        <div class="text-14 lg:text16 order-last lg:order-none lg:pl-16 pl-0">
          <p class="font-semibold">Ekspektasi pendapatan</p>
          <p class="">
            <span class="font-bold text-16 lg:text-18"
              >{{ career.salary }}
            </span>
            /kelas
          </p>
        </div>

        <hr class="lg:col-span-2 col-span-1 lg:my-6 my-3" />
      </div>

      <div
        class="md:flex w-full md:justify-between md:items-center mt-4 lg:mt-0"
      >
        <div>
          <p class="text-12 md:text-14 dark-grey">
            * Subject email: {{ career.class }}-nama lengkap
          </p>
          <p class="text-12 md:text-14 dark-grey">* CV dalam format PDF</p>
        </div>
        <a target="_blank" href="mailto:digidev.id@gmail.com">
          <Button
            class="mt-6 md:mt-0 lg:!text-18 !text-14"
            content="Submit CV"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button.vue";
export default {
  components: { Button },
  props: {
    career: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
