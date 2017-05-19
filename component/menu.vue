<template>
	<div class="rmenu">
		<!-- <mu-paper class="demo-paper" :zDepth="5" /> -->
		<div class="timg">
			<img src="../img/timg.jpg" height="512" width="512" alt="">
		</div>
	</div>
</template>

<script>
	// module.exports={

	// }
</script>

<style scoped>
	.rmenu{
		width: 200px;
		height: 100%;
		background-color: #fc0;
		position: fixed;
		top:42px;
		left: 0px;
		z-index: 4;
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

</style>