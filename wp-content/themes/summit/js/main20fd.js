(function($) {
	"use strict";

	var themeApp = {
		countdown: function() {
			var date = $('#clock').data('datetime');
			$('#clock').countdown(date, function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="clock-part"><div class="value">%D</div><div class="label">%!D:Day,Days;</div></div>'
				+ '<div class="clock-part"><div class="value">%H</div><div class="label">%!H:Hour,Hours;</div></div>'
				+ '<div class="clock-part"><div class="value">%M</div><div class="label">%!M:Minute,Minutes;</div></div>'
				+ '<div class="clock-part"><div class="value">%S</div><div class="label">%!S:Second,Seconds;</div></div>'));
			});
		},
		testimonialSlider: function() {
			var testimonial = $('.testimonial-wrap');
			testimonial.owlCarousel({
				items : 2,
			      itemsDesktop : false,
			      itemsDesktopSmall : false,
			      itemsTablet: [767,1],
			      itemsMobile : false,
							autoPlay : 4000,
				paginationSpeed : 400
			});
		},
		moveStyle:function() {
			var customcss= $('#custom-style').detach().html();
			customcss = '<style type="text/css">'+customcss+'</style>';
			$('head').append(customcss);
		},
		responsiveIframe: function() {
			$('.post-wrap').fitVids();
		},
		changeNavebar: function() {
			var fixedNav = $('.navbar-fixed-top');
			$(window).scroll(function(){
				if ($(this).scrollTop() > 10) {
					fixedNav.addClass('scrolled');
					$('body').addClass('scrolled');
				} else {
					fixedNav.removeClass('scrolled');
					$('body').removeClass('scrolled');
				}
			});
		},
		magnificPopupInit: function() {
			$('.magnific-popup-image').magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery:{
					enabled:false
				},
				image:{
					titleSrc: 'data-caption'
				}
			});
			$('.magnific-popup-gallery').magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery:{
					enabled:true
				},
				image:{
					titleSrc: 'data-caption'
				}
			});
		},
		backToTop: function() {
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('#back-to-top').fadeIn();
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			$('#back-to-top').on('click', function(e){
				e.preventDefault();
				$('html, body').animate({scrollTop : 0},1000);
				return false;
			});
		},
		singlePageNav:function() {
			if ($().onePageNav) {
				$('#main-menu .navbar-nav').onePageNav({
				    currentClass: 'current-menu-item',
				    changeHash: true,
				    scrollSpeed: 750,
				    scrollThreshold: 0.5,
				    filter: ':not(a[href^="http"])',
				    easing: 'swing',
				});
			}
		},
		mobileMenu:function() {
			$('.navbar-nav').find('.menu-item-has-children').prepend('<span class="submenu-button"></span>');
			$('.menu-item-has-children').find('.submenu-button').on('click', function(){
				$(this).toggleClass('opened');
				$(this).siblings('ul').slideToggle();
			})
		},
		highlighter: function() {
			$('pre, pre code').each(function(i, block) {
			    hljs.highlightBlock(block);
			});
		},
		sliderGallery: function() {
			$('.flexslider').flexslider({
				controlNav: false,
				prevText: '<i class="fa fa-angle-left"></i>',
				nextText: '<i class="fa fa-angle-right"></i>',
				slideshowSpeed: '3000',
				pauseOnHover: true
			});
		},
		init: function(){
			themeApp.countdown();
			themeApp.testimonialSlider();
			themeApp.responsiveIframe();
			themeApp.changeNavebar();
			themeApp.magnificPopupInit();
			themeApp.backToTop();
			themeApp.singlePageNav();
			themeApp.mobileMenu();
			themeApp.highlighter();
			themeApp.sliderGallery();
		}
	}

	$(document).ready(function(){
		themeApp.init();
	});
	$(window).load(function() {
		$('.loader-wrapper').hide();
		$('.preloader-overlay').fadeOut(800);
		themeApp.moveStyle();
	});
}(jQuery));

/*====================================================
	function for facebook status
====================================================*/
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.2";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));