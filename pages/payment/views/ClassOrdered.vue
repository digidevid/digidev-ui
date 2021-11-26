<template>
  <div>
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
            src="/images/vector/register.png"
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
            <p class="md:block sm:hidden lg:block hidden">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid justify-center w-full items-center bg-white pb-28">
      <div
        class="
          bg-[#E8F2FF]
          lg:w-[1000px]
          w-[312px]
          flex
          justify-center
          items-center
          mb-7
          lg:mb-8
          py-2
          md:py-4
          rounded
        "
      >
        <p
          class="
            text-[#2D2D2D] text-sm
            opacity-60
            lg:text-16 lg:px-11
            px-2
            lg:text-center
            text-start
          "
        >
          Silahkan lakukan transfer sebelum H-3 dari jadwal pertama kelas
          dilaksanakan
        </p>
      </div>

      <p class="font-bold lg:text-20 my-2">Metode Pembayaran</p>
      <div
        class="
          bg-white
          flex
          items-center
          space-x-[17px]
          lg:space-x-11 lg:mt-4 lg:mb-4
          mt-0
          mb-0
        "
      >
        <div
          class="
            relative
            grid
            items-center
            justify-center
            bg-white
            rounded-[10px]
            lg:w-[144px] lg:h-[80px]
            w-[96px]
            h-[56px]
            border
            cursor-pointer
          "
          @click="checkBank(item)"
          v-for="(item, id) in dataBank"
          :key="id"
        >
          <img
            id="click-bank"
            class="absolute top-0 lg:w-6 w-5 -mt-1 -ml-1 md:-mt-2 md:-ml-2)"
            :class="{ hidden: item.id !== choosedBank.id }"
            src="/images/payment-page/CheckCircle.png"
            alt=""
          />
          <img
            :src="`/images/payment-page/${item.bank}.png`"
            :alt="`${item.bank}`"
          />
        </div>
      </div>

      <div class="hidden lg:block">
        <p class="text-16 font-semibold">
          Bank Transfer - {{ choosedBank.bank }}
        </p>
        <p class="text-14 pt-1 lg:pt-2 pb-1 lg:pb-2">
          Silahkan transfer ke rekening
          <span class="font-bold"> {{ choosedBank.bank }}</span> berikut:
        </p>
      </div>

      <div
        class="
          flex flex-col
          lg:flex-row lg:space-x-[107px]
          space-x-0 space-y-2.5
          lg:space-y-0
          pt-1
          lg:pt-2
          pb-4
          lg:pb-14
        "
      >
        <div>
          <p class="text-12 lg:text-14 text-[#2D2D2D] opacity-[60%]">
            Nomor Rekening
          </p>
          <div class="flex space-x-1 lg:space-x-2">
            <p class="text-14 lg:text-20 font-bold lg:pt-2 pt-1">
              {{ choosedBank.noRekening }}
            </p>
            <img
              class="w-4 h-4 lg:w-6 lg:h-6"
              src="/images/payment-page/Copy.png"
              alt="copy"
              @click="copyToClipBoard(choosedBank.noRekening)"
            />
          </div>
        </div>
        <div>
          <p class="text-12 lg:text-14 text-[#2D2D2D] opacity-[60%]">
            Nama Pemilik Bank
          </p>
          <p class="text-14 lg:text-20 font-bold lg:pt-2 pt-1">
            {{ choosedBank.infoBank }}
          </p>
        </div>
      </div>

      <p class="font-bold text-16 lg:text-20">Pembelian Kamu</p>

      <div class="pt-4 lg:pt-6 grid space-y-4">
        <div class="flex justify-between">
          <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
            Kelas Frontend Engineer - Grup
          </p>
          <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
            {{ formatCurrency(parseInt(price)) }}
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
            Biaya Pendaftaran
          </p>
          <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
            Rp{{ formatCurrency(convenienceFee) }}
          </p>
        </div>
        <hr />
        <div class="flex justify-between font-bold text-14 lg:text-18">
          <p>Total Pembayaran</p>
          {{ formatCurrency(parseInt(sumPrice)) }}
        </div>
      </div>
      <p
        class="
          text-[10px]
          lg:text-14
          pt-4
          pb-4
          lg:pt-6 lg:pb-8
          text-[#2D2D2D]
          opacity-[60%]
        "
      >
        Pastikan untuk cek kembali kelas yang akan kamu beli
      </p>

      <Button
        class="w-56 lg:w-72 lg:text-18 text-[14px] lg:py-4 py-3 px-2"
        content="Konfirmasi ke Whatsapp"
      />
    </div>
  </div>
</template>

<script>
import { classList } from "~/constants/class-list.js";
import Button from "~/components/atoms/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      classList,
      choosedClass: "",
      typeClass: "",
      idClass: "",
      typeClass: "",
      classList,
      price: "",
      className: "",
      choosedBank: {},
      statusClick: "hidden",
      totalPrice: 0,
      convenienceFee: 25000,
      dataBank: [
        {
          isClicked: false,
          id: 1,
          bank: "BCA",
          noRekening: "1280427531",
          infoBank: "Faishal Arif",
        },
        // {
        //   id: 2,
        //   bank: "Mandiri",
        //   isClicked: false,
        //   noRekening: "8107",
        //   infoBank: "Mandiri",
        // },
        {
          isClicked: false,
          id: 2,
          bank: "BNI",
          noRekening: "0288036211",
          infoBank: "Faishal Arif",
        },
      ],
    };
  },
  mounted() {
    this.choosedBank = this.dataBank[0];
    this.choosedClass = this.$route.query["choosed-class"];
    this.idClass = this.$route.query["id-class"];
    this.typeClass = this.$route.query["type-class"];
    this.price =
      this.classList[this.idClass].classTypes[
        this.typeClass.toLowerCase() === "group" ? 0 : 1
      ].realPrice;
  },
  computed: {
    titleClass() {
      if (this.choosedClass === "web-basic") {
        return "Kelas Basic Modern Web";
      } else if (this.choosedClass === "front-end") {
        return "Kelas Basic Frontend";
      } else if (this.choosedClass === "back-end") {
        return "Kelas Basic Backend";
      } else if (this.choosedClass === "full-stack") {
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
    sumPrice() {
      return (this.totalPrice = this.convenienceFee + this.price);
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
    copyToClipBoard(noRekening) {
      try {
        navigator.clipboard.writeText(noRekening);
      } catch (e) {
        throw e;
      }
    },
    checkBank(item) {
      this.choosedBank = item;
    },
  },
};
</script>

<style></style>
