import { setup as setupS } from "./sidebar.js";
import { setup as setupNews } from "./trends.js";

const toggleNews = setupNews();
setupS(() => toggleNews());
