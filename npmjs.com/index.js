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
	const pkg = document.querySelector("#top h1 span").textContent;
	const sites = [
		["Bundlephobia", `https://bundlephobia.com/package/${pkg}`],
		["npm-stat", `https://npm-stat.com/charts.html?package=${pkg}`],
		["Packagephobia", `https://packagephobia.com/result?p=${pkg}`],
		["pkg-size.dev", `https://pkg-size.dev/${pkg}`],
	];

	sites.forEach((data) => {
		const [label, site] = data;
		list.append(listItem(label, site));
	});

	repos.parentNode.append(list);
}
