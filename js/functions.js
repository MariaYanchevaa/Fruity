$(function(){

	$('.bxslider').bxSlider({
		mode: 'horizontal',
		captions: true
	});

	$('.blog-slider').bxSlider({
		mode: 'horizontal',
		pager: false,
		captions: true
	});

});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

	


