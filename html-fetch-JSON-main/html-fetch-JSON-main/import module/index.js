export function metodo01() {
	var text = [
		{
			"grupo": "Mobile",
			"title": "IOS",
			"foto": "https://camo.githubusercontent.com/3dd6ec82f3d2c1299e697e6b8d50f000d189780d4aeff9425371fa509420e98a/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3132382f78636f64652d333532313832322d323934353233392e706e67",
			"link": "https://reactnative.dev/"
		},
		{
			"grupo": "Mobile",
			"title": "Android Studio",
			"foto": "https://camo.githubusercontent.com/c9803b7b0326e1035e7f0be9a0a039086aa413c9e0e4013c693dbcb56607831a/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3132382f616e64726f69642d3234352d313137353237332e706e67",
			"link": "https://developer.android.com/studio?hl=es-419"
		},
		{
			"grupo": "Backend",
			"title": "Java",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
			"link": "https://www.java.com/es/download/"
		},
		{
			"grupo": "Backend",
			"title": "Maven",
			"foto": "https://benjagarrido.com/wp-content/uploads/2015/08/apache_maven.png",
			"link": "https://www.java.com/es/download/"
		},
		{
			"grupo": "Backend",
			"title": "Php",
			"foto": "data:image/png;base64,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",
			"link": "https://www.php.net/manual/es/tutorial.firstpage.php"
		},
		{
			"grupo": "Backend",
			"title": "C",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
			"link": "https://www.php.net/manual/es/tutorial.firstpage.php"
		},
		{
			"grupo": "Backend",
			"title": "C++",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
			"link": "https://www.php.net/manual/es/tutorial.firstpage.php"
		},
		{
			"grupo": "Backend",
			"title": "C#",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
			"link": "https://www.php.net/manual/es/tutorial.firstpage.php"
		},
		{
			"grupo": "Backend",
			"title": "Embarcadero rad studio delphi",
			"foto": "http://chapmanworld.com/wp-content/uploads/2017/03/rad.jpg",
			"link": "https://www.php.net/manual/es/tutorial.firstpage.php"
		},
		{
			"grupo": "Backend",
			"title": "Node.js",
			"foto": "https://camo.githubusercontent.com/a7a5fd3fa7a8c0c854279b31bcbc94d54862bef84643802a81501670d3f95901/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d36342f6e6f64652d6a732d313137343932352e706e67",
			"link": "https://nodejs.org/es/download/"
		},
		{
			"grupo": "Frontend",
			"title": "HTML5",
			"foto": "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
			"link": "https://lenguajehtml.com/html/"
		},
		{
			"grupo": "Frontend",
			"title": "css3",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
			"link": "https://css3.com/"
		},
		{
			"grupo": "Frontend",
			"title": "bootstrap",
			"foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6iwXpd7hrURdyrpk4lweUKvG2LwQ_vsGjAXhU5FvD-Gi70nRM6P3pVXqAFAJsGEX4Wc&usqp=CAU",
			"link": "https://bootstrap.com/"
		},
		{
			"grupo": "Frontend",
			"title": "JavaScript",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
			"link": "https://www.javascript.com/learn/strings"
		},
		{
			"grupo": "Frontend",
			"title": "Typescript",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
			"link": "https://www.typescriptlang.org/"
		},
		{
			"grupo": "Frontend",
			"title": "Angular",
			"foto": "https://avatars.githubusercontent.com/u/139426?s=200&v=4",
			"link": "https://angular.io/tutorial/toh-pt0"
		},
		{
			"grupo": "Frontend",
			"title": "Angular.JS",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
			"link": "https://angular.io/tutorial/toh-pt0"
		},
		{
			"grupo": "Frontend",
			"title": "React",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
			"link": "https://reactjs.org/"
		},
		{
			"grupo": "Frontend",
			"title": "React Native",
			"foto": "https://linku.nl/app/uploads/2020/07/react-native-logo-1.png",
			"link": "https://reactjs.org/"
		},
		{
			"grupo": "Frontend",
			"title": "Servisofts",
			"foto": "https://avatars.githubusercontent.com/u/69025139?v=4",
			"link": "https://www.npmjs.com/package/servisofts-component"
		},
		{
			"grupo": "Database",
			"title": "MySQL",
			"foto": "https://avatars.githubusercontent.com/u/2452804?s=200&v=4",
			"link": "https://dev.mysql.com/downloads/mysql/"
		},
		{
			"grupo": "Database",
			"title": "Microsoft SQL Server",
			"foto": "https://i1.wp.com/www.bacula.lat/wp-content/uploads/2019/05/mssqllogo.png",
			"link": "https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
		},
		{
			"grupo": "Database",
			"title": "Postgresql",
			"foto": "https://avatars.githubusercontent.com/u/177543?s=200&v=4",
			"link": "https://www.enterprisedb.com/downloads/postgres-postgresql-downloads"
		},
		{
			"grupo": "Database",
			"title": "Oracle",
			"foto": "https://avatars.githubusercontent.com/u/4430336?s=200&v=4",
			"link": "https://www.oracle.com/database/technologies/oracle-database-software-downloads.html"
		},
		{
			"grupo": "Database",
			"title": "Firebase",
			"foto": "https://avatars.githubusercontent.com/u/1335026?s=200&v=4",
			"link": "https://firebase.google.com/docs?hl=es-419&gclsrc=ds&gclsrc=ds&gclid=CI3rkezHsfgCFckNrQYd6FMDJA"
		},
		{
			"grupo": "Database",
			"title": "MongoDB",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
			"link": "https://www.mongodb.com/try/download/community"
		},
		{
			"grupo": "VCS",
			"title": "Git",
			"foto": "https://camo.githubusercontent.com/2297aeb5bcb2b38bb190fcae27e1bf9b0fe08699446c23d48585443881bce4c3/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3132382f6769742d31382d313137353231392e706e67",
			"link": "https://git-scm.com/downloads"
		},
		{
			"grupo": "VCS",
			"title": "GitHub",
			"foto": "https://desktop.github.com/images/desktop-icon.svg",
			"link": "https://desktop.github.com/"
		},
		{
			"grupo": "VCS ",
			"title": "Gitlab ",
			"foto": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_gitlab_icon_130579.png",
			"link": "https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"
		},
		{
			"grupo": "IDE",
			"title": "NetBeans IDE",
			"foto": "https://fabasoad.github.io/business-card/6d42640530b2868f22c242267d4c98a5.png",
			"link": "https://netbeans.apache.org/download/index.html"
		},
		{
			"grupo": "IDE",
			"title": "Visual Studio",
			"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/langfr-220px-Visual_Studio_Icon_2019.svg.png",
			"link": "https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Enterprise&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false"
		},
		{
			"grupo": "IDE",
			"title": "Visual Studio Code",
			"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/512px-Visual_Studio_Code_1.18_icon.svg.png",
			"link": "https://code.visualstudio.com/"
		},
		{
			"grupo": "Design",
			"title": "Figma",
			"foto": "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
			"link": "https://www.figma.com/downloads/"
		},
		{
			"grupo": "Design",
			"title": "Diagrams.net",
			"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Diagrams.net_Logo.svg/2048px-Diagrams.net_Logo.svg.png",
			"link": "https://www.diagrams.net/"
		},
		{
			"grupo": "Design",
			"title": "AdobeIllustrator",
			"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Illustrator_CC_icon.png/492px-Illustrator_CC_icon.png",
			"link": "https://www.adobe.com/la/products/illustrator/free-trial-download.html"
		},
		{
			"grupo": "Design",
			"title": "Photoshop",
			"foto": "https://www.creativosonline.org/wp-content/uploads/2019/06/ps-830x830.jpg",
			"link": "http://www.intercambiosvirtuales.org/software/adobe-photoshop-2020-v21-0-3-91-multilenguaje-espanol"
		},
		{
			"grupo": "Design",
			"title": "Sketch",
			"foto": "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_sketch_icon_130168.png",
			"link": "https://www.sketch.com/"
		},
		{
			"grupo": " Server",
			"title": "NGINX ",
			"foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-zyAiCFPeOX9-wj_u-iPxXvvy3IxXcGr-YRY4na7X96ahZS4ms-cZhmXlf-FSVJBPwU&usqp=CAU",
			"link": "https://nginx.org/en/download.html"
		},
		{
			"grupo": "Server",
			"title": "XAMPP",
			"foto": "https://i.dlpng.com/static/png/7199361_preview.png",
			"link": "https://www.apachefriends.org/es/download.html"
		},
		{
			"grupo": "SO",
			"title": "WINDOWS",
			"foto": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Windows_11.png",
			"link": ""
		},
		{
			"grupo": "SO",
			"title": "LINUX",
			"foto": "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
			"link": ""
		},
		{
			"grupo": "SO",
			"title": "APPLE",
			"foto": "https://camo.githubusercontent.com/31c9b6524a4cb08d503d766b291441af68202f4c7ec3a35f745baa12242325b7/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d36342f6170706c652d313233372d313137343936332e706e67",
			"link": ""
		},
		{
			"grupo": "SO",
			"title": "MINIOS",
			"foto": "https://img1.freepng.es/20180614/ufx/kisspng-computer-icons-windows-10-windows-10-5b22da3ea8f306.468163341529010750692.jpg",
			"link": ""
		}
	];
	return text;
}

export function metodo02() {
	return "hola";
}

export function metodo03() {
	return "hola";
}
