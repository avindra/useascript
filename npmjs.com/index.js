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

if (repos) {
	const pkg = document.title.substring(0, document.title.length - 6);

	const sites = [
		["Bundlephobia", `https://bundlephobia.com/package/${pkg}`],
		["anvaka", `https://npm.anvaka.com/#/view/2d/${pkg}`],
		["npmgraph", `https://npmgraph.js.org/?q=${pkg}`],
		["Packagephobia", `https://packagephobia.com/result?p=${pkg}`],
		["pkg-size.dev", `https://pkg-size.dev/${pkg}`],
		["npm-stat", `https://npm-stat.com/charts.html?package=${pkg}`],
	];

	for (const [label, site] of sites) {
		list.append(listItem(label, site));
	}

	repos.parentNode.append(list);
}
