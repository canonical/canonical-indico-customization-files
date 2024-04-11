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

			// update and remove some navigation items
			$toolbar.find('a, button').each(function () {
				switch (jQuery(this).text().toLowerCase().trim().replace(' ', '_')) {
					case 'home':
					case 'create_event':
					case 'my_profile':
					case 'room_booking':
						jQuery(this).closest('li').remove();
						break;
					case 'administration':
						jQuery(this).text('Admin settings');
					default:
						break;
				}
			});

			// removes the catergory title
			const categoryTitle = jQuery('.category-title');
			categoryTitle.remove();

			// align secondary nav items
			const categoryHeader = jQuery('.category-header');
			categoryHeader.css({ paddingRight: '0.5rem' });
			const categoryToolbar = jQuery('#category-toolbar');
			categoryToolbar.css({ width: '100%' });
			const searchContainer = categoryToolbar.find('.group').first();
			searchContainer.css({ width: '100%' });
			const searchBox = jQuery('#search-box');
			searchBox.css({ marginLeft: '0' });

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
