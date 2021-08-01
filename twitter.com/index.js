let maxAttempts = 100, n = 0;

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
				fakeStory.style.display = '';
			}
		};

		let fakeStory = anchor;
		while (fakeStory = fakeStory.nextElementSibling) {
			fakeStory.style.display = 'none';
		}
	}
}

const pid = setInterval(checker, 300);

