<template>
  <div v-if="activeTutor">
    <h1 class="text-3xl font-bold leading-10">Tutor yang tersedia</h1>
    <p class="dark-grey w-2/3 text-18">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure fuga nam
      eum eius cupiditate quidem nobis labore quasi dolor ipsa.
    </p>
    <div class="mt-10">
      <div class="p-12 grid grid-cols-3 bg-white rounded-xl shadow-lg">
        <div class="col-span-2">
          <h1 class="text-blue-500 font-bold text-[20px]">
            {{ activeTutor.name }}
          </h1>
          <p class="dark-grey text-14">{{ activeTutor.location }}</p>
          <div class="my-3">
            <p class="dark-grey">{{ activeTutor.job }}</p>
            <p class="dark-grey">{{ activeTutor.company }}</p>
          </div>
          <p class="text-black">
            {{ activeTutor.bio }}
          </p>
        </div>

        <div>
          <div class="float-right">
            <div class="relative z-0 w-40">
              <img src="/images/mentor/ellipse.png" alt="ellipse border" />
              <div class="overflow-hidden rounded-full w-32 mentor-image">
                <img
                  :src="`${activeTutor.photo}`"
                  :alt="`${activeTutor.name}`"
                />
              </div>
            </div>
            <div class="flex justify-center items-center space-x-3 mt-10">
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
