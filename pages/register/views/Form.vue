<template>
  <div
    class="
      relative
      -mt-15
      bg-white
      rounded-t-[25px]
      md:rounded-t-[55px]
      pb-[161px]
      px-[24px]
      sm:px-[24px]
      md:px-[380px]
      top-[-130px]
      sm:top-[-130px]
      md:-top-16
    "
  >
    <div class="lg:pt-[72px] md:pt-[72px] sm:pt-[32px] pt-[32px]">
      <div
        class="
          flex
          h-[96px]
          md:h-[200px]
          items-start
          md:items-center
          mb-[40px]
          rounded-[20px]
          shadow-md
          space-x-[32px]
        "
      >
        <div>
          <img
            class="max-w-[200] min-w-[96px] h-[96px] md:h-[200px]"
            :src="`/images/vector/${imageName}.png`"
            alt="register"
          />
        </div>
        <div class="grid place-items-center">
          <div>
            <h1
              class="
                text-14
                sm:text-14
                md:text-32
                lg:text-32
                font-bold
                pt-4
                md:pt-0
              "
            >
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

        <Dropdown
          title="Pilihan Kelas"
          @click="dropdownClass"
          :choosedList="typeClass"
          :isOpen="isOpenClass"
          :listDropdown="typeClasses"
          @click-list="chooseClass"
        />

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

        <Dropdown
          title="Kota Domisili"
          @click="dropdownCity"
          :choosedList="city"
          :isOpen="isOpenCity"
          :listDropdown="cities"
          @click-list="chooseCity"
        />

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
        md:mb-[57px]
        mb-[41px]
        lg:float-right
      "
      content="Next"
      @click="submitRegisterClass"
    />
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
import Dropdown from "~/components/atoms/Dropdown";
import axios from "axios";
import { classList } from "~/constants/class-list.js";
export default {
  components: { Button, Dropdown },
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
