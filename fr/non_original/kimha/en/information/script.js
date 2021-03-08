window.onload = function(){

	setInterval(function(){
		document.getElementById('nav-mobile').style.top = document.getElementsByTagName('nav')[0].clientHeight + 'px';
		document.getElementById('main-p').style.marginTop = document.getElementsByTagName('nav')[0].clientHeight + 'px';
	},10)

	$('#nav-menu').click(function(){
		$('#nav-mobile').slideToggle();
	})
	
}