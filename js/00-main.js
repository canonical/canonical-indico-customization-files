jQuery( function () {
	// moves the menu header
	jQuery('.toolbar.global-menu').detach().appendTo('div.page-header>div>a');

	// display moved header
	jQuery('div.page-header').css({display: 'block'});
});
