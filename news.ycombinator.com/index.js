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
`;
const sheet = Object.assign(document.createElement("style"), {
	type: "text/css",
	innerText: styles,
});
document.head.appendChild(sheet);
