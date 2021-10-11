let bar = document.getElementById('signUpModal');

if (bar) {
	bar.remove();
	document.body.className = '';
}

bar = document.querySelector('.modal-backdrop');

if (bar) bar.remove();

bar = document.getElementById('signUpFooter');

if (bar) bar.remove();