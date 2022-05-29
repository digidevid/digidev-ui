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
          placeholder="Tipe Kelas"
          @click="dropdownClass"
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
          placeholder="Pilih Kota"
          @click="dropdownCity"
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
      :is-loading="isLoadingSubmit"
      @click="submit"
    />
  </div>
</template>

<script>
import Button from "~/components/atoms/Button";
import Input from "~/components/atoms/Input";
import Dropdown from "~/components/atoms/Dropdown";
import axios from "axios";
export default {
  components: { Button, Dropdown, Input },
  data() {
    return {
      chosedClass: {},
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
      // cities: ["Medan", "Jakarta", "Bandung", "Malang"],
      cities: [
        {
          text: "Medan",
          value: "Medan",
          isActive: true,
        },
        {
          text: "Jakarta (coming soon)",
          value: "Jakarta",
          isActive: false,
        },
        {
          text: "Bandung (coming soon)",
          value: "Bandung",
          isActive: false,
        },
        {
          text: "Malang (coming soon)",
          value: "Malang",
          isActive: false,
        },
      ],
      typeClasses: [],
      isErrorForm: false,
      isLoadingSubmit: false,
      description: "Silahkan lengkapi data di bawah",
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
    this.getDataClass();
  },
  computed: {
    titleClass() {
      if (this.className === "web-basic") {
        return "Kelas Basic Modern Web";
      } else if (this.className === "front-end") {
        return "Kelas Frontend Master";
      } else if (this.className === "back-end") {
        return "Kelas Backend Master";
      } else if (this.className === "full-stack") {
        return "Kelas Basic Fullstack";
      } else if (this.className === "tugas-akhir") {
        return "Kelas Bimbingan Tugas Akhir";
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
    async getDataClass() {
      const res = await axios.get(
        `https://demo8852377.mockable.io/${this.className}`
      );
      this.chosedClass = res.data;
      this.typeClasses = this.chosedClass.classTypes.map((type) => {
        return {
          text: `${type.name}`,
          value: `${type.slug}`,
          isActive: true,
        };
      });
    },
    chooseClass(param) {
      this.chosedClass.classTypes.forEach((element) => {
        if (element.slug === param.value) {
          this.price = element.realPrice;
          this.description = element.description;
        }
      });
      this.typeClass = param.value;
      this.isOpenClass = false;
    },
    chooseCity(param) {
      this.city = param.value;
      this.isOpenCity = false;
    },
    routeToThankyouPage() {
      this.$router.push(
        `/thankyou?class-name=${this.className}&city=${this.city}`
      );
    },
    submit() {
      this.validate();
    },
    validate() {
      if (
        !this.fullname ||
        !this.className ||
        !this.typeClass ||
        !this.price ||
        !this.email ||
        !this.whatsapp ||
        !this.city ||
        !this.address
      ) {
        this.isErrorForm = true;
        return;
      } else {
        this.submitRegisterClass();
      }
    },
    async submitRegisterClass() {
      this.isLoadingSubmit = true;
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
        if (res) {
          this.isLoadingSubmit = false;
          this.routeToThankyouPage();
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
