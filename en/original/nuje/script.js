document.getElementsByTagName('body')[0].onload = function(){
	document.getElementById('loading').style.display = 'none';

	let x = 0;

	for(i=0;i<3;i++) {
		document.getElementsByClassName('sticky')[i].style.height = window.innerHeight - x + 'px';
		x += 100;
	}

	document.getElementsByClassName('sticky')[3].style.height = window.innerHeight + 'px';




	setTimeout(function(){document.getElementsByClassName('title')[0].style.opacity = 1},1000);
	setTimeout(function(){document.getElementsByClassName('text')[0].style.opacity = 1},3000);


	setTimeout(function(){
		document.getElementById('arrow1').style.display = 'block';
		setTimeout(function(){document.getElementById('arrow1').style.opacity = .9},1);
	},6000);


	document.getElementById('arrow1').addEventListener('click', function(){
		window.scrollTo(0,window.innerHeight-100);
		
		setTimeout(function(){document.getElementsByClassName('title')[1].style.opacity = 1},1000);
		setTimeout(function(){document.getElementsByClassName('text')[1].style.opacity = 1},3000);
		
		setTimeout(function(){
			document.getElementById('arrow2').style.display = 'block';
			setTimeout(function(){document.getElementById('arrow2').style.opacity = .9},1);
		},6000);
	})


	document.getElementById('arrow2').addEventListener('click', function(){
		window.scrollTo(0,(window.innerHeight-150)*2);
		
		setTimeout(function(){document.getElementsByClassName('title')[2].style.opacity = 1},1000);
		setTimeout(function(){document.getElementsByClassName('text')[2].style.opacity = 1},3000);

		setTimeout(function(){
			document.getElementById('arrow3').style.display = 'block';
			setTimeout(function(){document.getElementById('arrow3').style.opacity = .9},1);
		},6000);
	})


	document.getElementById('arrow3').addEventListener('click', function(){
		window.scrollTo(0,10000);
		
		document.getElementsByTagName('body')[0].style.height = 'auto';
		document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
	})




	if(window.pageYOffset === 0) {
		document.getElementsByTagName('body')[0].style.height = '100%';
		document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
	}
	else {
		for(x=0;x<3;x++) {
			document.getElementsByTagName('img')[x].style.transition = 0;
			document.getElementsByTagName('img')[x].style.opacity = .9;
			document.getElementsByTagName('img')[x].style.display = 'block';

			document.getElementsByClassName('title')[x].style.transition = 'default';
			document.getElementsByClassName('text')[x].style.transition = 'default';
			document.getElementsByClassName('title')[x].style.opacity = 1;
			document.getElementsByClassName('text')[x].style.opacity = 1;
		}
	}
}