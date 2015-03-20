$(function(){
	$('a').click(function(){
				$('html, body').animate({
					scrollTop: $( $.attr(this, 'href') ).offset().top - 120
				}, 500);
				return false;
			});
	$('.boxtext').hide();
	$('.boxtext').fadeIn(1000);	
	$('.tt').hide();

	$('.dispphotos').click(function(){
		$('.photos').slideToggle("slow");
	});

	$('.termslist ul li:nth-child(2)').hide();
	$('.termslist ul li h1').on("click",function(e){
		$(e.target).closest("ul").find('.info').slideToggle("slow");
	});

	var $showtt = $('.mtop').offset().top + 300;
	$(window).scroll(function(){
		var $scroll = $(window).scrollTop();
		if ($scroll >20) {
			$('.header').addClass('smallnav');
			$('.container').css({'margin-top': '120px'});
		}else{
			$('.header').removeClass('smallnav');
			$('.container').css({'margin-top': '0px'});
		};
		if ($scroll > $showtt) {
			$('.tt').fadeIn(500);	
		}else {
			$('.tt').fadeOut(1000).hide(1000);
		};
	});


	var slideshow = $(this).find('.slideshow');
	var slide_ul_li = $(this).find('.slideshow ul li');

	var slideCount = $('.slideshow ul li').length;
	var slideWidth = $('.slideshow ul li').width();
	var slideHeight = $('.slideshow ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
						
	$('.slideshow').css({ width: slideWidth, height: slideHeight });
						
	$('.slideshow ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
						
	$('.slideshow ul li:last-child').prependTo('.slideshow ul');

	$('.innermain').show();

	function moveLeft() {
		$('.slideshow ul').animate({
			left: + slideWidth
		}, 300, function () {
			$('.slideshow ul li:last-child').prependTo('.slideshow ul');
			$('.slideshow ul').css('left', '');
		});
	};

	function moveRight() {
		$('.slideshow ul').animate({
			left: - slideWidth
		 }, 300, function () {
			$('.slideshow ul li:first-child').appendTo('.slideshow ul');
			$('.slideshow ul').css('left', '');
		});
	};

	$(document).on('click','.control_prev',function (e) {
		e.preventDefault();
		moveLeft();
	});

	$(document).on('click','a.control_next',function (e) {
		e.preventDefault();
		moveRight();
	});

});