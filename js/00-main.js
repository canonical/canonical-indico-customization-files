jQuery( function () {
	const INTERNAL_EVENTS_CATEGORY = 4;

	// moves the menu header
	jQuery('.toolbar.global-menu').detach().appendTo('div.page-header>div>a');

	// display moved header
	jQuery('div.page-header').css({display: 'block'});

	// a hack to change the accept text for the internal events category
	let confActionAcceptLabel = document.querySelector(".conference-page .action-box.accept .label");
	let categoryLink = document.querySelector(".main-action-bar a.icon-collapse");
	let categoryLinkHref = "/category/" + INTERNAL_EVENTS_CATEGORY + "/";
	if (confActionAcceptLabel && categoryLink && categoryLink.getAttribute("href") == categoryLinkHref) {
		confActionAcceptLabel.textContent = "You have been registered for this event.";
		if (document.querySelector(".action-box.accept .i-button.icon-edit")) {
			confActionAcceptLabel.textContent += " Please make sure all the below details are completed.";
		} else {
			confActionAcceptLabel.textContent += " For changes to your details, please reach out to the event manager.";
		}
	}

	// update favicon
	const favicon = $('link[rel="shortcut icon"]');
	favicon.attr('href', '/static/custom/files/favicon.ico');

	// set the display to visible now that the js has been parsed
	jQuery(document.body).css({visibility: 'visible'});
});
