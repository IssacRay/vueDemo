<template>
	<nav class="rtop">
		<router-link v-for="(title,index) in titles" :to="title.href" class="li" tag="li">	
			<li v-text="title.title" @click="click(index)" :class="{'light':item==index}"></li>
		</router-link>	
	</nav>
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
	.rtop{
		width: 100%;
		height: 30px;
		display: flex;
		box-sizing: border-box;
		border:2px solid #fff;
	}
	.rtop .li{
		flex:1;
		list-style: none;
		line-height: 26px;
		text-align: center;
	}
	.rtop .light{
		color:#fff;
		background-color: #7e57c2;
	}
</style>