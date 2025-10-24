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
setTimeout(() => {
	const customFeeds = document.querySelector(
		'[aria-controls="multireddits_section"]',
	);
	if (customFeeds.ariaExpanded === "true") {
		customFeeds.click();
	}
}, 500);

// Select the node that will be observed for mutations
const targetNode = document.querySelector(".ListingLayout-outerContainer");

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

let runs = 0;
const observer = new MutationObserver((mutations, _) => {
	for (const mut of mutations) {
		if (mut.target.tagName !== "DIV") {
			continue;
		}

		if (mut.type === "childList") {
			run_it(mut.target);
			console.log("ran it", ++runs, "times", mut);
		}
	}
});

observer.observe(targetNode, config);
/**
 *
 */
function run_it(node = document) {
	if (node.marked) {
		console.log("avoided extraneous call");
		return;
	}

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
					'url("http://www.reddit.com/static/favicon.ico")';
			} else if (/http:\/\/(?:www\.)?youtube\.com/.test(href)) {
				element.className += " favicon";
				element.style.color = "red";
				element.style.backgroundImage =
					'url("http://s.ytimg.com/yt/favicon.ico")';
				if (href === element.textContent) {
					element.textContent = "{Video}";
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
					"url(http://slippyd.com/assets/70/logo.facebook.favicon.s16.png)";
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
					'url("http://en.wikipedia.org/favicon.ico")';
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
