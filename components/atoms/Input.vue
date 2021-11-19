<template>
  <div class="flex justify-between items-center text-20px">
    <p class="font-bold hidden lg:block md:block sm:hidden min-w-[180px]">
      {{ label }}
    </p>
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
      @input="$emit('input', $event.target.value)"
    />
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
  },
};
</script>

<style></style>
