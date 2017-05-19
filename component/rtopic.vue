<template>
	<div class="rtopic">	
		<div v-html="html.content"></div>
		<!-- <mu-bottom-nav-item icon="backspace"/> -->
		 <mu-icon value="backspace" :size="30" class="backspace" @click="goback()"/>
	</div>
</template>

<script>

import $ from "jquery";
	module.exports={
		data:function(){
			return {
				html:"",
			}
		},
		computed:{
			topid:function(){
				return this.$store.getters.gettopid;
			}
		},
		methods:{
			gettopic:function(id){
				var self =this;
				$.ajax({
					type:"get",
					url:"https://cnodejs.org/api/v1/topic/"+ id,
					async:true,
					success(data){
						self.html=data.data
						console.log(self.topid)
					}
				})
			},
			goback:function(){
				window.history.go(-1)
			}
		},
		mounted:function(){
			console.log('进来了');
			var href = window.location.href;
			var id=href.split("=")[1];
			this.gettopic(id);
		}
	}
</script>
<style>
	.rtopic{
		padding:8px;
	}
	.rtopic img{
		width: 100%;
	}
	.backspace{
		/*color:#fc0;*/
		position:fixed;
		bottom: 20px;
		right:20px;
	}
</style>
