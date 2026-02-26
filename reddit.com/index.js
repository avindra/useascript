import { sleep } from "../util";

/**
 * revival of
 * @see https://web.archive.org/web/20131105145427/http://userscripts.org/scripts/review/86301
 */
const styles = `
	.arrow.down {min-width:15px;min-height:14px;}
	.titText {font-size:smaller;color:darkSlateGray;font-weight:bold}
	.favicon {padding-right:17px;font-weight:bold;background-repeat:no-repeat;background-position:right center}
`;
const sheet = document.createElement("style");
sheet.type = "text/css";
sheet.innerText = styles;
document.head.appendChild(sheet);

const sections = location.pathname.split(/(?!^)\//);
const loc = sections[0];

if (["/media"].includes(loc)) {
	//const i = new URLSearchParams(location.search).get("url");

	let img = document.getElementsByTagName("img")[0];
	const c = document.createElement("canvas");
	const ctx = c.getContext("2d");

	img.crossOrigin = "anonymous";
	img = img.cloneNode(true);

	img.onload = () => {
		c.width = img.naturalWidth;
		c.height = img.naturalHeight;
		ctx.drawImage(img, 0, 0);
		c.toBlob(
			(blob) => {
				const objectURL = URL.createObjectURL(blob);
				location.href = objectURL;
			},
			"image/jpeg",
			1,
		);
	};
}

// hide multi-reddits by default
(async () => {
	while (true) {
		const customFeeds = document.querySelector(
			'[aria-controls="multireddits_section"]',
		);
		if (customFeeds) {
			if (customFeeds.ariaExpanded === "true") {
				customFeeds.click();
			}
			break;
		}
		await sleep(500);
	}
})();

setTimeout(() => {
	console.log("FNS", document.querySelector("shreddit-comment-tree"));
	run_it(document.querySelector("main"));
}, 1000);

/**
 *
 */
function run_it(node) {
	if (["/user", "/r"].includes(loc)) {
		for (const element of node.querySelectorAll("a")) {
			const href = element.getAttribute("href");
			if (!href) {
				return;
			}
			if (element.title) {
				if (href !== "/s") {
					// prevent revealing spoilers
					const tit = document.createElement("span");
					tit.textContent = `(${element.title})`;
					tit.className = "titText";
					element.parentNode.insertBefore(tit, element);
				}
			}
			if (/\.(?:(jpe?|pn)g|gif|bmp)/.test(href)) {
				element.style.color = "blue";
				element.style.fontWeight = "bold";
				if (href === element.textContent) {
					element.textContent = "{Image}";
				}
			} else if (href.indexOf("/") === 0) {
			} else if (/https?:\/\/(?:www\.)?reddit\.com/.test(href)) {
				element.className += " favicon";
				element.style.color = "crimson";
				element.style.backgroundImage =
					'url("https://www.reddit.com/static/favicon.ico")';
			} else if (/https?:\/\/(?:(www|music)\.)?youtube\.com/.test(href)) {
				element.className += " favicon";
				element.style.color = "red";
				element.style.backgroundImage =
					'url("https://s.ytimg.com/yt/favicon.ico")';
				if (href === element.textContent) {
					element.textContent = "{watch on YouTube}";
				}
			} else if (/http:\/\/(?:www\.)?facebook\.com/.test(href)) {
				if (href.match(/[&?]id=(\d+)/)) {
					element.innerHTML = `Profile: {${RegExp.$1}}`;
				} else if (element.pathname.match(/^\/([^?&#]+)/)) {
					element.innerHTML = `Profile: ${RegExp.$1}`;
				}
				element.className += " favicon";
				element.style.color = "darkBlue";
				element.style.backgroundImage =
					'url("https://facebook.com/favicon.ico")';
			} else if (/http:\/\/(?:www\.)?en\.wikipedia\.org\//.test(href)) {
				if (/\/wiki\/([^/]+)/.test(element.pathname)) {
					if (element.textContent === href) {
						element.innerHTML = "";
					}
					element.innerHTML += ` <small>{${unescape(RegExp.$1).replace(
						/_/g,
						" ",
					)}}</small>`;
				}
				element.style.color = "black";
				element.style.backgroundImage =
					'url("https://en.wikipedia.org/favicon.ico")';
				element.className += " favicon";
			} else if (
				!element.href.startsWith(`${location.protocol}//${location.host}`)
			) {
				element.className += " favicon";
				element.style.color = "darkGreen";
				element.style.backgroundImage =
					'url("https://upload.wikimedia.org/wikipedia/commons/0/0f/External-link-ltr-icon_Dark.png")';
				element.style.paddingRight = "11px";
			}
		}
	}
	node.marked = true;
}
