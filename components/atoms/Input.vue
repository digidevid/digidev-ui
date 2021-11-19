<template>
  <div class="flex justify-between items-center text-sm md:text-[18px]">
    <p class="font-bold hidden lg:block md:block sm:hidden min-w-[180px]">
      {{ label }}
    </p>
    <div class="w-full">
      <input
        class="
          w-full
          lg:py-[17px] lg:px-[24px]
          py-[13px]
          px-[16px]
          border-solid border-2
        "
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      />
      <p class="text-red-500 text-sm md:text-16 mt-2" v-if="error && !value">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Title Input",
    },
    value: {
      type: String | Number,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Masukkan Nama Lengkap",
    },
    value: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "Harus diisi",
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style></style>
