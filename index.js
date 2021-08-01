const domain = location.host.replace('www.', '');

switch(domain) {
	case 'youtube.com':
		await import(`./${domain}/index.js`);
	default:
		// nothing to do.
}