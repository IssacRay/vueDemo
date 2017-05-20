import $ from "jquery";
window.$ = $;
import Vue from "vue";
import VueRouter from "vue-router";
import MuseUi from "muse-ui";
import Vuex from "vuex";
import swiper from "swiper";

Vue.use(MuseUi);
Vue.use(VueRouter);
Vue.use(Vuex);

import "muse-ui/dist/muse-ui.css";
import "swiper/dist/css/swiper.css";
import "./css/base.css";

import index from "./component/index.vue";
import recommend from "./component/recommend.vue";
import home from "./component/home.vue";
import topic from "./component/rtopic.vue";
import apply from "./component/apply.vue";

var router = new VueRouter({
	routes:[{
		path:"/index",
		component:index,
		children:[{
			path:"home",
			component:home
		},{
			path:"recommend",
			component:recommend
		}]
	},{
		path:"/topic",
		component:topic
	},{
		path:"/",
		redirect:"/index/recommend",
	},{
		path:"/apply",
		component:apply
	}]
}) 
var store =new Vuex.Store({
	state:{
		title:[{title:"首页",href:"home"},{title:"推荐",href:"recommend"},{title:"应用",href:"/apply"}],
		indexRouterId:"0",
		topid:"",
		tle:"",
	},
	mutations:{
		settitle:function(state,data){
			return state.title=data;
		},
		setindexRouterId:function(state,data){
			return state.indexRouterId=data;
		},
		settopid:function(state,data){
			return state.topid=data;
		},
		settle:function(state,data){
			return state.tle=data;
		}
	},
	getters:{
		gettitle:function(state){
			return state.title;
		},
		getindexRouterId:function(state){
			return state.indexRouterId;
		},
		gettopid:function(state){
			return state.topid;
		},
		gettle:function(state){
			return state.tle;
		}
	}
})

new Vue({
	el:"#demo",
	router:router,
	store:store,
})