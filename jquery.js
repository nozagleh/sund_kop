$(function(){

	

	$(window).scroll(function(){
		var $scroll = $(window).scrollTop();
		if ($scroll >20) {
			$('.header').addClass('smallnav');
			$('.container').css({'margin-top': '120px'});
		}else{
			$('.header').removeClass('smallnav');
			$('.container').css({'margin-top': '0px'});
		};
	});
});