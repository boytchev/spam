
var container;


function clearContainer() {

	document.getElementById( 'title' ).src = 'title-by.png';
	document.getElementById( 'header' ).style.display = 'none';

	if ( !container )
		container = document.getElementById( 'container' );

	container.innerHTML = '';

}



function showAllJournals() {

	clearContainer();

	var html = `
		<br><br>
		<h2>Spam journals</h2>
		<p>A list of journals and books that have been promoted via	spam emails.
		This does not mean the journals are not legitimate, but it raises
		concerns. Fake journals use the names and the visuals of the original
		journals, so click on links at your own discretion.</p>
	`;
	for ( var i=0; i<journals.length; i++ ) {

		html += `<div class="row row${i%2}">${journals[ i ].name}`;
		if ( journals[ i ].acronym )
			html += `<span class="acronym">(${journals[ i ].acronym})</span>`;
		if ( journals[ i ].url ) {

			if ( journals[ i ].url instanceof Array )
				for ( var url of journals[ i ].url )
					html += `<a class="url" href="${url}" target="_blank">${url}</a>`;
			else
				html += `<a class="url" href="${journals[ i ].url}" target="_blank">${journals[ i ].url}</a>`;

		}

		html += '</div>';

	}

	container.innerHTML = html;

}



function showAllConferences() {

	clearContainer();

	var html = `
		<br><br>
		<h2>Spam conferences</h2>
		<p>A list of conferences and other events that have been promoted via
		spam emails. Most of the conferences in the list are predatory. Few of
		them are not, but are deceived to use spam techniques. Click on links
		at your own discretion.</p>
	`;
	for ( var i=0; i<events.length; i++ ) {

		html += `<div class="row row${i%2}">${events[ i ].name}`;
		if ( events[ i ].acronym )
			html += `<span class="acronym">(${events[ i ].acronym})</span>`;
		if ( events[ i ].url ) {

			if ( events[ i ].url instanceof Array )
				for ( var url of events[ i ].url )
					html += `<a class="url" href="${url}" target="_blank">${url}</a>`;
			else
				html += `<a class="url" href="${events[ i ].url}" target="_blank">${events[ i ].url}</a>`;

		}

		html += '</div>';

	}

	container.innerHTML = html;

}


function showAllPublishers() {

	clearContainer();

	var html = `
		<br><br>
		<h2>Spam publishers</h2>
		<p>A list of publishers of spam journals and organizers of spam events.
		Some are recidivists by continuously spamming me from different
		addresses and about different publications or events. Click on links
		at your own discretion.</p>
	`;
	for ( var i=0; i<publishers.length; i++ ) {

		html += `<div class="row row${i%2}">${publishers[ i ].name}`;
		if ( publishers[ i ].acronym )
			html += `<span class="acronym">(${publishers[ i ].acronym})</span>`;
		if ( publishers[ i ].url ) {

			if ( publishers[ i ].url instanceof Array )
				for ( var url of publishers[ i ].url )
					html += `<a class="url" href="${url}" target="_blank">${url}</a>`;
			else
				html += `<a class="url" href="${publishers[ i ].url}" target="_blank">${publishers[ i ].url}</a>`;

		}

		html += '</div>';

	}

	container.innerHTML = html;

}




function showAllServices() {

	clearContainer();

	var html = `
		<br><br>
		<h2>Spam services</h2>
		<p>A list of email services and email lists that are used to distribute
		academic spam. Some of tham use several IP addresses for their operations.
		They are listed at the bottom.</p>
	`;
	for ( var i=0; i<services.length; i++ ) {

		html += `<div class="row row${i%2}">${services[ i ].domain??'(anonymous)'}`;
		if ( services[ i ].ip4 ) {

			if ( services[ i ].ip4 instanceof Array )
				html += `<span class="ip4">${services[ i ].ip4.sort().join( '<br>' )}</span>`;
			else
				html += `<span class="ip4">${services[ i ].ip4}</span>`;

		}

		html += '</div>';

	}


	html +=	`
		<br><br>
		<h2>Mapping level 3</h2>
		`;
	for ( var [ key, value ] of Object.entries( ip4map3 ) ) {

		html += `<div class="row row${i%2}">${key}.xxx`;
		html += `<span class="ip4">${value.join( '<br>' )}</span>`;
		html += '</div>';

	}

	html +=	`
		<br><br>
		<h2>Mapping level 2</h2>
		`;
	for ( var [ key, value ] of Object.entries( ip4map2 ) ) {

		html += `<div class="row row${i%2}">${key}.xxx.xxx`;
		html += `<span class="ip4">${value.join( '<br>' )}</span>`;
		html += '</div>';

	}

	container.innerHTML = html;

}
