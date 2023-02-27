import { onBrowse, sleep } from "./../util.js";

onBrowse(async () => {
	const fileRegex = /\/([^/]+)\/([^/]+)\/blob\/([^]+)\/(.+)/;

	const fileMatch = location.pathname.match(fileRegex);

	if (fileMatch) {
		const btns = document.querySelector("div[class^=ButtonGroup]");
		if (btns) {
			const [, user, repo, branch, file] = fileMatch;

			const jsd = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${file}`;
			const a = document.createElement("a");
			a.href = jsd;
			a.textContent = "JsDelivr";
			a.className = "btn-sm btn BtnGroup-item";

			btns.appendChild(a);
		}
	} else if (/\/compare\//.test(location.pathname)) {
		const getCommits = () =>
			document.querySelectorAll(
				"#commits_bucket .Details:not(.branch-action-item)",
			);
		let attempts = 0;
		let commits;
		do {
			commits = getCommits();
			if (commits.length > 0) {
				break;
			} else {
				await sleep(500);
			}
		} while (++attempts < 10);

		const ctr = document.querySelector(".range-editor");
		if (ctr) {
			const gen = document.createElement("button");
			gen.textContent = `Show ${commits.length} commits`;
			gen.onclick = () => {
				commits = getCommits();
				const all = Array.from(commits).map((node) => {
					const inner = node.querySelector("p");
					return inner.textContent.trim().replace(/[\s\n…]+$/g, "");
				});
				console.log(all, all.join("\n"));
			};
			ctr.appendChild(gen);
		}
	}

	const pageHeadActions = document.querySelectorAll(".pagehead-actions > *");
	if (pageHeadActions.length === 3 || pageHeadActions.length === 4) {
		const Repo = document.querySelector('[itemprop="name"] a');
		if (Repo) {
			let page_head = document.getElementsByClassName("pagehead-actions");
			if (page_head.length > 0) {
				page_head = page_head[0];
				const a = document.createElement("a");
				a.className = "btn-sm btn";
				a.href = `${Repo.href}/watchers`;
				a.textContent = "Watchers";

				const a2 = document.createElement("a");
				a2.className = "btn-sm btn";
				a2.href = `${Repo.href}/stargazers`;
				a2.textContent = "Stargazers";

				page_head.appendChild(a);
				page_head.appendChild(a2);
			}
		}
	}
});
