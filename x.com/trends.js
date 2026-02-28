import { onBrowse } from "../util.js";

let expanded = false;

const single = (xpath) =>
	document.evaluate(xpath, document, null, 9, null)?.singleNodeValue;

const doIt = () => {
	const target = expanded ? "600px" : "100%";

	setTimeout(() => {
		const column = single(`//*[@data-testid="primaryColumn"]`);

		if (column) {
			column.style.maxWidth = target;
		}

		setTimeout(() => {
			const tl = single(`//*[@aria-labelledby="accessible-list-1"]/..`);
			if (tl) {
				tl.style.maxWidth = target;
			}
		}, 500);
	}, 1000);
};

export const setup = () => {
	onBrowse(doIt);

	const sidebarColumn = document.querySelector('[data-testid="sidebarColumn"]');

	if (expanded) {
		sidebarColumn.style.display = "block";
	} else {
		sidebarColumn.style.display = "none";
	}

	expanded = !expanded;
};
