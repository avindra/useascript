import { onBrowse, until } from "../util.js";

let expanded = true;

const setNews = (_expanded) => {
	const target = _expanded ? "100%" : "600px";

	until(
		() => document.body.querySelector('[data-testid="primaryColumn"]'),
		(primaryColumn) => {
			primaryColumn.style.maxWidth = target;
			until(
				() => {
					const el = primaryColumn.querySelector('[aria-level="1"]');
					// n.b. we are looking for the grandparent
					if (el) {
						return el.parentNode.parentNode;
					}
				},
				(tl) => (tl.style.maxWidth = target),
			);
		},
	);

	until(
		() => document.querySelector('[data-testid="sidebarColumn"]'),
		(sidebarColumn) =>
			(sidebarColumn.style.display = expanded ? "none" : "block"),
	);
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
