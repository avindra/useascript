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
[".fbLikeBoxHolder", ".subscribe"].forEach((css) => {
	const like = document.querySelector(css);
	if (like) {
		like.parentNode.remove();
	}
});

/**
 * remove superflous footer text
 */
const copy = document.querySelector(".screen.footer #copyright:nth-of-type(3)");
if (copy) {
	copy.remove();
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
