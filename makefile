.PHONY: bundle snag dev
.DEFAULT_GOAL := dev

PORT ?= 5000

dev:
	esbuild --servedir=. --serve=$(PORT) --cors-origin=*

bundle:
	esbuild index.js --bundle --minify --outfile=useascript.user.js

snag: bundle
	cat useascript.meta.js useascript.user.js | wl-copy
