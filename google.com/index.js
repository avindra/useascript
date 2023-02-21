import { onBrowse } from "./../util.js";

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
			const nextHref = `${location.pathname}?${params.toString()}`;
			location.href = nextHref;
		}
	}
});

/**
 * Prevent google from mangling URLs
 *
 * @see https://gist.github.com/chris-kwl/6172eb00971ab81bf99a213682b42e21
 */
const disableOnmousedown = function (node) {
	const as = node.getElementsByTagName("a");
	for (let a = as[0], i = 1; a; i++) {
		a.removeAttribute("data-jsarwt");
		a = as[i];
	}
};

const disableOnmousedownOfInsertedNode = function (evt) {
	const node = evt.target;
	//const requestURL = evt.newValue;
	//const parentNode = evt.relatedNode;
	disableOnmousedown(node);
};

document.addEventListener("load", disableOnmousedown(document.body), false);
document.body.addEventListener(
	"AutoPagerize_DOMNodeInserted",
	disableOnmousedownOfInsertedNode,
	false,
);
