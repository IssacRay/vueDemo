<template>
	<div>
		<nav class="relist">
			<li>
				<div>
					<img src="" alt="" v-if="1">
					<h3> 这是标题</h3>
					<p> 这是内容</p>
				</div>
			</li>
		</nav>
	</div>
</template>

<script>
	module.exports={
		data:function(){
			return{
				
			}
		}
	}
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
	} 
	.relist li div h3,.relist li div p{
		margin:0;
		padding:0;
		padding-left: 2px;
	}
	.relist li{
		list-style: none;
		height: 74px;
		padding: 2px;
		padding-bottom:4px;
		border-bottom:1px solid #000;
		margin:2px;
	}
</style>