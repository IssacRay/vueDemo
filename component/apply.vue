<template>
	<div>
		<p>此功能正在开发中</p>
		<input type="text" v-model="atk">
		<button @click="getuser()">提交</button>
		<!-- <p v-text="atk"></p> -->
	</div>
</template>

<script>
	import $ from "jquery";
	module.exports={
		data:function(){
			return {
				atk:""
			}
		},
		methods:{
			getuser:function(){
				var self =this;
				$.ajax({
					type:"post",
					url:"https://cnodejs.org/api/v1/accesstoken",
					data:{
						accesstoken: self.atk,
					},
					success:function(data){
						console.log(data);
					}
				})
			}
		}
	}
</script>
	