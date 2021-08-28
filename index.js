
let target;

switch(location.host) {
	case 'github.com':
	case 'twitter.com':
	case 'developer.mozilla.org': {
		target = location.host;
		break;
	}
	default: {
		const domain = location.host.replace('www.', '');

		switch(domain) {
			case 'britishmuseum.org':
			case 'holy-bhagavad-gita.org':
			case 'google.com':
			case 'npmjs.com':
			case 'youtube.com':
				target = domain;
		}
	}
}


if (target) {
	await import(`./${target}/index.js`);
}