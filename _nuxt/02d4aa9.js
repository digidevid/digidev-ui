(window.webpackJsonp=window.webpackJsonp||[]).push([[55,3,4,5,9,21,56,57],{252:function(t,e,n){"use strict";n.r(e);var r={props:{isLoading:{type:Boolean,default:!1},content:{type:String,default:""},type:{type:String,default:"primary"},textSize:{type:String,default:"20"},disabled:{type:Boolean,default:!1}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:"btn-"+t.type+" px-6 py-3 text-"+t.textSize+" rounded-full font-bold",attrs:{disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t.isLoading?n("div",{staticClass:"flex justify-center items-center"},[n("svg",{staticClass:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[n("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),n("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})]),t._v(" "),n("p",[t._v("Loading")])]):n("div",[t._v("\n    "+t._s(t.content)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";var r=n(12),l=n(1),o=n(3),c=n(103),d=n(18),m=n(13),f=n(182),v=n(37),x=n(102),h=n(181),y=n(5),_=n(75).f,C=n(30).f,w=n(17).f,k=n(256),N=n(257).trim,E="Number",I=l.Number,F=I.prototype,M=l.TypeError,S=o("".slice),O=o("".charCodeAt),D=function(t){var e=h(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,n,r,l,o,c,d,code,m=h(t,"number");if(x(m))throw M("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=N(m),43===(e=O(m,0))||45===e){if(88===(n=O(m,2))||120===n)return NaN}else if(48===e){switch(O(m,1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+m}for(c=(o=S(m,2)).length,d=0;d<c;d++)if((code=O(o,d))<48||code>l)return NaN;return parseInt(o,r)}return+m};if(c(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var L,A=function(t){var e=arguments.length<1?0:I(D(t)),n=this;return v(F,n)&&y((function(){k(n)}))?f(Object(e),n,A):e},B=r?_(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;B.length>$;$++)m(I,L=B[$])&&!m(A,L)&&w(A,L,C(I,L));A.prototype=F,F.constructor=A,d(l,E,A)}},255:function(t,e,n){t.exports=n.p+"img/digidev-bw.70efe7f.png"},256:function(t,e,n){var r=n(3);t.exports=r(1..valueOf)},257:function(t,e,n){var r=n(3),l=n(21),o=n(11),c=n(258),d=r("".replace),m="["+c+"]",f=RegExp("^"+m+m+"*"),v=RegExp(m+m+"*$"),x=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,f,"")),2&t&&(n=d(n,v,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},258:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},259:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},260:function(t,e,n){var content=n(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("b8f570ea",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var r={props:{linkImage:{type:String,default:"https://www.instagram.com"},imageFile:{type:String,default:"Instagram"}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"order-last md:order-none flex space-x-2 xl:space-x-3 my-3"},[n("a",{attrs:{href:""+t.linkImage,target:"_blank"}},[n("img",{attrs:{src:"/images/icons/social-media/"+t.imageFile+".svg",alt:t.imageFile+" icon"}})])])])}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,n){"use strict";n(260)},266:function(t,e,n){var r=n(71)((function(i){return i[1]}));r.push([t.i,".footer{background-color:#2d2d2d}",""]),r.locals={},t.exports=r},267:function(t,e,n){t.exports=n.p+"img/hero.c230fda.jpeg"},272:function(t,e,n){"use strict";n.r(e);var r={components:{Contact:n(264).default},data:function(){return{SocialContact:[{linkImage:"https://instagram.com/digidev.indo?utm_medium=copy_link",imageFile:"Instagram"},{linkImage:"https://www.Dribbble.com",imageFile:"Dribbble"},{linkImage:"https://www.twitter.com",imageFile:"Twitter"},{linkImage:"https://www.youtube.com",imageFile:"Youtube"}]}}},l=(n(265),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    footer\n    px-[24px]\n    xl:px-40\n    pt-[28px]\n    xl:pt-16\n    rounded-t-[25px]\n    lg:rounded-t-[55px]\n  "},[n("div",{staticClass:"\n      grid\n      container\n      text-white\n      md:grid md:grid-cols-2 md:justify-between\n      lg:grid-cols-4 lg:gap-8 lg:justify-center\n    "},[n("div",{staticClass:"max-w-md md:row-span-3 lg:col-span-2 md:pr-10 xl:pr-16"},[n("img",{staticClass:"lg:w-[60px] w-[56px] md:mb-8",attrs:{src:"/logo/digidev.png",alt:"digidev logo"}}),t._v(" "),n("p",{staticClass:"\n          tn:text-sm\n          md:text-base md:mt-2\n          mt-[24px]\n          mb-0\n          lg:mb-[30px]\n          space-y-1\n        "},[t._v("\n        Digidev merupakan platform digital penyedia mentor berpengalaman untuk\n        pembelajaran Modern Web Development secara privat dan ekslusif.\n      ")]),t._v(" "),n("div",{staticClass:"md:flex flex-row space-x-4 hidden"},t._l(t.SocialContact,(function(t,e){return n("div",{key:e},[n("Contact",{attrs:{linkImage:t.linkImage,imageFile:t.imageFile}})],1)})),0)]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),n("hr",{staticClass:"bg-[#484848] md:mt-0 mt-[40px] mx-[24px] md:hidden"}),t._v(" "),n("div",{staticClass:"\n      md:hidden\n      flex-row\n      space-x-4\n      flex\n      justify-center\n      mt-[40px]\n      md:mt-0\n      lg:0\n    "},t._l(t.SocialContact,(function(t,e){return n("div",{key:e},[n("Contact",{attrs:{linkImage:t.linkImage,imageFile:t.imageFile}})],1)})),0),t._v(" "),t._m(2)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tn:my-4 lg:mt-0 order-1 md:order-none"},[n("h1",{staticClass:"font-bold md:text-2xl pt-[40px] lg:pt-0 lg:mb-4 xl:mb-8"},[t._v("\n        Services\n      ")]),t._v(" "),n("ul",{staticClass:"tn:text-sm md:text-base my-2 space-y-4 xl:space-y-4"},[n("li",[n("a",{staticClass:"hover:no-underline",attrs:{href:"#"}},[t._v("Basic Modern Web")])]),t._v(" "),n("li",[n("a",{staticClass:"hover:no-underline",attrs:{href:"#"}},[t._v("Front End Developer")])]),t._v(" "),n("li",[n("a",{staticClass:"hover:no-underline",attrs:{href:"#"}},[t._v("BackEnd Developer")])]),t._v(" "),n("li",[n("a",{staticClass:"hover:no-underline",attrs:{href:"#"}},[t._v("Full Stack Developer")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lg:mt-0"},[n("h1",{staticClass:"\n          font-bold\n          tn:text-lg\n          md:text-2xl\n          lg:mb-4\n          xl:mb-8\n          pt-[40px]\n          lg:pt-0\n        "},[t._v("\n        Reach Us\n      ")]),t._v(" "),n("div",{staticClass:"md:text-base my-2 space-y-4 xl:space-y-4"},[n("div",{staticClass:"flex space-x-2"},[n("img",{attrs:{src:"/images/icons/contact/email-icon.svg",alt:"mail icon"}}),t._v(" "),n("a",{attrs:{href:"mailto:digidev.id@gmail.com"}},[n("p",[t._v("digidev.id@gmail.com")])])]),t._v(" "),n("div",{staticClass:"flex space-x-2"},[n("img",{attrs:{src:"/images/icons/contact/phone-icon.svg",alt:"phone icon"}}),t._v(" "),n("a",{attrs:{href:"https://api.whatsapp.com/send?phone=6282277068394"}},[t._v("+62 822-7706-8394")])]),t._v(" "),n("div",{staticClass:"flex space-x-2"},[n("img",{attrs:{src:"/images/icons/contact/location-icon.svg",alt:"location icon"}}),t._v(" "),n("a",{attrs:{href:""}},[t._v("Jl. Harmonika Baru no.05a lt.2, Medan Selayang, Medan. 20132")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center text-white md:mt-4 py-2 lg:py-4"},[n("p",[t._v("© 2021 Digidev.id. All rights reserved")])])}],!1,null,null,null);e.default=component.exports},283:function(t,e,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("e6e4bed0",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";n.r(e);var r,l=n(22),o=(n(253),{props:(r={label:{type:String,default:"Title Input"},value:{type:String|Number,default:""},placeholder:{type:String,default:"Masukkan Nama Lengkap"}},Object(l.a)(r,"value",{type:String,default:""}),Object(l.a)(r,"error",{type:Boolean,default:!1}),Object(l.a)(r,"errorMessage",{type:String,default:"Harus diisi"}),r),methods:{onInput:function(t){this.$emit("input",t.target.value)}}}),c=n(46),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center text-sm md:text-[18px]"},[n("p",{staticClass:"font-bold hidden lg:block md:block sm:hidden min-w-[180px]"},[t._v("\n    "+t._s(t.label)+"\n  ")]),t._v(" "),n("div",{staticClass:"w-full"},[n("input",{staticClass:"\n        w-full\n        lg:py-[17px] lg:px-[24px]\n        py-[13px]\n        px-[16px]\n        border-solid border-2\n      ",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),t.error&&!t.value?n("p",{staticClass:"text-red-500 text-sm md:text-16 mt-2"},[t._v("\n      "+t._s(t.errorMessage)+"\n    ")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"Pilih"},placeholder:{type:String,default:function(){return""}},isOpen:{type:Boolean,default:!1},listDropdown:{type:Array,default:[]},error:{type:Boolean,default:!1},errorMessage:{type:String,default:"Harus diisi"}},data:function(){return{value:"",choosedList:""}},mounted:function(){this.placeholder&&(this.choosedList=this.placeholder)},methods:{clickList:function(t){t.isActive&&(this.choosedList=t.text,this.value=t.value,this.$emit("click-list",t))}}},l=n(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between items-center text-sm md:text-[18px]"},[n("p",{staticClass:"font-bold hidden lg:block md:block sm:hidden min-w-[180px]"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"relative inline-block w-full"},[n("div",{},[n("button",{staticClass:"\n          inline-flex\n          justify-between\n          items-center\n          lg:py-[17px] lg:px-[24px]\n          py-[13px]\n          px-[16px]\n          w-full\n          h-[48px]\n          sm:w-[312px] sm:h-[48px]\n          md:w-full md:h-[64px]\n          lg:w-full lg:h-[64px]\n          border-solid border-2\n          bg-white\n          text-sm\n          md:text-[18px]\n          font-medium\n          text-gray-400\n          hover:bg-gray-50\n          focus:outline-none\n          focus:ring-2\n          focus:ring-offset-2\n          focus:ring-offset-gray-100\n          focus:ring-indigo-500\n        ",attrs:{type:"button",id:"menu-button","aria-expanded":"true","aria-haspopup":"true"},on:{click:function(e){return t.$emit("click")}}},[t._v("\n        "+t._s(t.choosedList)+"\n        "),n("svg",{staticClass:"-mr-1 ml-2 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),t.error&&!t.value?n("p",{staticClass:"text-red-500 text-sm md:text-16 mt-2"},[t._v("\n        "+t._s(t.errorMessage)+"\n      ")]):t._e()]),t._v(" "),t.isOpen?n("div",{staticClass:"\n        origin-top-right\n        absolute\n        left-0\n        mt-2\n        w-full\n        bg-white\n        ring-1 ring-black ring-opacity-5\n        focus:outline-none\n      "},[n("div",{staticClass:"py-1"},t._l(t.listDropdown,(function(e,r){return n("div",{key:r},[n("p",{staticClass:"text-gray-700 block px-4 py-2 text-sm",class:e.isActive?"cursor-pointer":"bg-gray-100",on:{click:function(n){return t.clickList(e)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])])})),0)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n(283)},318:function(t,e,n){var r=n(71),l=n(259),o=n(267),c=r((function(i){return i[1]})),d=l(o);c.push([t.i,".navigation[data-v-1fb3495a]{background-image:url("+d+");background-repeat:no-repeat;background-size:cover;width:100%}",""]),c.locals={},t.exports=c},343:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{typeClass:""}},computed:{titleClass:function(){return"web-basic"===this.typeClass?"Kelas Basic Modern Web bersama Digidev":"front-end"===this.typeClass?"Kelas Frontend Master bersama Digidev":"back-end"===this.typeClass?"Kelas Backend Master bersama Digidev":"full-stack"===this.typeClass?"Kelas Basic Fullstack bersama Digidev":void 0},setHeight:function(){return this.typeClass?"":"h-[350px]"},setPaddingTop:function(){return this.typeClass?"pt-[40px] pb-[800px]":"my-[40px]"}},mounted:function(){this.typeClass=this.$route.query.paket_kelas}},l=(n(317),n(46)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"navigation "+t.setHeight},[r("div",{staticClass:"\n      flex\n      w-full\n      justify-start\n      items-center\n      px-[24px]\n      sm:px-[24px]\n      md:px-[160px]\n      :px-[160px]\n      pt-9\n    "},[r("div",[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"max-w-[56px]",attrs:{src:n(255),alt:""}})])],1)]),t._v(" "),r("div",{class:"lg:px-[160px] md:px-[160px] sm:px-[24px] px-[24px] space-y-5 "+t.setPaddingTop},[t.typeClass?t._e():r("p",{staticClass:"\n        text-white text-26\n        sm:text-26\n        md:text-52\n        lg:text-52\n        leading-relaxed\n        max-w-[1116px]\n      "},[t._v("\n      Form Pendaftaran "),r("br")])])])}),[],!1,null,"1fb3495a",null);e.default=component.exports},344:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(58),n(26),n(73),n(14),n(74),n(48),n(38),n(31),n(32),n(47),n(77),n(252)),o=n(298),c=n(299),d=n(59),m=n.n(d),f={components:{Button:l.default,Dropdown:c.default,Input:o.default},data:function(){return{chosedClass:{},fullname:"",className:"",typeClass:"Tipe Kelas",email:"",whatsapp:"",city:"Pilih Kota",address:"",price:"",date:"",isOpenClass:!1,isOpenCity:!1,cities:[{text:"Medan",value:"Medan",isActive:!0},{text:"Jakarta (coming soon)",value:"Jakarta",isActive:!1},{text:"Bandung (coming soon)",value:"Bandung",isActive:!1},{text:"Malang (coming soon)",value:"Malang",isActive:!1}],typeClasses:[],isErrorForm:!1,isLoadingSubmit:!1,description:"Silahkan lengkapi data di bawah"}},props:{imageName:{type:String,default:"register"}},mounted:function(){this.className=this.$route.query["packet-class"],this.getDataClass()},computed:{titleClass:function(){return"web-basic"===this.className?"Kelas Basic Modern Web":"front-end"===this.className?"Kelas Frontend Master":"back-end"===this.className?"Kelas Backend Master":"full-stack"===this.className?"Kelas Basic Fullstack":"tugas-akhir"===this.className?"Kelas Bimbingan Tugas Akhir":void 0}},methods:{formatCurrency:function(t){return t||0==t?"Rp".concat(t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")):void 0},dropdownClass:function(){this.isOpenClass=!this.isOpenClass},dropdownCity:function(){this.isOpenCity=!this.isOpenCity},getDataClass:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://demo8852377.mockable.io/".concat(t.className));case 2:n=e.sent,t.chosedClass=n.data,t.typeClasses=t.chosedClass.classTypes.map((function(t){return{text:"".concat(t.name),value:"".concat(t.slug),isActive:!0}}));case 5:case"end":return e.stop()}}),e)})))()},chooseClass:function(param){var t=this;this.chosedClass.classTypes.forEach((function(element){element.slug===param.value&&(t.price=element.realPrice,t.description=element.description)})),this.typeClass=param.value,this.isOpenClass=!1},chooseCity:function(param){this.city=param.value,this.isOpenCity=!1},routeToThankyouPage:function(){this.$router.push("/thankyou?class-name=".concat(this.className,"&city=").concat(this.city))},submit:function(){this.validate()},validate:function(){this.fullname&&this.className&&this.typeClass&&this.price&&this.email&&this.whatsapp&&this.city&&this.address?this.submitRegisterClass():this.isErrorForm=!0},submitRegisterClass:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoadingSubmit=!0,n={fullname:t.fullname,class:t.className,class_type:t.typeClass,price:t.price,whatsapp:t.whatsapp,email:t.email,city:t.city,address:t.address,date:"".concat((new Date).getDate(),"/").concat((new Date).getMonth()+1,"/").concat((new Date).getFullYear())},e.prev=2,e.next=5,m.a.post("https://digidev-api.herokuapp.com",n);case 5:e.sent&&(t.isLoadingSubmit=!1,t.routeToThankyouPage()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))()}}},v=n(46),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    relative\n    -mt-15\n    bg-white\n    rounded-t-[25px]\n    md:rounded-t-[55px]\n    pb-[0px]\n    md:pb-[161px]\n    px-[24px]\n    sm:px-[24px]\n    md:px-[380px]\n    top-[-130px]\n    sm:top-[-130px]\n    md:-top-16\n    -mb-16\n    md:-mb-0\n  "},[n("div",{staticClass:"lg:pt-[72px] md:pt-[72px] sm:pt-[32px] pt-[32px]"},[n("div",{staticClass:"\n        flex\n        h-[96px]\n        md:h-[200px]\n        items-start\n        md:items-center\n        mb-[40px]\n        rounded-[20px]\n        shadow-md\n        space-x-[32px]\n      "},[n("div",[n("img",{staticClass:"max-w-[200] min-w-[96px] h-[96px] md:h-[200px]",attrs:{src:"/images/vector/"+t.imageName+".png",alt:"register"}})]),t._v(" "),n("div",{staticClass:"grid place-items-center"},[n("div",[n("h1",{staticClass:"\n              text-14\n              sm:text-14\n              md:text-32\n              lg:text-32\n              font-bold\n              pt-4\n              md:pt-0\n            "},[t._v("\n            "+t._s(t.titleClass)+"\n          ")]),t._v(" "),n("h3",{staticClass:"md:text-20 lg:text-20 sm:text-12 text-12 font-semibold"},[t._v("\n            "+t._s(t.formatCurrency(parseInt(t.price)))+"\n          ")]),t._v(" "),n("p",{staticClass:"md:block sm:hidden lg:block hidden mt-2"},[t._v("\n            "+t._s(t.description)+"\n          ")])])])]),t._v(" "),n("div",{staticClass:"space-y-[16px] lg:space-y-[40px]"},[n("Input",{attrs:{label:"Nama Lengkap",placeholder:"Masukkan Nama Lengkap",error:t.isErrorForm},model:{value:t.fullname,callback:function(e){t.fullname=e},expression:"fullname"}}),t._v(" "),n("Dropdown",{attrs:{title:"Pilihan Kelas",placeholder:"Tipe Kelas",isOpen:t.isOpenClass,listDropdown:t.typeClasses,error:t.isErrorForm},on:{click:t.dropdownClass,"click-list":t.chooseClass}}),t._v(" "),n("Input",{attrs:{label:"Nomor Whatsapp",placeholder:"Masukkan Nomor Whatsapp",error:t.isErrorForm},model:{value:t.whatsapp,callback:function(e){t.whatsapp=e},expression:"whatsapp"}}),t._v(" "),n("Input",{attrs:{label:"Email",placeholder:"Masukkan Email",error:t.isErrorForm},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("Dropdown",{attrs:{title:"Kota Domisili",placeholder:"Pilih Kota",isOpen:t.isOpenCity,listDropdown:t.cities,error:t.isErrorForm},on:{click:t.dropdownCity,"click-list":t.chooseCity}}),t._v(" "),n("Input",{attrs:{label:"Alamat Lengkap",placeholder:"Masukkan Alamat Lengkap",error:t.isErrorForm},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1)]),t._v(" "),n("Button",{staticClass:"\n      rounded\n      h-[64px]\n      w-full\n      lg:w-[240px]\n      mt-[40px]\n      md:mb-[57px]\n      mb-[0px]\n      lg:float-right\n    ",attrs:{content:"Daftar","is-loading":t.isLoadingSubmit},on:{click:t.submit}})],1)}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n.r(e);var r=n(272),l=n(343),o=n(344),c={components:{Footer:r.default,Form:o.default,Navbar:l.default}},d=n(46),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("Form"),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports}}]);