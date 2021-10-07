function tabsInAccord() {
	var w = window.innerWidth ? window.innerWidth : $(window).width(), //ширина экрана
			widthVal = 700, //ширина, меньше которой табы становятся аккордионами
			speed = 250, //скорость раскрытия аккордионов
			tab = $('.product-tabs__item > span.active'); //отдельная вкладка
	
	if (w < 700 ) {
		$('.product-tabs__item > span').removeClass('active')

	}
	//Высчитываем высоту контейнера
		function calcHeight() {
			var tabHeight = 0;
			$('.product-tabs__item > span.active').next('.product-tabs__content').each(function(){
				if ($(this).innerHeight() > tabHeight ) {
					 tabHeight = $(this).innerHeight()
				 }
			});
			$('.product-tabs').height(tabHeight);
		}
	
	function tabsSwitch() {
		$('.product-tabs__item').off().on('click', 'span', function() {
			$(this).closest('.product-tabs').find($('.product-tabs__item')).find('.product-tabs__content').removeAttr("style");
			$(this).addClass('active').next('.product-tabs__content').show().closest('.product-tabs').find($('.product-tabs__item > span.active').not($(this))).removeClass('active');
			calcHeight();
		});
	}
	
	function accordOpen() {
		$('.product-tabs').removeAttr("style");
		$('.product-tabs__item').off().on('click', 'span', function() {
				$(this).toggleClass('active').next('.product-tabs__content').slideToggle(speed);
			});
	}
	
	if (w < widthVal) {
		if(tab.length > 0) {
			tab.closest('.product-tabs').find($('.product-tabs__item > span').not(tab).next('.product-tabs__content')).css({'display':'none'});
			tab.next('.product-tabs__content').slideDown(speed);
		}
		accordOpen();
	} else {
		if(tab.length === 0 || tab.length > 1) {
			tab.removeClass('active').next('.product-tabs__content').css({'display':'block'});
				$('.product-tabs__item:first > span').addClass('active');
			} else {
				$('.product-tabs').find('.product-tabs__content').css({'display':'block'});
			}
			calcHeight();
			tabsSwitch();	
		}
		if (w < 700 ) {
			$('.product-tabs__content').css({'display':'none'})
		}
}

tabsInAccord();

$(window).resize(function () {
	$('.product-tabs__item').removeClass('active')
	tabsInAccord();
	
});

