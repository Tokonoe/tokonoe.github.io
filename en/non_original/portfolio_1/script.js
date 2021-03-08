const elements = [
[document.getElementById('input-name'), document.getElementById('input-name-title')],
[document.getElementById('input-email'), document.getElementById('input-email-title')],
[document.getElementById('input-phone'), document.getElementById('input-phone-title')],
[document.getElementById('input-message'), document.getElementById('input-message-title')]];


//update navbar
const scroll = function() {
	if(document.documentElement.scrollTop < 400) {
		document.getElementById('about').setAttribute('class', 'scroll');
		document.getElementById('portfolio').removeAttribute('class');
		document.getElementById('contacts').removeAttribute('class');
	}
	else if(document.documentElement.scrollTop > 400 && document.documentElement.scrollTop < 1600) {
		document.getElementById('portfolio').setAttribute('class', 'scroll');
		document.getElementById('contacts').removeAttribute('class');
		document.getElementById('about').removeAttribute('class');
	}
	else {
		document.getElementById('contacts').setAttribute('class', 'scroll');
		document.getElementById('about').removeAttribute('class');
		document.getElementById('portfolio').removeAttribute('class');
	}
}


//onkeyup update opacity
for(let i=0;i<(elements.length);i++) {
	elements[i][0].onkeyup = function() {
		elements[i][0].value === '' ? elements[i][1].style.opacity = 0 : elements[i][1].style.opacity = 1;
	}
}


//onclick update color
window.onclick = function() {
	for(i=0;i<elements.length;i++) {
		elements[i][0] === document.activeElement ? elements[i][1].style.color = '#722872' : elements[i][1].style.color = '#aaa';		
	}
}


//update navbar on scroll
window.onscroll = function() {scroll()};


//update navbar on launch
scroll();