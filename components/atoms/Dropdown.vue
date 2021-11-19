<template>
  <div class="flex justify-between items-center text-[18px]">
    <p class="font-bold hidden lg:block md:block sm:hidden min-w-[180px]">
      {{ title }}
    </p>
    <div class="relative inline-block w-full">
      <div class="">
        <button
          @click="$emit('click')"
          type="button"
          class="
            inline-flex
            justify-between
            items-center
            lg:py-[17px] lg:px-[24px]
            py-[13px]
            px-[16px]
            w-full
            h-[48px]
            sm:w-[312px] sm:h-[48px]
            md:w-full md:h-[64px]
            lg:w-full lg:h-[64px]
            border-solid border-2
            bg-white
            text-[18px]
            font-medium
            text-gray-400
            hover:bg-gray-50
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-offset-gray-100
            focus:ring-indigo-500
          "
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {{ choosedList }}
          <svg
            class="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <p class="text-red-500 text-16 mt-2" v-if="error && !value">
          {{ errorMessage }}
        </p>
      </div>

      <div
        v-if="isOpen"
        class="
          origin-top-right
          absolute
          left-0
          mt-2
          w-full
          bg-white
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <div class="py-1">
          <div v-for="(item, id) in listDropdown" :key="id">
            <p
              class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
              @click="$emit('click-list', item, id)"
            >
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Pilih",
    },
    choosedList: {
      type: String,
      default: "List Terpilih",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    listDropdown: {
      type: Array,
      default: ["list 1", "list 2"],
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
  data() {
    return {
      value: "",
    };
  },
  watch: {
    choosedList() {
      this.value = this.choosedList;
    },
  },
};
</script>

<style></style>
