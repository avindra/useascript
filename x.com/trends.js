import { onBrowse } from "../util.js";

let expanded = true;

const single = (xpath) =>
	document.evaluate(xpath, document, null, 9, null)?.singleNodeValue;

const setNews = (_expanded) => {
	const target = _expanded ? "100%" : "600px";

	setTimeout(() => {
		const contentArea = single(`//*[@data-testid="primaryColumn"]`);

		if (contentArea) {
			contentArea.style.maxWidth = target;
		}

		setTimeout(() => {
			const tl = single(`//*[@aria-level="1"]/../..`);
			if (tl) {
				tl.style.maxWidth = target;
			}
		}, 1800);
	}, 1000);

	setTimeout(() => {
		const sideRight = document.querySelector('[data-testid="sidebarColumn"]');

		if (!sideRight) return;

		if (expanded) {
			sideRight.style.display = "none";
		} else {
			sideRight.style.display = "block";
		}
	}, 800);
};

export const setup = () => {
	onBrowse(() => {
		setNews(expanded);
	});

	return () => {
		expanded = !expanded;
		setNews(expanded);
	};
};
