window.onload = function(){
	let mouse = document.getElementsByTagName('div')[0];
	let ghost = document.getElementsByTagName('img')[0];

	setInterval(function(){
		mouse.style.height = mouse.clientWidth + 'px';
	},10)

	document.addEventListener('mousemove', function(e){
		mouse.style.left = e.clientX-mouse.clientWidth/2 + 'px';
		mouse.style.top = e.clientY-mouse.clientWidth/2 + 'px';
	})

	document.addEventListener('touchstart', function(e){
		mouse.style.left = e.touches[0].clientX-mouse.clientWidth/2 + 'px';
		mouse.style.top = e.touches[0].clientY-mouse.clientWidth/2 + 'px';
	})

	document.addEventListener('touchmove', function(e){
		mouse.style.left = e.touches[0].clientX-mouse.clientWidth/2 + 'px';
		mouse.style.top = e.touches[0].clientY-mouse.clientWidth/2 + 'px';
	})



	function preventBehavior(e) {e.preventDefault()};

	document.addEventListener("touchmove", preventBehavior, {passive: false});



	if(window.innerWidth < window.innerHeight) {
		mouse.style.transition = 'top 700ms';
		setTimeout(function(){
			mouse.style.top = document.body.clientHeight/2-mouse.clientWidth/2 + 'px';
			mouse.style.left = document.body.clientWidth/2-mouse.clientWidth/2 + 'px';
		},800)
		setTimeout(function(){mouse.style.transition = 'none'},1500)
	}



	ghost.style.left = Math.floor(Math.random()*100) + '%';
	ghost.style.top = Math.floor(Math.random()*100) + '%';

	setInterval(function(){
		
	},15000)

	setInterval(function(){
		ghost.style.opacity = .115;
		ghost.style.left = Math.floor(Math.random()*100) + '%';
		ghost.style.top = Math.floor(Math.random()*100) + '%';
		setTimeout(function(){ghost.style.opacity = 0},2000)
	},15000)
}