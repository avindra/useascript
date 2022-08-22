/**
 * Repair legacy ASPX link by redirecting
 * to search
 */
if (
	/\/research\/search_the_collection_database\/search_object_(?:details|image).aspx/.test(
		location.pathname,
	)
) {
	const params = new URLSearchParams(location.search.substring(1));
	const oid = params.get("objectId") || params.get("objectid");
	if (oid) {
		location.href = `/collection/search?keyword=${oid}`;
	}
}
