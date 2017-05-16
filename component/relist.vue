<template>
	<div>
		<nav class="relist">
			<li v-for="topic in topics">
				<div>
					<img :src="topic.author.avatar_url" alt="" v-if="">
					<h3 v-text="topic.title"> 这是标题</h3>
					<p> 这是内容1</p>
				</div>
			</li>
		</nav>
	</div>
</template>

<script>
//测试
	import $ from "jquery";
	module.exports={
		data:function(){
			return{
				topics:"",
			}
		},
		methods:{
			getDetail:function() {
				var self = this
				$.ajax({
					type:"get",
					url:"https://cnodejs.org/api/v1/topics",
					async:true,
					success(data){
						console.log(data.data)
						var tpcarr = data.data
						self.topics = data.data;
						// this.title = data.data.title;
					}
				});
			}
		},
		mounted:function(){
			this.getDetail()
		}
	}
	console.log($);
</script>

<style>
	.relist{
		width: 100%;
	}
	.relist li img{
		width: 70px;
		height: 68px;
		float:left;
		padding-right: 2px;
		border-radius: 5px;
	} 
	.relist li div h3,.relist li div p{
		margin:0;
		padding:0;
		padding-left: 2px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.relist li{
		list-style: none;
		height: 74px;
		padding: 2px;
		padding-bottom:4px;
		border-bottom:1px solid #ccc;
		margin:2px;
	}
</style>