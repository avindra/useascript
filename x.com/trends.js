import { onBrowse } from "../util.js";

const getNews = () =>
	document.evaluate(
		`//span[text()="What’s happening"]/../../../../..`,
		document,
		null,
		9,
		null,
	)?.singleNodeValue;

const doIt = async () => {
	const maxAttempts = 100;
	let n = 0;
	let hidden = true;

	/**
	 *
	 * @param {Function} callback
	 * @returns {MutationCallback}
	 */
	const createObserver = (_callback) => {
		/**
		 *
		 * @param {MutationRecord[]} list
		 */
		const mutationCb = (list) => {
			for (const a of list) {
				a.target.display = "none";
			}
		};

		return mutationCb;
	};

	/**
	 * on Twitter.com: hide the "What's happening"
	 * panel by default. A lot of fear-mongering
	 * and garbage gets pushed here.
	 *
	 * Users can click the header to expand it
	 * on demand.
	 */
	const checker = async () => {
		// safeguard in case user is not on main Twitter app
		if (++n >= maxAttempts) {
			clearInterval(pid);
			return;
		}

		const fakeNews = getNews();
		if (fakeNews) {
			clearInterval(pid);
			// ready to work
			const anchor = fakeNews;
			anchor.onclick = () => {
				let fakeStory = anchor;
				while ((fakeStory = fakeStory.nextElementSibling)) {
					fakeStory.style.display = hidden ? "" : "none";
				}
				hidden = !hidden;
			};

			const hideFakeNews = () => {
				let fakeStory = anchor;
				while ((fakeStory = fakeStory.nextElementSibling)) {
					fakeStory.style.display = "none";
				}
			};

			hideFakeNews();

			const observer = new MutationObserver(createObserver(hideFakeNews));
			observer.observe(fakeNews.parentNode, { childList: true, subtree: true });
		}
	};

	const pid = setInterval(checker, 800);
};

export const setup = () => {
	onBrowse(doIt);
};
