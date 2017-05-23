<template>
	<div class="rtopic">
	<div class="tTop">
		<mu-icon value="backspace" :size="26" class="backspace" @click="goback()"/>
		<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
	</div>
	<div class="tTopfixed"></div>	
		<div v-html="html.content"></div>
		<!-- <mu-bottom-nav-item icon="backspace"/> -->
		
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
						self.html=data.data;
						console.log(self.topid)
					}
				})
			},
			goback:function(){
				window.history.go(-1)
			}
		},
		mounted:function(){
			var href = window.location.href;
			var id=href.split("=")[1];
			this.gettopic(id);
		}
	}
</script>
<style>
	.rtopic{
		padding:8px 16px;
	}
	.rtopic img{
		width: 100%;
	}
	.backspace{
		/*color:#fc0;*/
		color:#fff;
		position:fixed;
		top: 10px;
		left:12px;
		z-index: 3;
	}
	.tTop{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 44px;
		background-color: #7e57c2;
		border-bottom: 2px solid #ff4081;
		text-align:center;
		font-size: 24px;
		line-height: 44px;
		color:#fff;
	}
	.rtopic h1 {
		font-size: 28px;
		border-bottom: 1px solid #ccc;
	}
	.rtopic h2 {
		font-size: 26px;
		border-bottom:  1px solid #ccc;
	}
	.rtopic code{
		color:rgba(0,0,0,0.87);
		background-color: #eee;
	}

	.tTop img{
		height: 23px;
	}
	.tTopfixed{
		height: 42px;
	}
</style>
