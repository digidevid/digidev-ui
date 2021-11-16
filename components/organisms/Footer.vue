<template>
  <div class="footer px-40 lg:pt-6 xl:pt-16 rounded-t-[55px]">
    <div
      class="
        container
        text-white
        md:grid md:grid-cols-2 md:justify-between
        lg:grid-cols-4 lg:gap-8 lg:justify-center
      "
    >
      <div class="max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16">
        <img class="w-[60px] mb-8" src="logo-bw.png" alt="digidev logo" />
        <p class="tn:text-sm md:text-base my-2 space-y-1">
          Digidev merupakan platform digital penyedia mentor berpengalaman untuk
          pembelajaran Modern Web Development secara privat dan ekslusif.
        </p>
        <div class="flex space-x-2 xl:space-x-3 my-3">
          <a href="" target="_blank"
            ><img
              src="/images/icons/social-media/Dribbble.svg"
              alt="dribble icon"
          /></a>
          <a href="https://www.instagram.com/digidev.indo/" target="_blank"
            ><img
              src="/images/icons/social-media/Instagram.svg"
              alt="instagram icon"
          /></a>
          <a href="" target="_blank"
            ><img
              src="/images/icons/social-media/Twitter.svg"
              alt="twitter icon"
          /></a>
          <a href="" target="_blank"
            ><img
              src="/images/icons/social-media/Youtube.svg"
              alt="youtube icon"
          /></a>
        </div>
      </div>
      <div class="tn:my-4 lg:mt-0">
        <h1 class="font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8">
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
      <div class="tn:my-4 lg:mt-0">
        <h1 class="font-bold tn:text-lg md:text-2xl tn:my-8 lg:mb-4 xl:mb-8">
          Reach Us
        </h1>
        <div class="tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4">
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
    <div class="text-center text-white tn:py-2 lg:py-4">
      <p>&copy; 2021 Digidev.id. All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #2d2d2d;
}
</style>
