<template>
	<div>
		<nav class="relist">
		<router-link :to="url" tag="div">	
			<li v-for="topic in topics" @click="click(topic.id)">
				<div>
					<img :src="topic.author.avatar_url" alt="" v-if="">
					<h3 v-text="topic.title"> 这是标题</h3>
					<p> 这是内容1</p>
				</div>
			</li>
		</router-link>	
		</nav>
		<!-- <button @click="getDetail()">ok</button> -->
	</div>
</template>

<script>
//测试
	import $ from "jquery";
	module.exports={
		data:function(){
			return{
				topics:[],
				url:"",
				page:1
			}
		},
		methods:{
			getDetail:function() {
				console.log(this);
				var self = this
				$.ajax({
					type:"get",
					url:"https://cnodejs.org/api/v1/topics",
					async:true,
					data:{
						page:self.page,
						limit:10
					},
					success(data){
						var tpcarr = data.data;
						self.topics = self.topics.concat(tpcarr);
						// console.log(this);
						self.page++
					}
				});
			},
			click:function(id){
				this.$store.commit("settopid",id);
				this.url="/topic?id="+id;
			},
			scroll:function(){
				if(window.screen.availHeight + document.body.scrollTop== document.body.clientHeight){
					this.getDetail();
				}
				console.log(1);
			}
		},
		mounted:function(){
			var self=this
			this.getDetail();	
			$(window).scroll(function(){
				console.log(document.body.clientHeight)
				console.log(window.screen.availHeight + document.body.scrollTop)
				if(window.screen.availHeight + document.body.scrollTop== document.body.clientHeight){
					self.getDetail();	
				}
			})
		}
	}
	// console.log($);
	// $(window).scroll(function(){
	// 	console.log(document.body.clientHeight)
	// 	// console.log(document.body.scrollTop)
	// 	console.log(window.screen.availHeight + document.body.scrollTop)
	// 	if(window.screen.availHeight + document.body.scrollTop>= document.body.clientHeight-50){
	// 		console.log(1)

	// 	}
	// })
	// console.log(vue);
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