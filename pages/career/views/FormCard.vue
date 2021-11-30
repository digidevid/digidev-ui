<template>
  <div>
    <div
      class="
        bg-white
        w-[312px]
        lg:w-[1190px]
        border-solid border-1
        shadow
        rounded-[10px]
        p-4
        lg:p-8
      "
    >
      <h1 class="lg:text-[24px] text-[18px] pb-4 lg:pb-6">
        Daftar sebagai <span class="font-bold"> {{ career.className }} </span>
      </h1>
      <div class="grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p class="font-semibold text-[14px] lg:text-[16px]">Requirement</p>
          <ol
            class="
              list-decimal
              lg:list-inside
              list-outside
              text-3
              lg:text-14
              p-6
              lg:p-0
            "
          >
            <div v-for="(requirement, id) in career.requirement" :key="id">
              <li>{{ requirement }}</li>
            </div>
          </ol>
        </div>

        <div
          class="
            text-[14px]
            lg:text[16px]
            order-last
            lg:order-none lg:pl-16
            pl-0
          "
        >
          <p class="font-semibold">Ekspektasi pendapatan tambahan</p>
          <p class="">
            <span class="font-bold text-[16px] lg:text-[18px]"
              >{{ career.salary }}
            </span>
            /bln
          </p>
        </div>

        <hr class="lg:col-span-2 col-span-1 lg:my-6 my-5" />
      </div>

      <div class="flex w-full lg:justify-end justify-start">
        <Button
          class="mt-6 lg:mt-0 lg:text-[18px] text-[14px]"
          content="Submit CV"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../../components/atoms/Button.vue";
export default {
  components: { Button },
  props: {
    career: {
      type: Object,
      default: () => {},
    },
    requirement: {
      type: Array,
      default: [
        "Degree in computer science or related field.",
        "Understanding of key design principles.",
        "Proficiency in HTML, CSS, JavaScript, and jQuery.",
        "Understanding of server-side CSS.",
        "Experience with graphic design applications such as Adobe Illustrator.",
        "Experience with responsive and adaptive design.",
      ],
    },
  },
};
</script>

<style></style>
