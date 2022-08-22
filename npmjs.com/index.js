const pkg = document.querySelector("#top h2 span");
if (pkg) {
	const bp = document.createElement("a");
	bp.href = `https://bundlephobia.com/package/${pkg.textContent}`;
	bp.textContent = "Bundlephobia";
	pkg.parentNode.append(bp);

	const pp = document.createElement("a");
	pp.href = `https://packagephobia.com/result?p=${pkg.textContent}`;
	pp.textContent = "Packagephobia";
	pkg.parentNode.append(pp);
}
