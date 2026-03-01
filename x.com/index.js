import { setup as setupS } from "./sidebar.js";
import { setup as setupNews } from "./trends.js";

const toggleNews = setupNews();
setupS(() => toggleNews());

const sheet = document.createElement("style");
sheet.textContent = `
	header > div {
		margin-left: 0 !important;
	}
`;
document.head.appendChild(sheet);
