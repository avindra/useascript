/**
 * Show channel ID on pages that use "pretty" URLS
 */
if (/^\/(?:c|user)\//.test(location.pathname) || document.getElementById('channel-header')) {
	const chanId = document.createElement('a');
	const meta = ytInitialData.metadata.channelMetadataRenderer;

	chanId.textContent = meta.externalId;
	chanId.href = meta.channelUrl;

	const p = document.createElement('p');
	p.appendChild(chanId);

	document.getElementById("channel-name").appendChild(p);
}
