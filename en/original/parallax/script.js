window.addEventListener("scroll", function() {
	let y = window.pageYOffset;

	document.getElementById('yellow').style.marginTop = 400 + (y/6.5) + "px";
	document.getElementById('green').style.marginTop = 200 + (y/3.25) + "px";
	document.getElementById('blue').style.marginTop = 0 + (y/2.166) + "px";
})