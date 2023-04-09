const text = [
	{
		grupo: 'Mobile',
		title: 'IOS',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://reactnative.dev/'
	},
	{
		grupo: 'Mobile',
		title: 'Android Studio',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://developer.android.com/studio?hl=es-419'
	},
	{
		grupo: 'Mobile',
		title: 'Java',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://www.java.com/es/download/'
	},
	{
		grupo: 'Mobile',
		title: 'Maven',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://www.java.com/es/download/'
	},
	{
		grupo: 'Mobile',
		title: 'SmartPSS',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'http://dahuawiki.com/Template:SmartPSS'
	},
	{
		grupo: 'Mobile',
		title: 'Android Studio',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://developer.android.com/studio?hl=es-419'
	},
	{
		grupo: 'Mobile',
		title: 'Android Studio',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://developer.android.com/studio?hl=es-419'
	},
	{
		grupo: 'Mobile',
		title: 'Android Studio',
		foto: 'https://i0.wp.com/image.tmdb.org/t/p/w300/ix4IFXguK5TP0lSEPcqbDU0XWsA.jpg',
		link: 'https://developer.android.com/studio?hl=es-419'
	}
];

Object.keys(text).map((key) => {
	var obj = text[key];
	document.getElementById('test').innerHTML += `
  	<div class='item'>
	<a href="${obj.link}"><img src="${obj.foto}" alt='${obj.title}' /> </a>
      <div class='entry-title'>
        <span>${obj.title}</span>
      </div>
	</div> `;
});

/* <a href="${obj.link}"><img src="${obj.foto}" alt='${obj.title}' /> </a> */
    //   <iframe src='${obj.link}' title='${obj.title}'></iframe>
