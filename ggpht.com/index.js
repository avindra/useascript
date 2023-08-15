const S = /(yt\d+.(?:ggpht|googleusercontent).com.+)s\d+-c/;

// default size to 4096px
if (!location.href.includes("4096")) {
	const dest = location.href.replace(S, "$1-s4096-c");
	location.href = dest;
}
