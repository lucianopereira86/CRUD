(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"+GhH":function(t,i,s){},"1fYU":function(t,i,s){},"86II":function(t,i,s){"use strict";var e=s("V+Ja"),a=s.n(e);a.a},ACRJ:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.show?s("q-page-container",{staticClass:"q-ma-sm"},[s("div",{staticClass:"text-center full-width relative-position q-ma-sm text-white"},[s("div",{staticClass:"row q-mt-md q-ml-sm q-mb-lg"},[s("div",{staticClass:"col text-left"},[s("span",{staticClass:"q-mr-sm"},[t._v("Homem")]),s("q-toggle",{attrs:{color:"pink"},model:{value:t.form.homem,callback:function(i){t.$set(t.form,"homem",i)},expression:"form.homem"}})],1),s("div",{staticClass:"col text-left"},[s("span",{staticClass:"q-mr-sm"},[t._v("Mulher")]),s("q-toggle",{attrs:{color:"pink"},model:{value:t.form.mulher,callback:function(i){t.$set(t.form,"mulher",i)},expression:"form.mulher"}})],1)])]),s("p",{staticClass:"caption text-left q-ma-sm text-white"},[s("span",[t._v("\n            Idade: "+t._s(t.form.idade.min)+" a "+t._s(t.form.idade.max)+" Anos\n          ")])]),s("q-range",{attrs:{min:18,max:70,step:1,color:"pink",snap:"","fill-handle-always":""},model:{value:t.form.idade,callback:function(i){t.$set(t.form,"idade",i)},expression:"form.idade"}}),s("p",{staticClass:"caption text-left q-ma-sm text-white"},[s("span",[t._v("\n            Peso: "+t._s(t.form.peso.min)+" a "+t._s(t.form.peso.max)+" Kg\n          ")])]),s("q-range",{attrs:{min:50,max:150,step:10,color:"pink",snap:"","fill-handle-always":""},model:{value:t.form.peso,callback:function(i){t.$set(t.form,"peso",i)},expression:"form.peso"}}),s("p",{staticClass:"caption text-left q-ma-sm text-white"},[s("span",[t._v("\n            Altura: "+t._s(t.form.altura.min)+" a "+t._s(t.form.altura.max)+" m\n          ")])]),s("q-range",{attrs:{min:1.5,max:2.5,step:.1,color:"pink",snap:"","fill-handle-always":""},model:{value:t.form.altura,callback:function(i){t.$set(t.form,"altura",i)},expression:"form.altura"}}),s("p",{staticClass:"caption text-left q-ma-sm text-white"},[s("span",[t._v("\n            Valor: "+t._s(t.form.valor.min)+" a "+t._s(t.form.valor.max)+" Reais\n          ")])]),s("q-range",{attrs:{min:100,max:1e3,step:50,color:"pink",snap:"","fill-handle-always":""},model:{value:t.form.valor,callback:function(i){t.$set(t.form,"valor",i)},expression:"form.valor"}}),s("p",{staticClass:"caption text-left q-ma-sm text-white"},[s("span",[t._v("\n            Raio de Pesquisa: "+t._s(t.form.raio)+" Km\n          ")])]),s("q-slider",{staticClass:"q-mb-lg",attrs:{min:0,max:10,color:"pink",snap:"","fill-handle-always":""},model:{value:t.form.raio,callback:function(i){t.$set(t.form,"raio",i)},expression:"form.raio"}}),s("div",{staticClass:"fixed-bottom"},[s("q-btn",{staticClass:"full-width",attrs:{disable:!t.form.homem&&!t.form.mulher,color:t.form.homem||t.form.mulher?"pink":"light"},on:{click:function(i){t.salvar()}}},[t._v("Salvar")])],1)],1):t._e()},a=[];e._withStripped=!0;var o=s("MVZn"),n=s.n(o),c=s("oNfb"),r=s("L2JU"),l={computed:n()({},Object(r["e"])("geral",["toolbar"])),props:{parent:{type:Object}},data:function(){return{show:!1,form:{homem:!1,mulher:!1,min:{idade:18,peso:50,altura:1.5,valor:100},max:{idade:70,peso:150,altura:2.5,valor:1e3},idade:{min:18,max:70},peso:{min:50,max:150},altura:{min:1.5,max:2.5},valor:{min:100,max:1e3},raio:10}}},methods:n()({},Object(r["d"])("geral",["SET_TOOLBAR"]),{mostrar:function(){this.show=!0;var t=this.$q.localStorage.get.item("config");this.toolbar.hideBackButton=!t,t?this.form=t:this.SET_TOOLBAR(this.toolbar)},fechar:function(){this.show=!1},salvar:function(){this.$q.localStorage.set("config",this.form),c["a"].mostrar("Configuração salva com sucesso","positive"),this.toolbar.hideBackButton=!1,this.SET_TOOLBAR(this.toolbar),this.fechar(),this.parent.fecharModal(),this.parent.pesquisar()}})},h=l,m=(s("86II"),s("KHd+")),u=Object(m["a"])(h,e,a,!1,null,null,null);i["a"]=u.exports},ApyF:function(t,i,s){},Nn3P:function(t,i,s){"use strict";var e=s("OOdN"),a=s.n(e);a.a},OOdN:function(t,i,s){},OTYr:function(t,i,s){"use strict";var e=s("ApyF"),a=s.n(e);a.a},R8o8:function(t,i,s){},SLAN:function(t,i,s){"use strict";var e=s("jU78"),a=s.n(e);a.a},SUQT:function(t,i,s){"use strict";var e=s("u8ip"),a=s.n(e);a.a},"V+Ja":function(t,i,s){},WAZ9:function(t,i,s){},WI69:function(t,i,s){"use strict";var e=s("R8o8"),a=s.n(e);a.a},jU78:function(t,i,s){},jcJ4:function(t,i,s){
/**
 * v-lazy-image v1.2.2
 * (c) 2018 Alex Jover Morales <alexjovermorales@gmail.com>
 * @license MIT
 */
(function(t,s){s(i)})(0,function(t){"use strict";var i={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:""},srcset:{type:String},intersectionOptions:{type:Object,default:function(){return{}}}},data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},render:function(t){return t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded}})},mounted:function(){var t=this;this.$el.addEventListener("load",function(i){t.$el.getAttribute("src")!==t.srcPlaceholder&&(t.loaded=!0,t.$emit("load"))}),this.observer=new IntersectionObserver(function(i){var s=i[0];s.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el)},destroyed:function(){this.observer.disconnect()}},s={install:function(t,s){t.component("VLazyImage",i)}};t["default"]=i,t.VLazyImagePlugin=s,Object.defineProperty(t,"__esModule",{value:!0})})},pGFw:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.show?s("q-page-container",{staticClass:"bg-black text-white full-width",staticStyle:{padding:"0"}},[s("q-tabs",{model:{value:t.aba,callback:function(i){t.aba=i},expression:"aba"}},[s("q-tab",{attrs:{slot:"title",name:"perfil",icon:"person"},on:{click:function(i){t.clickAba(0)}},slot:"title"}),s("q-tab",{attrs:{slot:"title",name:"galeria",icon:"photo_library"},on:{click:function(i){t.clickAba(1)}},slot:"title"})],1),s("div",{directives:[{name:"touch-swipe",rawName:"v-touch-swipe.horizontal",value:t.mudarAba,expression:"mudarAba",modifiers:{horizontal:!0}}],staticClass:"row flex-center"},[0==t.aba_id?s("detalhes-perfil",{staticClass:"full-width",attrs:{parent:t.parent,companhia:t.companhia}}):s("detalhes-galeria",{staticClass:"full-width",attrs:{companhia:t.companhia}})],1)],1):t._e()},a=[];e._withStripped=!0;s("rGqo");var o=s("MVZn"),n=s.n(o),c=s("L2JU"),r=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page-container",{staticStyle:{padding:"0"}},[s("q-modal",{attrs:{minimized:""},model:{value:t.showModal,callback:function(i){t.showModal=i},expression:"showModal"}},[s("modal-info",{ref:"infoRef",attrs:{companhia:t.companhia}}),s("modal-servicos",{ref:"servicosRef",attrs:{companhia:t.companhia}}),s("modal-fone",{ref:"foneRef",attrs:{companhia:t.companhia}})],1),s("div",{staticClass:"full-width relative-position"},[s("img",{staticClass:"center-cropped-modal-perfil",attrs:{id:"imgPerfil",src:t.companhia.foto}}),s("div",{staticClass:"dadosCompanhia bottom relative-position full-width text-white"},[s("div",{staticClass:"absolute-top text-center q-pa-xs q-mt-lg"},[s("span",{staticClass:"q-headline text-weight-light q-mt-xl absolute-center"},[t._v(t._s(t.companhia.usuario))])]),s("div",{staticClass:"absolute-left full-width q-pl-md",staticStyle:{top:"70%"}},[s("div",[s("span",{staticClass:"q-headline"},[t._v("R$ "+t._s(t.companhia.preco)+",00")])]),s("div",[s("span",[t._v(t._s(t.companhia.idade)+" Anos")])]),s("div",{staticClass:"q-mt-sm"},[s("q-icon",{staticClass:"q-mr-sm",attrs:{name:"location_on",size:"1em"}}),s("span",[t._v(t._s(t.getDistancia(t.companhia))+" Km")])],1)]),s("div",{staticClass:"absolute-right full-width text-right q-pr-sm",staticStyle:{top:"70%"}},[s("q-btn",{staticClass:"q-mr-md",attrs:{round:"",outline:"",dense:"",size:"0.8em"},on:{click:function(i){t.verServicos()}}},[s("q-icon",{attrs:{name:"attach_money",size:"2em"}})],1),s("q-btn",{staticClass:"text-white q-mr-xs",attrs:{round:"",flat:"",dense:"",size:"1em"},on:{click:function(i){t.verInfo()}}},[s("q-icon",{attrs:{name:"info",size:"2em"}})],1),s("div",{staticClass:"q-mt-md text-right q-mr-sm q-pt-sm"},[s("div",{staticClass:"atividade q-mr-sm",class:t.getClass(t.companhia)}),s("span",[t._v(t._s(t.getTempoPosicao(t.companhia)))])])],1),s("div",{staticClass:"absolute-bottom row q-mb-sm"},[s("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"},[s("q-btn",{attrs:{flat:"",dense:"",round:"",color:"white",size:"1.5em"},on:{click:function(i){t.clickFavoritos()}}},[s("q-icon",{staticClass:"q-mt-xs",attrs:{name:t.getFavoritoIcon(),size:"1.5em"}})],1)],1),s("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center q-mt-sm"},[t.sit_encontro_id>0&&t.sit_encontro_id<4?s("q-btn",{staticClass:"absolute-center",attrs:{outline:"",dense:"",round:"",color:"white",size:"1em"},on:{click:function(i){t.cancelar()}}},[s("q-icon",{attrs:{name:"delete",size:"1.5em"}})],1):t._e()],1),s("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center"},[2!=t.sit_encontro_id?s("q-btn",{class:t.getConviteClass(),attrs:{flat:"",dense:"",round:"",disable:!t.companhia.is_disponivel,color:t.companhia.is_disponivel?"pink":"light",size:"1.5em"},on:{click:function(i){t.convidar()}}},[s("q-icon",{staticClass:"q-mt-xs",attrs:{name:t.getConviteIcon(),size:"1.5em"}})],1):s("q-btn",{attrs:{flat:"",dense:"",round:"",disable:!t.companhia.is_disponivel,color:t.companhia.is_disponivel?"positive":"light",size:"1.5em"},on:{click:function(i){t.telefonar()}}},[s("q-icon",{staticClass:"q-mt-xs",attrs:{name:"phone",size:"1.5em"}})],1)],1)])])])],1)},l=[];r._withStripped=!0;var h=s("EVdn"),m=s.n(h),u=s("wd/R"),d=s.n(u),f=s("Z4Cl"),p=s("qaCD"),v=(s("Ezub"),s("oNfb")),g=s("m3Cd"),b=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.show?s("q-page-container",{staticClass:"bg-black",staticStyle:{padding:"0px"}},[s("div",{staticClass:"text-white"},[s("q-list-header",{staticClass:"mgListHeader bg-pink text-white"},[t._v("INFORMAÇÕES")]),s("q-item-separator",{staticClass:"bg-pink"}),s("q-list",{staticClass:"infos q-ml-sm q-mr-sm q-pa-none"},t._l(t.companhia.infos,function(i,e){return s("div",{key:e,staticClass:"row q-ma-sm"},[s("div",{staticClass:"col-xs-5 col-sm-5 col-md-5 col-lx-5 col-xl-5"},[s("span",{staticClass:"q-caption text-weight-bold text-pink"},[t._v(t._s(i.titulo))])]),s("div",{staticClass:"col-xs-7 col-sm-7 col-md-7 col-lx-7 col-xl-7 "},[s("span",{staticClass:"q-caption"},[t._v(t._s(i.descricao))])])])})),s("div",{staticClass:"text-center"},[s("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"q-caption full-width",attrs:{color:"dark"},nativeOn:{click:function(i){t.fechar()}}},[t._v("Fechar")])],1)],1)]):t._e()},_=[];b._withStripped=!0;var x={props:{companhia:{type:Object}},data:function(){return{show:!1}},methods:{mostrar:function(){this.show=!0},fechar:function(){this.show=!1}}},C=x,w=(s("xqt3"),s("KHd+")),q=Object(w["a"])(C,b,_,!1,null,null,null),S=q.exports,O=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.show?s("q-page-container",{staticClass:"bg-black",staticStyle:{padding:"0px"}},[s("div",{staticClass:"text-white"},[s("q-list-header",{staticClass:"mgListHeader bg-pink text-white"},[t._v("SERVIÇOS")]),s("q-item-separator",{staticClass:"bg-pink"}),s("q-list",{staticClass:"servicos q-ml-sm q-mr-sm q-pa-none"},t._l(t.companhia.servicos,function(i,e){return s("div",{key:e,staticClass:"row q-ma-sm"},[s("div",{staticClass:"col"},[s("span",{staticClass:"text-weight-bold text-pink"},[t._v(t._s(i.descricao))])])])})),s("div",{staticClass:"text-center"},[s("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"q-caption full-width",attrs:{color:"dark"},nativeOn:{click:function(i){t.fechar()}}},[t._v("Fechar")])],1)],1)]):t._e()},y=[];O._withStripped=!0;var k={props:{companhia:{type:Object}},data:function(){return{show:!1}},methods:{mostrar:function(){this.show=!0},fechar:function(){this.show=!1}}},T=k,A=(s("Nn3P"),Object(w["a"])(T,O,y,!1,null,null,null)),z=A.exports,I=function(){var t=this,i=t.$createElement,s=t._self._c||i;return t.show?s("q-page-container",{staticClass:"bg-black",staticStyle:{padding:"0px"}},[s("div",[s("div",{staticClass:"full-width text-white text-center q-pa-md bg-pink uppercase"},[t._v("TELEFONAR PARA A COMPANHIA")]),s("div",{staticClass:"text-center full-width q-ma-lg"},[s("a",{attrs:{href:"tel:"+t.celular}},[s("q-btn",{attrs:{dense:"",round:"",color:"positive",size:"1.5em"}},[s("q-icon",{staticClass:"q-mt-xs",attrs:{name:"phone",size:"1.5em"}})],1)],1)]),s("div",{staticClass:"text-center"},[s("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"q-caption full-width",attrs:{color:"dark"},nativeOn:{click:function(i){t.fechar()}}},[t._v("Cancelar")])],1)])]):t._e()},M=[];I._withStripped=!0;var E={props:{companhia:{type:Object}},data:function(){return{show:!1,celular:""}},methods:{mostrar:function(){this.show=!0,this.celular="+55"+this.companhia.celular},fechar:function(){this.show=!1}}},R=E,N=(s("zCoL"),Object(w["a"])(R,I,M,!1,null,null,null)),$=N.exports,j={props:{parent:{type:Object},companhia:{type:Object}},components:{ModalToolbar:g["a"],ModalInfo:S,ModalServicos:z,ModalFone:$},data:function(){return{show:!1,classConvite:"",showModal:!1,title:"",parent:this}},computed:n()({},Object(c["e"])("geral",["toolbar","sit_encontro_id"])),watch:{sit_encontro_id:function(){console.log("DetalhesPerfil => sit_encontro_id",this.sit_encontro_id)}},mounted:function(){console.log("this.companhia",this.companhia),this.companhia.encontro&&this.companhia.encontro.length>0&&this.SET_SITUACAO_ENCONTRO(this.companhia.encontro[0].sit_encontro_id),this.classConvite=this.getConviteClass()},methods:n()({},Object(c["d"])("geral",["SET_COMPANHIA","SET_TOOLBAR","SET_SITUACAO_ENCONTRO"]),Object(c["b"])("config",["conexao"]),{getClass:function(t){return t.is_disponivel?"bg-light-green-6":"bg-negative"},getDistancia:function(t){return parseFloat(t.distancia/1e3).toFixed(1)},getTempoPosicao:function(t){var i="",s=d()(),e=s.diff(t.companhia_posicao.data_hora,"minutes");if(e>60){var a=Math.floor(e/60),o=e%60;i=a+"h "+o+" min atrás"}else i=e+" min atrás";return i},getConviteClass:function(){return 1==this.sit_encontro_id?"heart":""},getConviteIcon:function(){return 1==this.sit_encontro_id?"favorite":"favorite_border"},getFavoritoIcon:function(){return this.companhia.favoritos&&this.companhia.favoritos.length>0?"star":"star_border"},verInfo:function(){this.$refs.servicosRef.fechar(),this.$refs.foneRef.fechar(),this.showModal=!0;var t=this.$refs.infoRef;t.mostrar()},verServicos:function(){this.$refs.infoRef.fechar(),this.$refs.foneRef.fechar(),this.showModal=!0;var t=this.$refs.servicosRef;t.mostrar()},verFone:function(){this.$refs.infoRef.fechar(),this.$refs.servicosRef.fechar(),this.showModal=!0;var t=this.$refs.foneRef;t.mostrar()},fecharModal:function(){this.showModal=!1},clickFavoritos:function(){var t=this,i=this.companhia.companhia_id,s=!(this.companhia.favoritos&&this.companhia.favoritos.length>0);this.conexao({ctx:this,url:"/v1/cliente/favoritos",form:{companhia_id:i,is_adicionar:s},sucesso:function(i){var s=i.data;console.log("favorito",s),s.favorito_id?(t.companhia.favoritos=[],t.companhia.favoritos.push(s)):t.companhia.favoritos=null}})},convidar:function(){var t=this;1!=this.sit_encontro_id&&f["a"].create({title:"AVISO",message:"Deseja CONVIDAR a companhia?",ok:"Sim",cancel:"Não"}).then(function(){p["a"].show({message:"Aguarde..."});var i=t.companhia.companhia_id;t.conexao({ctx:t,url:"/v1/cliente/convite",form:{companhia_id:i},sucesso:function(i){var s=i.data;console.log("encontro",s),t.companhia.encontro=[],t.companhia.encontro.push(s),t.classConvite=t.getConviteClass(),p["a"].hide(),v["a"].mostrar("Convite enviado com sucesso!","positive")},erro:function(){p["a"].hide()}})}).catch(function(){})},telefonar:function(){var t=this;f["a"].create({title:"AVISO",message:"Se TELEFONAR para a companhia, o encontro será INICIADO. Deseja prosseguir?",ok:"Sim",cancel:"Não"}).then(function(){p["a"].show({message:"Aguarde..."});var i=t.companhia.encontro[0].encontro_id;t.conexao({url:"/v1/cliente/convite/telefonema",form:{encontro_id:i},sucesso:function(i){t.companhia.encontro=null,t.SET_COMPANHIA(),t.SET_SITUACAO_ENCONTRO(0),t.classConvite=t.getConviteClass(),p["a"].hide(),console.log("encontro iniciado"),t.verFone()},erro:function(){p["a"].hide()}})}).catch(function(){})},cancelar:function(){var t=this;f["a"].create({title:"AVISO",message:"Deseja CANCELAR o convite?",ok:"Sim",cancel:"Não"}).then(function(){p["a"].show({message:"Aguarde..."});var i=t.companhia.encontro[0].encontro_id;t.conexao({url:"/v1/cliente/convite/cancelamento",form:{encontro_id:i},sucesso:function(i){t.companhia.encontro=null,t.classConvite=t.getConviteClass(),t.SET_SITUACAO_ENCONTRO(4),p["a"].hide(),v["a"].mostrar("Convite cancelado com sucesso!","positive")},erro:function(){p["a"].hide()}})}).catch(function(){})}})},P=j,Z=(s("SUQT"),Object(w["a"])(P,r,l,!1,null,null,null)),D=Z.exports,L=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page-container",{staticClass:"q-mt-xl",staticStyle:{padding:"0"}},[s("modal-full-screen",{ref:"modalFullScreen"}),s("div",{staticClass:"bg-black divPref"},[s("q-list",[s("q-list-header",{staticClass:"text-white"},[t._v("ÁLBUM ("+t._s(t.companhia.album.length)+")")]),s("div",{staticClass:"layout-view"},[0===t.companhia.album.length?s("div",{staticClass:"full-width text-center"},[t._v("SEM ÁLBUM")]):t._e(),s("div",{staticClass:"scrollmenu"},[s("div",{staticClass:"row"},t._l(t.companhia.album,function(i){return s("div",{key:i.foto_id,staticClass:"relative-position col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6",staticStyle:{height:"160px"}},[s("div",{staticClass:"content"},[s("q-btn",{staticClass:"absolute-center",attrs:{disable:"",flat:"",loading:!0}})],1),s("div",{staticClass:"content",attrs:{id:"foto_"+i.foto_id},on:{click:function(s){t.abrirFoto(i)}}})])}))])])],1)],1)],1)},F=[];L._withStripped=!0;s("Vd3H"),s("+diE");var Y=s("vdiD"),B={components:{ModalFullScreen:Y["a"]},props:{companhia:{type:Object}},mounted:function(){var t=this,i=this.companhia.album;console.log("album",i),i&&(i.sort(function(t,i){return t.foto_id>i.foto_id?1:t.foto_id<i.foto_id?-1:0}),i.forEach(function(i){i.src?t.setSrc(i):t.getSrc(i)})),this.SET_COMPANHIA(this.companhia)},methods:n()({},Object(c["d"])("geral",["SET_COMPANHIA"]),Object(c["b"])("config",["conexao"]),{abrirFoto:function(t){console.log("foto.src",t.src),this.$refs.modalFullScreen.mostrar(t.src)},setSrc:function(t){console.log("setSrc");var i="foto_"+t.foto_id;m()("#"+i).css("background-image","url("+t.src+")")},getSrc:function(t){var i=this;console.log("getSrc"),this.conexao({ctx:this,method:"get",url:"/v1/geral/arquivo",params:{url:t.url},sucesso:function(s){t.src="data:image/jpg;base64,"+s.data.base64,i.setSrc(t)}})}})},H=B,U=(s("SLAN"),Object(w["a"])(H,L,F,!1,null,null,null)),X=U.exports,V={props:{parent:{type:Object}},components:{DetalhesPerfil:D,DetalhesGaleria:X},data:function(){return{show:!1,companhia:{},info:null,aba_id:0,abas:["perfil","galeria"],aba:"perfil"}},methods:n()({},Object(c["d"])("geral",["SET_COMPANHIA"]),{clickAba:function(t){this.aba=this.abas[t],this.aba_id=t},mudarAba:function(t){var i=t.direction;t.duration,t.distance,t.evt;"left"==i?0==this.aba_id&&this.aba_id++:1==this.aba_id&&this.aba_id--,this.aba=this.abas[this.aba_id]},mostrar:function(t){console.log(t),this.show=!0,this.aba_id=0,this.aba="perfil",this.companhia=t,this.companhia.servicos=this.getServicos(this.companhia),this.companhia.infos=this.getInfos(this.companhia),this.companhia.album&&this.companhia.album.map(function(t){return t.src="",t}),this.SET_COMPANHIA(t)},getServicos:function(t){var i=[];return t.companhia_servico.forEach(function(t){i.push({descricao:t.servico.descricao})}),i},getInfos:function(t){var i=[],s=t.companhia_medidas[0];return i.push({titulo:"ALTURA",descricao:s.altura+" m"}),i.push({titulo:"PESO",descricao:s.peso+" Kg"}),i.push({titulo:"CABELO",descricao:s.cabelo?"":s.cabelo.descricao}),console.log(" medidas.olhos",s.olhos?1:0),i.push({titulo:"OLHOS",descricao:s.olhos?s.olhos.descricao:""}),i.push({titulo:"BUSTO",descricao:s.busto?s.busto+" cm":""}),i.push({titulo:"CINTURA",descricao:s.cintura?s.cintura+" cm":""}),i.push({titulo:"QUADRIL",descricao:s.quadril?s.quadril+" cm":""}),i.push({titulo:"PÉS",descricao:s.pes?s.pes+" cm":""}),i.push({titulo:"SOBRE MIM",descricao:s.sobre_mim}),i},fecharModal:function(){this.show=!1}})},J=V,K=(s("rQeP"),Object(w["a"])(J,e,a,!1,null,null,null));i["a"]=K.exports},rQeP:function(t,i,s){"use strict";var e=s("1fYU"),a=s.n(e);a.a},u8ip:function(t,i,s){},vdiD:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-modal",{attrs:{maximized:""},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[s("pinch-image",{attrs:{src:t.src,"min-zoom":1,"max-zoom":2.5}}),s("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],staticClass:"fixed-bottom full-width",attrs:{size:"14px",color:"primary"}},[t._v("Fechar")])],1)},a=[];e._withStripped=!0;var o=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"pinch-wrapper bg-black",style:t.zoomStyles,on:{touchstart:t.start,touchmove:t.move,touchend:t.end}},[s("img",{ref:"image",staticClass:"pinch-img",attrs:{src:t.src,alt:t.alt}})])},n=[];o._withStripped=!0;s("xfY5");var c=200,r={props:{src:{type:String,required:!0},alt:String,minZoom:{type:Number,default:1},maxZoom:{type:Number,default:2.25}},data:function(){return{zoom:1,minZoomBounce:.015,maxZoomBounce:.015,speed:.5,lastX:null,lastY:null,x:0,y:0,zoomCenter:{x:0,y:0},width:window.innerWidth,height:window.innerHeight,lastTouchTime:null,clickTimer:null,inMovement:!1,transition:{transform:null,origin:"transform-origin 400ms linear"}}},computed:{zoomStyles:function(){var t="";return this.transition.transform&&(t+=this.transition.transform),this.transition.origin&&(t+=(t.length>0?", ":"")+this.transition.origin),{transform:"scale(".concat(this.zoom,") translate3d(").concat(this.x,"px, ").concat(this.y,"px, 0px)"),transformOrigin:"".concat(this.zoomCenter.x,"px ").concat(this.zoomCenter.y,"px 0px"),transition:t}}},methods:{start:function(t){t.preventDefault(),2===t.touches.length?this.handlePinchStart(t):1===t.touches.length&&this.handleTapStart(t)},end:function(t){if(t.preventDefault(),!this.inMovement&&this.zoom<=this.minZoom){var i=t.timeStamp-this.lastTouchTime;i>c&&this.resetZoom()}else this.lastX=0,this.lastY=0;0===t.touches.length&&this.zoom<=1&&(this.lastTouchTime=t.timeStamp)},move:function(t){t.preventDefault(),2===t.touches.length?this.handlePinchMove(t):this.handlePanMove(t)},resetZoom:function(){var t=this;console.log("reset"),this.zoom=1,this.zoomCenter.x=0,this.zoomCenter.y=0,this.x=0,this.y=0,setTimeout(function(){t.transition.transform=null},200)},handlePinchStart:function(t){var i=this.getTouchCenter(this.getTouchesCenter(t.touches[0],t.touches[1])),s=i.x,e=i.y;this.zoom<this.maxZoom&&(this.zoomCenter.x=s,this.zoomCenter.y=e),this.lastDistance=this.getZoomDistance(t.touches[0],t.touches[1])},handlePinchMove:function(t){var i=this.getZoomDistance(t.touches[0],t.touches[1]),s=i/this.lastDistance,e=this.calcZoom(this.minZoom-this.minZoomBounce,this.maxZoom+this.maxZoomBounce,this.zoom*s);(this.zoom<this.maxZoom||this.zoom>=this.maxZoom&&e<this.zoom)&&(this.zoom=e),this.lastDistance=i},handlePanMove:function(t){if(this.zoom>1){var i=t.touches[0],s=i.clientX,e=i.clientY;if(!this.lastX||!this.lastY)return this.lastX=s,this.lastY=e,null;var a=this.$refs.image.getBoundingClientRect(),o=(s-this.lastX)*this.speed,n=(e-this.lastY)*this.speed;this.transition.transform=null,this.x+=o,this.y+=n,a.left>0&&o>0&&(this.x-=o),a.right<this.width&&o<0&&(this.x-=o),a.top>0&&n>0&&(this.y-=n),a.bottom<this.height&&n<0&&(this.y-=n),this.lastX=s,this.lastY=e}},handleTapStart:function(t){var i=t.touches[0],s=i.clientX,e=i.clientY;if(this.lastX&&this.lastY||(this.lastX=s,this.lastY=e),this.lastTouchTime){var a=t.timeStamp-this.lastTouchTime;a<c&&(this.handleDoubleTap(t.touches[0]),this.lastX=null,this.lastY=null)}this.lastTouchTime=t.timeStamp},handleDoubleTap:function(t){var i=this,s=this.getTouchCenter({x:t.clientX,y:t.clientY}),e=s.x,a=s.y;clearTimeout(this.clickTimeout),this.inMovement=!0,this.transition.origin="transform-origin 400ms linear",this.transition.transform="transform 200ms linear",this.zoom>this.minZoom?(this.zoom=1,this.x=0,this.y=0,this.clickTimeout=setTimeout(function(){i.zoomCenter.x=0,i.zoomCenter.y=0,i.inMovement=!1},200)):(this.transition.origin=null,this.zoomCenter.x=e,this.zoomCenter.y=a,this.clickTimeout=setTimeout(function(){i.transition.origin="transform-origin 400ms linear",i.zoom=i.maxZoom,i.inMovement=!1},200))},getTouchCenter:function(t){var i=t.x,s=t.y,e=this.$el.getBoundingClientRect();return{x:i-e.left,y:s-e.top}},calcZoom:function(t,i,s){return Math.min(i,Math.max(t,s))},getZoomDistance:function(t,i){return Math.sqrt(Math.pow(t.clientY-i.clientY,2)+Math.pow(t.clientX-i.clientX,2))},getTouchesCenter:function(t,i){return{x:(t.clientX+i.clientX)/2,y:(t.clientY+i.clientY)/2}},bounds:function(){var t=this.$refs.image.getBoundingClientRect();console.log(t),console.log({x:this.x,y:this.y,zoom:this.zoom}),t.left<0?this.x=0:t.right>this.width&&(this.x=0),t.top<0?this.y=0:t.bottom>this.height&&(this.y=0),console.log({x:this.x,y:this.y})}}},l=r,h=(s("WI69"),s("KHd+")),m=Object(h["a"])(l,o,n,!1,null,null,null),u=m.exports,d={components:{PinchImage:u},data:function(){return{show:!1,src:""}},methods:{mostrar:function(t){this.show=!0,this.src=t}}},f=d,p=(s("OTYr"),Object(h["a"])(f,e,a,!1,null,null,null));i["a"]=p.exports},xqt3:function(t,i,s){"use strict";var e=s("WAZ9"),a=s.n(e);a.a},zCoL:function(t,i,s){"use strict";var e=s("+GhH"),a=s.n(e);a.a}}]);