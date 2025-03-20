const S = /s\d+-([cp])/;

// default size to 4096px
if (!location.href.includes("4096")) {
	const dest = location.href.replace(S, "s4096-$1");
	if (dest !== location.href) {
		location.replace(dest);
	}

	const dest2 = location.href.replace(/w\d+-h\d+/, "w4096-h4096");
	if (dest2 !== location.href) {
		location.replace(dest2);
	}
}
