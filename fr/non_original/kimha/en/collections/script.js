window.onload = function(){

	const boxes = ['audiable','some','core','doubles-and-couples','partake'];

	setInterval(function(){
		document.getElementById('nav-mobile').style.top = document.getElementsByTagName('nav')[0].clientHeight + 'px';
		document.getElementById('audiable').style.marginTop = document.getElementsByTagName('nav')[0].clientHeight + 'px';

		for(x in boxes) {
			document.getElementById(boxes[x]).style.height = window.innerHeight - document.getElementsByTagName('nav')[0].clientHeight + 'px'
		}
	},10)

	$('#nav-menu').click(function(){
		$('#nav-mobile').slideToggle();
	})
	
}