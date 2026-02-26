/**
 * @see  https://www.wikidata.org/wiki/Q108659922
 */

/**
 * - replace battlefield image with solid blue color
 * - remove copyright banner
 * - fix janky search box becoming too high
 */
const styles = `
	.copyright-warning, .gsib_b {display:none}
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
 * remove promotional content for social media
 */
for (const css of [".fbLikeBoxHolder", ".subscribe"]) {
	const like = document.querySelector(css);
	if (like) {
		like.parentNode.remove();
	}
}

/**
 * automatically move to next verse
 * after audio ends
 */
const verse = document.querySelector("#verseAudio audio");
if (verse) {
	verse.onended = () => {
		const A = document.querySelector(".verseNav .nextArrow a");
		// chapter end
		if (A.href === "javascript:;") {
			const B = document.querySelector(".chapterNav .nextArrow a");
			B.click();
		} else {
			A.click();
		}
	};
	try {
		verse.play();
	} catch (_) {}
}

if (
	["/index", "/dedication", "/introduction", "/publishers-note"].includes(
		location.pathname.toLowerCase(),
	)
) {
	document.querySelector("aside").remove();
}

function removeAd(selector) {
	const ad = document.querySelector(selector);
	if (ad) ad.remove();
}

removeAd("img[src='/public/images/upi_bg.png']");
