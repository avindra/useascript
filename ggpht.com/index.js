const S = /s\d+-([cp])/;

// default size to 4096px
if (!location.href.includes("4096")) {
	const dest = location.href.replace(S, "s4096-$1");
	location.href = dest;
}
