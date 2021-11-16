<template>
  <div>
    <div class="order-last md:order-none flex space-x-2 xl:space-x-3 my-3">
      <a :href="`${linkImage}`" target="_blank"
        ><img
          :src="`/images/icons/social-media/${imageFile}.svg`"
          :alt="`${imageFile} icon`"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    linkImage: {
      type: String,
      default: "https://www.instagram.com",
    },
    imageFile: {
      type: String,
      default: "Instagram",
    },
  },
};
</script>

<style></style>
