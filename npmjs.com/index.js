const styles = `
main {
background-color: rebeccapurple;
}
#top {
background-color: wheat;
}
header div:last-child {
background-color: blanchedalmond;
}
header div:nth-child(2) {
display:none;
}
#footer {
background-color: #dfbf3f;
}
footer.mt4 {
margin-top:0;
}
[role="tabpanel"] {
background-color:#ffd381;
}
#main > div > div:first-child {
background-color:#ffdae5;
}
`;
document.head.appendChild(
	Object.assign(document.createElement("style"), {
		type: "text/css",
		innerText: styles,
	}),
);

const repos = document.getElementById("repository");

const list = document.createElement("ul");

const listItem = (text, href) => {
	const li = document.createElement("li");
	const link = document.createElement("a");

	link.href = href;
	link.textContent = text;
	li.append(link);
	return li;
};

function main() {
	const pkg = document.title.substring(0, document.title.length - 6);

	const sites = [
		["Bundlephobia", `https://bundlephobia.com/package/${pkg}`],
		["anvaka", `https://npm.anvaka.com/#/view/2d/${pkg}`],
		["npmgraph", `https://npmgraph.js.org/?q=${pkg}`],
		["Packagephobia", `https://packagephobia.com/result?p=${pkg}`],
		["pkg-size.dev", `https://pkg-size.dev/${pkg}`],
		["npm-stat", `https://npm-stat.com/charts.html?package=${pkg}`],
		["deps.dev", `https://deps.dev/npm/${pkg}`],
		["npmx", `https://npmx.dev/package/${pkg}`],
	];

	for (const [label, site] of sites) {
		list.append(listItem(label, site));
	}

	repos.parentNode.append(list);
}

if (repos) {
	main();
}
