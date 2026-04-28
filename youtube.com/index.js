import { until } from "../util.js";

/**
 * Show channel ID on pages that use "pretty" URLS
 */
if (
	/^\/(?:c|user|@)\/?/.test(location.pathname) ||
	document.getElementById("page-header")
) {
	const chanId = document.createElement("a");
	const meta = ytInitialData.metadata.channelMetadataRenderer;

	chanId.textContent = meta.externalId;
	chanId.href = meta.channelUrl;

	const p = document.createElement("p");
	p.appendChild(chanId);

	until(
		() => document.querySelector(".ytPageHeaderViewModelContentMetadata"),
		(title) => title.nextElementSibling.prepend(p),
	);
}
