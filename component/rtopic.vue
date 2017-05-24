<template>
	<div class="rtopic">
	<div class="tTop">
		<mu-icon value="backspace" :size="26" class="backspace" @click="goback()"/>
		<img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
	</div>
		<div class="tTopfixed"></div>	
		<div v-html="html.content"></div>

		<h5>评论</h5>
		<div class="pinlun" v-for="pin in pins">
			<div class="user">
				<img :src="pin.author.avatar_url" alt="">
				<span class="loginname" v-text="pin.author.loginname"></span>
				<span class="likenum" v-text="pin.ups.length"></span>
				<mu-checkbox class="demo-checkbox like" uncheckIcon="favorite_border" checkedIcon="favorite"/>

			</div>
			<div class="content" v-html="pin.content"></div>
		</div>
		<div class="wirte">
			<div>
				<input type="text" :focus="isfocus()">
			</div>
			<div>
				<button>发送</button>
			</div>	
				
			<!-- <mu-text-field hintText="提示文字"/> -->
		</div>
		<div class="fwirte"></div>
	</div>
</template>

<script>

import $ from "jquery";
	module.exports={
		data:function(){
			return {
				html:"",
				pins:[]
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
						self.pins=data.data.replies;
						console.log(data);
						console.log(self.topid);
					}
				})
			},
			goback:function(){
				window.history.go(-1)
			},
			isfocus:function(){
				var a=$("input");
				console.log(a);
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
		z-index: 2;
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
	}h5{
		border-bottom: 1px solid #ccc;
		font-size: 15px;
	}
	.pinlun{
		/*background-color: #eee;*/
		border:1px solid #ccc;
		/*display:flex;*/
		padding:4px;
		margin-top:1px;
		/*border-top:0px;*/
	}
	.pinlun p{
		padding:0;
		margin:0;
	}
	.pinlun .content{
		/*flex:7;*/
		font-size:13px;
		min-height: 50px;
	}
	.pinlun .user{
		border-bottom:1px solid #ccc;
		position:relative;
	}
	.pinlun .loginname{
		/*line-height: 35px;*/
		position:absolute;
		top:5px;
		left:40px;
		font-weight: 600;
	}
	.pinlun .user img{
		width: 30px;
		height: 30px;
	}
	.pinlun .user .likenum{
		position:absolute;
		bottom:5px;
		right:3px;
	}
	.pinlun .user .like{
		position:absolute;
		bottom:5px;
		right:14px;
	}
	.wirte{
		height: 36px;
		width: 100%;
		border:1px solid #ccc;
		position: fixed;
		bottom:0;
		left:0;
		background-color: #fff;
		display: flex;
		padding:5px 10px 0;
	}
	.wirte input{
		width: 100%;
		outline: none;
		border:0;
		border-bottom: 2px solid #ff4081;
		flex:1;
	}
	.fwirte{
		height: 36px;
	}
	.wirte button{
		background-color: #7e57c2;
		border:0;
		border-bottom: 2px solid #ff4081;
		width: 50px;
		color:#fff;
	}
	.wirte div:first-child{
		flex:1;
	}
	.wirte div:nth-child(2){
		width: 50px;
	}

</style>
