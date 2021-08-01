/**
 * YouTube userscript.
 * 
 */

/**
 * Remove garbage <div> from transcript view
 */
const styles = `
	ytd-transcript-renderer #content {
		display: none;
	}
`

const sheet = document.createElement("style")
sheet.type = "text/css";
sheet.innerText = styles;
document.head.appendChild(sheet);


/**
 * Show channel ID on pages that use "pretty" URLS
 */
if (/^\/c\//.test(location.pathname)) {
	const chanId = document.createElement('a');
	const meta = ytInitialData.metadata.channelMetadataRenderer;

	chanId.textContent = meta.externalId;
	chanId.href = meta.channelUrl;

	const p = document.createElement('p');
	p.appendChild(chanId);

	document.getElementById("channel-name").appendChild(p);
}