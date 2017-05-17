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
import "./css/base.css"

import index from "./component/index.vue";
import recommend from "./component/recommend.vue";
import home from "./component/home.vue";
import topic from "./component/rtopic.vue";

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
		redirect:"/index/home",
	}]
})
var store =new Vuex.Store({
	state:{
		title:[{title:"首页",href:"home"},{title:"推荐",href:"recommend"},{title:"应用",href:"apply"}],
		indexRouterId:"0",
		topid:""
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
		}
	}
})

new Vue({
	el:"#demo",
	router:router,
	store:store,
})