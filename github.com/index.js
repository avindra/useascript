import { onBrowse, sleep, until } from "./../util.js";

async function main() {
	const fileRegex = /\/([^/]+)\/([^/]+)\/blob\/(.+)\/(.+)/;
	const fileMatch = location.pathname.match(fileRegex);

	if (fileMatch) {
		until(
			() =>
				document.querySelector(
					"#repos-sticky-header div[class^=prc-ButtonGroup]",
				),
			(btns) => {
				const [, user, repo, branch, file] = fileMatch;

				const href = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${branch}/${file}`;
				const A = Object.assign(document.createElement("a"), {
					href,
					textContent: "JsDelivr",
					className: "btn-sm btn BtnGroup-item",
				});
				btns.appendChild(A);
			},
		);
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
			}

			await sleep(500);
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
}

onBrowse(main);
