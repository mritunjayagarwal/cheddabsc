(function ($) {
	// Preloader
	// $(window).on('load', function () {
	//     if ($('.loader').length) {
	//       $('.loader').delay(100).fadeOut('slow', function () {
	//         $(this).remove();
	//       });
	//     }
	// });
	$('.owl-carousel-social').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:2,
			},
			1024:{
				items:2,
                dots: true,
			},
			768:{
				items:2,
                dots: true,
			},
			0:{
				items:2,
                dots: true,
			}
		}
	})
})(jQuery);