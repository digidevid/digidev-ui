<template>
  <section
    id="portofolio"
    class="
      portfolio
      container
      my-16
      md:my-20
      w-full
      pb-[80px]
      !mb-[-40px]
      md:pb-[200px] md:!mb-[-100px]
    "
  >
    <h2
      class="
        container
        relative
        w-3/4
        md:w-full
        lg:text-center
        mt-5
        mb-8
        md:mb-10
        text-24
        lg:text-40
        leading-tight
        font-semibold
        lg:py-20
        py-16
      "
    >
      <span class="font-bold">Portofolio</span> Alumni
    </h2>
    <div class="relative z-50 mx-auto">
      <div class="hide-scroll-bar flex overflow-x-scroll pl-0 md:pl-[250px]">
        <div v-for="(portfolio, id) in portFolios" :key="id">
          <PortofolioCard :portfolio="portfolio" />
        </div>
      </div>
      <div class="flex space-x-8 pt-8 pl-0 md:pl-[250px]">
        <button class="">
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
  </section>
</template>

<script>
import Button from "../atoms/Button.vue";
import PortofolioCard from "../mollecules/PortofolioCard.vue";

export default {
  components: { PortofolioCard, Button },
  data() {
    return {
      portFolios: [
        {
          name: "pp-1",
          url: "https://ibnuhazar101.github.io/movie-tv-now/",
        },
        {
          name: "pp-2",
          url: "https://faishal-pokedex.herokuapp.com/",
        },
        {
          name: "pp-3",
          url: "https://todolist-faishal.herokuapp.com/",
        },
        {
          name: "pp-4",
          url: "https://fshlarf.github.io/niagahoster-landing-page/",
        },
      ],
    };
  },
};
</script>

<style>
.gradient-banner {
  background: linear-gradient(
      0deg,
      #ffffff 10.12%,
      #2e89ff 1300.12%,
      rgba(255, 255, 255, 0) 250%
    ),
    #2e89ff;
}
.portfolio {
  background-image: url("~/static/images/vector/Vector.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center -250px;
}
@media only screen and (max-width: 768px) {
  .portfolio {
    background-position: center 10px;
  }
}
</style>
