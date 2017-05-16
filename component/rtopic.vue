<template>
	<div class="rtopic">	
		<div v-html="html.content"></div>
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
				// console.log(self.topid)
				$.ajax({
					type:"get",
					url:"https://cnodejs.org/api/v1/topic/"+ id,
					async:true,
					success(data){
						// console.log(data.data)
						self.html=data.data
						console.log(self.topid)

					}
				})
			}
		},
		mounted:function(){
			console.log('进来了')
			// console.log(window.location.href.split("?")[1])
			var href = window.location.href;
			// console.log(href.split("=")[1])
			var id=href.split("=")[1]
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
</style>