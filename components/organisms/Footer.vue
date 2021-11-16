<template>
  <div
    class="
      footer
      px-[24px]
      lg:px-40
      py-[28px]
      xl:pt-16
      rounded-t-[25px]
      lg:rounded-t-[55px]
    "
  >
    <div
      class="
        grid
        container
        text-white
        md:grid md:grid-cols-2 md:justify-between
        lg:grid-cols-4 lg:gap-8 lg:justify-center
      "
    >
      <div class="max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16">
        <img
          class="lg:w-[60px] w-[56px] md:mb-8"
          src="logo-bw.png"
          alt="digidev logo"
        />
        <p
          class="
            tn:text-sm
            md:text-base md:mt-2
            mt-[24px]
            mb-0
            lg:mb-[30px]
            space-y-1
          "
        >
          Digidev merupakan platform digital penyedia mentor berpengalaman untuk
          pembelajaran Modern Web Development secara privat dan ekslusif.
        </p>
        <div class="lg:flex flex-row space-x-4 hidden">
          <div v-for="(social, id) in SocialContact" :key="id">
            <Contact
              :linkImage="social.linkImage"
              :imageFile="social.imageFile"
            />
          </div>
        </div>
      </div>

      <div class="tn:my-4 lg:mt-0 order-1 md:order-none">
        <h1 class="font-bold md:text-2xl pt-[40px] lg:pt-0 lg:mb-4 xl:mb-8">
          Services
        </h1>
        <ul class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4">
          <li><a class="hover:no-underline" href="#">Basic Modern Web</a></li>
          <li>
            <a class="hover:no-underline" href="#">Front End Developer</a>
          </li>
          <li>
            <a class="hover:no-underline" href="#">BackEnd Developer</a>
          </li>
          <li>
            <a class="hover:no-underline" href="#">Full Stack Developer</a>
          </li>
        </ul>
      </div>

      <div class="lg:mt-0">
        <h1
          class="
            font-bold
            tn:text-lg
            md:text-2xl
            lg:mb-4
            xl:mb-8
            pt-[40px]
            lg:pt-0
          "
        >
          Reach Us
        </h1>
        <div class="md:text-base my-2 space-y-4 xl:space-y-4">
          <div class="flex space-x-2">
            <img src="/images/icons/contact/email-icon.svg" alt="mail icon" />
            <a href="mailto:digidev.id@gmail.com">
              <p>digidev.id@gmail.com</p>
            </a>
          </div>
          <div class="flex space-x-2">
            <img src="/images/icons/contact/phone-icon.svg" alt="phone icon" />
            <a href="https://api.whatsapp.com/send?phone=6281264562826"
              >+62 812 6456 2826</a
            >
          </div>
          <div class="flex space-x-2">
            <img
              src="/images/icons/contact/location-icon.svg"
              alt="location icon"
            />
            <a href="">Medan - Jakarta Selatan, Indonesia, 20371</a>
          </div>
        </div>
      </div>
    </div>

    <hr class="bg-[#484848] md:mt-0 mt-[40px] mx-[24px] lg:hidden" />
    <div
      class="
        md:hidden
        flex-row
        space-x-4
        flex
        justify-center
        mt-[40px]
        md:mt-0
        lg:0
      "
    >
      <div v-for="(social, id) in SocialContact" :key="id">
        <Contact :linkImage="social.linkImage" :imageFile="social.imageFile" />
      </div>
    </div>
    <div class="text-center text-white tn:py-2 lg:py-4">
      <p>&copy; 2021 Digidev.id. All rights reserved</p>
    </div>
  </div>
</template>

<script>
import Contact from "../mollecules/Contact.vue";
export default {
  components: { Contact },

  data() {
    return {
      SocialContact: [
        {
          linkImage: "https://www.instagram.com",
          imageFile: "Instagram",
        },
        {
          linkImage: "https://www.Dribbble.com",
          imageFile: "Dribbble",
        },
        {
          linkImage: "https://www.twitter.com",
          imageFile: "Twitter",
        },
        {
          linkImage: "https://www.youtube.com",
          imageFile: "Youtube",
        },
      ],
    };
  },
};
</script>

<style>
.footer {
  background-color: #2d2d2d;
}
</style>
