import { onBrowse } from "../util.js";

const doIt = () => {
	let maxAttempts = 100, n = 0, hidden = true;


	/**
	 * 
	 * @param {Function} callback 
	 * @returns {MutationCallback}
	 */
	const createObserver = (callback) => {
		/**
		 * 
		 * @param {MutationRecord[]} list
		 */
		const mutationCb = (list) => {
			for(const a of list) {
				a.target.display = 'none';
			}
		};

		return mutationCb;
	}


	/**
	 * on Twitter.com: hide the "What's happening"
	 * panel by default. A lot of fear-mongering
	 * and garbage gets pushed here.
	 *
	 * Users can click the header to expand it
	 * on demand.
	 */
	const checker = () => {
		// safeguard in case user is not on main Twitter app
		if (++n >= maxAttempts) clearInterval(pid);

		const result = document.evaluate(`//span[text()="What’s happening"]/../../../../..`, document, null, 9, null);
		const fakeNews = result.singleNodeValue;
		if (fakeNews) {
			clearInterval(pid);
			// ready to work
			const anchor = fakeNews.childNodes[1];
			anchor.onclick = () => {
				let fakeStory = anchor;
				while (fakeStory = fakeStory.nextElementSibling) {
					fakeStory.style.display = hidden ? '' : 'none';
				}
				hidden = !hidden;
			};

			const hideFakeNews = () => {
				let fakeStory = anchor;
				while (fakeStory = fakeStory.nextElementSibling) {
					fakeStory.style.display = 'none';
				}
			};

			hideFakeNews();

			const observer = new MutationObserver(createObserver(hideFakeNews));
			observer.observe(fakeNews.parentNode, {childList: true, subtree: true})
		}
	}


	const pid = setInterval(checker, 300);
};



export const setup = () => {
	onBrowse(doIt);
}
