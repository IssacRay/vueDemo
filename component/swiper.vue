<template>
	<div>
		<img :src="src" alt="" class="rimg">
	</div>
</template>

<script>
	module.exports={
		data(){
			return {
				src: require("../img/u=3507267171,1020998411&fm=23&gp=0.jpg")
			}
		}
	}
</script>
<style>
	.rimg{
		width: 100%;
		height: 100px;
	}
</style>