import $ from "jquery";
window.$ = $;
import Vue from "vue";
import VueRouter from "vue-router";
import MuseUi from "muse-ui";
import Vuex from "vuex";

Vue.use(MuseUi);
Vue.use(VueRouter);
Vue.use(Vuex);

import "muse-ui/dist/muse-ui.css";

import index from "./component/index.vue";
import recommend from "./component/recommend.vue";
import home from "./component/home.vue";

var router = new VueRouter({
	routes:[{
		path:"/index",
		component:index,
		redirect:"/index/home",
		children:[{
			path:"home",
			component:home
		},{
			path:"recommend",
			component:recommend
		}]
	}]
})
var store =new Vuex.Store({
	state:{
		title:[{title:"首页",href:"home"},{title:"推荐",href:"recommend"}],
		indexRouterId:"0",
	},
	mutations:{
		settitle:function(state,data){
			return state.title=data;
		},
		setindexRouterId:function(state,data){
			return state.indexRouterId=data;
		}
	},
	getters:{
		gettitle:function(state){
			return state.title;
		},
		getindexRouterId:function(state){
			return state.indexRouterId;
		}
	}
})

new Vue({
	el:"#demo",
	router:router,
	store:store,
})