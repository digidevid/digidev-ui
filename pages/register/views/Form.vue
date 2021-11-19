<template>
  <div
    class="
      relative
      -mt-15
      bg-white
      rounded-t-[25px]
      md:rounded-t-[55px]
      pb-[0px]
      md:pb-[161px]
      px-[24px]
      sm:px-[24px]
      md:px-[380px]
      top-[-130px]
      sm:top-[-130px]
      md:-top-16
      -mb-16
      md:-mb-0
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
              {{ titleClass }}
            </h1>
            <h3 class="md:text-20 lg:text-20 sm:text-12 text-12 font-semibold">
              {{ formatCurrency(parseInt(price)) }}
            </h3>
            <p class="md:block sm:hidden lg:block hidden mt-2">
              {{ description }}
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-[16px] lg:space-y-[40px]">
        <Input
          label="Nama Lengkap"
          v-model="fullname"
          placeholder="Masukkan Nama Lengkap"
          :error="isErrorForm"
        />

        <Dropdown
          title="Pilihan Kelas"
          @click="dropdownClass"
          :choosedList="typeClass"
          :isOpen="isOpenClass"
          :listDropdown="typeClasses"
          @click-list="chooseClass"
          :error="isErrorForm"
        />

        <Input
          label="Nomor Whatsapp"
          v-model="whatsapp"
          placeholder="Masukkan Nomor Whatsapp"
          :error="isErrorForm"
        />

        <Input
          label="Email"
          v-model="email"
          placeholder="Masukkan Email"
          :error="isErrorForm"
        />

        <Dropdown
          title="Kota Domisili"
          @click="dropdownCity"
          :choosedList="city"
          :isOpen="isOpenCity"
          :listDropdown="cities"
          @click-list="chooseCity"
          :error="isErrorForm"
        />

        <Input
          label="Alamat Lengkap"
          v-model="address"
          placeholder="Masukkan Alamat Lengkap"
          :error="isErrorForm"
        />
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
        mb-[0px]
        lg:float-right
      "
      content="Daftar"
      @click="submit"
    />
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
import Input from "~/components/atoms/Input";
import Dropdown from "~/components/atoms/Dropdown";
import axios from "axios";
import { classList } from "~/constants/class-list.js";
export default {
  components: { Button, Dropdown, Input },
  data() {
    return {
      classList,
      fullname: "",
      className: "",
      typeClass: "Tipe Kelas",
      email: "",
      whatsapp: "",
      city: "Pilih Kota",
      address: "",
      price: "",
      date: "",
      isOpenClass: false,
      isOpenCity: false,
      cities: ["Medan", "Jakarta", "Bandung", "Malang"],
      typeClasses: ["Group", "Private"],
      idClass: null,
      isErrorForm: false,
    };
  },
  props: {
    imageName: {
      type: String,
      default: "register",
    },
  },
  mounted() {
    this.className = this.$route.query["packet-class"];
    this.idClass = this.$route.query["id-class"];
  },
  computed: {
    titleClass() {
      if (this.className === "web-basic") {
        return "Kelas Basic Modern Web";
      } else if (this.className === "front-end") {
        return "Kelas Basic Frontend";
      } else if (this.className === "back-end") {
        return "Kelas Basic Backend";
      } else if (this.className === "full-stack") {
        return "Kelas Basic Fullstack";
      }
    },
    description() {
      if (this.typeClass.toLowerCase() === "group") {
        return "Pilihan kelas group memiliki konsep pre-order, yang artinya menunggu sampai grup belajar mencapai minimal 3 orang.";
      } else if (this.typeClass.toLowerCase() === "private") {
        return "Pilihan kelas private, 1 siswa akan diajarkan langsung oleh 1 mentor";
      } else {
        return "Silahkan lengkapi data di bawah";
      }
    },
  },
  methods: {
    formatCurrency(num) {
      if (num) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
      } else if (num == 0) {
        return `Rp${num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`;
      }
    },
    dropdownClass() {
      this.isOpenClass = !this.isOpenClass;
    },
    dropdownCity() {
      this.isOpenCity = !this.isOpenCity;
    },
    chooseClass(param) {
      //0 for group, 1 fro private
      this.price =
        this.classList[this.idClass].classTypes[
          param.toLowerCase() === "group" ? 0 : 1
        ].realPrice;
      this.typeClass = param;
      this.isOpenClass = false;
    },
    chooseCity(param) {
      this.city = param;
      this.isOpenCity = false;
    },
    routeToThankyouPage() {
      this.$router.push(
        `/thankyou?class-name=${this.className}&class-id=${this.idClass}&city=${this.city}`
      );
    },
    submit() {
      this.validate();
    },
    validate() {
      if (
        !this.fullname ||
        !this.className ||
        this.typeClass === "Tipe Kelas" ||
        !this.price ||
        !this.email ||
        !this.whatsapp ||
        this.city === "Pilih Kota" ||
        !this.address
      ) {
        this.isErrorForm = true;
        return;
      } else {
        this.submitRegisterClass();
      }
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
        if (res) this.routeToThankyouPage();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
