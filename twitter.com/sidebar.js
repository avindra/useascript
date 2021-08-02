
/**
 * @param {Function} callback A method to invoke when button is clicked.
 */
export const setup = (callback) => {
	const root = document.querySelector('header nav');
	const link = root.firstChild.nextElementSibling;
	const button = link.cloneNode(true);
	button.querySelector('span').textContent = 'Script';
	button.removeAttribute('href');
	button.onclick = callback;

	root.prepend(button);
}