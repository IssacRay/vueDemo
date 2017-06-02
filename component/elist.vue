<template>
<div class="elist">
		<h3>每日十句英语美文</h3>
		<!-- <a name="top"></a> -->
	<nav>
		<li v-for="n in news" style="list-style:none;border:1px solid #ccc; padding:10px 8px; font-size:12px" >
			<p v-text="n.english"></p>
			<p v-text="n.chinese"></p>
		</li>
	</nav>
	<div class="ebtn" @click="getEnew()"><a href="javascript:scroll(0,0)" style="color:#000">更换一下</a></div>
</div>
</template>

<script>
import $ from 'jquery';
	module.exports={
		data:function(){
			return {
				news:[],
			}
		},
		methods:{
			getEnew:function(){
				var self =this
				$.ajax({
					type:"get",
					url:"http://route.showapi.com/1211-1?showapi_sign=59b223fd0b4d4041b49eb899776044d3&showapi_appid=36355",
					async:true,
					data:{
						count:10,
					},
					success(data){
						console.log(data.showapi_res_body.data);
						self.news=data.showapi_res_body.data;
					}
				});
			}
		},
		mounted:function(){
			this.getEnew();
		}

	}
</script>

<style>
	.elist h3{
		font-family: "微软雅黑";
		font-size: 18px;
		text-align: center;
	}
	.elist li{
		border-radius: 7px;
		margin-top: 4px;
	}
	.elist .ebtn{
		height: 22px;
		text-align: center;
		line-height: 22px;
	}
</style>