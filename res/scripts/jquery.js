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
			$('.tt').fadeOut(1000).hide();
		};
	});
});