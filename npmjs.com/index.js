
const pkg = document.querySelector("#top h2 span");
if (pkg) {
	const bp = document.createElement('a');
	bp.href = `https://bundlephobia.com/package/${pkg.textContent}`;
	bp.textContent = 'Bundlephobia';
	pkg.append(bp);

}