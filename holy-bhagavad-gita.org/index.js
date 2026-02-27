/**
 * @see  https://www.wikidata.org/wiki/Q108659922
 */

/**
 * - replace battlefield image with solid blue color
 * - remove copyright banner
 * - fix janky search box becoming too high
 */
const styles = `
	.copyright-warning,
	.gita-side-content > div > div:nth-child(2),
	.gita-side-content > div > div:nth-child(3),
	.search-text,
	.gsib_b {
		display:none;
	}

	body {
		background-color: #131b42;
		background-image: none;
	}
`;
const sheet = document.createElement("style");
sheet.type = "text/css";
sheet.innerText = styles;
document.head.appendChild(sheet);

/**
 * automatically move to next verse
 * after audio ends
 */
const verse = document.querySelector(".bg-verse-audio audio");

if (verse) {
	verse.onended = () => {
		const A = document.querySelector(".verse-navigator a.next-element");

		const verses = Array.from(
			document.querySelectorAll(".actual-verse-navigator a"),
		);

		const currentVerse = document.querySelector(
			".actual-verse-navigator a.active",
		);

		// chapter end
		if (verses[verses.length - 1] === currentVerse) {
			const B = document.querySelector(".chapter-navigator a.next-element");
			B.click();
		} else {
			A.click();
		}
	};
	try {
		verse.play();
	} catch (_) {}
}
