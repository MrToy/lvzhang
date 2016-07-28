(function(){
	// 产品轮播
	function productCarousel(){
		var product = $('.product');
		var li = product.find('li:first');
		var marginLeft = parseInt(product.css('marginLeft'));
		var width = li.width();
		product.animate({
			marginLeft : marginLeft - width + 'px'
		},2000);
		setTimeout(function(){
			$('.product li').eq(1).css({
				'border' : 'none'
			});
		},2000);
		setTimeout(function(){
			li.remove();
			product.append(li);
			product.css({
				'margin-left' : marginLeft
			});
			$('.product li').removeAttr('style');
		},3000);
	}

	$(document).ready(function(){
		setInterval(productCarousel,5000);
	});
})();