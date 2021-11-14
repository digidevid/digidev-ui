<template>
  <div
    class="
      mt-4
      leading-7
      border-0 border-gray-200
      sm:mt-6 sm:gap-6
      md:mt-8 md:gap-0
    "
  >
    <div
      class="
        relative
        z-10
        flex flex-col
        items-center
        max-w-[280px] max-h-[350px]
        p-4
        mx-auto
        my-0
        shadow
        rounded-sm
        lg:-mr-3
      "
    >
      <h3
        class="
          m-0
          text-[20px]
          font-semibold
          leading-tight
          tracking-tight
          text-black
          border-0 border-gray-200
        "
      >
        {{ classType }}
      </h3>
      <p>{{ className }}</p>
      <div
        class="
          relative
          flex
          items-end
          mt-6
          leading-7
          text-gray-900
          border-0 border-gray-200
        "
      >
        <p
          class="box-border m-0 border-solid absolute top-0 left-[-20px]"
          style="border-image: initial"
        >
          Rp
        </p>
        <p
          class="
            box-border
            m-0
            text-6xl
            font-semibold
            leading-none
            border-solid
          "
        >
          {{ price }}
        </p>
        <p
          class="box-border font-bold m-0 border-solid text-xl"
          style="border-image: initial"
        >
          jt
        </p>
      </div>

      <Button class="mt-8" />
    </div>
    <p
      class="
        relative
        z-10
        flex flex-col
        items-center
        max-w-[280px]
        p-4
        mx-auto
        shadow
        rounded-sm
        lg:-mr-3
      "
    >
      {{ scheduling }}
    </p>
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },

  props: {
    price: {
      type: String,
      default: "1",
    },
    classType: {
      type: String,
      default: "Kelas Basic",
    },
    className: {
      type: String,
      default: "Modern Web",
    },
    scheduling: {
      type: String,
      default: "Sebulan 8x pertemuan",
    },
  },
};
</script>

<style></style>
