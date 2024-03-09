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
	list.append(
		listItem("Bundlephobia", `https://bundlephobia.com/package/${pkg}`),
	);

	list.append(
		listItem("npm-stat", `https://npm-stat.com/charts.html?package=${pkg}`),
	);

	list.append(
		listItem("Packagephobia", `https://packagephobia.com/result?p=${pkg}`),
	);

	list.append(
		listItem("pkg-size.dev", `https://pkg-size.dev/${pkg}`)
	);

	repos.parentNode.append(list);
}
