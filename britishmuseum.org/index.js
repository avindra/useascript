
/**
 * Repair legacy ASPX link by redirecting
 * to search
 */
if (location.pathname === "/research/search_the_collection_database/search_object_details.aspx") {
	const params = new URLSearchParams(location.search.substring(1));
	const oid = params.get('objectId') || params.get('objectid');
	if (oid) {
		location.href = `/collection/search?keyword=${oid}`;
	}
}