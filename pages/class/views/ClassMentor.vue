<template>
  <div v-if="activeTutor">
    <h1 class="text-20 lg:text-32 font-bold leading-10">
      Mentor yang Tersedia
    </h1>
    <p class="dark-grey text-14 lg:text-18 lg:mt-4">
      Berikut ini merupakan detail data dari mentor yang akan mengajar di kelas
      {{ classTitle }}.
    </p>
    <div class="mt-5 lg:mt-10">
      <div
        class="
          p-6
          md:p-8
          lg:p-12
          grid grid-cols-1
          md:grid-cols-3
          bg-white
          rounded-xl
          shadow-lg
        "
      >
        <div class="md:col-span-2 order-last md:order-first">
          <h1 class="text-primary font-bold text-16 lg:text-20">
            {{ activeTutor.name }}
          </h1>
          <p class="dark-grey text-[12px] lg:text-14">
            {{ activeTutor.location }}
          </p>
          <div class="my-3">
            <p class="dark-grey text-14 lg:text-16">{{ activeTutor.job }}</p>
            <p class="dark-grey text-14 lg:text-16">
              {{ activeTutor.company }}
            </p>
          </div>
          <p class="text-black text-14 lg:text-16">
            {{ activeTutor.bio }}
          </p>

          <div class="flex md:hidden mt-4 justify-between items-center">
            <div class="flex space-x-3 items-center md:hidden">
              <a href="">
                <img
                  src="/images/icons/social-media/Github.svg"
                  alt="github icon"
                />
              </a>
              <a href="">
                <img
                  src="/images/icons/social-media/Linkedin.svg"
                  alt="github icon"
                />
              </a>
            </div>
            <div class="md:hidden flex justify-end items-center space-x-3">
              <img
                v-if="activeTutor.id === 1"
                class="w-4"
                src="/images/icons/arrow-grey-left.svg"
                alt="arrow left"
              />
              <img
                v-else
                class="cursor-pointer w-4"
                src="/images/icons/arrow-blue-left.svg"
                alt="arrow left"
                @click="$emit('prevTutor', activeTutor.id)"
              />
              <p class="text-14 font-medium">
                {{ activeTutor.id }}/{{ classTutors.length }}
              </p>
              <img
                v-if="activeTutor.id === classTutors.length"
                class="w-4"
                src="/images/icons/arrow-grey-right.svg"
                alt="arrow right"
              />
              <img
                v-else
                class="cursor-pointer w-4"
                src="/images/icons/arrow-blue-right.svg"
                alt="arrow right"
                @click="$emit('nextTutor', activeTutor.id)"
              />
            </div>
          </div>
        </div>

        <div class="">
          <div class="md:float-right">
            <div class="relative z-0 w-20 md:w-40 mb-2 md:mb-0">
              <img src="/images/mentor/ellipse.png" alt="ellipse border" />
              <div
                class="overflow-hidden rounded-full w-16 md:w-32 mentor-image"
              >
                <img
                  :src="`${activeTutor.photo}`"
                  :alt="`${activeTutor.name}`"
                />
              </div>
            </div>
            <div
              class="md:flex justify-center space-x-3 items-center mt-4 hidden"
            >
              <a href="">
                <img
                  src="/images/icons/social-media/Github.svg"
                  alt="github icon"
                />
              </a>
              <a href="">
                <img
                  src="/images/icons/social-media/Linkedin.svg"
                  alt="github icon"
                />
              </a>
            </div>
            <div
              class="hidden md:flex justify-center items-center space-x-3 mt-4"
            >
              <img
                v-if="activeTutor.id === 1"
                class="w-4"
                src="/images/icons/arrow-grey-left.svg"
                alt="arrow left"
              />
              <img
                v-else
                class="cursor-pointer w-4"
                src="/images/icons/arrow-blue-left.svg"
                alt="arrow left"
                @click="$emit('prevTutor', activeTutor.id)"
              />
              <p class="text-18 font-medium">
                {{ activeTutor.id }}/{{ classTutors.length }}
              </p>
              <img
                v-if="activeTutor.id === classTutors.length"
                class="w-4"
                src="/images/icons/arrow-grey-right.svg"
                alt="arrow right"
              />
              <img
                v-else
                class="cursor-pointer w-4"
                src="/images/icons/arrow-blue-right.svg"
                alt="arrow right"
                @click="$emit('nextTutor', activeTutor.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classTutors: {
      type: Array,
      default: () => [],
    },
    activeTutor: {
      type: Object,
      default: () => {},
    },
    classTitle: {
      type: String,
      default: "Basic Web",
    },
  },
};
</script>

<style>
.mentor-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
