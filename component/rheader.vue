<template>
	<div >
		<mu-appbar :title="title" class="rheader" style="text-align:center">
			<mu-icon-button icon="menu" slot="left" @click="showMenu()"/>
			<mu-flat-button label="" slot="right"/>
			<mu-flat-button href="333" label="" slot="right"/>
			<mu-icon-button icon="expand_more" slot="right" @click="showRtab()"/>
		</mu-appbar>
		<rmenu v-show="ismenu"></rmenu>
		<div @click="showMenu()">
			<rmas v-show="ismenu"></rmas>
		</div>
		<div class="hfixed"></div>
	</div>	
</template>z
<script>
	import rmenu from "./menu.vue";
	import rmas from "./rmas.vue"
	module.exports={
		data:function(){
			return { 
				ismenu:false,
				isrtab:false
			}
		},
		computed:{
			title:function(){
				return this.$store.getters.gettitle[this.$store.getters.getindexRouterId].title;
			},
			// title:
		},
		methods:{
			showMenu:function(){
				this.ismenu=!this.ismenu;
			},
			showRtab:function(){
				this.isrtab=!this.isrtab;
				console.log(123);
				this.$store.commit('setRtab',this.isrtab);
			}
		},
		components:{
			rmenu:rmenu,
			rmas:rmas,
		}
	}
</script>

<style>
	.rheader{
		height: 44px;
		position: fixed;
		top:0;
		left:0;
		border-bottom: 2px solid #ff4081;
	}
	.hfixed{
		height: 44px;
	}
	

</style>