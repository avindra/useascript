export const sleep = (ms) => new Promise((res, rej) => setTimeout(res, ms));

/**
 *
 * @param {Function} doit Thing to run when user navigates
 */
export const onBrowse = (doit) => {
	window.onpopstate = doit;

	// https://stackoverflow.com/a/64927639/270302
	["pushState", "replaceState"].forEach((type) => {
		window.history[type] = new Proxy(window.history[type], {
			apply: (target, thisarg, argarray) => {
				doit();
				return target.apply(thisarg, argarray);
			},
		});
	});

	doit();
};
