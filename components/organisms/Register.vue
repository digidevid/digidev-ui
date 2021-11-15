<template>
  <div
    class="
      relative
      -mt-15
      bg-white
      rounded-t-[55px]
      pb-[161px]
      px-[24px]
      sm:px-[24px]
      md:px-[220px]
      lg:px-[220px]
      top-[-130px]
      sm:top-[-130px]
      lg:-top-16
      md:-top-16
    "
  >
    <div class="lg:pt-[72px] md:pt-[72px] sm:pt-[32px] pt-[32px]">
      <div
        class="
          flex
          max-w-[1107px] max-h-[220px]
          min-w-[312px] min-h-[96px]
          mb-[40px]
          rounded-[20px]
          shadow-md
          space-x-[32px]
        "
      >
        <div>
          <img
            class="max-w-[200] max-h-[200px] min-w-[96px] min-h-[96px]"
            :src="`/images/vector/${imageName}.png`"
            alt="register"
          />
        </div>
        <div class="grid place-items-center">
          <div>
            <h1 class="text-14 sm:text-14 md:text-32 lg:text-32 font-bold">
              {{ nameClass }}
            </h1>
            <h3 class="md:text-20 lg:text-20 sm:text-12 text-12 font-semibold">
              {{ price }}
            </h3>
            <p class="md:block sm:hidden lg:block hidden">{{ description }}</p>
          </div>
        </div>
      </div>

      <div class="space-y-[16px] lg:space-y-[40px]">
        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Nama Lengkap
          </p>
          <input
            class="
              w-[720px]
              lg:py-[17px] lg:px-[24px]
              py-[13px]
              px-[16px]
              border-solid border-2
            "
            type="text"
            placeholder="Masukkan Nama Lengkap"
            v-model="fullname"
          />
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Pilihan Kelas
          </p>
          <div class="relative inline-block text-left w-[720px]">
            <div class="">
              <button
                @click="dropdownClass"
                type="button"
                class="
                  inline-flex
                  justify-between
                  lg:py-[17px] lg:px-[24px]
                  py-[13px]
                  px-[16px]
                  w-full
                  h-[48px]
                  sm:w-[312px] sm:h-[48px]
                  md:w-[720px] md:h-[64px]
                  lg:w-[720px] lg:h-[64px]
                  border border-gray-300
                  bg-white
                  text-sm
                  font-medium
                  text-gray-400
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-100
                  focus:ring-indigo-500
                "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ typeClass }}
                <!-- Heroicon name: solid/chevron-down -->
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              v-if="isOpenClass"
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-56
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <div v-for="(item, idClass) in typeClasses" :key="idClass">
                  <p
                    class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    @click="chooseClass(item)"
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Nomor Whatsapp
          </p>
          <input
            class="
              lg:py-[17px] lg:px-[24px]
              py-[13px]
              px-[16px]
              w-[720px]
              border-solid border-2
            "
            type="text"
            placeholder="Masukkan Nomor Whatsapp"
            v-model="whatsapp"
          />
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block">Email</p>
          <input
            class="
              lg:py-[17px] lg:px-[24px]
              py-[13px]
              px-[16px]
              w-[720px]
              border-solid border-2
            "
            type="text"
            placeholder="Masukkan Email"
            v-model="email"
          />
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Kota Domisili
          </p>
          <div class="relative inline-block text-left w-[720px]">
            <div>
              <button
                @click="dropdownCity"
                type="button"
                class="
                  inline-flex
                  justify-between
                  rounded-md
                  border border-gray-300
                  lg:py-[17px] lg:px-[24px]
                  py-[13px]
                  px-[16px]
                  h-[48px]
                  w-full
                  sm:w-full sm:h-[48px]
                  md:w-[720px] md:h-[64px]
                  lg:w-[720px] lg:h-[64px]
                  bg-white
                  text-sm
                  font-medium
                  text-gray-400
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-100
                  focus:ring-indigo-500
                "
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {{ city }}
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              v-if="isOpenCity"
              class="
                origin-top-right
                absolute
                right-0
                mt-2
                w-56
                bg-white
                ring-1 ring-black ring-opacity-5
                focus:outline-none
              "
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <div v-for="(item, idCity) in cities" :key="idCity">
                  <p
                    class="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                    @click="chooseCity(item)"
                  >
                    {{ item }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Alamat Lengkap
          </p>
          <input
            class="
              lg:py-[17px] lg:px-[24px]
              py-[13px]
              px-[16px]
              w-[720px]
              border-solid border-2
            "
            type="text"
            placeholder="Masukkan Alamat Lengkap"
            v-model="address"
          />
        </div>
      </div>
    </div>
    <Button
      class="
        rounded
        h-[64px]
        w-full
        lg:w-[240px]
        mt-[40px]
        mb-[57px]
        lg:float-right
      "
      content="Next"
      @click="submitRegisterClass"
    />
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
import axios from "axios";
import { classList } from "~/constants/class-list.js";
export default {
  components: { Button },
  data() {
    return {
      fullname: "",
      className: "",
      typeClass: "Tipe Kelas",
      email: "",
      whatsapp: "",
      city: "Pilih Kota",
      address: "",
      price: "750000",
      date: "",
      isOpenClass: false,
      isOpenCity: false,
      cities: ["Medan", "Jakarta", "Bandung", "Malang"],
      typeClasses: ["Group", "Private"],
    };
  },
  props: {
    imageName: {
      type: String,
      default: "register",
    },
    nameClass: {
      type: String,
      default: "Kelas Frontend (Vue Js)",
    },
    // price: {
    //   type: String,
    //   default: "Rp1.500.000,-",
    // },
    description: {
      type: String,
      default:
        "Mentor dengan segudang pengalaman yang berkarir di startup ternama lorem ipsum.",
    },
  },
  mounted() {
    this.className = this.$route.query["packet-class"];
    console.log(this.className);
  },
  methods: {
    dropdownClass() {
      this.isOpenClass = !this.isOpenClass;
    },
    dropdownCity() {
      this.isOpenCity = !this.isOpenCity;
    },
    chooseClass(param) {
      this.typeClass = param;
      this.isOpenClass = false;
    },
    chooseCity(param) {
      this.city = param;
      this.isOpenCity = false;
    },
    async submitRegisterClass() {
      const payload = {
        fullname: this.fullname,
        class: this.className,
        class_type: this.typeClass,
        price: this.price,
        whatsapp: this.whatsapp,
        email: this.email,
        city: this.city,
        address: this.address,
        date: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
      };
      try {
        const res = await axios.post(
          "https://digidev-api.herokuapp.com",
          payload
        );
        if (res) this.$router.push(`/thankyou`);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
