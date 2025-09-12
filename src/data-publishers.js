// Spam publishers or organizers

// publishers = { {name,acronym,url}, ...} - list of spam publishers

var publishers = [
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: 'John Wiley & Sons', acronym: '', url: 'https://www.wiley.com/' },
	{ name: 'Scientific Publications', acronym: '', url: 'https://spubl.bg/en' },
	{ name: 'Open Access Publications', acronym: '', url: 'https://openaccesspublications.org/' },
	{ name: 'Scientary Ally Meetings', acronym: '', url: 'https://scientarymeetings.com/' },
	{ name: 'Futurity publishing', acronym: '', url: 'https://futurity-publishing.com/' },
	{ name: 'ARC Publications', acronym: '', url: 'https://www.arcjournals.org/' },
	{ name: 'UK Scientific Publishing', acronym: '', url: 'https://ojs.ukscip.com/' },
	{ name: 'Alliance Academy of Sciences', acronym: '', url: '' },
	{ name: 'Database of Multidisciplinary Journals and Research', acronym: 'DMJR', url: 'https://dmjr-journals.com/' },
	{ name: 'Open Access Press', acronym: 'OAP', url: 'https://www.openaccesspress.com/' },
	{ name: 'The USA Journals', acronym: '', url: 'https://theamericanjournals.com/' },
	{ name: 'Academia Journal Experts', acronym: 'AJE', url: 'https://academiajournalexperts.com/' },
	{ name: 'Frontline Journals', acronym: '', url: 'https://www.frontlinejournals.org/journals/' },
	{ name: 'IntechOpen', acronym: '', url: 'www.intechopen.com' },
	{ name: 'Japan Bilingual Publishing Company', acronym: '', url: 'https://ojs.bilpub.com/' },
	{ name: 'IOSR Journals', acronym: '', url: 'https://www.iosrjournals.org/' },
	{ name: 'Centre for Info Bio Technology', acronym: 'CIBTech', url: 'https://www.cibtech.org/' },
	{ name: 'Tech Science Press', acronym: 'TSP', url: 'https://www.techscience.com/' },
	{ name: 'The Association of Professional Researchers and Academicians', acronym: 'APRA', url: 'https://theapra.org/' },
	{ name: 'IBIS Worldwide Academic and Library File', acronym: '', url: 'https://www.ibisacademic.com/' },
	{ name: 'Deep Science Publishing', acronym: '', url: 'http://www.deepscienceresearch.com' },
	{ name: 'International Center for Promoting knowledge', acronym: 'ICPK', url: '' },
	{ name: 'World Keynote Speakers Database', acronym: '', url: 'http://keynotespeakersworld.com/' },
	{ name: 'EnPress Publisher', acronym: '', url: '' },
	{ name: 'Savant Translations', acronym: '', url: 'https://savanttranslations.com/' },
	{ name: 'Savant Proofreading', acronym: '', url: 'https://savanttranslations.com/' },
	{ name: 'Cambridge Proofreading', acronym: '', url: 'https://www.cambridgeediting.com/' },
	{ name: 'BP International', acronym: '', url: 'https://www.bpipromotion.org/' },
	{ name: 'International Society for Technology, Education, and Science', acronym: 'ISTES', url: 'https://istes.org/' },
	{ name: 'STM Journals', acronym: '', url: 'https://stmjournals.com/' },
	{ name: 'stmjournals.com', acronym: '', url: '' },
	{ name: 'Nano Science and Technology Consortium', acronym: 'NSTC', url: 'https://nstc.in/' },
	{ name: 'Istanbul University Press', acronym: 'IU Press', url: 'https://iupress.istanbul.edu.tr/' },
	{ name: 'Bilingual Publishing Group', acronym: '', url: [ 'https://bilpubgroup.com/', 'bilpubgroup.top' ] },
	{ name: 'SkillZip', acronym: '', url: 'https://skillzip.com/' },
	{ name: 'AccScience Publishing', acronym: 'ASP', url: 'https://accscience.com' },
	{ name: 'American Institute of Mathematical Sciences Press', acronym: 'AIMS Press', url: 'https://www.aimspress.com/' },
	{ name: 'Arts and Science Press Pte. Ltd', url: 'https://esp.as-pub.com' },
	{ name: 'Blue Eyes Intelligence Engineering and Sciences Publication', acronym: 'BEIESP', url: 'https://www.blueeyesintelligence.org/' },
	{ name: 'Blue Pen Journals Publishing House' },
	{ name: 'Brooklyn Research and Publishing Institute', acronym: 'BRPI', url: 'https://thebrpi.org/' },
	{ name: 'Center for Promoting Ideas', acronym: 'CPI', url: 'http://www.cpinet.info/' },
	{ name: 'Common Ground Research Networks', url: 'https://cgnetworks.org/' },
	{ name: 'Continuum Forums', url: 'https://www.continuumforums.com/' },
	{ name: 'Elixir International Journal', url: 'https://www.elixirpublishers.com/' },
	{ name: 'Eurasia Conferences', url: 'https://eurasiaconferences.com/' },
	{ name: 'European Knowledge Development Ltd.', url: 'https://www.eurokd.com/' },
	{ name: 'Global Illuminators', url: 'https://globalilluminators.org/' },
	{ name: 'Global Scientific and Academic Research', acronym: 'GSAR Publishers', url: 'https://gsarpublishers.com/' },
	{ name: 'Iksad Institute', url: 'https://www.iksadinstitute.org/' },
	{ name: 'InovSciTech', url: 'https://inovscitechconferences.com/' },
	{ name: 'International Society for Academic Research in Science, Technology, and Education', acronym: 'ARSTE', url: 'https://www.arste.org/' },
	{ name: 'International Society for Research in Education and Science', acronym: 'ISRES' },
	{ name: 'Iris Publishers', url: 'https://irispublishers.com' },
	{ name: 'Juniper Publishers', url: [ 'https://juniperpublishers.com/', 'https://juniperpublishers.net/' ] },
	{ name: 'Health Sciences Publishing Institute', acronym: 'HSPI' },
	{ name: 'Hill Publishing Group', url: 'https://hillpublisher.com/' },
	{ name: 'Kalite Editing Services', url: 'https://www.kaliteediting.com/' },
	{ name: 'Knowledge Empowerment Foundation', url: 'https://www.kemfo.org/' },
	{ name: 'Koryfi Group Of Media And Publications', url: 'https://koryfigroup.org/' },
	{ name: 'Lattice Science Publication', acronym: 'LSP', url: 'https://www.latticescipub.com/journals/' },
	{ name: 'Medicon Publications', url: 'https://themedicon.com/' },
	{ name: 'Nova Science Publishers', url: 'https://novapublishers.com/' },
	{ name: 'OA Academic Press', url: 'https://oaacademicpress.com/' },
	{ name: 'Prime Meetings', url: 'https://www.primemeetings.org/' },
	{ name: 'Primera Scientific', url: 'https://primerascientific.com/' },
	{ name: 'Qeios', url: 'https://www.qeios.com/' },
	{ name: 'Scientific Group', url: 'https://scientificgroup.org/' },
	{ name: 'Scientis Publishing', url: 'https://saintispub.com/' },
	{ name: 'Science and Technology Events', url: [ 'http://www.scitevents.com/', 'http://www.scitevents.org/' ] },
	{ name: 'Science Web Publishing', url: 'http://sciencewebpublishing.net/' },
	{ name: 'Selcuk University Journal of Engineering Sciences', acronym: 'SUJES' },
	{ name: 'The Scientistt', url: 'https://www.thescientistt.com' },
	{ name: 'Trieste Next International Academy' },
	{ name: 'United Research Forum', url: 'https://unitedresearchforum.com' },
	{ name: 'Universal Wiser Publisher', acronym: 'UWP', url: 'https://wiserpub.com' },
	{ name: 'World Academy of Research in Science and Engineering', acronym: 'WARSE', url: 'https://warse.org/' },
	{ name: 'World Laureates Association', acronym: 'WLA' },

];






function sortPublishers( a, b ) {

	if ( a.name<b.name ) return -1;
	if ( a.name>b.name ) return 1;

	if ( a.acronym<b.acronym ) return -1;
	if ( a.acronym>b.acronym ) return 1;

	return 0;

}

publishers = publishers.filter( a=> a.name || a.acronym || a.url );
publishers = publishers.sort( sortPublishers );


for ( var i=0; i<publishers.length-1; i++ )
	if ( publishers[ i ].name == publishers[ i+1 ].name )
		console.log( 'Duplicate publisher', publishers[ i ].name );



for ( var i=0; i<publishers.length; i++ ) {

	if ( !publishers[ i ].name )
		publishers[ i ].name = '';

	if ( !publishers[ i ].acronym )
		publishers[ i ].acronym = '';

	if ( !publishers[ i ].url )
		publishers[ i ].url = [];
	else {

		if ( typeof publishers[ i ].url === 'string' )
			publishers[ i ].url = [ publishers[ i ].url ];

	}

}
