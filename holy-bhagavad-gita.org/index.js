/**
 * @see  https://www.wikidata.org/wiki/Q108659922
 */

/**
 * replace battlefield image with solid color
 */
const b = document.body;
b.style.background = "#131b42";
b.style.backgroundImage = "none";

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
removeAd(".copyrightwarning");
