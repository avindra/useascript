const styles = `
	body {
		background-color: #000d4b;
	}
	#hnmain {
		background-color: #131b42;
		color:white;
	}

	td[bgcolor="#ff6600"] {
		background-color: #ffc071;
	}
	.c00 {
		color: white
	}
	.c00 a:link, a:link {
		color: #ffc071;
	}
	a:visited {
		color: #7e5828;
	}
	blockquote {
		border-left: 4px solid #ffc071;
		padding-left: 1em;
		color: #ffc071;
	}
`;
const sheet = Object.assign(document.createElement("style"), {
	type: "text/css",
	innerText: styles,
});
document.head.appendChild(sheet);

const anchor = document.body.querySelector(".hnname").nextElementSibling;

anchor.prepend(
	Object.assign(document.createElement("a"), {
		href: "best",
		textContent: "best",
	}),
	document.createTextNode(" | "),
);

anchor.prepend(
	Object.assign(document.createElement("a"), {
		href: "leaders",
		textContent: "leaders",
	}),
	document.createTextNode(" | "),
);

const processed = new WeakSet();

function esc(s) {
	return s.replace(
		/[&<>]/g,
		(m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[m],
	);
}

function inline(text) {
	let t = esc(text);
	t = t.replace(/`([^`]+)`/g, "<code>$1</code>");
	t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
	t = t.replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
	t = t.replace(
		/(https?:\/\/[^\s<]+)/g,
		'<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>',
	);
	return t;
}

function parseComment(text) {
	const lines = text.replace(/\r\n?/g, "\n").split("\n");
	const out = [];
	let i = 0;

	while (i < lines.length) {
		if (!lines[i].trim()) {
			i++;
			continue;
		}

		if (/^\s*>/.test(lines[i])) {
			const quote = [];
			while (i < lines.length && /^\s*>/.test(lines[i])) {
				quote.push(lines[i++].replace(/^\s*>\s?/, ""));
			}
			out.push(
				"<blockquote>" + quote.map(inline).join("<br>") + "</blockquote>",
			);
			continue;
		}

		if (/^\s{2,}\S/.test(lines[i])) {
			const code = [];
			while (
				i < lines.length &&
				(/^\s{2,}\S/.test(lines[i]) || !lines[i].trim())
			) {
				code.push(lines[i++].replace(/^\s{2}/, ""));
			}
			out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>");
			continue;
		}

		const para = [];
		while (
			i < lines.length &&
			lines[i].trim() &&
			!/^\s*>/.test(lines[i]) &&
			!/^\s{2,}\S/.test(lines[i])
		) {
			para.push(lines[i++]);
		}
		out.push("<p>" + inline(para.join(" ")) + "</p>");
	}

	return out.join("");
}

function upgradeComment(comment) {
	if (!comment || processed.has(comment)) return;
	const text = comment.querySelector(".commtext");
	if (!text) return;

	const raw = text.innerText;
	text.innerHTML = parseComment(raw);
	processed.add(comment);
}

document.querySelectorAll(".athing.comtr").forEach(upgradeComment);
