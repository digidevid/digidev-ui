(window.webpackJsonp=window.webpackJsonp||[]).push([[37,3,15,25,38],{252:function(t,e,n){"use strict";n.r(e);var l={props:{isLoading:{type:Boolean,default:!1},content:{type:String,default:""},type:{type:String,default:"primary"},textSize:{type:String,default:"20"},disabled:{type:Boolean,default:!1}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:"btn-"+t.type+" px-6 py-3 text-"+t.textSize+" rounded-full font-bold",attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t.isLoading?n("div",{staticClass:"flex justify-center items-center"},[n("svg",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]),t._v(" "),n("p",[t._v("Loading")])]):n("div",[t._v("\n    "+t._s(t.content)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("03a87827",content,!0,{sourceMap:!1})},255:function(t,e,n){t.exports=n.p+"img/digidev-bw.70efe7f.png"},261:function(t,e,n){"use strict";n(254)},262:function(t,e,n){var l=n(71)((function(i){return i[1]}));l.push([t.i,".snackbar{left:50%;transform:translateX(-50%);bottom:-300px;transition:all .5s linear}.show{bottom:30px}",""]),l.locals={},t.exports=l},263:function(t,e,n){"use strict";n.r(e);n(76);var l={data:function(){return{isShow:!1,message:"",bgColor:"bg-primary"}},methods:{showSnackbar:function(t){var e=t.color,n=t.message;this.bgColor=e||"bg-primary",this.message=n,this.isShow=!0,this.hideSnackbar()},hideSnackbar:function(){this.isShow&&setTimeout(function(){this.isShow=!1}.bind(this),3500)}}},r=(n(261),n(46)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"\n    snackbar\n    max-w-md\n    rounded-lg\n    fixed\n    w-11/12\n    md:w-full\n    py-3\n    px-4\n    text-white text-center\n    z-50\n    shadow-xl\n  ",class:[""+t.bgColor,{show:t.isShow}]},[t._v("\n  "+t._s(t.message)+"\n")])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{typeClass:"",isShowMenu:!1}},computed:{titleClass:function(){return"web-basic"===this.typeClass?"Kelas Basic Modern Web bersama Digidev":"front-end"===this.typeClass?"Kelas Frontend Master bersama Digidev":"back-end"===this.typeClass?"Kelas Basic Backend bersama Digidev":"full-stack"===this.typeClass?"Kelas Basic Fullstack bersama Digidev":void 0}},mounted:function(){this.typeClass=this.$route.query.paket_kelas}},r=n(46),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"\n    w-full\n    h-[150px]\n    md:h-[168px]\n    lg:h-[200px]\n    container-nav\n    rounded-b-[25px]\n    bg-gradient-to-br\n    from-[#030F1F]\n    via-[#0F2C58]\n    to-[#1D478B]\n  "},[e("div",{staticClass:"\n      flex\n      w-full\n      justify-start\n      items-center\n      px-6\n      md:px-8\n      lg:px-20\n      xl:px-60\n      pt-3\n      lg:pt-9\n    "},[e("div",[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"w-14",attrs:{src:n(255),alt:"digidev brand"}})])],1)])])}),[],!1,null,null,null);e.default=component.exports},347:function(t,e,n){"use strict";n.r(e);var l=n(22),r=(n(26),n(73),n(14),n(74),n(252)),o=n(263),c={components:{Button:r.default,Snackbar:o.default},data:function(){var t;return t={choosedClass:"",typeClass:"",idClass:""},Object(l.a)(t,"typeClass",""),Object(l.a)(t,"price",""),Object(l.a)(t,"className",""),Object(l.a)(t,"choosedBank",{}),Object(l.a)(t,"totalPrice",0),Object(l.a)(t,"convenienceFee",25e3),Object(l.a)(t,"dataBank",[{id:1,bank:"BCA",noRekening:"1280427531",holderName:"Faishal Arif"},{id:2,bank:"BNI",noRekening:"0288036211",holderName:"Faishal Arif"}]),t},mounted:function(){this.choosedBank=this.dataBank[0]},computed:{titleClass:function(){return"web-basic"===this.choosedClass?"Kelas Basic Modern Web":"front-end"===this.choosedClass?"Kelas Frontend Master":"back-end"===this.choosedClass?"Kelas Backend Master":"full-stack"===this.choosedClass?"Kelas Basic Fullstack":void 0},description:function(){return"group"===this.typeClass.toLowerCase()?"Pilihan kelas group memiliki konsep pre-order, yang artinya menunggu sampai grup belajar mencapai minimal 3 orang.":"private"===this.typeClass.toLowerCase()?"Pilihan kelas private, 1 siswa akan diajarkan langsung oleh 1 mentor":"Silahkan lengkapi data di bawah"}},methods:{formatCurrency:function(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0},copyToClipBoard:function(t){try{navigator.clipboard.writeText(t),this.$refs.snackbar.showSnackbar({color:"bg-green-500",message:"Nomor rekening berhasil disalin!"})}catch(t){throw t}},checkBank:function(t){this.choosedBank=t}}},d=n(46),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container max-w-[1000px] mx-auto"},[n("div",{staticClass:"w-full"},[n("div",{staticClass:"flex items-center rounded-[20px] shadow-md bg-white"},[t._m(0),t._v(" "),n("div",{staticClass:"flex items-center px-3 md:px-8 max-w-[80%]"},[n("div",[n("h1",{staticClass:"text-14 md:text-26 font-bold"},[t._v("Ramadhan Camp")]),t._v(" "),n("h3",{staticClass:"md:text-20 text-12 font-semibold my-1 lg:my-2"},[t._v("\n            "+t._s(t.formatCurrency(parseInt(t.price)))+"\n          ")]),t._v(" "),t._m(1)])])])]),t._v(" "),n("div",{staticClass:"w-full items-center bg-white pb-12 lg:pb-28"},[t._m(2),t._v(" "),n("p",{staticClass:"font-bold lg:text-20 my-2"},[t._v("Metode Pembayaran")]),t._v(" "),n("div",{staticClass:"bg-white flex items-center space-x-4 lg:mt-4 lg:mb-4 mt-4 mb-0"},t._l(t.dataBank,(function(e,l){return n("div",{key:l,staticClass:"\n          relative\n          flex\n          items-center\n          justify-center\n          bg-white\n          rounded-[10px]\n          lg:w-[144px] lg:h-[80px]\n          w-[96px]\n          h-[56px]\n          border\n          cursor-pointer\n        ",class:{"border-[#0a7dfa]":e.id===t.choosedBank.id},on:{click:function(n){return t.checkBank(e)}}},[n("img",{staticClass:"\n            absolute\n            top-0\n            left-0\n            lg:w-6\n            w-5\n            -mt-2\n            -ml-2\n            md:-mt-3 md:-ml-3\n          ",class:{hidden:e.id!==t.choosedBank.id},attrs:{id:"click-bank",src:"/images/payment-page/CheckCircle.png",alt:""}}),t._v(" "),n("img",{attrs:{src:"/images/payment-page/"+e.bank+".png",alt:""+e.bank}})])})),0),t._v(" "),n("div",{staticClass:"hidden lg:block mt-4"},[n("p",{staticClass:"text-16 font-semibold opacity-90"},[t._v("\n        Bank Transfer - "+t._s(t.choosedBank.bank)+"\n      ")]),t._v(" "),n("p",{staticClass:"text-14 pt-1 lg:pt-2 pb-1 lg:pb-2 opacity-70"},[t._v("\n        Silahkan transfer ke rekening\n        "),n("span",{staticClass:"font-bold"},[t._v(" "+t._s(t.choosedBank.bank))]),t._v(" berikut:\n      ")])]),t._v(" "),n("div",{staticClass:"\n        flex flex-col\n        lg:flex-row lg:space-x-[107px]\n        space-x-0 space-y-2.5\n        lg:space-y-0\n        pt-4\n        lg:pt-2\n        pb-4\n      "},[n("div",[n("p",{staticClass:"text-12 lg:text-14 opacity-70"},[t._v("Nomor Rekening")]),t._v(" "),n("div",{staticClass:"flex space-x-2 items-center"},[n("p",{staticClass:"text-14 lg:text-20 font-semibold lg:pt-2 pt-1"},[t._v("\n            "+t._s(t.choosedBank.noRekening)+"\n          ")]),t._v(" "),n("img",{staticClass:"w-5 h-5 lg:w-6 lg:h-6 cursor-pointer",attrs:{src:"/images/icons/copy.svg",alt:"copy"},on:{click:function(e){return t.copyToClipBoard(t.choosedBank.noRekening)}}})])]),t._v(" "),n("div",[n("p",{staticClass:"text-12 lg:text-14 opacity-70"},[t._v("Nama Pemilik Bank")]),t._v(" "),n("p",{staticClass:"text-14 lg:text-20 font-semibold lg:pt-2 pt-1"},[t._v("\n          "+t._s(t.choosedBank.holderName)+"\n        ")])])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"pt-6"},[n("p",{staticClass:"font-bold text-16 lg:text-20"},[t._v("Pembayaran Kamu")]),t._v(" "),n("div",{staticClass:"pt-4 lg:pt-6 grid space-y-4"},[n("div",{staticClass:"flex justify-between"},[t._m(3),t._v(" "),n("p",{staticClass:"text-12 lg:text-16 opacity-60"},[t._v("\n            "+t._s(t.formatCurrency(parseInt(2e5)))+"\n          ")])]),t._v(" "),n("div",{staticClass:"flex justify-between"},[n("p",{staticClass:"text-12 lg:text-16 opacity-60"},[t._v("Biaya Pendaftaran")]),t._v(" "),n("p",{staticClass:"text-12 lg:text-16 opacity-60"},[t._v("\n            "+t._s(t.formatCurrency(0))+"\n          ")])]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"flex justify-between font-bold text-14 lg:text-18"},[n("p",[t._v("Total Pembayaran")]),t._v("\n          "+t._s(t.formatCurrency(parseInt(2e5)))+"\n        ")])])]),t._v(" "),n("p",{staticClass:"text-[10px] lg:text-14 pt-4 pb-4 lg:pt-6 lg:pb-8 opacity-60"},[t._v("\n      Pastikan untuk cek kembali kelas yang akan kamu bayar!\n    ")]),t._v(" "),n("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6282277068394"}},[n("Button",{staticClass:"lg:!text-18 !text-14 lg:py-4 py-3 px-4 md:px-8",attrs:{content:"Konfirmasi ke Whatsapp"}})],1)]),t._v(" "),n("Snackbar",{ref:"snackbar"})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"lg:w-[200px] w-[96px] md:w-[140px]",attrs:{src:"/images/vector/register.png",alt:"register"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"lg:text-14 text-sm dark-grey"},[n("b",[t._v("Movies Recommendation Web")]),t._v(" dengan Framework "),n("b",[t._v("Vue.js")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n        bg-[#E8F2FF]\n        flex\n        justify-center\n        items-center\n        py-2\n        md:py-4\n        rounded-lg\n        px-3\n        my-6\n        lg:my-8\n      "},[n("p",{staticClass:"\n          text-[10px]\n          opacity-60\n          md:text-14\n          lg:text-16\n          md:text-center\n          text-start\n        "},[t._v("\n        Silahkan lakukan transfer sebelum H-3 dari jadwal pertama camp\n        dilaksanakan\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-12 lg:text-16 opacity-60"},[t._v("\n            Ramadhan Camp - "),n("b",[t._v("Movies Recommendation Web")]),t._v(" dengan Framework\n            "),n("b",[t._v("Vue.js")])])}],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);var l=n(273),r=n(347),o={components:{NavDoneTransaction:l.default,ClassOrdered:r.default}},c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative -z-1"},[n("NavDoneTransaction"),t._v(" "),n("div",{staticClass:"absolute z-30 w-full top-32 md:top-36 lg:top-28"},[n("ClassOrdered",{staticClass:"lg:-mt-0 -mt-8"})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);