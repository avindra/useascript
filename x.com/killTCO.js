/**
 *
 * Replace t.co links with the real links where possible
 *
 * Notably, image cards with links have to be resolved through t.co
 *
 * @param {Element} primaryColumn
 */
export const killTCO = (primaryColumn) => {
	new MutationObserver(() => {
		const tcoLinks = primaryColumn.querySelectorAll('a[href^="https://t.co"]');

		for (const link of tcoLinks) {
			const baseLink = link.innerText.replace(/\s+/g, "");
			const realLink = baseLink.substring(0, baseLink.length - 1);

			if (realLink.startsWith("http")) {
				link.href = realLink;
				link.innerText = realLink;
			}
		}
	}).observe(primaryColumn, { childList: true, subtree: true });
};
