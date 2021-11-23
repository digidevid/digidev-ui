<template>
  <div class="flex justify-center items-center w-full">
    <div
      class="
        flex
        md:w-[1000px] md:h-[200px]
        w-[312px]
        h-[96px]
        items-start
        md:items-center
        mb-[40px]
        rounded-[20px]
        shadow-md
        space-x-[32px]
        bg-white
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
            <!-- {{ titleClass }} -->
          </h1>
          <h3 class="md:text-20 lg:text-20 sm:text-12 text-12 font-semibold">
            {{ formatCurrency(parseInt(price)) }}
          </h3>
          <p class="md:block sm:hidden lg:block hidden">
            <!-- {{ description }} -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { classList } from "~/constants/class-list.js";
export default {
  data() {
    return {
      classList,
      price: "",
      className: "",
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
    chooseClass(param) {
      //0 for group, 1 fro private
      this.price =
        this.classList[this.idClass].classTypes[
          param.toLowerCase() === "group" ? 0 : 1
        ].realPrice;
      this.typeClass = param;
      this.isOpenClass = false;
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

  // mounted() {
  //   this.typeClass = this.$route.query["class-name"];
  //   this.city = this.$route.query["city"];
  // },

  // computed: {
  //   titleClass() {
  //     if (this.className === "web-basic") {
  //       return "Kelas Basic Modern Web";
  //     } else if (this.className === "front-end") {
  //       return "Kelas Basic Frontend";
  //     } else if (this.className === "back-end") {
  //       return "Kelas Basic Backend";
  //     } else if (this.className === "full-stack") {
  //       return "Kelas Basic Fullstack";
  //     }
  //   },
  //   description() {
  //     if (this.typeClass.toLowerCase() === "group") {
  //       return "Pilihan kelas group memiliki konsep pre-order, yang artinya menunggu sampai grup belajar mencapai minimal 3 orang.";
  //     } else if (this.typeClass.toLowerCase() === "private") {
  //       return "Pilihan kelas private, 1 siswa akan diajarkan langsung oleh 1 mentor";
  //     } else {
  //       return "Silahkan lengkapi data di bawah";
  //     }
  //   },
  // },

  // methods: {
  //   chooseClass(param) {
  //     //0 for group, 1 fro private
  //     this.price =
  //       this.classList[this.idClass].classTypes[
  //         param.toLowerCase() === "group" ? 0 : 1
  //       ].realPrice;
  //     this.typeClass = param;
  //     this.isOpenClass = false;
  //   },
  // },
};
</script>

<style></style>
