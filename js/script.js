$(function () {

	// for padding
	$(".btn_tow").on('click', function () {
		$(".form_one").addClass('padding_bottom');
	});
	$(".btn_one, .btn_three, .btn_four").on('click', function () {
		$(".form_one").removeClass('padding_bottom');
	});
	// for padding


	$(".btn_one").on('click', function () {
		$(".form_tow, .form_three, .form_four, .form_tow_text").removeClass('active');
		$(".form_one, .chack_box").addClass('active');
	});

	$(".btn_tow").on('click', function () {
		$(".form_one, .form_three, .form_four, .chack_box").removeClass('active');
		$(".form_tow, .form_tow_text").addClass('active');
	});

	$(".btn_three").on('click', function () {
		$(".form_tow, .form_one, .form_four, .chack_box, .form_tow_text").removeClass('active');
		$(".form_three").addClass('active');
	});
	$(".btn_four").on('click', function () {
		$(".form_tow, .form_three, .form_one, .chack_box, .form_tow_text").removeClass('active');
		$(".form_four").addClass('active');
	});




});