<template>
	<div class="rmenu">
		<!-- <mu-paper class="demo-paper" :zDepth="5" /> -->
		<div class="timg">
			<img src="../img/timg.jpg">
			<div class="tall">请登录</div>	
		</div>
			<mu-auto-complete style="width:180px" filter="noFilter" label="AccessToken" labelFloat fullWidth="true" v-model="atk" @focus="iserr=false"/><br>
			<!-- <p v-text="atk"></p> -->
			<button @click="getuser()" class="rbtn">登录</button>
			<div class="err" v-if="iserr">
				AccessToken is undefind
			</div>
	</div>
</template>

<script>
	import $ from "jquery";
	module.exports={
		data:function(){
			return {
				atk:"",
				iserr:false,
				user:localStorage.getItem("users")
			}
		},
		methods:{
			getuser:function(){
				var self =this;
				// localStorage.setItem("users","data");
				// sessionStorage.setItem('key_a', 1);
				$.ajax({
					type:"post",
					url:"https://cnodejs.org/api/v1/accesstoken",
					data:{
						accesstoken: self.atk,
					},
					success:function(data){
						console.log(data);
						var datas = JSON.stringify(data);
						localStorage.setItem("users",datas);
						localStorage.setItem("atoken",self.atk);
					},
					error:function(){
						self.iserr = true;
						self.atk="";
					}
				})
			}
		},
		mounted:function(){
			if (this.user){
				console.log("users on");
			}
		}
	}
</script>

<style scoped>
	.rmenu{
		width: 200px;
		height: 100%;
		background-color: #fff;
		position: fixed;
		top:44px;
		left: 0px;
		z-index: 4;
		padding: 0 10px;
		padding-bottom: 98px;
	}

	.timg{
		height: 100px;
		margin:20px;
		border-bottom: 1px solid #ccc;
		padding-bottom: 20px;
		text-align: center;
	}
	.timg img{
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	.rbtn{
		min-width: 66px;
		border:0;
		color:#fff;
		background-color: #7e57c2;
		/*text-align: center;*/
		margin-left: 57px;
	}
	.tall{
		border:1px solid #ccc;
		position: absolute;
		top:16px;
		right: 12px;
		padding: 5px;
		border-radius:10px;
	}
	.err{
		background-color: #ea0000;
		height: 30px;
		width:180px;
		line-height: 30px;
		color:#fff;
		text-align: center;
		position:absolute;
		top:130px;
		left:10px;

	}
	
</style>