<template>
	<div >
		<mu-appbar :title="title" class="rheader">
			<mu-icon-button icon="menu" slot="left" @click="showMenu()"/>
			<mu-flat-button label="" slot="right"/>
			<mu-flat-button href="333" label="" slot="right"/>
			<mu-icon-button icon="expand_more" slot="right"/>
		</mu-appbar>
		<rmenu v-show="ismenu"></rmenu>
		<div class="hfixed"></div>
	</div>	
</template>
<script>
	import rmenu from "./menu.vue";
	module.exports={
		data:function(){
			return { 
				ismenu:false
			}
		},
		computed:{
			title:function(){
				return this.$store.getters.gettitle[this.$store.getters.getindexRouterId].title;
			},
		},
		methods:{
			showMenu:function(){
				this.ismenu=!this.ismenu;
			}
		},
		components:{
			rmenu:rmenu,
		}
	}
</script>

<style>
	.rheader{
		height: 42px;
		position: fixed;
		top:0;
		left:0;
	}
	.hfixed{
		height: 42px;
	}
	

</style>