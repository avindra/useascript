
import {onBrowse} from './../util.js';

onBrowse(() => {
	const fileRegex = /\/([^/]+)\/([^/]+)\/blob\/([^]+)\/(.+)/;

	const fileMatch = location.pathname.match(fileRegex);

	if (fileMatch) {
		const btns = document.querySelector(".BtnGroup");
		if (btns) {
			const [, user, repo, branch, file] = fileMatch;

			const jsd = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${file}`;
			const a = document.createElement('a');
			a.href = jsd;
			a.textContent = `JsDelivr`;
			a.className = `btn-sm btn BtnGroup-item`;

			btns.appendChild(a);
		}
	}
});