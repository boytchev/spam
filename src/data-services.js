// Spam services and sites

// services = { {domain,ip4}, ...} - list of spam services and sites
// ip4map2 = { A.B: [domain,...], ...} - list of shared IP4 addresses A.B.xxx.xxx
// ip4map3 = { A.B.C: [domain,...], ...} - list of shared IP4 addresses A.B.C.xxx

var services = [
	{ domain: '', ip4: '' },
	{ domain: '', ip4: '' },
	{ domain: '', ip4: '' },
	{ domain: '', ip4: '' },
	{ domain: '', ip4: '' },
	{ domain: 'illegaz.com', ip4: '162.254.84.63' },
	{ domain: 'virtual-mail-022.net', ip4: '122.50.0.139' },
	{ domain: 'currentartificialinteligence.org', ip4: '' },
	{ domain: 'connect-researchers.org', ip4: '' },
	{ domain: 'cfpassist.com', ip4: '' },
	{ domain: 'academicart.net', ip4: '148.113.33.68' },
	{ domain: 'directvepubctions.com', ip4: '' },
	{ domain: 'theconferencemail.org', ip4: '' },
	{ domain: 'bioscopegroup.org', ip4: '' },
	{ domain: 'directivepublication.com', ip4: '' },
	{ domain: 'buyorsellprint.co.uk', ip4: '104.223.59.6' },
	{ domain: 'liveevent.biz', ip4: '' },
	{ domain: 'szr-72-senderedge.top', ip4: '194.11.226.25' },
	{ domain: 'apacsci-pub.net', ip4: '' },
	{ domain: 'illwee.com', ip4: '194.53.136.210' },
	{ domain: 'fipp.top', ip4: '' },
	{ domain: 'res-paper.org', ip4: '142.171.56.183' },
	{ domain: 'balikesir.edu.tr', ip4: '194.27.74.92' },
	{ domain: 'cfpfacilitate.org', ip4: '' },
	{ domain: 'bilpublishing.net', ip4: '' },
	{ domain: 'enpress-publisher.net', ip4: '' },
	{ domain: 'gawenk.org', ip4: '185.52.1.15' },
	{ domain: 'editorialoffice.cn', ip4: '' },
	{ domain: 'ntesmail.com', ip4: '45.195.24.84' },
	{ domain: 'hep-energija.si', ip4: '217.68.80.156' },
	{ domain: 'editoroffice.com', ip4: '' },
	{ domain: 'engagc.com', ip4: '168.235.89.60' },
	{ domain: 'blueeyesintelligence.in.net', ip4: '' },
	{ domain: 'tencent-cloud.com', ip4: '' },
	{ domain: 'researinvites.com', ip4: '' },
	{ domain: 'publicatinvites.com', ip4: '' },
	{ domain: 'resdataharvest.net', ip4: '148.113.3.235' },
	{ domain: 'techspear.live', ip4: '51.79.74.171' },
	{ domain: 'akademikiletisim.com', ip4: '' },
	{ domain: 'techsci-press.net', ip4: '' },
	{ domain: 'joevng.com', ip4: '66.187.5.69' },
	{ domain: 'student.mes.ac.in', ip4: '' },
	{ domain: 'imdlv.net', ip4: ['163.172.134.5', '51.15.204.93'] },
	{ domain: 'sydlerhealth.com', ip4: '158.69.187.187' },
	{ domain: 'dheera.in.net', ip4: '51.222.110.89' },
	{ domain: 'joenvironmentenvironmental.org', ip4: '' },
	{ domain: 'enetiaz.com', ip4: '108.165.106.44' },
	{ domain: 'directivpublications.org', ip4: '' },
	{ domain: 'directivepubcations.com', ip4: '' },
	{ domain: 'polscientific.net', ip4: '' },
	{ domain: 'researchers-forum.com', ip4: '' },
	{ domain: 'directvepubctions.org', ip4: '' },
	{ domain: 'conferencespost.org', ip4: '' },
	{ domain: 'ajmodener.org', ip4: '' },
	{ domain: 'usp-pl-pub.net', ip4: '' },
	{ domain: 'zap.cloud', ip4: '134.255.217.229' },
	{ domain: 'directivepub.org', ip4: '' },
	{ domain: 'directivepublication.org', ip4: '' },
	{ domain: 'mobiliva.com', ip4: '90.158.16.208' },
	{ domain: 'globalscientificmeetings.net', ip4: '' },
	{ domain: 'nstc.in', ip4: '' },
	{ domain: 'conwiz.in', ip4: '' },
	{ domain: 'news-mailer.com', ip4: '' },
	{ domain: 'xqueue.com', ip4: [ '212.6.174.184', '212.6.174.183' ] },
	{ domain: 'sendnbx.com', ip4: '167.172.183.215' },
	{ domain: 'hillpublishing.org', ip4: '' },
	{ domain: 'ngapor.com', ip4: '107.161.164.11' },
	{ domain: 'expurgate.net', ip4: '195.190.135.10' },
	{ domain: 'exchangelabs.com', ip4: '' },
	{ domain: 'academicconf.com', ip4: '' },
	{ domain: 'mailmajik.com', ip4: '' },
	{ domain: 'itlinks.com', ip4: '135.181.140.122' },
	{ domain: 'collectivejournals.com', ip4: '139.99.24.95' },
	{ domain: '', ip4: '111.231.71.171' },
	{ domain: 'conferences-scopus.top', ip4: '' },
	{ domain: '1e100.net', ip4: '' },
	{ domain: 'chitkara.edu.in', ip4: '' },
	{ domain: 'n-email7.net', ip4: '' },
	{ domain: 'n-email.net', ip4: '141.193.209.99' },
	{ domain: 'nature-cphs.net', ip4: '' },
	{ domain: 'research-submit.com', ip4: '66.103.220.82' },
	{ domain: 'submitopen.org', ip4: '' },
	{ domain: 'iconfphms.com', ip4: '' },
	{ domain: 'aliyun.com', ip4: [ '8.221.27.153', '140.205.208.131' ] },
	{ domain: 'phmsconf.org', ip4: '' },
	{ domain: '1-hostingservice.com', ip4: [ '94.46.251.125', '94.46.251.150' ] },
	{ domain: '163.com', ip4: '123.58.178.167' },
	{ domain: '263.net', ip4: '211.157.147.xxx' },
	{ domain: 'acaademiaa.com' },
	{ domain: 'academediting.com' },
	{ domain: 'academiajournalexperts.com' },
	{ domain: 'academiceditingbay.com' },
	{ domain: 'academicjournals.org', ip4: '108.178.4.84' },
	{ domain: 'acad-pub.net' },
	{ domain: 'aciek-academy.com' },
	{ domain: 'ajeboxes.com', ip4: '159.203.111.102' },
	{ domain: 'amjcst.net' },
	{ domain: 'akademikiletisim.com' },
	{ domain: 'amazonses.com', ip4: '54.240.48.23' },
	{ domain: 'aminer.cn' },
	{ domain: 'aminer.org' },
	{ domain: 'annotationsupport.com' },
	{ domain: 'antispamcloud.com', ip4: '185.201.18.31' },
	{ domain: 'arcopenaccess.org' },
	{ domain: 'arcopenaccess.net' },
	{ domain: 'aripd.net' },
	{ domain: 'article.email', ip4: '178.32.143.33' },
	{ domain: 'apacsci.net' },
	{ domain: 'auseocompany.com', ip4: '96.44.174.233' },
	{ domain: 'bilpublishing.com', ip4: '172.94.6.133' },
	{ domain: 'biomedoaj.com', ip4: '148.163.124.135' },
	{ domain: 'sp1-brevo.net', ip4: '77.32.149.5' },
	{ domain: 'bulutotogaleri.com', ip4: '5.79.97.79' },
	{ domain: 'buzzolad.online', ip4: '198.91.86.65' },
	{ domain: 'cancerresearchj.com' },
	{ domain: 'capillaris.opensci.info', ip4: '51.79.224.19' },
	{ domain: 'cinterleoka.co.in' },
	{ domain: 'cleanmanuscript.com' },
	{ domain: 'compubio.org' },
	{ domain: 'comsoc.org' },
	{ domain: 'conferencesglobal.org' },
	{ domain: 'conferenceinterests.biz' },
	{ domain: 'conferencesmail.com' },
	{ domain: 'conferencesmailer.com' },
	{ domain: 'confinvite.com', ip4: '188.68.53.62' },
	{ domain: 'confmail.net', ip4: '185.207.251.174' },
	{ domain: 'conf-mlsrv4.com', ip4: '54.233.98.172' },
	{ domain: 'connectingasia.org' },
	{ domain: 'constantcontact.com', ip4: '208.75.123.180' },
	{ domain: 'contaboserver.net', ip4: [ '161.97.158.59', '173.249.37.187', '62.171.143.23' ] },
	{ domain: 'crismtorc.online', ip4: '198.91.86.63' },
	{ domain: 'cse-researchcenter.com', ip4: '116.203.158.202' },
	{ domain: 'csu.edu.au', ip4: [ '10.4.95.xxx', '137.166.4.236' ] },
	{ domain: 'cutablw.com', ip4: '100.42.73.50' },
	{ domain: 'datadiscoverhubs.net' },
	{ domain: 'dataexplorerhub.biz', ip4: '139.99.86.95' },
	{ domain: 'daresmailapp.com' },
	{ domain: 'directsend04.com', ip4: '223.130.76.104' },
	{ domain: 'directsend07.com', ip4: '223.130.123.242' },
	{ domain: 'directsend08.com' },
	{ domain: 'directsend27.com', ip4: '223.130.117.12' },
	{ domain: 'dotnetplayground.com' },
	{ domain: 'dreamdezigns.com', ip4: '64.22.104.99' },
	{ domain: 'dreamhostps.com', ip4: '208.97.147.199' },
	{ domain: 'dyd.es', ip4: '82.199.156.111' },
	{ domain: 'easycomdns.com', ip4: '104.223.40.181' },
	{ domain: 'easyscience.education' },
	{ domain: 'editingspapers.com', ip4: '192.236.193.149' },
	{ domain: 'ei25.live', ip4: '43.252.89.46' },
	{ domain: 'emailing-server.net', ip4: [ '202.69.53.66', '202.69.53.72' ] },
	{ domain: 'embarcadero.com' },
	{ domain: 'elasticemail.com', ip4: '216.169.99.6' },
	{ domain: 'elasticemail.info', ip4: '176.31.7.110' },
	{ domain: 'ep-pub.net' },
	{ domain: 'ervers.com', ip4: '185.136.89.43' },
	{ domain: 'eufunds.info' },
	{ domain: 'eufunds.live' },
	{ domain: 'eurasiatalk.com' },
	{ domain: 'eurasiaseminars.com', ip4: '188.138.25.76' },
	{ domain: 'euromsg.net' },
	{ domain: 'exclaimer.net', ip4: '104.40.229.156' },
	{ domain: 'feeropen.online', ip4: '65.181.123.114' },
	{ domain: 'fox100.live' },
	{ domain: 'goescn.com', ip4: '176.126.251.157' },
	{ domain: 'goithe.com', ip4: '174.136.229.154' },
	{ domain: 'greatcote.com' },
	{ domain: 'greatetime.com' },
	{ domain: 'growdigitalcamp.com', ip4: '104.223.32.xxx' },
	{ domain: 'heberjahiz.com' },
	{ domain: 'himscsce.org' },
	{ domain: 'hostbycenter.com', ip4: '104.223.40.186' },
	{ domain: 'hostgator.in', ip4: '162.241.123.154' },
	{ domain: 'hse.ru', ip4: '89.175.46.14' },
	{ domain: 'hspc.info', ip4: '43.227.16.6' },
	{ domain: 'hspcorporation.biz', ip4: '139.99.233.194' },
	{ domain: 'hspischolar.com' },
	{ domain: 'hv-nswift-88.top', ip4: '154.61.76.185' },
	{ domain: 'icente.net', ip4: '38.242.244.185' },
	{ domain: 'iciea-cms.org', ip4: '203.175.171.26' },
	{ domain: 'ide-rus.ru' },
	{ domain: 'ierjrnls.com', ip4: [ '92.119.129.88', '188.138.75.253' ] },
	{ domain: 'exmail.qq.com', ip4: [ '43.155.67.158', '43.155.65.254', '43.154.221.58' ] },
	{ domain: 'pubinsightfuls.com', ip4: '104.223.45.132' },
	{ domain: 'qcloudmail.com', ip4: [ '119.28.54.199', '129.226.105.110' ] },
	{ domain: 'qualityarticles.org', ip4: '107.189.160.214' },
	{ domain: 'rajpub.com' },
	{ domain: 'realpapers.top', ip4: '143.198.69.218' },
	{ domain: 'replitest.com' },
	{ domain: 'republlcco.com', ip4: '162.212.157.163' },
	{ domain: 'resauthor.com', ip4: '205.209.121.175' },
	{ domain: 'rescollabhub.com', ip4: [ '74.48.44.221', '74.48.160.45' ] },
	{ domain: 'rescollabhub.biz' },
	{ domain: 'resdataexchange.com', ip4: '104.129.41.31' },
	{ domain: 'researchexplore.org', ip4: '35.214.83.162' },
	{ domain: 'researchfrontline.org' },
	{ domain: 'researchpulse.us' },
	{ domain: 'researchsynergize.com', ip4: '142.171.57.206' },
	{ domain: 'reviewres.com' },
	{ domain: 'rdnsdomain.in', ip4: [ '103.35.70.71', '103.35.70.8' ] },
	{ domain: 'saisti.eu' },
	{ domain: 'sciconferenceleague.biz', ip4: '172.107.180.114' },
	{ domain: 'science-university-notifications.website', ip4: '46.41.138.140' },
	{ domain: 'sciencenet.com.ng', ip4: '170.187.132.20' },
	{ domain: 'scientificgroup.org', ip4: '35.214.83.162' },
	{ domain: 'scientificjournalshub.com', ip4: '79.133.42.109' },
	{ domain: 'scientificresearch.uk' },
	{ domain: 'scientificstreams.com', ip4: '185.181.10.46' },
	{ domain: 'scika.org' },
	{ domain: 'scimedcentral.com', ip4: '15.235.102.134' },
	{ domain: 'sciresj.com', ip4: '15.235.137.11' },
	{ domain: 'scitechdata.org', ip4: '51.89.189.28' },
	{ domain: 'sciwideonline.com' },
	{ domain: 'scholarlinkage.net' },
	{ domain: 'scholarsasia.com' },
	{ domain: 'scholarsupport.info', ip4: '43.227.16.39' },
	{ domain: 'secureserver.net', ip4: '173.201.193.184' },
	{ domain: 'selcuk.edu.tr', ip4: '193.140.140.22' },
	{ domain: 'sendergrid.co.in', ip4: '150.129.233.68' },
	{ domain: 'sendernet.co.in', ip4: '150.129.233.22' },
	{ domain: 'sender-sib.com', ip4: [ '77.32.148.106', '77.32.148.56' ] },
	{ domain: 'sendgrid.net', ip4: [ '149.72.112.193', '159.183.224.0' ] },
	{ domain: 'sendibm3.com' },
	{ domain: 'sendinblue.com' },
	{ domain: 'sendinboxmail.com' },
	{ domain: 'sendinbx.com' },
	{ domain: 'sendinbxml.com' },
	{ domain: 'sendpulse.email', ip4: '195.191.65.104' },
	{ domain: 'sendpulse.info', ip4: '91.239.43.10' },
	{ domain: 'sendsafe4.net.tr' },
	{ domain: 'sendsafe5.net.tr', ip4: '143.198.159.108' },
	{ domain: 'sendersrv.com' },
	{ domain: 'sendersrv3.com', ip4: '185.3.229.151' },
	{ domain: 'sendy.co' },
	{ domain: 'sendyemail.nanoconnect.in' },
	{ domain: 'sereinjournals.org' },
	{ domain: 'sin-chn.net' },
	{ domain: 'smtp.com', ip4: '74.91.85.32' },
	{ domain: 'smtpsendmail.com' },
	{ domain: 'sparkpostmail.com', ip4: ['192.174.81.50', '192.174.81.56'] },
	{ domain: 'speakersknowledge.org' },
	{ domain: 'speakersmeeting.com' },
	{ domain: 'speakersmeetings.com' },
	{ domain: 'specjournals.com', ip4: '162.240.226.162' },
	{ domain: 'spsndr.com', ip4: '213.109.77.166' },
	{ domain: 'submitmanu.org', ip4: '148.163.69.36' },
	{ domain: 'stanfordproofreading.com' },
	{ domain: 'startdedicated.net', ip4: '85.25.103.11' },
	{ domain: 'stemj.info', ip4: '51.89.114.96' },
	{ domain: 'stemsub.info', ip4: '205.254.168.171' },
	{ domain: 'submitopen.com', ip4: '74.48.165.76' },
	{ domain: 'submitrestech.com', ip4: [ '148.113.3.70', '148.113.13.229' ] },
	{ domain: 'iitast.com', ip4: '23.229.9.199' },
	{ domain: 'impactfactorj.com', ip4: '148.163.87.162' },
	{ domain: 'indexmanu.org', ip4: '148.163.87.163' },
	{ domain: 'indiain2030.com' },
	{ domain: 'intechopen.com', ip4: [ '149.72.204.118', '149.72.1.187' ] },
	{ domain: 'internetmailserver.net', ip4: '96.31.32.197' },
	{ domain: 'iprpd.org' },
	{ domain: 'irisopenaccess.org' },
	{ domain: 'irispublisher.com' },
	{ domain: 'iscte-iul.pt' },
	{ domain: 'jbresonline.com', ip4: '178.32.143.18' },
	{ domain: 'jcivil.org' },
	{ domain: 'jclinicalmedicine.org' },
	{ domain: 'jetmail.com.tr', ip4: '90.158.16.45' },
	{ domain: 'jetplatform.com' },
	{ domain: 'jimsindia.org', ip4: '213.32.174.167' },
	{ domain: 'jfoods.org' },
	{ domain: 'johealth.net' },
	{ domain: 'jscimedcentral.com' },
	{ domain: 'juniper-publisher.org' },
	{ domain: 'kaliteediting.com' },
	{ domain: 'kaliteproofreadexperts.com' },
	{ domain: 'kalitetranslation.com' },
	{ domain: 'learndelphi.org' },
	{ domain: 'linodeusercontent.com', ip4: [ '172.232.248.154', '50.116.10.121' ] },
	{ domain: 'mail.uad.ac.id', ip4: '103.19.180.199' },
	{ domain: 'mailchannels.net', ip4: '23.83.223.164' },
	{ domain: 'mailchi.mp' },
	{ domain: 'mailchimp.com' },
	{ domain: 'maildirect.co.in', ip4: '103.19.137.224' },
	{ domain: 'maildirectdelta.com', ip4: '150.129.233.46' },
	{ domain: 'maildirectsigma.com', ip4: '43.227.16.54' },
	{ domain: 'mailersend.net', ip4: '212.11.79.135' },
	{ domain: 'mailer.unitedforum.uk' },
	{ domain: 'mailgun.net', ip4: [ '143.55.232.15', '159.135.228.99', '161.38.202.159', '185.250.238.113', '198.244.55.219' ] },
	{ domain: 'mailgun.us', ip4: '209.61.151.240' },
	{ domain: 'mailin.fr', ip4: [ '185.41.28.8', '185.41.28.120' ] },
	{ domain: 'mailing1.najv.net', ip4: '77.32.207.52' },
	{ domain: 'mailhostbox.com', ip4: '162.210.70.53' },
	{ domain: 'mailjet.com', ip4: [ '185.250.237.89', '87.253.238.221' ] },
	{ domain: 'mailserve.net', ip4: '43.227.17.61' },
	{ domain: 'mailserversm.com', ip4: '148.113.134.83' },
	{ domain: 'mailzbox.com', ip4: '96.44.174.197' },
	{ domain: 'manuscriptrevision.info', ip4: '74.50.67.137' },
	{ domain: 'markamdesigns.com', ip4: '212.83.147.93' },
	{ domain: 'marketing.tittu.in' },
	{ domain: 'mcdlv.net', ip4: '205.201.130.183' },
	{ domain: 'mcsv.net', ip4: '198.2.130.31' },
	{ domain: 'mimecast.com', ip4: '103.96.21.123' },
	{ domain: 'mjt.lu' },
	{ domain: 'mlsend.com', ip4: '185.225.161.20' },
	{ domain: 'mochahost.com', ip4: '198.38.82.159' },
	{ domain: 'montashydro.in' },
	{ domain: 'msndr.net', ip4: '95.213.176.59' },
	{ domain: 'mta1.net', ip4: [ '192.152.126.121', '209.126.71.153' ] },
	{ domain: 'mta2.net', ip4: [ '188.165.95.249', '217.182.181.130', '141.95.129.239' ] },
	{ domain: 'mta3.net', ip4: [ '216.169.98.249', '192.99.26.92', '51.178.153.64' ] },
	{ domain: 'mta4.net', ip4: [ '67.227.87.239', '5.196.146.131' ] },
	{ domain: 'najv.net', ip4: '172.246.8.51' },
	{ domain: 'najva.com', ip4: '212.146.234.69' },
	{ domain: 'nbscraft.com', ip4: '96.44.174.198' },
	{ domain: 'net.pk', ip4: '119.73.100.46' },
	{ domain: 'netvisao.pt', ip4: '213.228.135.146' },
	{ domain: 'nexonjet.com', ip4: '104.223.40.182' },
	{ domain: 'oaacademicpress.com' },
	{ domain: 'onlinearticle.org', ip4: '148.163.69.37' },
	{ domain: 'onlinemypaper.com', ip4: '139.99.92.219' },
	{ domain: 'onlinereputationking.com', ip4: '173.254.223.2' },
	{ domain: 'openpubsphere.com', ip4: '139.99.118.155' },
	{ domain: 'openimpactforges.net' },
	{ domain: 'pagilemailbox.top', ip4: '194.11.226.13' },
	{ domain: 'parkyeri.com', ip4: '176.9.87.110' },
	{ domain: 'parkyeri.net', ip4: '176.9.87.106' },
	{ domain: 'pearlresearchjournals.org' },
	{ domain: 'peerscience.us' },
	{ domain: 'point4web.com' },
	{ domain: 'polytechnicpositions.com' },
	{ domain: 'poneytelecom.eu', ip4: [ '212.129.55.130', '212.83.171.164' ] },
	{ domain: 'powerlinkmarketing.com', ip4: '45.127.4.173' },
	{ domain: 'precisionglobalcon.com', ip4: '167.89.101.132' },
	{ domain: 'primesci.org' },
	{ domain: 'productvideoat99.online', ip4: '173.254.223.3' },
	{ domain: 'productvideobeta.online', ip4: '173.254.223.4' },
	{ domain: 'proeditquality.com', ip4: '87.98.156.13' },
	{ domain: 'professorpositions.com' },
	{ domain: 'ptechz.net', ip4: '43.227.16.122' },
	{ domain: 'ptechzoa.com' },
	{ domain: 'ptzdata.com', ip4: ['87.98.237.43', '94.23.65.54'] },
	{ domain: 'ptzdatares.com', ip4: '51.89.237.47' },
	{ domain: 'ptzpublications.org', ip4: '148.163.85.134' },
	{ domain: 'pubintellects.org' },
	{ domain: 'pubintellectech.us', ip4: '66.103.220.83' },
	{ domain: 'pubknowledgebase.us' },
	{ domain: 'pubknowledgehub.com', ip4: '142.171.57.204' },
	{ domain: 'pubmindful.com', ip4: '51.81.220.146' },
	{ domain: 'pultar.org', ip4: '176.9.87.110' },
	{ domain: 'www.ptvgroup.com' },
	{ domain: 'support-academic-relations.com', ip4: '46.41.140.50' },
	{ domain: 'tafpublications.com' },
	{ domain: 'talenttrackhr.com', ip4: '54.39.125.253' },
	{ domain: 'techhubresearch.com' },
	{ domain: 'techinhosting.com' },
	{ domain: 'tetec.asia', ip4: '193.29.56.230' },
	{ domain: 'tittu.in' },
	{ domain: 'theconferencepost.com' },
	{ domain: 'theiconicmeetings.net' },
	{ domain: 'thehspc.co.uk', ip4: '51.79.224.244' },
	{ domain: 'thehspc.net', ip4: '51.79.224.244' },
	{ domain: 'thesai.org' },
	{ domain: 'techsci-press.net' },
	{ domain: 'trckln.com' },
	{ domain: 'ucv.ro', ip4: '193.226.37.44' },
	{ domain: 'uebad.org' },
	{ domain: 'universalwiser.com', ip4: '185.93.165.212' },
	{ domain: 'unssa.rs.ba', ip4: '78.28.157.202' },
	{ domain: 'urgicw.com', ip4: '149.28.143.163' },
	{ domain: 'urfresearch.com', ip4: '43.227.16.12' },
	{ domain: 'vm-edge-75.top', ip4: '154.53.42.27' },
	{ domain: 'volumemail.in', ip4: '167.89.44.89' },
	{ domain: 'webhoxton.com', ip4: '104.223.40.188' },
	{ domain: 'webtechxpress.com' },
	{ domain: 'zoho.com', ip4: '136.143.188.13' },
	{ domain: 'zohocrm.com', ip4: '135.84.80.185' },
	{ domain: 'zohoinsights.com' },
	{ domain: 'zohomail.com' },
	{ domain: 'zohomail360.com' },
	{ domain: 'zumrutmedya.com', ip4: '178.33.41.165' },
	{ ip4: '40.92.52.103' },
	{ ip4: '49.206.62.30' },
];


console.time();

function sortServices( a, b ) {

	if ( !a.domain && b.domain ) return -1;
	if ( a.domain && !b.domain ) return 1;

	if ( a.domain<b.domain ) return -1;
	if ( a.domain>b.domain ) return 1;

	if ( a.ip4<b.ip4 ) return -1;
	if ( a.ip4>b.ip4 ) return 1;

	return 0;

}

services = services.filter( a=> a.domain || a.ip4 );
services = services.sort( sortServices );


for ( var i=0; i<services.length-1; i++ )
	if ( services[ i ].domain && ( services[ i ].domain == services[ i+1 ].domain ) )
		console.log( 'Duplicate service', services[ i ].domain );


for ( var i=0; i<services.length; i++ ) {

	if ( !services[ i ].domain )
		services[ i ].donaim = '(anonymous)';

	if ( !services[ i ].ip4 )
		services[ i ].ip4 = [];
	else {

		if ( typeof services[ i ].ip4 === 'string' )
			services[ i ].ip4 = [ services[ i ].ip4 ];

	}

}

var ip4map2 = {};
var ip4map3 = {};

function processIP( i, j, si, sj ) {

	if ( si[ 0 ]==sj[ 0 ] && si[ 1 ]==sj[ 1 ]) {

		var idx = si[ 0 ]+'.'+si[ 1 ];

		if ( !ip4map2[ idx ]) ip4map2[ idx ]={};
		ip4map2[ idx ][ services[ i ].domain ] = '';
		ip4map2[ idx ][ services[ j ].domain ] = '';

		if ( si[ 2 ]==sj[ 2 ] || si[ 2 ]=='xxx' || sj[ 2 ]=='xxx' ) {

			idx += '.'+si[ 2 ];

			if ( !ip4map3[ idx ]) ip4map3[ idx ]={};
			ip4map3[ idx ][ services[ i ].domain ] = '';
			ip4map3[ idx ][ services[ j ].domain ] = '';

		} // if si[2]

	} // if si[0]

}


// analyze shared IP4 addresses
for ( var i=0; i<services.length-1; i++ ) if ( services[ i ].ip4.length ) {

	var ip4i = services[ i ].ip4;

	for ( var ii in ip4i ) {

		var si = ip4i[ ii ].split( '.' );
		for ( var j=i+1; j<services.length; j++ ) if ( services[ j ].ip4.length ) {

			var ip4j = services[ j ].ip4;

			for ( var jj in ip4j ) {

				var sj = ip4j[ jj ].split( '.' );
				processIP( i, j, si, sj );

			}

		} // for j

	} // for ii

} // for i


for ( var [ key, value ] of Object.entries( ip4map2 ) ) {

	ip4map2[ key ] = Object.keys( value );

}

for ( var [ key, value ] of Object.entries( ip4map3 ) ) {

	ip4map3[ key ] = Object.keys( value );

}
