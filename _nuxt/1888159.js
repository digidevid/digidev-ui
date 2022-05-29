(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{281:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("79b47280",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(281)},313:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,".mentor-image{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""]),n.locals={},t.exports=n},337:function(t,e,r){"use strict";r.r(e);var n={props:{classTutors:{type:Array,default:function(){return[]}},activeTutor:{type:Object,default:function(){}},classTitle:{type:String,default:"Basic Web"}}},c=(r(312),r(46)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.activeTutor?r("div",[r("h1",{staticClass:"text-20 lg:text-32 font-bold leading-10"},[t._v("\n    Mentor yang Tersedia\n  ")]),t._v(" "),r("p",{staticClass:"dark-grey text-14 lg:text-18 lg:mt-4"},[t._v("\n    Berikut ini merupakan detail data dari mentor yang akan mengajar di kelas\n    "+t._s(t.classTitle)+".\n  ")]),t._v(" "),r("div",{staticClass:"mt-5 lg:mt-10"},[r("div",{staticClass:"\n        p-6\n        md:p-8\n        lg:p-12\n        grid grid-cols-1\n        md:grid-cols-3\n        bg-white\n        rounded-xl\n        shadow-lg\n      "},[r("div",{staticClass:"md:col-span-2 order-last md:order-first"},[r("h1",{staticClass:"text-primary font-bold text-16 lg:text-20"},[t._v("\n          "+t._s(t.activeTutor.name)+"\n        ")]),t._v(" "),r("p",{staticClass:"dark-grey text-[12px] lg:text-14"},[t._v("\n          "+t._s(t.activeTutor.location)+"\n        ")]),t._v(" "),r("div",{staticClass:"my-3"},[r("p",{staticClass:"dark-grey text-14 lg:text-16"},[t._v(t._s(t.activeTutor.job))]),t._v(" "),r("p",{staticClass:"dark-grey text-14 lg:text-16"},[t._v("\n            "+t._s(t.activeTutor.company)+"\n          ")])]),t._v(" "),r("p",{staticClass:"text-black text-14 lg:text-16"},[t._v("\n          "+t._s(t.activeTutor.bio)+"\n        ")]),t._v(" "),r("div",{staticClass:"flex md:hidden mt-4 justify-between items-center"},[r("div",{staticClass:"flex space-x-3 items-center md:hidden"},[r("a",{attrs:{target:"_blank",href:""+t.activeTutor.github}},[r("img",{attrs:{src:"/images/icons/social-media/Github.svg",alt:"github icon"}})]),t._v(" "),r("a",{attrs:{target:"_blank",href:""+t.activeTutor.linkedin}},[r("img",{attrs:{src:"/images/icons/social-media/Linkedin.svg",alt:"github icon"}})])]),t._v(" "),r("div",{staticClass:"md:hidden flex justify-end items-center space-x-3"},[1===t.activeTutor.id?r("img",{staticClass:"w-4",attrs:{src:"/images/icons/arrow-grey-left.svg",alt:"arrow left"}}):r("img",{staticClass:"cursor-pointer w-4",attrs:{src:"/images/icons/arrow-blue-left.svg",alt:"arrow left"},on:{click:function(e){return t.$emit("prevTutor",t.activeTutor.id)}}}),t._v(" "),r("p",{staticClass:"text-14 font-medium"},[t._v("\n              "+t._s(t.activeTutor.id)+"/"+t._s(t.classTutors.length)+"\n            ")]),t._v(" "),t.activeTutor.id===t.classTutors.length?r("img",{staticClass:"w-4",attrs:{src:"/images/icons/arrow-grey-right.svg",alt:"arrow right"}}):r("img",{staticClass:"cursor-pointer w-4",attrs:{src:"/images/icons/arrow-blue-right.svg",alt:"arrow right"},on:{click:function(e){return t.$emit("nextTutor",t.activeTutor.id)}}})])])]),t._v(" "),r("div",{},[r("div",{staticClass:"md:float-right"},[r("div",{staticClass:"relative z-0 w-20 md:w-40 mb-2 md:mb-0"},[r("img",{attrs:{src:"/images/mentor/ellipse.png",alt:"ellipse border"}}),t._v(" "),r("div",{staticClass:"\n                overflow-hidden\n                rounded-full\n                w-16\n                h-16\n                md:w-32 md:h-32\n                mentor-image\n              "},[r("img",{staticClass:"w-full h-auto object-cover object-center",attrs:{src:""+t.activeTutor.photo,alt:""+t.activeTutor.name}})])]),t._v(" "),r("div",{staticClass:"md:flex justify-center space-x-3 items-center mt-4 hidden"},[r("a",{attrs:{target:"_blank",href:""+t.activeTutor.github}},[r("img",{attrs:{src:"/images/icons/social-media/Github.svg",alt:"github icon"}})]),t._v(" "),r("a",{attrs:{target:"_blank",href:""+t.activeTutor.linkedin}},[r("img",{attrs:{src:"/images/icons/social-media/Linkedin.svg",alt:"github icon"}})])]),t._v(" "),r("div",{staticClass:"hidden md:flex justify-center items-center space-x-3 mt-4"},[1===t.activeTutor.id?r("img",{staticClass:"w-4",attrs:{src:"/images/icons/arrow-grey-left.svg",alt:"arrow left"}}):r("img",{staticClass:"cursor-pointer w-4",attrs:{src:"/images/icons/arrow-blue-left.svg",alt:"arrow left"},on:{click:function(e){return t.$emit("prevTutor",t.activeTutor.id)}}}),t._v(" "),r("p",{staticClass:"text-18 font-medium"},[t._v("\n              "+t._s(t.activeTutor.id)+"/"+t._s(t.classTutors.length)+"\n            ")]),t._v(" "),t.activeTutor.id===t.classTutors.length?r("img",{staticClass:"w-4",attrs:{src:"/images/icons/arrow-grey-right.svg",alt:"arrow right"}}):r("img",{staticClass:"cursor-pointer w-4",attrs:{src:"/images/icons/arrow-blue-right.svg",alt:"arrow right"},on:{click:function(e){return t.$emit("nextTutor",t.activeTutor.id)}}})])])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);