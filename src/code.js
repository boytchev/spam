
var container;


function clearContainer() {

	document.getElementById( 'title' ).src = 'src/title-by.png';
	document.getElementById( 'header' ).style.display = 'none';

	if ( !container )
		container = document.getElementById( 'container' );

	container.innerHTML = '';

}


var searchReplaceDone;
function searchReplace( string, searchText ) {

	if ( !searchText )
		return string;
	else {

		var result = string.replace( new RegExp( searchText, "ig" ), '<em>$&</em>' );

		if ( result != string )
			searchReplaceDone = true;

		return result;

	}

}

function showAllJournals( searchText ) {

	var html = '',
		count = 0;

	for ( var i=0; i<journals.length; i++ ) {

		var row = '';

		searchReplaceDone = false;

		// get data for one journal
		var name = journals[ i ].name??'',
			acronym = journals[ i ].acronym??'',
			url = journals[ i ].url;

		// generate html for this journal
		row += `<div class="row row${i%2}">${searchReplace( name, searchText )}`;
		if ( acronym )
			row += `<span class="acronym">(${searchReplace( acronym, searchText )})</span>`;
		for ( var u of url )
			row += `<a class="url" href="${u}" target="_blank">${searchReplace( u, searchText )}</a>`;

		row += '</div>';

		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Spamming journals
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		document.getElementById( 'search' ).value = '';
		clearContainer();
		html = `
			<br><br>
			<h2>All spamming journals</h2>
			<p>A list of journals and books that have been
			promoted via spam emails. This does not mean the journals
			are not legitimate, but it raises concerns. Fake journals
			use the names and the visuals of the original journals,
			so click on links at your own discretion.</p>
			${html}`;

	}

	container.innerHTML += html;

}



function showAllConferences( searchText ) {

	var html = '',
		count = 0;

	for ( var i=0; i<events.length; i++ ) {

		var row = '';

		searchReplaceDone = false;

		// get data for one journal
		var name = events[ i ].name??'',
			acronym = events[ i ].acronym??'',
			url = events[ i ].url;


		row += `<div class="row row${i%2}">${searchReplace( name, searchText )}`;
		if ( events[ i ].acronym )
			row += `<span class="acronym">(${searchReplace( acronym, searchText )})</span>`;

		for ( var u of url )
			row += `<a class="url" href="${u}" target="_blank">${searchReplace( u, searchText )}</a>`;

		row += '</div>';

		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Spamming conferences
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		document.getElementById( 'search' ).value = '';
		clearContainer();
		html = `
			<br><br>
			<h2>All spamming conferences</h2>
			<p>A list of conferences and other events that have been promoted via
			spam emails. Most of the conferences in the list are predatory. Few of
			them are not, but are deceived to use spam techniques. Click on links
			at your own discretion.</p>
			${html}`;

	}

	container.innerHTML += html;

}


function showAllPublishers( searchText ) {

	var html = '',
		count = 0;

	for ( var i=0; i<publishers.length; i++ ) {

		var row = '';

		searchReplaceDone = false;

		// get data for one journal
		var name = publishers[ i ].name??'',
			acronym = publishers[ i ].acronym??'',
			url = publishers[ i ].url;

		row += `<div class="row row${i%2}">${searchReplace( name, searchText )}`;
		if ( acronym )
			row += `<span class="acronym">(${searchReplace( acronym, searchText )})</span>`;

		for ( var u of url )
			row += `<a class="url" href="${u}" target="_blank">${searchReplace( u, searchText )}</a>`;

		row += '</div>';

		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Spamming publishers
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		document.getElementById( 'search' ).value = '';
		clearContainer();
		html = `
			<br><br>
			<h2>All spamming publishers</h2>
			<p>A list of publishers of spam journals and organizers of spam events.
			Some are recidivists by continuously spamming me from different
			addresses and about different publications or events. Click on links
			at your own discretion.</p>
			${html}`;

	}

	container.innerHTML += html;

}




function showAllServices( searchText ) {

	var html = '',
		count = 0;

	for ( var i=0; i<services.length; i++ ) {

		var row = '';

		searchReplaceDone = false;

		// get data for one journal
		var domain = services[ i ].domain??'',
			ip4 = services[ i ].ip4;

		row += `<div class="row row${i%2}">${searchReplace( domain, searchText )}`;

		for ( var u of ip4 )
			row += `<span class="ip4">${searchReplace( u, searchText )}</span>`;

		row += '</div>';

		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Spamming services
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		document.getElementById( 'search' ).value = '';
		clearContainer();
		html = `
			<br><br>
			<h2>All spamming services</h2>
			<p>A list of email services and email lists that are used to distribute
			academic spam. Some of them use several IP addresses for their operations.
			They are listed at the bottom.</p>
			${html}`;

	}

	container.innerHTML += html;




	count = 0;
	html = '';

	for ( var [ key, value ] of Object.entries( ip4map3 ) ) {

		var row = '';

		searchReplaceDone = false;

		row += `<div class="row row${i%2}">${searchReplace( key, searchText )}.xxx`;
		for ( var u of value )
			row += `<span class="ip4">${searchReplace( u, searchText )}</span>`;
		row += '</div>';


		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Mapping level 3
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		html +=	`
			<br><br>
			<h2>Mapping level 3</h2>
			${html}`;

	}

	container.innerHTML += html;



	count = 0;
	html = '';

	for ( var [ key, value ] of Object.entries( ip4map2 ) ) {

		var row = '';

		searchReplaceDone = false;

		row += `<div class="row row${i%2}">${searchReplace( key, searchText )}.xxx.xxx`;
		for ( var u of value )
			row += `<span class="ip4">${searchReplace( u, searchText )}</span>`;
		row += '</div>';


		if ( !searchText || ( searchText && searchReplaceDone ) ) {

			html += row;
			count++;

		}

	}

	if ( searchText ) {

		if ( count ) html = `
			<br><br>
			<h2>Mapping level 2
			<div class="hint">${count} with "${searchText}"</div>
			</h2>
			${html}`;

	} else {

		html +=	`
			<br><br>
			<h2>Mapping level 2</h2>
			${html}`;

	}

	container.innerHTML += html;


}



// eslint-disable-next-line no-unused-vars
function searchFilter( ) {

	var searchText = document.getElementById( 'search' ).value;

	// escape all RegEx special symbols
	searchText = searchText.replace( /[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&' );

	clearContainer();

	if ( !searchText ) return;

	showAllJournals( searchText );
	showAllConferences( searchText );
	showAllPublishers( searchText );
	showAllServices( searchText );

}
