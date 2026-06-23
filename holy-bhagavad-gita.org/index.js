/**
 * @see  https://www.wikidata.org/wiki/Q108659922
 */

/**
 * rm copyright banner
 * rm book order promo
 * rm stay connected section
 * rm top nav
 * rm empty tamil nav
 */
const styles = `
	.footer-bottom > :last-child,
	.book-order-promo,
	.bg-stay-connected-section,
	.bg-page-top-nav,
	header .upper-container,
	.bg-page-top-nav-tamil
	{
		display:none;
	}
`;
const sheet = Object.assign(document.createElement("style"), {
	type: "text/css",
	innerText: styles,
});
document.head.appendChild(sheet);

/**
 * automatically move to next verse
 * after audio ends
 */
const verse = document.querySelector(".bg-verse-audio audio");

if (verse) {
	verse.onended = () => {
		const verses = Array.from(
			document.querySelectorAll(".actual-verse-navigator a"),
		);

		const currentVerse = document.querySelector(
			".actual-verse-navigator a.active",
		);

		if (verses[verses.length - 1] === currentVerse) {
			const nextChapter = document.querySelector(
				".chapter-navigator a.next-element",
			);
			nextChapter.click();
		} else {
			const nextVerse = currentVerse.nextElementSibling;
			nextVerse.click();
		}
	};
	try {
		verse.play();
	} catch (_) {}
}
