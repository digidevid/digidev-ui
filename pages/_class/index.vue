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
              @click="scrollToSection(item.id)"
            >
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

      <div class="col-span-5 p-8">
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

        <div id="class-mentor" class="class-mentor my-16">
          <ClassMentor
            :class-tutors="chosedClass.tutors"
            :active-tutor="shownTutor"
            @nextTutor="nextTutor"
            @prevTutor="prevTutor"
          />
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
import ClassMentor from "./views/ClassMentor.vue";
import ClassSyllabus from "./views/ClassSyllabus.vue";
import ClassFaq from "./views/ClassFaq.vue";
import { classList } from "~/constants/class-list.js";
export default {
  components: {
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
    scrollToSection(id) {
      if (id === 1) {
        const infoSection = document.getElementById("class-info");
        infoSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 2) {
        const goalsSection = document.getElementById("class-goals");
        goalsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 3) {
        const classTypeSection = document.getElementById("class-types");
        classTypeSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 4) {
        const locationSection = document.getElementById("class-location");
        locationSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 5) {
        const mentorSection = document.getElementById("class-mentor");
        mentorSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 6) {
        const syllabusSection = document.getElementById("class-syllabus");
        syllabusSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
      if (id === 7) {
        const faqSection = document.getElementById("class-faq");
        faqSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    },
  },
};
</script>

<style></style>
