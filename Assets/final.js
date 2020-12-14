$(function() {
	var hScroll = $(".h-scroll"),
		hScrollContain = $(".h-scroll__container"),
		scrollPercent = 100;

	function checkWidth() {
		var windowHeight = $(window).height(),
			calc = scrollPercent * 40 + windowHeight;
		hScrollContain.css({
			height: calc
		});
	}
	checkWidth();
	$(window).resize(checkWidth);
	
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		hScroll.css({
			transform: "translateX(-" + scroll / scrollPercent + "%)"
		});
	});

	$( window ).resize(function() {
		var screenHeight = window.innerHeight;
		$('#yourdiv').css('height', screenHeight); 
	});

	/// SCROLL MAGIC ///
		var controller = new ScrollMagic.Controller({
			vertical: false
		});

		var horizontalScroll = new TimelineMax()
		.add(TweenMax.to(".h-scroll", 1,   {x: "-10%", }))	
		.add(TweenMax.to(".h-scroll", 1,   {x: "-20%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-30%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-40%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-50%", }))	
		.add(TweenMax.to(".h-scroll", 1,   {x: "-60%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-70%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-80%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-90%", }))
		.add(TweenMax.to(".h-scroll", 1,   {x: "-100%", }));
        
             

		var scene = new ScrollMagic.Scene({
				triggerElement: ".h-scroll__container",
				triggerHook: 0,
				duration: 1000
		})
		
		.setPin("#float-mask")
		.setPin("#mask2")
		.setTween(horizontalScroll)
		.addTo(controller);
		
		});



$('#c1').on('mouseenter', function () {
	$('#h1').fadeIn("slow").delay(500);
});

$('#c1').on('mouseover', function () {
	$('#h1').fadeOut("slow");
});

$('#c2').on('mouseenter', function () {
	$('#h2').fadeIn("slow").delay(500);
});

$('#c2').on('mouseover', function () {
	$('#h2').fadeOut("slow");
});

$('#c3').on('mouseenter', function () {
	$('#h3').fadeIn("slow").delay(500);
});

$('#c3').on('mouseover', function () {
	$('#h3').fadeOut("slow");
});

$('#c4').on('mouseenter', function () {
	$('#h4').fadeIn("slow").delay(500);
});

$('#c4').on('mouseover', function () {
	$('#h4').fadeOut("slow");
});

$('#c5').on('mouseenter', function () {
	$('#h5').fadeIn("slow").delay(500);
});

$('#c5').on('mouseover', function () {
	$('#h5').fadeOut("slow");
});

$('#c6').on('mouseenter', function () {
	$('#h6').fadeIn("slow").delay(500);
});

$('#c6').on('mouseover', function () {
	$('#h6').fadeOut("slow");
});

$('#c7').on('mouseenter', function () {
	$('#h7').fadeIn("slow").delay(500);
});

$('#c7').on('mouseover', function () {
	$('#h7').fadeOut("slow");
});

$('#c8').on('mouseenter', function () {
	$('#h8').fadeIn("slow").delay(500);
});

$('#c8').on('mouseover', function () {
	$('#h8').fadeOut("slow");
});

const textPath = document.querySelector("#text-path");

const h = document.documentElement, 
      b = document.body,
      st = 'scrollTop',
      sh = 'scrollHeight';

document.addEventListener("scroll", e => {
  let percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 40) + 1200)
});



