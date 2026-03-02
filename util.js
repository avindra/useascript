export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

/**
 *
 * @param {Function} doit Thing to run when user navigates
 */
export const onBrowse = (doit) => {
	window.onpopstate = doit;

	// https://stackoverflow.com/a/64927639/270302
	for (const type of ["pushState", "replaceState"]) {
		window.history[type] = new Proxy(window.history[type], {
			apply: (target, thisarg, argarray) => {
				doit();
				return target.apply(thisarg, argarray);
			},
		});
	}

	doit();
};

/**
 * Waits for a condition to be true and then performs an action.
 * Useful for waiting for elements to appear in the DOM.
 *
 * @param {*} fetcher   A function that returns an element or not
 * @param {*} action    A function that is called with the element once it is available
 * @param {*} timeout   Maximum time to wait for the element (default: 10 seconds)
 */
export const until = (fetcher, action, timeout = 10000) => {
	const checker = setInterval(() => {
		const element = fetcher();

		if (element) {
			clearInterval(checker);
			return action(element);
		}
	}, 200);

	setTimeout(() => clearInterval(checker), timeout);
};
