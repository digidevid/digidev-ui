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
            id="name"
          />
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Pilihan Kelas
          </p>
          <div class="relative inline-block text-left w-[720px]">
            <div class="">
              <button
                @click="dropDownKelas"
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
                Private
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

            <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
            <div
              v-if="kelas"
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
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Private</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Group</a
                >
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
            id="NoWhatsapp"
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
            id="email"
          />
        </div>

        <div class="flex justify-between items-center text-20px">
          <p class="font-bold hidden lg:block md:block sm:hidden">
            Kota Domisili
          </p>
          <div class="relative inline-block text-left w-[720px]">
            <div>
              <button
                @click="dropDownKota"
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
                Pilih Kota
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

            <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
            <div
              v-if="kota"
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
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  >Medan</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                  >Jakarta</a
                >
                <a
                  href="#"
                  class="text-gray-700 block px-4 py-2 text-sm"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                  >Bogor</a
                >
                <form method="POST" action="#" role="none">
                  <button
                    type="submit"
                    class="
                      text-gray-700
                      block
                      w-full
                      text-left
                      px-4
                      py-2
                      text-sm
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Bandung
                  </button>
                </form>
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
            id="address"
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
    />
  </div>
</template>

<script>
import Button from "../atoms/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      kelas: false,
      kota: false,
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
    price: {
      type: String,
      default: "Rp1.500.000,-",
    },
    description: {
      type: String,
      default:
        "Mentor dengan segudang pengalaman yang berkarir di startup ternama lorem ipsum.",
    },
  },

  methods: {
    dropDownKelas() {
      this.kelas = !this.kelas;
    },
    dropDownKota() {
      this.kota = !this.kota;
    },
  },
};
</script>

<style></style>
