<template>
  <div class="bg-[#fdfdfd] p-20">
    <div class="grid grid-cols-7 gap-14">
      <div class="col-span-2 px-8 relative">
        <div
          class="
            bg-white
            rounded-2xl
            shadow-lg
            p-6
            max-h-max
            w-full
            sticky
            top-16
          "
        >
          <p class="font-bold mb-5 text-18">Detail Kelas</p>
          <ul class="space-y-4">
            <li
              v-for="(item, id) in menu"
              :key="id"
              class="light-grey cursor-pointer"
              @click="scrollToSection(item.slug)"
            >
              {{ item.name }}
            </li>
          </ul>
          <Button class="text-16 mt-6 w-full" />
        </div>
      </div>

      <div class="col-span-5 p-8">
        <div id="class-info" class="class-info">
          <ClassInfo :class-info="chosedClass" />
        </div>

        <div id="class-goals" class="class-goals pt-16">
          <ClassGoals :class-goals="chosedClass.goals" />
        </div>

        <div id="class-types" class="class-type pt-16">
          <ClassType :class-types="chosedClass.classTypes" />
        </div>

        <div id="class-location" class="class-location pt-16">
          <ClassLocation :class-locations="chosedClass.locations" />
        </div>

        <div id="class-mentor" class="class-mentor pt-16">
          <ClassMentor
            :class-tutors="chosedClass.tutors"
            :active-tutor="shownTutor"
            @nextTutor="nextTutor"
            @prevTutor="prevTutor"
          />
        </div>

        <div id="class-syllabus" class="class-syllabus pt-16">
          <ClassSyllabus :class-syllabus="chosedClass.syllabus" />
        </div>

        <div id="class-faq" class="class-faq pt-16">
          <ClassFaq :class-faq="chosedClass.faq" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
import ClassInfo from "./views/ClassInfo.vue";
import ClassGoals from "./views/ClassGoals.vue";
import ClassType from "./views/ClassType.vue";
import ClassLocation from "./views/ClassLocation.vue";
import ClassMentor from "./views/ClassMentor.vue";
import ClassSyllabus from "./views/ClassSyllabus.vue";
import ClassFaq from "./views/ClassFaq.vue";
import { classList } from "~/constants/class-list.js";
export default {
  components: {
    Button,
    ClassInfo,
    ClassGoals,
    ClassType,
    ClassLocation,
    ClassMentor,
    ClassSyllabus,
    ClassFaq,
  },
  data() {
    return {
      classList,
      chosedClass: {},
      shownTutor: {},
      menu: [
        {
          id: 1,
          slug: "class-info",
          name: "Informasi Kelas",
        },
        {
          id: 2,
          slug: "class-goals",
          name: "Tujuan Kelas",
        },
        {
          id: 3,
          slug: "class-types",
          name: "Tipe Kelas",
        },
        {
          id: 4,
          slug: "class-location",
          name: "Lokasi Belajar",
        },
        {
          id: 5,
          slug: "class-mentor",
          name: "Tutor",
        },
        {
          id: 6,
          slug: "class-syllabus",
          name: "Silabus/Materi",
        },
        {
          id: 7,
          slug: "class-faq",
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
          this.shownTutor = this.chosedClass.tutors[0];
        }
      });
    }
  },
  methods: {
    nextTutor(id) {
      this.shownTutor = this.chosedClass.tutors[id - 1 + 1];
    },
    prevTutor(id) {
      this.shownTutor = this.chosedClass.tutors[id - 1 - 1];
    },
    scrollToSection(slug) {
      const section = document.getElementById(slug);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>

<style></style>
