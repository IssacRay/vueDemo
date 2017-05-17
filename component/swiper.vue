<template>
	<div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
        </div>
    </div>
</template>

<script>
	module.exports={
		data(){
			return {
				src: require("../img/u=3507267171,1020998411&fm=23&gp=0.jpg")
			}
		},
		mounted:function(){
			var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        paginationClickable: true,
		        spaceBetween: 0,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false
   		 	});
		}
	}
</script>
<style>
	 html, body {
        position: relative;
        height: 100%;
    }
    body {
        /*background: #eee;*/
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {

        width: 100%;
        height: 100%;
        
    }
    .swiper-slide {
    	min-height: 160px;
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
</style>