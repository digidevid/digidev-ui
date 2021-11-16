<template>
  <section class="py-20 bg-white container">
    <h2 class="text-center text-40 font-semibold">
      <span class="font-bold">Apa Kata </span> Mereka
    </h2>
    <TestimonyCard
      :data-testimonies="dataTestimonies"
      :current-testimony="activeTestimony"
      @nextTesti="nextTesti"
      @prevTesti="prevTesti"
    />
  </section>
</template>

<script>
import TestimonyCard from "../mollecules/TestimonyCard.vue";
export default {
  components: { TestimonyCard },
  mounted() {
    this.activeTestimony = this.dataTestimonies[0];
  },
  data() {
    return {
      activeTestimony: {},
      dataTestimonies: [
        {
          id: 1,
          name: "Faishal",
          job: "Vice President",
          photo: "/images/quotes/faishal.png",
          testi:
            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
        },
        {
          id: 2,
          name: "Ibnu",
          job: "Vice President",
          photo: "/images/quotes/ibnu.jpg",
          testi:
            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improv.",
        },
        {
          id: 3,
          name: "Uncu",
          job: "Vice President",
          photo: "/images/quotes/uncu.png",
          testi:
            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickl.",
        },
        {
          id: 4,
          name: "Irwan",
          job: "Vice President",
          photo: "/images/quotes/irwan.jpg",
          testi:
            "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
        },
      ],
    };
  },
  methods: {
    nextTesti(id) {
      this.activeTestimony = this.dataTestimonies[id - 1 + 1];
    },
    prevTesti(id) {
      this.activeTestimony = this.dataTestimonies[id - 1 - 1];
    },
  },
};
</script>

<style></style>
