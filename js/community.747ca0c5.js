(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["community"],{"0e8f":function(t,e,i){"use strict";i("db6d");var a=i("e8f2");e["a"]=Object(a["a"])("flex")},"12b2":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,a=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),a.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})},"23bf":function(t,e,i){"use strict";var a=i("80d2"),n=i("2b0e");e["a"]=n["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(a["b"])(this.height),i=Object(a["b"])(this.minHeight),n=Object(a["b"])(this.minWidth),s=Object(a["b"])(this.maxHeight),o=Object(a["b"])(this.maxWidth),r=Object(a["b"])(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),s&&(t.maxHeight=s),o&&(t.maxWidth=o),r&&(t.width=r),t}}})},"253d":function(t,e,i){},2934:function(t){t.exports=[{id:"moztw",homepage:"https://moztw.org/",image:"https://i.loli.net/2019/07/07/5d21ee94a1a5a16575.png",twitter:null,facebook:null,github:null,meetup:null,email:"irvin@mail.moztw.org",lang:{en:{name:"Mozilla Taiwan Community",description:"Mozilla Taiwan Community"}}},{id:"devops_tw",homepage:"https://www.facebook.com/groups/DevOpsTaiwan/",image:"https://i.loli.net/2019/07/07/5d21ec2b78d5184076.png",twitter:null,facebook:"https://www.facebook.com/groups/DevOpsTaiwan/",github:null,email:null,meetup:null,lang:{en:{name:"DevOps Taiwan",description:"DevOps Taiwan"}}},{id:"ansible_taipei",homepage:"https://www.meetup.com/Ansible-Taipei/",image:"https://i.loli.net/2019/07/07/5d21ee381e03f51359.jpeg",twitter:null,facebook:null,github:null,email:null,meetup:"https://www.meetup.com/Ansible-Taipei/",lang:{en:{name:"Ansible Taipei",description:"Ansible Taipei"}}},{id:"cloud_tw",homepage:"http://www.cloudtw.org/",image:"https://i.loli.net/2019/07/07/5d21efc0a9bba28764.jpg",twitter:null,facebook:"http://www.facebook.com/CloudTW.org",github:null,email:"pofeng@gmail.com",meetup:null,lang:{en:{name:"Cloud TW",description:"Ansible Taipei"}}},{id:"hadoop_tw",homepage:"https://www.facebook.com/groups/hadoop.tw/",image:"https://i.loli.net/2019/07/07/5d21f015f3b7268423.jpg",twitter:null,facebook:"https://www.facebook.com/groups/hadoop.tw/",github:null,email:null,meetup:null,lang:{en:{name:"Hadoop TW",description:"Taiwan Hadoop User Group"}}},{id:"openstack_tw_user_group",homepage:"https://www.facebook.com/OpenStackTW",image:"https://i.loli.net/2019/07/07/5d21f1726683d57266.png",twitter:null,facebook:"https://www.facebook.com/groups/180981535428325",github:null,email:"openstack-tw@lists.openstack.org",meetup:null,lang:{en:{name:"OpenStack Taiwan User Group",description:"OpenStack Taiwan User Group"}}},{id:"juluosdev",homepage:"https://www.juluos.org/",image:"https://i.loli.net/2019/07/07/5d21f2029caaf33062.jpg",twitter:null,facebook:"https://www.facebook.com/groups/224024274384934/",github:"http://github.com/juluosdev",email:"ben@staros.mobi",meetup:null,lang:{en:{name:"JuluOSDev",description:"JuluOSDev"}}},{id:"sdnds_tw",homepage:"http://sdnds.tw/",image:"https://i.loli.net/2019/07/07/5d21f27ef145851189.jpg",twitter:null,facebook:"https://www.facebook.com/groups/sdnds.tw/",github:null,email:null,meetup:null,lang:{en:{name:"SDN Developer Society",description:"Taiwan Software Defined Networking Developer Society"}}},{id:"g0v_tw",homepage:"http://g0v.tw/",image:"https://i.loli.net/2019/07/07/5d21f3bb9c6b275614.png",twitter:null,facebook:"https://www.facebook.com/groups/g0v.general/",github:null,email:null,meetup:null,lang:{en:{name:"g0v",description:"g0v.tw is an online community that pushes information transparency, focusing on developing information platform and tools for the citizens to participate in society. "}}}]},"4c34":function(t,e,i){},"4c94":function(t,e,i){},"58db":function(t,e,i){},8838:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("🕶 Community")]),i("GroupArea",{attrs:{bgColor:"#f0f0f0",groupName:"Taiwan",flag:"🇨🇳",id:"taiwan"}},[i("v-layout",{attrs:{row:"",wrap:""}},t._l(t.tw_data,function(t){return i("v-flex",{key:t.id,attrs:{xs12:"",sm12:"",md6:"",lg4:"",xl3:""}},[i("ItemCard",{attrs:{ItemName:t.lang.en.name,ItemImage:t.image,ItemHome:t.homepage,ItemFacebook:t.facebook,ItemTwitter:t.twitter,ItemGithub:t.github,ItemDesc:t.lang.en.description,ItemMail:t.email,ItemMeetup:t.meetup}})],1)}),1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"area",style:t.style},[i("h2",{staticClass:"area-title"},[t._v(t._s(t.flag)+" "+t._s(t.groupName))]),i("v-divider",{staticClass:"area-divider"}),i("div",{staticClass:"area-content"},[t._t("default")],2)],1)},o=[],r={props:{bgColor:String,groupName:String,flag:String},data:function(){var t={backgroundColor:this.bgColor};return{style:t}}},c=r,l=(i("fb8c"),i("2877")),u=i("6544"),d=i.n(u),m=(i("58db"),i("6a18")),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},p=m["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){return t("hr",{class:h({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:this.$attrs,on:this.$listeners})}}),g=Object(l["a"])(c,s,o,!1,null,"081ea729",null),v=g.exports;d()(g,{VDivider:p});var f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"card"},[i("v-img",{attrs:{src:t.ItemImage,"max-height":"200","lazy-src":t.ItemImage,"aspect-ratio":"1.7778"}}),i("v-card-title",{attrs:{"primary-title":""}},[i("div",[i("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.ItemName))]),i("div",[t._v(t._s(t.ItemDesc))])])]),i("v-card-actions",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs8:""}},[i("v-btn",{attrs:{flat:"",color:"blue"},on:{click:t.toHome}},[t._v("Home")])],1),i("v-flex",{attrs:{xs4:""}},[i("v-layout",{attrs:{"align-center":"","justify-end":"",row:""}},[i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ItemMeetup,expression:"ItemMeetup"}],attrs:{xs3:""}},[i("v-icon",{attrs:{color:"blue"},on:{click:t.toMeetup}},[t._v("fab fa-meetup")])],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ItemGithub,expression:"ItemGithub"}],attrs:{xs3:""}},[i("v-icon",{attrs:{color:"blue"},on:{click:t.toGithub}},[t._v("fab fa-github")])],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ItemTwitter,expression:"ItemTwitter"}],attrs:{xs3:""}},[i("v-icon",{attrs:{color:"blue"},on:{click:t.toTwitter}},[t._v("fab fa-twitter")])],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ItemFacebook,expression:"ItemFacebook"}],attrs:{xs3:""}},[i("v-icon",{attrs:{color:"blue"},on:{click:t.toFacebook}},[t._v("fab fa-facebook")])],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ItemMail,expression:"ItemMail"}],attrs:{xs3:""}},[i("v-icon",{attrs:{color:"blue"},on:{click:t.toMail}},[t._v("far fa-envelope")])],1)],1)],1)],1)],1)],1)},b=[],w={props:{ItemImage:String,ItemName:String,ItemHome:String,ItemFacebook:String,ItemTwitter:String,ItemDesc:String,ItemMail:String,ItemGithub:String,ItemMeetup:String},methods:{toHome:function(){window.open(this.ItemHome)},toFacebook:function(){window.open(this.ItemFacebook)},toTwitter:function(){window.open(this.ItemTwitter)},toGithub:function(){window.open(this.ItemGithub)},toMeetup:function(){window.open(this.ItemMeetup)},toMail:function(){window.open("mailto:".concat(this.ItemMail))}}},S=w,_=(i("d1ce"),i("8336")),y=i("b0af"),I=i("99d9"),k=i("12b2"),x=i("0e8f"),O=i("132d"),C=i("adda"),j=i("a722"),T=Object(l["a"])(S,f,b,!1,null,"62589bc8",null),z=T.exports;d()(T,{VBtn:_["a"],VCard:y["a"],VCardActions:I["a"],VCardTitle:k["a"],VFlex:x["a"],VIcon:O["a"],VImg:C["a"],VLayout:j["a"]});var N=i("2934"),$={components:{GroupArea:v,ItemCard:z},data:function(){return{tw_data:N}},created:function(){}},A=$,M=Object(l["a"])(A,a,n,!1,null,null,null);e["default"]=M.exports;d()(M,{VFlex:x["a"],VLayout:j["a"]})},"888a":function(t,e,i){},"910d":function(t,e,i){},"99d9":function(t,e,i){"use strict";var a=i("80d2"),n=i("b0af"),s=i("adda"),o=i("d9bd"),r=s["a"].extend({name:"v-card-media",mounted:function(){Object(o["c"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),c=i("12b2");i.d(e,"a",function(){return l});var l=Object(a["d"])("v-card__actions"),u=Object(a["d"])("v-card__text");n["a"],c["a"]},a722:function(t,e,i){"use strict";i("db6d");var a=i("e8f2");e["a"]=Object(a["a"])("layout")},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var a=i("23bf"),n=i("58df"),s=Object(n["a"])(a["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=s,r=i("d9bd");e["a"]=o.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(r["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(r["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var n=t.naturalHeight,s=t.naturalWidth;n||s?e.calculatedAspectRatio=s/n:null!=i&&setTimeout(a,i)};a()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b0af:function(t,e,i){"use strict";i("4c94"),i("d0e7");var a=i("b64a"),n=i("2b0e");function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o=n["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?s({},"elevation-"+this.computedElevation,!0):{}}}}),r=i("23bf"),c=i("6a18"),l=i("58df"),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},d=Object(l["a"])(a["a"],o,r["a"],c["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return u({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),m=d,h=i("0d01"),p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]=Object(l["a"])(h["a"],m).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return p({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},m.options.computed.classes.call(this))},styles:function(){var t=p({},m.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,a=e.data;return a.style=this.styles,t(i,this.setBackgroundColor(this.color,a),this.$slots.default)}})},d0e7:function(t,e,i){},d1ce:function(t,e,i){"use strict";var a=i("888a"),n=i.n(a);n.a},fb8c:function(t,e,i){"use strict";var a=i("910d"),n=i.n(a);n.a}}]);
//# sourceMappingURL=community.747ca0c5.js.map