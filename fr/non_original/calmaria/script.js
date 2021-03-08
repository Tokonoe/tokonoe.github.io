const set = function(){	
	document.getElementById('animation').style.display = 'block';
	document.getElementById('phones_1').style.display = 'block';
	document.getElementById('phones_2').style.display = 'block';
	
	document.getElementById('animation').style.top = (document.getElementById('box1').getBoundingClientRect().bottom + window.scrollY) - parseInt(window.getComputedStyle(document.getElementById('animation')).getPropertyValue('height'))/2 + 'px';
	document.getElementById('phones_1').style.top = (document.getElementById('box2').getBoundingClientRect().bottom + window.scrollY) - parseInt(window.getComputedStyle(document.getElementById('phones_1')).getPropertyValue('height'))/2 + 'px';
	document.getElementById('phones_2').style.top = (document.getElementById('box3').getBoundingClientRect().bottom + window.scrollY) - parseInt(window.getComputedStyle(document.getElementById('phones_2')).getPropertyValue('height'))/2 + 'px';

	document.getElementById('sun').style.height = document.getElementById('sun').clientWidth + 'px'; 
}

window.onload = function() {set()}
window.onresize = function() {set()}