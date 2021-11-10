<template>
  <div class="bg-[#fdfdfd] p-20">
    <div class="grid grid-cols-5 gap-14">
      <div>
        <div class="bg-white rounded-2xl shadow-lg p-6 max-h-max fixed">
          <p class="font-bold mb-5">Detail Kelas</p>
          <ul class="space-y-4">
            <li v-for="(item, id) in menu" :key="id" class="light-grey">
              {{ item.name }}
            </li>
          </ul>
          <button
            class="
              w-full
              mt-6
              px-4
              py-2
              text-white
              bg-blue-500
              rounded-full
              font-bold
            "
          >
            Daftar Sekarang
          </button>
        </div>
      </div>

      <div class="col-span-4 p-8">
        <div id="class-info" class="class-info mb-16">
          <ClassInfo :class-info="chosedClass" />
        </div>

        <div id="class-goals" class="class-goals my-16">
          <ClassGoals :class-goals="chosedClass.goals" />
        </div>

        <div id="class-types" class="class-type my-16">
          <ClassType :class-types="chosedClass.classTypes" />
        </div>

        <div id="class-location" class="class-location my-16">
          <ClassLocation :class-locations="chosedClass.locations" />
        </div>

        <div id="class-syllabus" class="class-syllabus my-16">
          <ClassSyllabus :class-syllabus="chosedClass.syllabus" />
        </div>

        <div id="class-faq" class="class-faq my-16">
          <ClassFaq :class-faq="chosedClass.faq" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassInfo from "./views/ClassInfo.vue";
import ClassGoals from "./views/ClassGoals.vue";
import ClassType from "./views/ClassType.vue";
import ClassLocation from "./views/ClassLocation.vue";
import ClassSyllabus from "./views/ClassSyllabus.vue";
import ClassFaq from "./views/ClassFaq.vue";
import { classList } from "~/constants/class-list.js";
export default {
  components: {
    ClassInfo,
    ClassGoals,
    ClassType,
    ClassLocation,
    ClassSyllabus,
    ClassFaq,
  },
  data() {
    return {
      classList,
      chosedClass: {},
      menu: [
        {
          id: 1,
          name: "Informasi Kelas",
        },
        {
          id: 2,
          name: "Tujuan Kelas",
        },
        {
          id: 3,
          name: "Tipe Kelas",
        },
        {
          id: 4,
          name: "Lokasi Belajar",
        },
        {
          id: 5,
          name: "Tutor",
        },
        {
          id: 6,
          name: "Silabus/Materi",
        },
        {
          id: 7,
          name: "FAQ Kelas",
        },
      ],
    };
  },
  mounted() {
    const { paket_kelas } = this.$router.history.current.query;
    if (paket_kelas) {
      this.classList.forEach((element) => {
        if (element.slug === paket_kelas) {
          this.chosedClass = element;
        }
      });
    }
  },
};
</script>

<style></style>
