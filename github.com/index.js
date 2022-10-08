import { onBrowse } from './../util.js';

onBrowse(() => {
	// redir deprecated account. TODO: delet this
	if (location.pathname === "/mediawiki") {
		location.pathname = "/wikimedia";
	}

	const fileRegex = /\/([^/]+)\/([^/]+)\/blob\/([^]+)\/(.+)/;

	const fileMatch = location.pathname.match(fileRegex);

	if (fileMatch) {
		const btns = document.querySelector(".repository-content .BtnGroup");
		if (btns) {
			const [, user, repo, branch, file] = fileMatch;

			const jsd = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${file}`;
			const a = document.createElement("a");
			a.href = jsd;
			a.textContent = `JsDelivr`;
			a.className = `btn-sm btn BtnGroup-item`;

			btns.appendChild(a);
		}
	} else if(/\/compare\//.test(location.pathname)) {
		const commits = document.querySelectorAll("#commits_bucket .Details:not(.branch-action-item)");
		if (commits.length === 0) {
			return;
		}


		const ctr = document.querySelector(".range-editor");
		if (ctr){
			const gen = document.createElement("button");
			gen.textContent = `Show ${commits.length} commits`;
			gen.onclick = () => {
				const all = Array.from(commits).map( node => {
					const inner = node.querySelector('p');
					return inner.textContent.trim().replace(/[\s\n…]+$/g, '');
				});
				console.log(all, all.join("\n"));
			};
			ctr.appendChild(gen);
		}
	}

});
