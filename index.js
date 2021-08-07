const domain = location.host.replace('www.', '');

switch(domain) {
	case 'google.com':
	case 'twitter.com':
	case 'youtube.com':
		await import(`./${domain}/index.js`);
	default:
		// nothing to do.
}