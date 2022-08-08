jQuery(() => {
	if (jQuery('.category-title').text().indexOf('Main categories') > -1) {
		jQuery('.category-info.flexrow').html("<span><h2>Canonical Events</h2><p>Here you will find the list of events managed by Canonical. Sign up for, create, and browse events in the categories below.</p></span>");
	}
	if (jQuery('.category-title').text().indexOf('All events') > -1) {
		jQuery('.category-info.flexrow').html("<span><h2>Canonical Events</h2><p>Here you will find the list of events managed by Canonical. Sign up for, create, and browse the events below.</p></span>");
	}
});