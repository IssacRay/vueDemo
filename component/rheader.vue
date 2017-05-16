<template>
	<div >
		<mu-appbar :title="title" class="rheader">
			<mu-icon-button icon="menu" slot="left"/>
			<mu-flat-button label="" slot="right"/>
			<mu-flat-button href="333" label="" slot="right"/>
			<mu-icon-button icon="expand_more" slot="right"/>
		</mu-appbar>
		<div class="hfixed"></div>
	</div>	
</template>
<script>
	module.exports={
		data:function(){
			return { 	
			}
		},
		computed:{
			title:function(){
				return this.$store.getters.gettitle[this.$store.getters.getindexRouterId].title;
			},
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