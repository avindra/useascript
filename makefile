.PHONY: bundle snag
.DEFAULT_GOAL := snag

bundle:
	esbuild index.js --bundle --minify --outfile=useascript.user.js

snag: bundle
	cat useascript.meta.js useascript.user.js | wl-copy
