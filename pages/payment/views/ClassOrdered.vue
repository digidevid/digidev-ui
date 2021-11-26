<template>
  <div class="container max-w-[1000px] mx-auto">
    <div class="w-full">
      <div class="flex items-center rounded-[20px] shadow-md bg-white">
        <div>
          <img
            class="lg:w-[200px] w-[96px] md:w-[140px]"
            src="/images/vector/register.png"
            alt="register"
          />
        </div>
        <div class="flex items-center px-3 md:px-8 max-w-[80%]">
          <div>
            <h1 class="text-14 md:text-26 font-bold">
              {{ titleClass }}
            </h1>
            <h3 class="md:text-20 text-12 font-semibold my-1 lg:my-2">
              {{ formatCurrency(parseInt(price)) }}
            </h3>
            <p class="lg:block hidden dark-grey">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full items-center bg-white pb-12 lg:pb-28">
      <div
        class="
          bg-[#E8F2FF]
          flex
          justify-center
          items-center
          py-2
          md:py-4
          rounded-lg
          px-3
          my-6
          lg:my-8
        "
      >
        <p
          class="
            text-[10px]
            opacity-60
            md:text-14
            lg:text-16
            md:text-center
            text-start
          "
        >
          Silahkan lakukan transfer sebelum H-3 dari jadwal pertama kelas
          dilaksanakan
        </p>
      </div>

      <p class="font-bold lg:text-20 my-2">Metode Pembayaran</p>
      <div
        class="bg-white flex items-center space-x-4 lg:mt-4 lg:mb-4 mt-4 mb-0"
      >
        <div
          class="
            relative
            flex
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
            class="
              absolute
              top-0
              left-0
              lg:w-6
              w-5
              -mt-2
              -ml-2
              md:-mt-3 md:-ml-3
            "
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

      <div class="hidden lg:block mt-4">
        <p class="text-16 font-semibold opacity-90">
          Bank Transfer - {{ choosedBank.bank }}
        </p>
        <p class="text-14 pt-1 lg:pt-2 pb-1 lg:pb-2 opacity-70">
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
          pt-4
          lg:pt-2
          pb-4
        "
      >
        <div>
          <p class="text-12 lg:text-14 opacity-70">Nomor Rekening</p>
          <div class="flex space-x-2 items-center">
            <p class="text-14 lg:text-20 font-semibold lg:pt-2 pt-1">
              {{ choosedBank.noRekening }}
            </p>
            <img
              class="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"
              src="/images/icons/copy.svg"
              alt="copy"
              @click="copyToClipBoard(choosedBank.noRekening)"
            />
          </div>
        </div>
        <div>
          <p class="text-12 lg:text-14 opacity-70">Nama Pemilik Bank</p>
          <p class="text-14 lg:text-20 font-semibold lg:pt-2 pt-1">
            {{ choosedBank.holderName }}
          </p>
        </div>
      </div>
      <hr />

      <div class="pt-6">
        <p class="font-bold text-16 lg:text-20">Pembelian Kamu</p>

        <div class="pt-4 lg:pt-6 grid space-y-4">
          <div class="flex justify-between">
            <p class="text-12 lg:text-16 opacity-60">
              Kelas Frontend Engineer - Grup
            </p>
            <p class="text-12 lg:text-16 opacity-60">
              {{ formatCurrency(parseInt(price)) }}
            </p>
          </div>
          <div class="flex justify-between">
            <p class="text-12 lg:text-16 opacity-60">Biaya Pendaftaran</p>
            <p class="text-12 lg:text-16 opacity-60">
              {{ formatCurrency(convenienceFee) }}
            </p>
          </div>
          <hr />
          <div class="flex justify-between font-bold text-14 lg:text-18">
            <p>Total Pembayaran</p>
            {{ formatCurrency(parseInt(totalPrice)) }}
          </div>
        </div>
      </div>
      <p class="text-[10px] lg:text-14 pt-4 pb-4 lg:pt-6 lg:pb-8 opacity-60">
        Pastikan untuk cek kembali kelas yang akan kamu beli
      </p>

      <a
        target="_blank"
        href="https://api.whatsapp.com/send?phone=6281264562826"
      >
        <Button
          class="lg:!text-18 !text-14 lg:py-4 py-3 px-4 md:px-8"
          content="Konfirmasi ke Whatsapp"
        />
      </a>
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
      price: "",
      className: "",
      choosedBank: {},
      totalPrice: 0,
      convenienceFee: 25000,
      dataBank: [
        {
          id: 1,
          bank: "BCA",
          noRekening: "1280427531",
          holderName: "Faishal Arif",
        },
        // {
        //   id: 2,
        //   bank: "Mandiri",
        //   noRekening: "8107",
        //   holderName: "Mandiri",
        // },
        {
          id: 2,
          bank: "BNI",
          noRekening: "0288036211",
          holderName: "Faishal Arif",
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
    this.totalPrice = this.convenienceFee + this.price;
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
