import { sleep } from "../util.js";

/**
 * @param {Function} callback A method to invoke when button is clicked.
 */
export const setup = async (callback) => {
	await sleep(500);

	// copy an existing button to use as a template for styling
	const root = document.querySelector("header nav");
	const link = root.firstChild;
	const button = link.cloneNode(true);

	// setup scroll icon
	const scroll = document.createTextNode("s");
	scroll.textContent = "📜";
	const icon = button.firstChild.firstChild;
	icon.replaceWith(scroll);

	scroll.parentNode.style.fontSize = "25px";

	const label = button.querySelector("span");
	Object.assign(label.style, {
		fontFamily: "monospace",
		fontSize: "smaller",
	});
	if (label) {
		// label is hidden at smaller resolutions
		label.textContent = "Useascript";
	}
	button.removeAttribute("href");
	button.onclick = callback;

	root.prepend(button);
};
