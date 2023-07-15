const styles = `
	#content-area  {
		background-color: rgb(95, 103, 111);
	}
	#breadcrumbs nav {
		background-color: #bbdcff;
		border-radius: 3px;
	}
	#footer strong, #footer a {
		color: white;
	}
	#sponsors, #footer-legal {
		display: none;
	}
	.card-body {
		background-color: #e6e6e6;
	}
`;
const sheet = document.createElement("style");
sheet.type = "text/css";
sheet.innerText = styles;
document.head.appendChild(sheet);
