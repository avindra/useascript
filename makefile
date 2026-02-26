snag:
	esbuild index.js --bundle > bundle.js
	cat preamble bundle.js | wl-copy
