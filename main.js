$(document).ready(function() {
	
	$('a').click(function() { return false; });

	$('.box').click(function() {
		var value = $(this).attr('rel');
		$(this).effect(value,'slow').effect('slide');
		/* Act on the event */
	});

});

