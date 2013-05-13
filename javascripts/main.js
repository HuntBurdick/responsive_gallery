$(document).ready(function() {
	$('.hover_slide').contenthover({
	    overlay_background:'#000',
	    overlay_opacity:0.8
	});

	adjust_hover();

});

$(window).resize(function(){
	adjust_hover();
	console.log('window resized');
});


function adjust_hover() {
	$('.image_wrapper').each(function(){
		var parent_height = $(this).find('.ch_normal').find('img').height();
		var parent_width = $(this).find('.ch_normal').find('img').width();

		$(this).find('.ch_hover').height(parent_height);
		$(this).find('.ch_hover').width(parent_width);

		$(this).find('.ch_wrapper').height(parent_height);
		$(this).find('.ch_wrapper').width(parent_width);

	});
}