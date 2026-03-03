/**
 * this will work for a few requests, but instagram
 * will eventually force a login screen.
 */
const config = { childList: true, subtree: true };

const callback = () => {
	const last = document.body.lastChild;
	if (last.firstChild && last.firstChild.id === "scrollview") {
		last.remove();
	}
};

const observer = new MutationObserver(callback);
observer.observe(document.body, config);
