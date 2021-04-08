$(function () {
	//=========search
	$(".search_btn").on('click', function () {
		$(".search_box").toggleClass("active");
	});

	$(".header_area .search_btn").on('click', function () {
		$(".search_overlay").addClass("active");
		$(".search_overlay .close_btn").on('click', function () {
			$(".search_overlay").removeClass('active');
		});
	});
	$(".icon_bar").on('click', function () {
		$(".logo").toggleClass('hedden');
	});

	$('.counter').counterUp({
		delay: 1000,
		time: 1000000
	});




});