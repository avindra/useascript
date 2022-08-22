import { onBrowse } from './../util.js';

/**
 * Ensure that "q=" is the last parameter.
 * 
 * Makes search more usable when
 * using CTRL+L hotkey.
 * 
 * Especially a problem with "Visually similar images" link
 */
onBrowse(() => {
	const params = new URLSearchParams(location.search.substring(1));
	let lastKey;
	for (const [key] of params.entries()) {
		lastKey = key;
	}

	if (params.get("tbm") === "isch") {
		params.sort();
		const Q = params.get("q");
		if (Q && lastKey !== "q") {
			// place query at the end (ezier editing)
			params.delete("q");
			params.set("q", Q);
			const nextHref = location.pathname + "?" + params.toString();
			location.href = nextHref;
		}
	}
});
