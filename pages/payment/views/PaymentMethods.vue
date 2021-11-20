<template>
  <div class="grid justify-center w-full items-center bg-white">
    <div
      class="
        bg-[#E8F2FF]
        lg:h-[56px] lg:w-[1000px]
        w-[312px]
        h-[96px]
        flex
        justify-center
        items-center
        mb-7
        lg:mb-8
      "
    >
      <p
        class="
          text-[#2D2D2D] text-10
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

    <p class="font-bold text-4 lg:text-5 mb-7 Lg:mb-8">Metode Pembayaran</p>
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
          border-solid border-2
        "
        v-for="(item, id) in bankName"
        :key="id"
      >
        <img
          id="click-bank"
          class="absolute top-0 lg:w-6 w-3"
          :class="{ hidden: item.id !== choosedBank.id }"
          src="/images/payment-page/CheckCircle.png"
          alt=""
        />
        <button @click="checkBank(item)">
          <img
            :src="`/images/payment-page/${item.bank}.png`"
            :alt="`${item.bank}`"
          />
        </button>
      </div>
    </div>

    <div class="hidden lg:block">
      <p class="text-16 font-semibold">
        Bank Transfer - {{ bankName[0].bank }}
      </p>
      <p class="text-14 pt-1 lg:pt-2 pb-1 lg:pb-2">
        Silahkan transfer ke rekening
        <span class="font-bold"> {{ bankName[0].bank }}</span> berikut:
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
          <button @click="copyToClipBoard(choosedBank.noRekening)">
            <img
              class="w-4 h-4 lg:w-6 lg:h-6"
              src="/images/payment-page/Copy.png"
              alt="copy"
            />
          </button>
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
          Rp {{ classPrice }}
        </p>
      </div>
      <div class="flex justify-between">
        <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
          Convenience fee
        </p>
        <p class="text-[12px] lg:text-[16px] text-[#2D2D2D] opacity-[60%]">
          Rp {{ convenienceFee }}
        </p>
      </div>
      <hr />
      <div class="flex justify-between font-bold text-14 lg:text-18">
        <p>Total Pembayaran</p>
        <p>Rp {{ totalHarga }}</p>
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
</template>

<script>
import Button from "../../../components/atoms/Button.vue";
export default {
  components: { Button },
  props: {
    totalHarga: {
      type: Number,
      default: 1000000,
    },
    classPrice: {
      type: Number,
      default: 1000000,
    },
    convenienceFee: {
      type: Number,
      default: 0,
    },
  },

  mounted() {
    this.className = this.$route.query["packet-class"];
    this.idClass = this.$route.query["id-class"];
  },
  data() {
    return {
      choosedBank: {},
      statusClick: "hidden",

      bankName: [
        {
          isClicked: false,
          id: 1,
          bank: "BCA",
          noRekening: "8891 ",
          infoBank: "BCA",
        },
        {
          id: 2,
          bank: "Mandiri",
          isClicked: false,
          noRekening: "8107",
          infoBank: "Mandiri",
        },
        {
          isClicked: false,
          id: 3,
          bank: "BNI",
          noRekening: "7871",
          infoBank: "BNI",
        },
      ],
    };
  },

  methods: {
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
