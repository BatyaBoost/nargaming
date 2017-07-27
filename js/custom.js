/*global jQuery:false */
jQuery(document).ready(function($) {
"use strict";

	
		//add some elements with animate effect

		$(".big-cta").hover(
			function () {
			$('.cta a').addClass("animated shake");
			},
			function () {
			$('.cta a').removeClass("animated shake");
			}
		);
		$(".box").hover(
			function () {
			$(this).find('.icon').addClass("animated fadeInDown");
			$(this).find('p').addClass("animated fadeInUp");
			},
			function () {
			$(this).find('.icon').removeClass("animated fadeInDown");
			$(this).find('p').removeClass("animated fadeInUp");
			}
		);
		
		//блоки калибровки и ранг до 3
		$("#kalibrovka").click(
			function () {
				$('#contacts_kalibrovka').css('display', 'block');
				$('#submit_form_kalibrovka').css('display', 'inline');
				$('#kalibrovka').css('display', 'none');
			}
		);
		
		$("#private_rank").click(
			function () {
				$('#contacts_private_rank').css('display', 'block');
				$('#submit_form_private_rank').css('display', 'inline');
				$('#private_rank').css('display', 'none');
			}
		);
		
		
		
		$('.accordion').on('show', function (e) {
		
			$(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
			$(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
		});
		
		$('.accordion').on('hide', function (e) {
			$(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
			$(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
			$(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
		});	

		
		// tooltip
		$('.social-network li a, .options_box .color a').tooltip();

		// fancybox
		$(".fancybox").fancybox({				
				padding : 0,
				autoResize: true,
				beforeShow: function () {
					this.title = $(this.element).attr('title');
					this.title = '<h4>' + this.title + '</h4>' + '<p>' + $(this.element).parent().find('img').attr('alt') + '</p>';
				},
				helpers : {
					title : { type: 'inside' },
				}
			});


		//Копирование скрипта карается по закону. (статьи 146, 147 и 180).
		

		//калькулятор
		$(function(){
			//функция определения цены
			function GetPrice() {
				var price = 0;
				var summ = 0;
				var	s1 = $('#s1').val();
				var	s2 = $('#s2').val();
				
				s1 = Number(s1);
				s2 = Number(s2);			
				
				//расписываем тарифы
				if (s1 >= s2) {
					price = 0;
				} else {
					//Серебро - I
					if (s1 == 1 & s2 == 2) { price = 300; }
					if (s1 == 1 & s2 == 3) { price = 500; }
					if (s1 == 1 & s2 == 4) { price = 700; }
					if (s1 == 1 & s2 == 5) { price = 900; }
					if (s1 == 1 & s2 == 6) { price = 1100; }
					if (s1 == 1 & s2 == 7) { price = 1400; }
					if (s1 == 1 & s2 == 8) { price = 1700; }
					if (s1 == 1 & s2 == 9) { price = 2000; }
					if (s1 == 1 & s2 == 10) { price = 2300; }
					if (s1 == 1 & s2 == 11) { price = 2640; }
					if (s1 == 1 & s2 == 12) { price = 2980; }
					if (s1 == 1 & s2 == 13) { price = 3320; }
					if (s1 == 1 & s2 == 14) { price = 3720; }
					if (s1 == 1 & s2 == 15) { price = 4160; }
					if (s1 == 1 & s2 == 16) { price = 4660; }
					if (s1 == 1 & s2 == 17) { price = 5670; }
					if (s1 == 1 & s2 == 18) { price = 7224; }
					
					//Серебро - II
					if (s1 == 2 & s2 == 3) { price = 300; }
					if (s1 == 2 & s2 == 4) { price = 500; }
					if (s1 == 2 & s2 == 5) { price = 700; }
					if (s1 == 2 & s2 == 6) { price = 900; }
					if (s1 == 2 & s2 == 7) { price = 1200; }
					if (s1 == 2 & s2 == 8) { price = 1500; }
					if (s1 == 2 & s2 == 9) { price = 1800; }
					if (s1 == 2 & s2 == 10) { price = 2100; }
					if (s1 == 2 & s2 == 11) { price = 2440; }
					if (s1 == 2 & s2 == 12) { price = 2780; }
					if (s1 == 2 & s2 == 13) { price = 3120; }
					if (s1 == 2 & s2 == 14) { price = 3520; }
					if (s1 == 2 & s2 == 15) { price = 3960; }
					if (s1 == 2 & s2 == 16) { price = 4460; }
					if (s1 == 2 & s2 == 17) { price = 5470; }
					if (s1 == 2 & s2 == 18) { price = 7304; }
										
					//Серебро - III
					if (s1 == 3 & s2 == 4) { price = 300; }
					if (s1 == 3 & s2 == 5) { price = 500; }
					if (s1 == 3 & s2 == 6) { price = 700; }
					if (s1 == 3 & s2 == 7) { price = 1000; }
					if (s1 == 3 & s2 == 8) { price = 1300; }
					if (s1 == 3 & s2 == 9) { price = 1600; }
					if (s1 == 3 & s2 == 10) { price = 1900; }
					if (s1 == 3 & s2 == 11) { price = 2240; }
					if (s1 == 3 & s2 == 12) { price = 2580; }
					if (s1 == 3 & s2 == 13) { price = 2900; }
					if (s1 == 3 & s2 == 14) { price = 3320; }
					if (s1 == 3 & s2 == 15) { price = 3760; }
					if (s1 == 3 & s2 == 16) { price = 4260; }
					if (s1 == 3 & s2 == 17) { price = 5370; }
					if (s1 == 3 & s2 == 18) { price = 6924; }
					
					//Серебро - IV
					if (s1 == 4 & s2 == 5) { price = 300; }
					if (s1 == 4 & s2 == 6) { price = 500; }
					if (s1 == 4 & s2 == 7) { price = 800; }
					if (s1 == 4 & s2 == 8) { price = 1100; }
					if (s1 == 4 & s2 == 9) { price = 1400; }
					if (s1 == 4 & s2 == 10) { price = 1700; }
					if (s1 == 4 & s2 == 11) { price = 2040; }
					if (s1 == 4 & s2 == 12) { price = 2380; }
					if (s1 == 4 & s2 == 13) { price = 2720; }
					if (s1 == 4 & s2 == 14) { price = 1560; }
					if (s1 == 4 & s2 == 15) { price = 3120; }
					if (s1 == 4 & s2 == 16) { price = 4060; }
					if (s1 == 4 & s2 == 17) { price = 5170; }
					if (s1 == 4 & s2 == 18) { price = 6724; }
										
					//Серебро - Элита
					if (s1 == 5 & s2 == 6) { price = 300; }
					if (s1 == 5 & s2 == 7) { price = 600; }
					if (s1 == 5 & s2 == 8) { price = 900; }
					if (s1 == 5 & s2 == 9) { price = 1200; }
					if (s1 == 5 & s2 == 10) { price = 1500; }
					if (s1 == 5 & s2 == 11) { price = 1840; }
					if (s1 == 5 & s2 == 12) { price = 2180; }
					if (s1 == 5 & s2 == 13) { price = 2520; }
					if (s1 == 5 & s2 == 14) { price = 2920; }
					if (s1 == 5 & s2 == 15) { price = 3360; }
					if (s1 == 5 & s2 == 16) { price = 3860; }
					if (s1 == 5 & s2 == 17) { price = 4970; }
					if (s1 == 5 & s2 == 18) { price = 6524; }
					
					//Серебро - Великий магистр
					if (s1 == 6 & s2 == 7) { price = 300; }
					if (s1 == 6 & s2 == 8) { price = 700; }
					if (s1 == 6 & s2 == 9) { price = 900; }
					if (s1 == 6 & s2 == 10) { price = 1200; }
					if (s1 == 6 & s2 == 11) { price = 1540; }
					if (s1 == 6 & s2 == 12) { price = 1880; }
					if (s1 == 6 & s2 == 13) { price = 2220; }
					if (s1 == 6 & s2 == 14) { price = 2620; }
					if (s1 == 6 & s2 == 15) { price = 3060; }
					if (s1 == 6 & s2 == 16) { price = 3560; }
					if (s1 == 6 & s2 == 17) { price = 4670; }
					if (s1 == 6 & s2 == 18) { price = 6224; }
					
					//Золотая звезда - I
					if (s1 == 7 & s2 == 8) { price = 340; }
					if (s1 == 7 & s2 == 9) { price = 640; }
					if (s1 == 7 & s2 == 10) { price = 940; }
					if (s1 == 7 & s2 == 11) { price = 1280; }
					if (s1 == 7 & s2 == 12) { price = 1620; }
					if (s1 == 7 & s2 == 13) { price = 1960; }
					if (s1 == 7 & s2 == 14) { price = 2360; }
					if (s1 == 7 & s2 == 15) { price = 2800; }
					if (s1 == 7 & s2 == 16) { price = 3300; }
					if (s1 == 7 & s2 == 17) { price = 4410; }
					if (s1 == 7 & s2 == 18) { price = 5964; }
					
					//Золотая звезда - II
					if (s1 == 8 & s2 == 9) { price = 340; }
					if (s1 == 8 & s2 == 10) { price = 640; }
					if (s1 == 8 & s2 == 11) { price = 940; }
					if (s1 == 8 & s2 == 12) { price = 1280; }
					if (s1 == 8 & s2 == 13) { price = 1620; }
					if (s1 == 8 & s2 == 14) { price = 2020; }
					if (s1 == 8 & s2 == 15) { price = 2460; }
					if (s1 == 8 & s2 == 16) { price = 2960; }
					if (s1 == 8 & s2 == 17) { price = 4070; }
					if (s1 == 8 & s2 == 18) { price = 5624; }
					
					//Золотая звезда - III
					if (s1 == 9 & s2 == 10) { price = 340; }
					if (s1 == 9 & s2 == 11) { price = 640; }
					if (s1 == 9 & s2 == 12) { price = 980; }
					if (s1 == 9 & s2 == 13) { price = 1320; }
					if (s1 == 9 & s2 == 14) { price = 1720; }
					if (s1 == 9 & s2 == 15) { price = 2160; }
					if (s1 == 9 & s2 == 16) { price = 2660; }
					if (s1 == 9 & s2 == 17) { price = 3770; }
					if (s1 == 9 & s2 == 18) { price = 5324; }
					
					//Золотая звезда - Магистр
					if (s1 == 10 & s2 == 11) { price = 340; }
					if (s1 == 10 & s2 == 12) { price = 680; }
					if (s1 == 10 & s2 == 13) { price = 1100; }
					if (s1 == 10 & s2 == 14) { price = 1420; }
					if (s1 == 10 & s2 == 15) { price = 1860; }
					if (s1 == 10 & s2 == 16) { price = 2360; }
					if (s1 == 10 & s2 == 17) { price = 2470; }
					if (s1 == 10 & s2 == 18) { price = 3024; }
					
					//Магистр хранитель - I
					if (s1 == 11 & s2 == 12) { price = 400; }
					if (s1 == 11 & s2 == 13) { price = 740; }
					if (s1 == 11 & s2 == 14) { price = 1140; }
					if (s1 == 11 & s2 == 15) { price = 1580; }
					if (s1 == 11 & s2 == 16) { price = 2080; }
					if (s1 == 11 & s2 == 17) { price = 3190; }
					if (s1 == 11 & s2 == 18) { price = 4744; }
					
					//Магистр хранитель - II
					if (s1 == 12 & s2 == 13) { price = 400; }
					if (s1 == 12 & s2 == 14) { price = 800; }
					if (s1 == 12 & s2 == 15) { price = 1240; }
					if (s1 == 12 & s2 == 16) { price = 1740; }
					if (s1 == 12 & s2 == 17) { price = 2850; }
					if (s1 == 12 & s2 == 18) { price = 4404; }
					
					//Магистр хранитель - Элита
					if (s1 == 13 & s2 == 14) { price = 400; }
					if (s1 == 13 & s2 == 15) { price = 840; }
					if (s1 == 13 & s2 == 16) { price = 1340; }
					if (s1 == 13 & s2 == 17) { price = 2450; }
					if (s1 == 13 & s2 == 18) { price = 4004; }
					
					//Заслуженный магистр хранитель
					if (s1 == 14 & s2 == 15) { price = 440; }
					if (s1 == 14 & s2 == 16) { price = 940; }
					if (s1 == 14 & s2 == 17) { price = 2050; }
					if (s1 == 14 & s2 == 18) { price = 3604; }
					
					//Легендарный беркут
					if (s1 == 15 & s2 == 16) { price = 500; }
					if (s1 == 15 & s2 == 17) { price = 1610; }
					if (s1 == 15 & s2 == 18) { price = 3164; }
					
					//Легендарный беркут - магистр
					if (s1 == 16 & s2 == 17) { price = 1110; }
					if (s1 == 16 & s2 == 18) { price = 2664; }
					
					//Великий магистр высшего ранга
					if (s1 == 17 & s2 == 18) { price = 1554; }
				}	
					
				//записываем цену в input
				$('#summ_order').val(price);
				
				//показываем другие поля
				if (price != 0) {
					$('#contacts').css('display', 'block');
					$('#submit_form').css('display', 'inline');
				}
				
            };
			
			//меняем картиночки через селект
			$('#s1').change(function(){
				$('#s1_img').find('img:first').attr('src', $('#s1 option:selected').attr('data-path'));
				GetPrice();
			});
			
			$('#s2').change(function(){
				$('#s2_img').find('img:first').attr('src', $('#s2 option:selected').attr('data-path'));
				GetPrice();
			});
			
		});

			
		
		//scroll to top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});
    $('#post-slider').flexslider({
        // Primary Controls
        controlNav          : false,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });
	
    $('#main-slider').flexslider({
        namespace           : "flex-",           //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector            : ".slides > li",    //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation           : "fade",            //String: Select your animation type, "fade" or "slide"
        easing              : "swing",           //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction           : "horizontal",      //String: Select the sliding direction, "horizontal" or "vertical"
        reverse             : false,             //{NEW} Boolean: Reverse the animation direction
        animationLoop       : true,              //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight        : false,             //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt             : 0,                 //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow           : true,              //Boolean: Animate slider automatically
        slideshowSpeed      : 7000,              //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed      : 600,               //Integer: Set the speed of animations, in milliseconds
        initDelay           : 0,                 //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize           : false,             //Boolean: Randomize slide order
         
        // Usability features
        pauseOnAction       : true,              //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover        : false,             //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        useCSS              : true,              //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch               : true,              //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video               : false,             //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
         
        // Primary Controls
        controlNav          : true,              //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav        : true,              //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText            : "Previous",        //String: Set the text for the "previous" directionNav item
        nextText            : "Next",            //String: Set the text for the "next" directionNav item
         
        // Secondary Navigation
        keyboard            : true,              //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard    : false,             //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel          : false,             //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay           : false,             //Boolean: Create pause/play dynamic element
        pauseText           : 'Pause',           //String: Set the text for the "pause" pausePlay item
        playText            : 'Play',            //String: Set the text for the "play" pausePlay item
         
        // Special properties
        controlsContainer   : "",                //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
        manualControls      : "",                //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync                : "",                //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor            : "",                //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
    });

});