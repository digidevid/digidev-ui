<template>
  <div class="px-[163px] bg-white">
    <div class="container flex flex-col items-start mx-auto lg:items-center">
      <h2
        class="
          relative
          flex
          items-start
          justify-start
          w-full
          max-w-3xl
          text-5xl
          lg:justify-center
        "
      >
        <span class="font-semibold">Apa Kata </span> Mereka
      </h2>

      <div class="items-center justify-end w-full pb-8 mt-12 mb-4 lg:flex">
        <div
          class="
            flex
            items-start
            justify-start
            w-full
            h-auto
            mb-12
            lg:w-3/5
            space-x-4
            pb-10
            border-b-2 border-solid
          "
        >
          <img src="/images/vector/quote.png" alt="quotes" />
          <blockquote class="text-lg text-gray-500">
            We had an incredible experience working with Landify and were
            impressed they made such a big difference in only three weeks. Our
            team is so grateful for the wonderful improvements they made and
            their ability to get familiar with the product concept so quickly.
            It acted as a catalyst to take our design to the next level and get
            more eyes on our product.
          </blockquote>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div class="flex">
        <div
          class="
            w-[56px]
            h-[56px]
            mr-4
            overflow-hidden
            bg-gray-200
            rounded-full
          "
        >
          <img
            :src="`/images/quotes/${name}.jpg`"
            class="object-cover w-full h-full"
          />
        </div>
        <div class="flex flex-col items-start justify-center">
          <h4 class="font-bold text-gray-800">{{ name }}</h4>
          <p class="text-gray-600">{{ description }}</p>
        </div>
      </div>

      <div class="flex space-x-5 justify-end">
        <button>
          <svg
            style="transform: rotateY(180deg)"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.399963 6.16657V7.83323H10.4L5.81663 12.4166L6.99996 13.5999L13.6 6.9999L6.99996 0.399902L5.81663 1.58324L10.4 6.16657H0.399963Z"
              fill="#0A7DFA"
            />
          </svg>
        </button>

        <p>1/5</p>

        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.399963 6.16657V7.83323H10.4L5.81663 12.4166L6.99996 13.5999L13.6 6.9999L6.99996 0.399902L5.81663 1.58324L10.4 6.16657H0.399963Z"
              fill="#0A7DFA"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Faishal Arif",
    },
    description: {
      type: String,
      default: "Vice President",
    },
  },
};
</script>

<style></style>
