<template>
  <div class="bg-main">
    <Navigation
      @click-nav="
        $router.push(`/register?packet-class=${typeClass}&id-class=${idClass}`)
      "
    />
    <div
      class="
        py-8
        md:py-14
        lg:py-16
        xl:py-20 xl:px-20
        relative
        rounded-t-[25px]
        md:rounded-t-[55px]
        -mt-14
        z-20
        bg-[#fdfdfd]
      "
    >
      <div class="xl:grid xl:grid-cols-7 xl:gap-14">
        <div class="hidden xl:block xl:col-span-2 px-8">
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
            <Button
              content="Daftar Sekarang"
              class="text-16 mt-6 w-full"
              @click="
                $router.push(
                  `/register?packet-class=${typeClass}&id-class=${idClass}`
                )
              "
            />
          </div>
        </div>

        <div class="container xl:col-span-5 xl:p-8 xl:w-full">
          <div id="class-info" class="class-info">
            <ClassInfo
              :class-info="chosedClass.summaryInfo"
              :class-title="classTitle"
            />
          </div>

          <div id="class-goals" class="class-goals pt-10 md:pt-12 xl:pt-16">
            <ClassGoals
              :class-goals="chosedClass.goals"
              :class-title="classTitle"
            />
          </div>

          <div id="class-types" class="class-type pt-10 md:pt-12 xl:pt-16">
            <ClassType
              :class-types="chosedClass.classTypes"
              :class-title="classTitle"
            />
          </div>

          <div
            id="class-location"
            class="class-location pt-10 md:pt-12 xl:pt-16"
          >
            <ClassLocation
              :class-locations="chosedClass.locations"
              :class-title="classTitle"
            />
          </div>

          <div id="class-mentor" class="class-mentor pt-10 md:pt-12 xl:pt-16">
            <ClassMentor
              :class-tutors="chosedClass.tutors"
              :active-tutor="shownTutor"
              @nextTutor="nextTutor"
              @prevTutor="prevTutor"
              :class-title="classTitle"
            />
          </div>

          <div
            id="class-syllabus"
            class="class-syllabus pt-10 md:pt-12 xl:pt-16"
          >
            <ClassSyllabus
              :class-syllabus="chosedClass.syllabus"
              :class-title="classTitle"
            />
          </div>

          <div
            id="class-requirement"
            class="class-syllabus pt-10 md:pt-12 xl:pt-16"
          >
            <ClassRequirements
              :class-requirements="chosedClass.requirements"
              :class-title="classTitle"
            />
          </div>

          <div id="class-faq" class="class-faq pt-10 md:pt-12 xl:pt-16">
            <ClassFaq :class-faq="chosedClass.faq" :class-title="classTitle" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="class-banner" class="class-banner pt-8">
        <ClassBanner
          :class-title="classTitle"
          @click-register-mentee="
            $router.push(
              `/register?packet-class=${typeClass}&id-class=${idClass}`
            )
          "
        />
      </div>
      <div class="relative z-50">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
import Navigation from "~/components/organisms/Navigation.vue";
import ClassInfo from "./views/ClassInfo.vue";
import ClassGoals from "./views/ClassGoals.vue";
import ClassType from "./views/ClassType.vue";
import ClassLocation from "./views/ClassLocation.vue";
import ClassMentor from "./views/ClassMentor.vue";
import ClassSyllabus from "./views/ClassSyllabus.vue";
import ClassRequirements from "./views/ClassRequirements";
import ClassFaq from "./views/ClassFaq.vue";
import ClassBanner from "./views/ClassBanner.vue";
import Footer from "~/components/organisms/Footer.vue";
import { classList } from "~/constants/class-list.js";
export default {
  components: {
    Button,
    Navigation,
    ClassInfo,
    ClassGoals,
    ClassType,
    ClassLocation,
    ClassMentor,
    ClassSyllabus,
    ClassRequirements,
    ClassFaq,
    ClassBanner,
    Footer,
  },
  data() {
    return {
      classList,
      chosedClass: {},
      shownTutor: {},
      typeClass: "",
      idClass: "",
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
          slug: "class-requirement",
          name: "Syarat & Ketentuan",
        },
        {
          id: 8,
          slug: "class-faq",
          name: "FAQ Kelas",
        },
      ],
    };
  },
  computed: {
    classTitle() {
      switch (this.typeClass) {
        case "web-basic":
          return "Basic Modern Web";
          break;
        case "front-end":
          return "Frontend";
          break;
        case "back-end":
          return "Backend";
          break;
        case "full-stack":
          return "Fullstack";
          break;
      }
    },
  },
  mounted() {
    const { paket_kelas } = this.$router.history.current.query;
    this.typeClass = this.$route.query.paket_kelas;
    this.idClass = this.$route.query.id_kelas;
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
