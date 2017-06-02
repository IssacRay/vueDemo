<template>
<div>
	<nav class="rnav">
		<router-link v-for="(title,index) in titles" :to="title.href" class="li" tag="li">	
			<li v-text="title.title" @click="click(index)" :class="{'light':islight==index}"></li>
		</router-link>
	</nav>
	<div class="ffixed"></div>
</div>
</template>

<script>
	module.exports={
		data:function(){
			return{
				item:"0"
			}
		},
		computed:{
			titles:function(){
				return this.$store.getters.gettitle;
			},
			islight:function(){
				return this.$store.getters.getindexRouterId;
			}
		},
		methods:{
			click:function(data){				
				this.item=data;
				this.$store.commit('setindexRouterId',this.item)
				console.log(data)
			}
		}
	}
</script>

<style>
	.rnav{
		width: 100%;
		height: 36px;
		display: flex;
		background-color: #7e57c2;
		box-sizing: border-box;
		/*border:2px solid #fff;*/
		/*border-bottom:2px solid #ff4081;*/
	 	position: fixed;
		bottom: 0px;
		left: 0px; 
		z-index: 5;
	}
	.rnav .li{
		flex:1;
		list-style: none;
		color:#ccc;
		line-height: 34px;
		text-align: center;
		/*box-sizing:border-box;*/
		/*padding-top: 2px;*/
		border-bottom:2px solid #7e57c2;
	}
	.rnav .light{
		color:#fff;
		background-color: #7e57c2;
		border-bottom: 2px solid #ff4081;
	}
	.ffixed{
      height: 36px;
    }
</style>