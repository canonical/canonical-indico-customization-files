jQuery( function () {
	// moves the menu header
	jQuery('.toolbar.global-menu').detach().appendTo('div.page-header>div>a');

	// display moved header
	jQuery('div.page-header').css({display: 'block'});

	// set the display to visible now that the js has been parsed
	jQuery(document.body).css({visibility: 'visible'});
});
