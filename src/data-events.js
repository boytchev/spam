// Spam events - conferences, symposia, etc.

// events = { {name,acronym,url}, ...} - list of spam events

var events = [
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: '', acronym: '', url: '' },
	{ name: 'Deep Learning Architectures Workshop', acronym: '', url: '' },
	{ name: 'Archives of Philosophy', acronym: '', url: 'https://iupress.istanbul.edu.tr/en/journal/felsefearkivi/home' },
	{ name: 'Forum for Linguistic Studies', acronym: 'FLS', url: '' },
	{ name: 'International Conference on Advanced Network Technologies and Computational Intelligence', acronym: 'ICANTCI', url: 'https://ca.chitkara.edu.in/icantci2025' },
	{ name: 'Symposium on Languages, Applications and Technologies', acronym: 'SLATE', url: 'https://slate-conf.org/2024/home' },
	{ name: 'Congreso Internacional de formación permanente', acronym: '', url: '' },
	{ name: 'Workshop on serverless at the edge', acronym: 'SEATED', url: 'https://edgeless-project.eu/seated/' },
	{ name: 'International Conference on Applied Mathematics & Computer Science', acronym: 'ICAMCS', url: 'http://icamcs.co/' },
	{ name: 'Cоnfеrеnᴄе on Electrical Engineering, Mechanical Engineering and Automation', acronym: 'ICEEMEA', url: 'http://www.iceeie.com/' },
	{ name: 'Ϲοnfеrеncе on Applied Mathematics and Information Technology', acronym: '', url: '' },
	{ name: 'International Symposium on Research in Mathematics and Mechanics', acronym: 'TURAN', url: 'https://turansymposium.yildiz.edu.tr/' },
	{ name: 'Academy of Innovation, Entrepreneurship, and Knowledge Conference', acronym: 'ACIEK', url: 'https://www.aciek-academy.com/hybrid-conference/' },
	{ name: 'Asia International Multidisciplinary Conference', acronym: 'AIMC' },
	{ name: 'Blacksea Coastline Countries Scientific Research Conference', url: 'https://www.blackseacountries.org/conference' },
	{ name: 'Cloud2things', url: 'https://cloud2things.netsons.org/2023/index.html' },
	{ name: 'Computing Conference', url: 'https://saiconference.com/Computing' },
	{ name: 'Conference on Computer Science and Application Engineering', acronym: 'CSAE', url: 'http://www.csaeconf.org' },
	{ name: 'Congress for differential equations, mathematical analysis and its application', acronym: 'CODEMA', url: 'https://kongres.org.mk/' },
	{ name: 'Edge Computing Workshop', url: 'https://doors.easyscience.education/2024/', acronym: 'DOORS' },
	{ name: 'El Congreso Internacional en Innovación docente, Educación y transferencia de Conocimiento', acronym: 'CIINECO', url: 'https://egregius.com.es/' },
	{ name: 'Endless Light in Science', acronym: 'ELS', url: 'https://www.irc-els.com' },
	{ name: 'Engineering and Emerging Technologies Summit', url: 'https://conferencesglobal.org/engineering/' },
	{ name: 'Eurasia Conferences', url: 'https://eurasiaconferences.com' },
	{ name: 'European Congress on Advanced Nanotechnology and Nanomaterials' },
	{ name: 'European Congress on Interdisciplinary Scientific Research', url: 'https://www.eucongress.org' },
	{ name: 'Future of Information and Communication Conference', acronym: 'FICC', url: 'https://saiconference.com/FICC' },
	{ name: 'Future Technologies Conference', acronym: 'FTC', url: 'https://saiconference.com/FTC' },
	{ name: 'Geosciences and Green Technology', acronym: 'Geo' },
	{ name: 'Global Conference & Expo on Materials Science and Engineering', acronym: 'ISTMSE', url: 'https://inovscitechconferences.com/24/malaysia/matscieng/' },
	{ name: 'Global Congress on Data Science, Data Analytics, big data', url: 'https://researchsummit.org/' },
	{ name: 'Global Meet on Sensors and Sensing Technology', acronym: 'GMSST2024', url: 'https://www.primemeetings.org/2024/sensors-sensing-technology' },
	{ name: 'Global Summit and Expo on Robot Intelligence Technology and Applications', acronym: 'GSERITA2023', url: 'https://www.thescientistt.com' },
	{ name: 'Global Summit on Polymer Science and Composite Materials', acronym: 'PolyScience', url: 'https://www.thescientistt.com' },
	{ name: 'Global Summit on Artificial Intelligence', acronym: 'GSAI' },
	{ name: 'IEEE Conference on Industrial Electronics And Applications', acronym: 'ICIEA', url: 'http://www.ieeeiciea.org/' },
	{ name: 'IDEA Forum and Webinar of World NTD Day' },
	{ name: 'Industry 4.0', url: 'http://industry-4.eu/' },
	{ name: 'Innovations in Intelligent Systems and Applications Conference', acronym: 'ASYU', url: 'http://asyu.inista.org/' },
	{ name: 'International Computer Programming Education Conference', acronym: 'ICPEC', url: 'https://icpeconf.org/' },
	{ name: 'International Conference on Academic Studies in Science and Education', acronym: 'ICASSE' },
	{ name: 'International Conference on Academic Studies in Science, Engineering and Technology', acronym: 'ICASET' },
	{ name: 'International Conference on Academic Studies in Technology and Education', acronym: 'ICASTE', url: 'https://www.icaste.net' },
	{ name: 'International Conference on Advanced Civil Engineering and Smart Structures', acronym: 'ACESS', url: 'https://www.icacess.org/' },
	{ name: 'International Conference on Advances in Computing Research', acronym: 'ACR', url: 'https://IICSER.org/ACR23' },
	{ name: 'International Conference on Advances in Social Networks Analysis and Mining', acronym: 'ASONAM', url: 'https://asonam.cpsc.ucalgary.ca' },
	{ name: 'International Conference on Advanced Materials and Engineering Structural Technology', acronym: 'ICAMEST', url: 'https://icamest.org' },
	{ name: 'International Conference on Advanced Materials, Devices and Structures', acronym: 'ICAMDS', url: 'http://erg.org.in/icamds.html' },
	{ name: 'International Conference on Advanced Materials, Mechanics and Structural Engineering', acronym: 'AMMSE', url: 'https://ammse-conf.org' },
	{ name: 'International Conference on Advancing Sustainable Futures', acronym: 'ICASF', url: 'https://www.adu.ac.ae/adu-icasf' },
	{ name: 'International Conference on Applied Science & Engineering' },
	{ name: 'International Conference on Applied Science, Engineering, and Technology', acronym: 'ISTRASET', url: 'https://inovscitechconferences.com' },
	{ name: 'International Conference on Basic Sciences and Technology', acronym: 'ICBAST', url: 'https://www.icbast.net' },
	{ name: 'International Conference on Basic Sciences, Engineering and Technology', acronym: 'ICBASET', url: 'https://www.icbaset.net' },
	{ name: 'International Conference on Biofuels and Bioenergy', acronym: 'Biofuels' },
	{ name: 'International Conference on Computer-Human Interaction Research and Applications', acronym: 'CHIRA', url: 'https://chira.scitevents.org/' },
	{ name: 'International Conference on Computer Modeling, Simulation and Algorithm', acronym: 'ICCMSA', url: 'http://www.iccmsa2023.org/' },
	{ name: 'International Conference on Data Analytics and Management in Data Intensive Domains', acronym: 'DAMDID', url: 'https://damdid2023.hse.ru/' },
	{ name: 'International Conference on Digitalization and Management Innovation', acronym: 'DMI' },
	{ name: 'International Conference on Educational Technology and Online Learning', acronym: 'ICETOL', url: 'http://www.icetol.com' },
	{ name: 'International Conference on Emerging Technologies in Engineering and Science', acronym: 'ICETES', url: 'https://www.icetes.org/' },
	{ name: 'International Conference on Engineering Education and Information Technology', acronym: 'EEIT', url: 'http://www.eeit.net/index.html' },
	{ name: 'International Conference on Engineering, Science and Technology', acronym: 'IConEST' },
	{ name: 'International Conference on Engineering Technologies', acronym: 'ICENTE', url: 'http://icente.selcuk.edu.tr' },
	{ name: 'International Conference on Engineering, Technology and Innovation', acronym: 'ICE/IEEE ITMC', url: 'https://mdtweek.digit-madeira.pt/ice/' },
	{ name: 'International Conference on Evaluation of Novel Approaches to Software Engineering', acronym: 'ENASE', url: 'https://enase.scitevents.org/' },
	{ name: 'International Conference on Fog and Edge Computing', acronym: 'ICFEC' },
	{ name: 'International Conference on Gastronomy, Food and Nutrition', acronym: 'ICGaFoN', url: 'https://www.icgafon.net' },
	{ name: 'International Conference on Geosciences and Green Technology', acronym: 'ICGSGT', url: 'https://urfmeetings.com/environmentalscience-conference' },
	{ name: 'International Conference on Health and Social Care Information Systems and Technologies', acronym: 'HCist', url: 'https://hcist.scika.org' },
	{ name: 'International Conference on Humanities, Social and Education Sciences', acronym: 'iHSES' },
	{ name: 'International Conference on Image Processing, Energy, Communication, Applied Sciences, Engineering & Technology', acronym: 'IECAET' },
	{ name: 'International Conference on Infectious Diseases' },
	{ name: 'International Conference on Information, Communication and Computing Technology', acronym: 'ICICCT', url: 'https://www.jimsindia.org/icicct2023/' },
	{ name: 'International Conference on Innovations in Computing Research', acronym: 'ICR', url: 'https://iicser.org/icr23' },
	{ name: 'International Conference on Innovations in Intelligent SysTems and Applications', acronym: 'INISTA', url: 'https://dcti.ucv.ro/inista2024/' },
	{ name: 'International Conference on Innovative Data Communication Technologies and Applications', acronym: 'ICIDCA', url: 'http://icidca.com' },
	{ name: 'International Conference On Innovative Trends In Multidisciplinary Academic Research', acronym: 'ITMAR' },
	{ name: 'International Conference on Intelligent Communication Technologies and Virtual Mobile', acronym: 'ICICV' },
	{ name: 'International Conference on Intelligent Computing and Robotics', acronym: 'ICICR2024', url: 'http://www.icrconf.com/' },
	{ name: 'International Conference on Intelligent Systems and New Applications', acronym: 'ICISNA', url: 'https://icisna.org' },
	{ name: 'International Conference on Life Sciences, Engineering and Technology', acronym: 'iLSET' },
	{ name: 'International Conference on Management Studies', acronym: 'ICMS', url: 'https://www.eurokd.com/' },
	{ name: 'International Conference on Mathematics and Computers in Sciences and Industry', acronym: 'MCSI', url: 'http://www.mcsi-conf.org/' },
	{ name: 'International Conference on Medical and Health Sciences', acronym: 'ICMeHeS', url: 'https://www.icmehes.net' },
	{ name: 'International Conference on Medical, Health and Life Sciences', acronym: 'ICMeHeLS', url: 'https://www.icmehels.net' },
	{ name: 'International Conference on Medical Imaging and Computer-Aided Diagnosis （MICAD', url: 'https://www.micad.org/' },
	{ name: 'International Conference on Management Economics and Business', acronym: 'IConMEB', url: 'https://www.iconmeb.net' },
	{ name: 'International Conference on Modern Management based on Big Data', acronym: 'MMBD2023', url: 'http://mmbdconf.org' },
	{ name: 'International Conference on Neuroscience', acronym: 'IConNeS', url: 'https://www.iconne.net' },
	{ name: 'International Conference on Organization and Management', acronym: 'ICOM', url: 'https://icom2023.com/' },
	{ name: 'International Conference on Psychomotic Medicine, Obstetrics and Gynecology', acronym: 'ICPOG', url: 'https://www.icpog.net' },
	{ name: 'International Conference on Rare Diseases and Orphan Drugs' },
	{ name: 'International Conference on Research in Education and Social Sciences', acronym: 'ICGeHeS/ICRESS', url: [ 'https://www.icgehes.net', 'https://www.icress.net' ] },
	{ name: 'International Conference on Research in Engineering, Technology and Science', acronym: 'IConPeD/ICRETS', url: [ 'https://www.iconped.net', 'https://www.icrets.net' ] },
	{ name: 'International Conference on Robotics & Artificial Intelligence Engineering', acronym: 'ICRAIE', url: 'https://www.artificialintelligence.theiconicmeetings.com/' },
	{ name: 'International Conference on Science and Education', acronym: 'IConSE', url: 'https://www.iconse.net' },
	{ name: 'International Conference on Simulation and Modeling Methodologies, Technologies and Applications', acronym: 'SIMULTECH', url: 'https://simultech.scitevents.org' },
	{ name: 'International Conference on Social and Education Sciences', acronym: 'IConSES' },
	{ name: 'International Conference on Social Science Studies', acronym: 'IConSoS', url: 'https://www.iconsos.net' },
	{ name: 'International Conference on Social Sciences, Economics, Management and Education', acronym: 'SSEME2023', url: 'http://www.sseme.org/' },
	{ name: 'International Conference on Software Technologies', acronym: 'ICSOFT', url: 'https://icsoft.scitevents.org' },
	{ name: 'International Conference on Special Education and Diversity', acronym: 'IConSED', url: 'https://www.iconsed.net' },
	{ name: 'International Conference on Sustainable Finance and Green Fintech' },
	{ name: 'International Conference on Systems and Informatics', acronym: 'ICSAI', url: 'http://icsai.sei.ynu.edu.cn' },
	{ name: 'International Conference on Technology', acronym: 'IConTech', url: 'https://www.icontechno.net' },
	{ name: 'International Conference on Technology, Engineering and Science', acronym: 'IConTES', url: 'https://www.icontes.net' },
	{ name: 'International Conference on the Quality of Information and Communications Technology', acronym: 'QUATIC', url: 'https://2023.quatic.org/' },
	{ name: 'International Conference on Veterinary, Agriculture and Life Sciences', acronym: 'ICVALS', url: 'https://www.icvals.net' },
	{ name: 'International Conference Europe Middle East & North Africa', acronym: 'EMENA', url: 'https://emena.org' },
	{ name: 'International Congress on Biochemistry, Structural and Molecular Biology' },
	{ name: 'International Congress on Image and Signal Processing, BioMedical Engineering and Informatics', acronym: 'CISP-BMEI', url: 'http://www.cisp-bmei.cn/' },
	{ name: 'International E-Conference on Agriculture and Aquaculture', acronym: 'Agri and Aqua Summit', url: 'https://unitedresearchforum.com/agriculture-conference/' },
	{ name: 'International Forum on Applied Science and Engineering', acronym: 'ASEFORUM2024', url: 'https://www.continuumforums.com/2024/aseforum' },
	{ name: 'International Science, Technology and Art Congress', acronym: 'ISTAC', url: 'https://elsanatlaridernegi.org.tr/uluslararasi-bilim-teknoloji-ve-sanat-kongresi/' },
	{ name: 'International Scientific and Practical Internet Conference, *http://wayscience.com' },
	{ name: 'International Scientific Forum on Sustainable Development and Innovation', acronym: 'WFSDI 2023', url: 'https://ide-rus.ru/wfsdi2023' },
	{ name: 'International scientific practical conference "Information technologies and automation"', url: 'https://ontu.edu.ua/itia' },
	{ name: 'International Symposium INFOTEH-JAHORINA', url: 'https://infoteh.etf.ues.rs.ba' },
	{ name: 'International Symposium on Automation, Information and Computing', acronym: 'ISAIC', url: 'https://www.isaic-conf.com' },
	{ name: 'International Symposium on Advanced Material Research', acronym: 'ISAMR', url: 'https://www.isamr.org/' },
	{ name: 'International Symposium on Cluster, Cloud and Internet Computing', acronym: 'CCGrid', url: 'https://ccgrid2023.iisc.ac.in' },
	{ name: 'International Symposium on Hydrogen Energy, Renewable Energy and materials', acronym: 'HEREM', url: 'http://www.herem.org' },
	{ name: 'International Symposium On Research In Mathematics And Mechanics', acronym: 'TURAN', url: 'https://turansymposium.yildiz.edu.tr/' },
	{ name: 'International Workshop on e-Health Pervasive Wireless Applications and Services', acronym: 'e-HPWAS', url: 'https://www.ehpwas.org/' },
	{ name: 'International Zeugma Scientific Research Congress', url: 'https://en.zeugmakongresi.org/' },
	{ name: 'JSM Mathematics and Statistics', url: 'https://www.jscimedcentral.com/Mathematics/' },
	{ name: 'Macedonian Mathematical Congress', url: 'https://congress.smm.org.mk' },
	{ name: 'Multidisciplinary International Conference of Research Applied to Defense and Security', acronym: 'MICRADS', url: 'https://www.micrads.org/' },
	{ name: 'Regional Conference on Image and Signal Processing, BioMedical Engineering and Informatics', acronym: 'CISP-BMEI', url: 'http://www.cisp-bmei.cn' },
	{ name: 'Research Inventy', acronym: 'IJES', url: 'https://www.researchinventy.com/' },
	{ name: 'Recent advances in Evolution of Education and Outreach', acronym: 'REEO' },
	{ name: 'Symposium on Languages, Applications and Technologies', acronym: 'SLATE', url: 'https://slate-conf.org' },
	{ name: 'WLA Prize nomination', url: 'https://nomination.thewlaprize.org' },
	{ name: 'World Conference on Artificial Intelligence, Machine Learning, and Data Science', acronym: 'WCAIMLDS', url: 'https://eurasiaconferences.com/events/berlin/2023/artificial-intelligence-machine-learning-and-data-science/' },
	{ name: 'World Conference on Data Science & Statistics' },
	{ name: 'World Conference on Information Systems and Technologies', acronym: 'WorldCIST', url: 'http://worldcist.org' },
	{ name: 'World Congress of Education', acronym: 'WCE' },
	{ name: 'World Nursing Science Conference', acronym: 'WNSC', url: 'https://www.globalnursingconference.com/' },
	{ name: 'World Summit and Expo on Robotics, Artificial Intelligence and Applications', acronym: 'WSERAA', url: 'https://roboticssummit2024.com/' },
	{ name: 'World Symposium on Smart Materials and Applications', acronym: 'WSSMA', url: 'https://wssma-conf.org' },
	{ name: 'Workshop on Software Quality Analysis, Monitoring, Improvement, and Applications', acronym: 'SQAMIA', url: 'http://2023.sqamia.org/' },
	{ name: 'Международный научный форум "Устойчивое развитие и цифровая трансформация"', acronym: 'WFSDT', url: 'https://ide-rus.ru/wfsdt2022' },
	{ name: 'Международной научно-практической конференции "Умные города и устойчивое развитие регионов"', acronym: 'SMARTGREENS', url: 'https://ide-rus.ru/smart2024' },
];






function sortEvents( a, b ) {

	if ( a.name<b.name ) return -1;
	if ( a.name>b.name ) return 1;

	if ( a.acronym<b.acronym ) return -1;
	if ( a.acronym>b.acronym ) return 1;

	return 0;

}

events = events.filter( a=> a.name || a.acronym || a.url );
events = events.sort( sortEvents );


for ( var i=0; i<events.length-1; i++ )
	if ( events[ i ].name == events[ i+1 ].name )
		console.log( 'Duplicate event', events[ i ].name );

for ( var i=0; i<events.length; i++ ) {

	if ( !events[ i ].name )
		events[ i ].name = '';

	if ( !events[ i ].acronym )
		events[ i ].acronym = '';

	if ( !events[ i ].url )
		events[ i ].url = [];
	else {

		if ( typeof events[ i ].url === 'string' )
			events[ i ].url = [ events[ i ].url ];

	}

}
