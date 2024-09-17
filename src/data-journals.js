// Spam journals

// journals = { {name,acronym,url}, ...} - list of spam journals

var journals = [
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: 'International Journal of Advanced Engineering and Nano Technology', acronym: 'IJAENT', url: 'https://www.ijaent.org/' },
	{ name: 'International Journal of Recent Technology and Engineering', acronym: 'IJRTE', url: 'https://www.ijrte.org/' },
	{ name: 'Journal of Asian American Studies', acronym: 'JAAS', url: 'https://jaas-journal.org/' },
	{ name: 'Collective Journal of Physics', acronym: '', url: 'https://rscope.org/' },
	{ name: 'International Journal of Inventive Engineering and Sciences', acronym: 'IJIES', url: 'https://www.ijies.org/' },
	{ name: 'International Journal of Energy and Power Engineering', acronym: 'INTJEPE', url: 'http://intjepe.org/' },
	{ name: 'EON International Journal of Arts, Humanities and Social Sciences', acronym: 'EIJAHSS', url: 'https://eonjournal.org/' },
	{ name: 'Open Access Journal of Education & Language Studies', acronym: 'OAJELS', url: 'https://juniperpublishers.com/oajels/' },
	{ name: 'Annals of Civil and Environmental Engineering', acronym: 'ACEE' },
	{ name: 'Global Journal of Ecology' },
	{ name: 'Advanced Research on Information Systems Security', acronym: 'ARIS2', url: 'https://aris-journal.com/aris/index.php/journal' },
	{ name: 'Advances in Computer and Communication', acronym: 'ACC' },
	{ name: 'African Journal of Mathematics and Computer Science Research', acronym: 'AJMCSR', url: 'https://academicjournals.org/journal/AJMCSR' },
	{ name: 'African Educational Research Journal', acronym: 'AERJ' },
	{ name: 'American International Journal of Social Science', acronym: 'AIJSS' },
	{ name: 'American Journal of Biometrics & Biostatistics' },
	{ name: 'American Journal of Computer Science' },
	{ name: 'American Journal of Computer Science and Technology', acronym: 'AMJCST/AJCST', url: 'http://www.amjcst.net/' },
	{ name: 'American Journal of Electrical and Computer Engineering', acronym: 'AJOEACE/AJECE', url: 'http://www.ajoeace.com/' },
	{ name: 'American Journal of Information Science and Technology', acronym: 'AJOIST/AJIST', url: [ 'http://www.ajoist.net/', 'http://www.ajinfoscitech.org' ] },
	{ name: 'American Journal of Remote Sensing / SciencePG', url: 'http://ajors.org/' },
	{ name: 'American Research Journal of Humanities & Social Science', acronym: 'ARJHSS', url: 'https://www.arjhss.com/' },
	{ name: 'Annals of Biostatistics & Biometric Applications', acronym: 'ABBA', url: 'https://irispublishers.com/abba/' },
	{ name: 'Annals of Environmental Science and Toxicology', acronym: 'AEST' },
	{ name: 'Annals of Mathematics and Physics', acronym: 'AMP' },
	{ name: 'Annals of Psychiatry and Treatment' },
	{ name: 'Annals of Robotics and Automation' },
	{ name: 'Annals of Systems Biology' },
	{ name: 'Archives of Psychiatry and Mental Health' },
	{ name: 'Arts & Communication', acronym: 'A&C', url: 'https://accscience.com/' },
	{ name: 'Asian Journal of Education and Social Studies', acronym: 'AJESS', url: 'https://reviews.oaacademicpress.com/ajess/journal' },
	{ name: 'Asian Research Journal of Arts & Social Sciences', acronym: 'ARJASS', url: 'https://journalarjass.com/index.php/ARJASS' },
	{ name: 'Buletin Ilmiah Sarjana Teknik Elektro', acronym: 'BISTE', url: 'http://journal2.uad.ac.id/index.php/biste' },
	{ name: 'Cattle Practice', url: 'https://cattlepractice.org/' },
	{ name: 'Communications', acronym: 'COM', url: [ 'http://www.jcommun.org', 'http://www.communj.com', 'http://www.communj.net', 'http://www.communicationj.org', 'http://www.communicationsj.org', 'http://www.commj.org' ] },
	{ name: 'Communications in Analysis and Mechanics', acronym: 'CAM', url: 'https://www.aimspress.com/journal/cam' },
	{ name: 'Computational Biology and Bioinformatics', url: 'http://www.compubio.org/' },
	{ name: 'Contemporary Mathematics', url: 'https://ojs.wiserpub.com/index.php/CM/' },
	{ name: 'Current Physics' },
	{ name: 'Eastern-European Journal of Enterprise Technologies', acronym: 'JET', url: 'http://jet.com.ua/en/' },
	{ name: 'Education Applications & Developments VIII', url: 'https://insciencepress.org/' },
	{ name: 'Energies', url: 'https://sci-index.com/energies-book-series/' },
	{ name: 'Environment and Social Psychology', url: 'https://esp.as-pub.com/index.php/ESP' },
	{ name: 'European Journal of Education and Pedagogy', acronym: 'EJ-EDU', url: 'https://www.ej-edu.org' },
	{ name: 'Forum for Education Studies', acronym: 'FES' },
	{ name: 'Frontiers in Psychology', url: 'https://www.frontiersin.org/' },
	{ name: 'Global Journal of Obesity, Diabetes and Metabolic Syndrome', acronym: 'GJODMS' },
	{ name: 'Global Scientific and Academic Research Journal of Education and literature', url: 'https://gsarpublishers.com/gsarjel-home-page/' },
	{ name: 'IgMin Research' },
	{ name: 'Indian Journal of Production and Thermal Engineering', acronym: 'IJPTE' },
	{ name: 'Indian Journal of Transport Engineering', acronym: 'IJTE' },
	{ name: 'Indian Journal of Structure Engineering', acronym: 'IJSE' },
	{ name: 'Indian Journal of Design Engineering', acronym: 'IJDE' },
	{ name: 'Indian Journal of Fibre and Textile Engineering', acronym: 'IJFTE' },
	{ name: 'Indian Journal of Environment Engineering', acronym: 'IJEE' },
	{ name: 'Insights on the Depression and Anxiety', acronym: 'IDA' },
	{ name: 'International Clinical and Medical Case Reports Journal' },
	{ name: 'International Education and Research Journal', acronym: 'IERJ', url: 'www.ierj.in' },
	{ name: 'International Educational Applied Scientific Research Journal', acronym: 'IEASRJ', url: 'www.ieasrj.com' },
	{ name: 'International Educational Journal of Science and Engineering', acronym: 'IEJSE', url: 'www.iejse.com' },
	{ name: 'International Journal of Advance Agricultural Research', acronym: 'IJAAR' },
	{ name: 'International Journal of Advanced Networking and Applications', acronym: 'IJANA', url: 'https://www.ijana.in/' },
	{ name: 'International Journal of Advanced Research in Physical Science', acronym: 'IJARPS' },
	{ name: 'International Journal of Advances in Computer Science and Technology', acronym: 'IJACST', url: 'http://warse.org/IJACST/' },
	{ name: 'International Journal of Applied Microbiology and Biotechnology Research', acronym: 'IJAMBR' },
	{ name: 'International Journal of Applied Science and Technology', acronym: 'IJAST', url: 'http://www.cpinet.info/' },
	{ name: 'International Journal of Arts, Humanities and Social Sciences', acronym: 'IJAHSS', url: 'https://www.ijahss.net/' },
	{ name: 'International Journal of Bio-Medical Informatics and e-Health', acronym: 'IJBMeH', url: 'http://warse.org/IJBMIeH/' },
	{ name: 'International Journal of Business and Finance Management Research', acronym: 'IJBFMR' },
	{ name: 'International Journal of Business, Humanities and Technology', acronym: 'IJBHT', url: 'https://www.ijbhtnet.com/' },
	{ name: 'International Journal of Computational Engineering Research', acronym: 'IJCER', url: 'https://www.ijceronline.com/' },
	{ name: 'International Journal of Education in Mathematics, Science and Technology', acronym: 'IJEMST' },
	{ name: 'International Journal of Emerging Trends in Engineering Research', acronym: 'IJETER', url: 'http://warse.org/IJETER/' },
	{ name: 'International Journal of Engineering and Science', acronym: 'IJES', url: [ 'https://www.theijes.com', 'https://www.researchinventy.com/' ] },
	{ name: 'International Journal of Engineering and Science Invention', acronym: 'IJESI', url: 'www.ijesi.org' },
	{ name: 'International Journal of Engineering, Management and Humanities', acronym: 'IJEMH', url: 'http://www.ijemh.com' },
	{ name: 'International Journal of Engineering Research and Applications', acronym: 'IJERA', url: 'http://www.ijera.com' },
	{ name: 'International Journal on Engineering, Science and Technology', acronym: 'IJonEST' },
	{ name: 'International Journal of Food Research', acronym: 'IJFR' },
	{ name: 'International Journal of Humanities and Social Science', acronym: 'IJHSS', url: 'https://www.ijhssnet.com/' },
	{ name: 'International Journal of Innovative Technology and Exploring Engineering', acronym: 'IJITEE', url: 'https://www.ijitee.org/' },
	{ name: 'International Journal of Management & Information Technology', acronym: 'IJMIT', url: 'https://rajpub.com/index.php/ijmit' },
	{ name: 'International Journal of Mathematics and Computer Research', acronym: 'IJMCR', url: 'https://ijmcr.in/index.php/ijmcr' },
	{ name: 'International Journal of Modern and Alternative Medicine Research', acronym: 'IJMAMR' },
	{ name: 'International Journal of Modern Biological Research', acronym: 'IJMBR' },
	{ name: 'International Journal of Modern Engineering Research', acronym: 'IJMER', url: 'https://www.ijmer.com' },
	{ name: 'International Journal of Networks and Systems', acronym: 'IJNS', url: 'http://warse.org/IJNS/' },
	{ name: 'International Journal of Physics Research and Applications' },
	{ name: 'International Journal of Precious Engineering Research and Applications', acronym: 'IJPERA', url: 'https://www.ijpera.com' },
	{ name: 'International Journal of Research and Reviews in Education', acronym: 'IJRRE' },
	{ name: 'International Journal of Research in Education and Science', acronym: 'IJRES' },
	{ name: 'International Journal of Research in Engineering and Science', acronym: 'IJRES', url: 'https://www.ijres.org/' },
	{ name: 'International Journal of Research in Environmental Studies', acronym: 'IJRES' },
	{ name: 'International Journal of Research Studies in Computer Science and Engineering', acronym: 'IJRSCSE' },
	{ name: 'International Journal on Studies in Education', acronym: 'IJonSE' },
	{ name: 'International Journal on Social and Education Sciences', acronym: 'IJonSES' },
	{ name: 'International Journal of Social Policy & Education', acronym: 'IJSPE', url: 'https://ijspe.com' },
	{ name: 'International Journal of Technology in Education', acronym: 'IJTE' },
	{ name: 'International Journal of Technology in Education and Science', acronym: 'IJTES' },
	{ name: 'International Journal of Trends in Mathematics Education Research', acronym: 'IJTMER', url: 'https://ijtmer.saintispub.com/ijtmer/index' },
	{ name: 'International Journal of Wireless Communications and Network Technologies', acronym: 'IJWCNT', url: 'http://warse.org/IJWCNT/' },
	{ name: 'International Scientific and Practical Internet Journal', url: 'https://wayscience.com' },
	{ name: 'IOSR Journal of Engineering', acronym: 'IOSR JEN', url: 'https://www.iosrjen.org/' },
	{ name: 'Iris Journal of Educational Research', acronym: 'IJER' },
	{ name: 'Journal of Advances in Health and Medical Sciences', acronym: 'JAHMS' },
	{ name: 'Journal of Biomedical Research & Environmental Sciences', acronym: 'JBRES/SCIRESJ' },
	{ name: 'Journal of Business & Economic Management', acronym: 'JBEM' },
	{ name: 'Journal of Civil Engineering Research Journal', acronym: 'CERJ' },
	{ name: 'Journal of Computer', url: [ 'http://www.jcomputer.org/', 'http://joenergys.org/', 'http://jocomputer.org/' ] },
	{ name: 'Journal of Computer Science and Information Technology', acronym: 'JCSIT', url: 'http://jcsitnet.com/' },
	{ name: 'Journal of Edge Computing', acronym: 'JEC', url: 'https://acnsci.org/journal/index.php/jec/index' },
	{ name: 'Journal of Education and Human Development', acronym: 'JEHD' },
	{ name: 'Journal of Education and Learning', acronym: 'EduLearn', url: 'https://edulearn.intelektual.org' },
	{ name: 'Journal of Education and Social Policy', acronym: 'JESP', url: 'http://www.jespnet.com/' },
	{ name: 'Journal of Educational Research and Reviews', acronym: 'JERR' },
	{ name: 'Journal of Electronic & Information Systems', acronym: 'JEIS' },
	{ name: 'Journal of Engineering and Manufacturing Technology', acronym: 'JEMT' },
	{ name: 'Journal of Fluid Mechanics / SciencePG', url: 'http://www.jfluidmech.org/' },
	{ name: 'Journal of Global Humanities and Social Sciences', acronym: 'GHSS', url: 'http://ojs.bonfuturepress.com/index.php/GHSS/index' },
	{ name: 'Journal of Infrastructure, Policy and Development', acronym: 'JIPD', url: 'https://systems.enpress-publisher.com/index.php/jipd' },
	{ name: 'Journal of Medicinal Plant and Herbal Therapy Research', acronym: 'JMPHTR' },
	{ name: 'Journal of Operating System Development & Trends' },
	{ name: 'Journal of Radiology and Oncology' },
	{ name: 'Journal of Science and Technology Innovation Research', acronym: 'JCTIR' },
	{ name: 'Journal of Social Computing', acronym: 'JSC' },
	{ name: 'Journal of Social Education Research', acronym: 'SER', url: 'https://ojs.wiserpub.com/index.php/SER/' },
	{ name: 'Journal of Statistics and Mathematical Sciences' },
	{ name: 'Juniper Online Journal Material Science', acronym: 'JOJMS', url: 'https://juniperpublishers.com/' },
	{ name: 'Mathematics and Systems Science', acronym: 'MMS' },
	{ name: 'Medicon Engineering Themes', acronym: 'MCET', url: 'https://themedicon.com/engineeringthemes' },
	{ name: 'Merit Research Journal of Education and Review', acronym: 'MRJER', url: 'http://meritresearchjournals.org/' },
	{ name: 'Preslia', url: 'http://presliajournal.com' },
	{ name: 'Recent Advances in Evolution of Education and Outreach' },
	{ name: 'Research Inventy Journal', url: 'https://www.researchinventy.com/' },
	{ name: 'Research Journal of Educational Studies and Review', acronym: 'RJESR', url: 'https://www.pearlresearchjournals.org/' },
	{ name: 'SCANDIA' },
	{ name: 'SCIREA Journal of Computer', url: [ 'http://www.jcomputer.org/', 'http://jfoods.org/' ] },
	{ name: 'Software', url: 'https://www.mdpi.com/journal/software' },
	{ name: 'Surgical Research and Practice', url: 'https://primerascientific.com/' },
	{ name: 'S.Y.L.W.A.N.' },
	{ name: 'Systems Technology' },
	{ name: 'The Educational Review' },
	{ name: 'SCIREA', url: 'https://www.scirea.org' },

];






function sortJournals( a, b ) {

	if ( a.name<b.name ) return -1;
	if ( a.name>b.name ) return 1;

	if ( a.acronym<b.acronym ) return -1;
	if ( a.acronym>b.acronym ) return 1;

	return 0;

}

journals = journals.filter( a=> a.name || a.acronym || a.url );
journals = journals.sort( sortJournals );

for ( var i=0; i<journals.length-1; i++ )
	if ( journals[ i ].name == journals[ i+1 ].name )
		console.log( 'Duplicate journal', journals[ i ].name );

for ( var i=0; i<journals.length; i++ ) {

	if ( !journals[ i ].name )
		journals[ i ].name = '';

	if ( !journals[ i ].acronym )
		journals[ i ].acronym = '';

	if ( !journals[ i ].url )
		journals[ i ].url = [];
	else {

		if ( typeof journals[ i ].url === 'string' )
			journals[ i ].url = [ journals[ i ].url ];

	}

}