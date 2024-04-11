document.addEventListener("DOMContentLoaded", function () {
	// Check if we are in the room booking page ('/rooms/book') as it is not compatible with JQuery
	const currentUrl = window.location.pathname;
	if (currentUrl != "/rooms/book" && currentUrl != "/rooms") {
		jQuery(function () {
			const INTERNAL_EVENTS_CATEGORY = 4;

			// moves the menu header
			const $toolbar = jQuery('.toolbar.global-menu').detach();
			const $targetDiv = jQuery('div.page-header>div');
			const $logo = $targetDiv.find('a').first();
			$toolbar.insertAfter($logo);

			// update administration button text
			const administrationBtn = $toolbar.find('a:contains("Administration")');
			if (administrationBtn.length) {
				administrationBtn.text('Admin settings');
			}

			// display moved header
			jQuery('div.page-header').css({ display: 'block' });

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
		});
	}
	document.querySelector("body").style.visibility = "visible";
});
