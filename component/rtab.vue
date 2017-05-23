<template>
	<div>
		<div class="rtab">
			<div @click="cons('all')">全部</div>
			<div @click="cons('share')">分享</div>
			<div @click="cons('ask')">问答</div>
			<div @click="cons('job')">招聘</div>
		</div>
	</div>
</template>

<script>
	module.exports={
		data:function(){
			return {

			}
		},
		methods:{
			cons:function(x){
				console.log("hi");
				console.log(x);
				this.$store.commit('settab',x)
			}
		}
	}
</script>

<style>
	.rtab{
		width: 100%;
		height: 24px;
		display: flex;
		/*margin-top:-24px;*/
		/*background-color: #7e57c2;*/
	}
	.rtab div{
		flex:1;
		text-align: center;
		color:#fff;
		background-color: #7e57c2;

	}
</style>