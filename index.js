
let target;

switch(location.host) {
	case 'github.com':
	case 'developer.mozilla.org': {
		target = location.host;
		break;
	}
	default: {
		const domain = location.host.replace('www.', '');

		switch(domain) {
			case 'google.com':
			case 'twitter.com':
			case 'youtube.com':
				target = domain;
		}
	}
}


if (target) {
	await import(`./${target}/index.js`);
}