const iframe = document.getElementsByTagName('iframe')[0];

document.getElementById('logo').onclick = function(){iframe.src = 'page0.html'}
document.getElementById('page1').onclick = function(){iframe.src = 'page1.html'}
document.getElementById('page2').onclick = function(){iframe.src = 'page2.html'}
document.getElementById('page3').onclick = function(){iframe.src = 'page3.html'}


document.getElementById('cross').onclick = function() {
	document.getElementById('explanation').style.display = 'none';
}

document.getElementById('btn').onclick = function() {
	document.getElementById('explanation').style.display = 'none';
}