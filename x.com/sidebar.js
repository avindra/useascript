import { until } from "../util.js";

/**
 * @param {Function} callback A method to invoke when button is clicked.
 */
export const setup = async (callback) => {
	until(
		() => document.querySelector("header nav"),
		(root) => init(root, callback),
	);
};

const init = (root, callback) => {
	// copy an existing button to use as a template for styling
	const link = root.firstChild;
	const button = link.cloneNode(true);

	// setup scroll icon
	const scroll = document.createTextNode("📜");
	const icon = button.firstChild.firstChild;
	icon.replaceWith(scroll);

	scroll.parentNode.style.fontSize = "25px";

	const label = button.querySelector("span");
	// label is hidden at smaller resolutions
	if (label) {
		label.textContent = "Useascript";
		Object.assign(label.style, {
			fontFamily: "monospace",
			fontSize: "smaller",
		});
	}
	button.removeAttribute("href");
	button.onclick = callback;

	root.prepend(button);
};
