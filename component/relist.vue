<template>
	<div>
		<div class="loading">
			<div v-show="color==0">正在加载.....</div>
			<div class="suss" v-show="color==1">加载成功</div>
			<!-- <span>加载失败</span> -->
		</div>
		<rtab></rtab>
		<nav class="relist">
		<router-link :to="url" tag="div">	
			<li v-for="topic in topics" @click="click(topic.id)">
				<div class="content">
					<img :src="topic.author.avatar_url" alt="" v-if="">
					<h3 v-text="topic.title"> 这是标题</h3>
					<p class="visit"><span v-text="topic.reply_count"></span>/<span v-text="topic.visit_count"></span></p>
					<span class="tab" v-show="topic.top==true" >置顶</span>
					<span class="tab" v-show="topic.top!==true&&topic.good==true"> 精华 </span>
					<span class="tab" v-show="topic.top!==true&&topic.tab=='share'" style="background-color:#fc0"> 分享 </span>
					<span class="tab" v-show="topic.top!==true&&topic.tab=='ask'" style="background-color:#000079"> 问答 </span>
					<span class="tab" v-show="topic.top!==true&&topic.tab=='job'" style="background-color:#ea0000"> 招聘 </span>
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
	import rtab from "./rtab.vue";
	module.exports={
		data:function(){
			return{
				topics:[],
				url:"",
				page:1,
				color:0
			}
		},
		components:{
			rtab,
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
						limit:10,
						// tab:"job"
					},
					success(data){
						var tpcarr = data.data;
						self.topics = self.topics.concat(tpcarr);
						// console.log(this);
						console.log(data.data);
						self.page++
					}
				});
			},
			getData:function(cb){
				var self = this
				$.ajax({
					type:"get",
					url:"https://cnodejs.org/api/v1/topics",
					async:true,
					data:{
						limit:10
					},
					success(data){
						self.topics = data.data;
						console.log(data);
						cb();
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
			var loadh
			this.getDetail();	
			$(window).scroll(function(){
				// console.log(document.body.clientHeight)
				// console.log(window.screen.availHeight + document.body.scrollTop)
				if(window.screen.availHeight + document.body.scrollTop== document.body.clientHeight){
					self.getDetail();
				}
			});

			$(".relist").on("touchstart",function(e){
				self.color=0;
				// console.log(document.body.scrollTop);
				// console.log(e.pageX)
				// 定义touch的四个值
				var xStart,yStart,xEnd,yEnd;
				console.log(e)
				// console.log(window.screen.availHeight);
				if(document.body.scrollTop==0){

					console.log(e.changedTouches[0].pageX);
					xStart= e.changedTouches[0].pageX;
					yStart= e.changedTouches[0].pageY;
					$(".relist").on("touchmove",function(e){
						xEnd=e.changedTouches[0].pageX;
						yEnd=e.changedTouches[0].pageY;
						// console.log(xStart,yStart,xEnd,yEnd);
						 loadh = yEnd-yStart;
						if(loadh<=46){
							$(".loading").height(loadh);
						}else{
							loadh=46;
							$(".loading").height(46);
							console.log(self.color);
						}	
					})
				}
			})
			$(".relist").on("touchend",function(){
				// $(".relist").on("touchmove",function(){
				// 	return null;
				// })
				if($(".loading").height()==46){
					$(".loading").animate({height:26},200,function(){
						// $(".loading").css()
						self.getData(function(){
							self.color=1;
							var timer=setTimeout(function(){
								$(".loading").animate({height:0},100)
							},300);
						});
						clearTimeout(self.getData.timer);
					})	
				}else{
					$(".loading").animate({height:0},200)
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
		border-radius: 7px;
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
	.relist span{
		font-size: 12px;
		color: #bbb;
	}
	.relist .content{
		position: relative;
		height: 100%;	
	}
	.relist .content .visit{
		position: absolute;
		bottom: 2px;
		right:2px;
	}
	.relist .content .tab{
		width: 40px;
		height: 20px;	
		border-radius: 4px;
		background-color: #80bd01;
		display: block;
		position: absolute;
		bottom: 6px;
		left:73px;
		text-align: center;
		color:#fff;
		line-height: 20px;
	}
	.relist .content .share{

	}
	.loading{
		text-align: center;
		line-height:36px; 
		height:0px;
		overflow: hidden;
	}
	.loading div{
		width: 100%;

	}
	.loading div.suss{
		color:#fff;
		background-color: #16a951;
		line-height: 26px;
		height: 26px;
	}
</style>