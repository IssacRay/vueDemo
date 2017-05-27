<template>
	<div class="loading">
		<span>正在加载.....</span>
	</div>
</template>

<script>
import $ from "jquery";
	module.exports={
		data:function(){
			return {

			}
		},
		methods:{
			
		},
		mounted:function(){
			$(window).scroll(function(){
				console.log(document.body.scrollTop);
				// console.log(window.screen.availHeight);
				if(document.body.scrollTop==0){
					console.log($(".loading"));
					$(".loading").height(36)
				}
			})
		}
	}
</script>
<style>
	.loading{
		/*height: 24px;*/
		text-align: center;
		line-height:36px; 
		height:0px;
		overflow: hidden;
	}
</style>

