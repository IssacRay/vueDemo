<template>
	<div>
		<nav class="relist">
			<li>
				<img src="" alt="" v-if="1">
				<div>
					<h3>这是标题</h3>
					<p>这是内容</p>
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
		height: 68px;
		padding: 2px;
	}
	.relist li img{
		width: 68px;
		height: 68px;
		float:left;
		background-color: #fc0;
	} 
	.relist li div{
		float:left;
		background-color: red;
	}
</style>