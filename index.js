let target;

switch (location.host) {
	case "github.com":
	case "x.com":
	case "mobile.x.com": {
		/**
		 * Get root domain
		 * @see https://stackoverflow.com/a/61381607/270302
		 */
		const rootDomain = location.host.split(".").slice(-2).join(".");
		target = rootDomain;
		break;
	}
	default: {
		const domain = location.host.replace("www.", "");

		switch (domain) {
			case "britishmuseum.org":
			case "holy-bhagavad-gita.org":
			case "google.com":
			case "ggpht.com":
			case "guidestar.org":
			case "npmjs.com":
			case "reddit.com":
			// biome-ignore lint/suspicious/noFallthroughSwitchClause: intentional
			case "youtube.com":
				target = domain;
			default: {
				if (/(ggpht|googleusercontent).com$/.test(domain)) {
					target = "ggpht.com";
				}
			}
		}
	}
}

if (target) {
	console.log("loading script", new Date(), target);
	await import(`./${target}/index.js`);
}
