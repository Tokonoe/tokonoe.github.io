window.onload = function(){

	setTimeout(function(){
		document.getElementById('info').style.height = window.innerHeight - document.getElementsByTagName('nav')[0].clientHeight + 'px';
	},10);

	setTimeout(function(){
		document.getElementsByTagName('img')[0].style.opacity = 1;

		if(window.scrollY !== 0) {
			document.getElementsByTagName('img')[1].style.opacity = 1;
		}
	},2000);


	
	document.getElementsByTagName('img')[0].addEventListener('click',function(){
		document.getElementById('skills').scrollIntoView();
		setTimeout(function(){document.getElementsByTagName('img')[1].style.opacity = 1},2000);
	})
	document.getElementsByTagName('img')[1].addEventListener('click',function(){
		document.getElementById('interests').scrollIntoView();
	})



	//color panel + navbar underline
	document.addEventListener('scroll', function(){
		setTimeout(function(){
			document.getElementsByTagName('img')[1].style.opacity = 1;
		},2000);



		if(window.scrollY > window.innerHeight && window.scrollY < window.innerHeight*1.5 - document.getElementsByTagName('nav')[0].clientHeight) {
			document.getElementsByTagName('nav')[1].style.backgroundColor = 'rgba(17,17,17,.75)';
		}
		else {document.getElementsByTagName('nav')[1].style.backgroundColor = 'transparent'}

		if(window.scrollY < window.innerHeight) {document.getElementsByTagName('nav')[0].style.backgroundColor = 'rgba(255,255,255,.75)'}
		else {document.getElementsByTagName('nav')[0].style.backgroundColor = 'transparent'}



		for(x=0;x<8;x++) {document.getElementsByTagName('a')[x].style.borderBottom = 'none'}

		let infoTop = document.getElementById('info').getBoundingClientRect().top;
		let infoBottom = document.getElementById('info').getBoundingClientRect().bottom;

		if(infoTop > -(window.innerHeight/2) && infoBottom > window.innerHeight/2) {
			document.getElementsByTagName('a')[0].style.borderBottom = '1px solid black';
			document.getElementsByTagName('a')[4].style.borderBottom = '1px solid white';
		}

		let skillsTop = document.getElementById('skills').getBoundingClientRect().top;
		let skillsBottom = document.getElementById('skills').getBoundingClientRect().bottom;

		if(skillsTop > 0 && skillsTop < window.innerHeight && skillsBottom > 0 && skillsBottom < window.innerHeight) {
			document.getElementsByTagName('a')[1].style.borderBottom = '1px solid black';
			document.getElementsByTagName('a')[5].style.borderBottom = '1px solid white';
		}

		let experienceTop = document.getElementById('experience').getBoundingClientRect().top;
		let experienceBottom = document.getElementById('experience').getBoundingClientRect().bottom;

		if(experienceTop > 0 && experienceTop < window.innerHeight*1.5 && experienceBottom > 0 && experienceBottom < window.innerHeight) {
			document.getElementsByTagName('a')[2].style.borderBottom = '1px solid black';
			document.getElementsByTagName('a')[6].style.borderBottom = '1px solid white';
		}

		let interestsTop = document.getElementById('interests').getBoundingClientRect().top;
		let interestsBottom = document.getElementById('interests').getBoundingClientRect().bottom;

		if(interestsTop > (window.innerHeight/2)-1 && interestsBottom < window.innerHeight && interestsBottom > window.innerHeight-1) {
			document.getElementsByTagName('a')[3].style.borderBottom = '1px solid black';
			document.getElementsByTagName('a')[7].style.borderBottom = '1px solid white';
		}
	})



	//color selection
	document.getElementById('red').addEventListener('click', function(){
		document.getElementsByTagName('link')[2].setAttribute('href', 'pictures/r_icon.png');
		document.getElementById('skills').style.backgroundColor = '#DB4437';
		document.getElementById('experience').style.backgroundColor = '#BD2E22';
	})
	document.getElementById('blue').addEventListener('click', function(){
		document.getElementsByTagName('link')[2].setAttribute('href', 'pictures/b_icon.png');
		document.getElementById('skills').style.backgroundColor = '#4285F4';
		document.getElementById('experience').style.backgroundColor = '#1266F1';
	})
	document.getElementById('green').addEventListener('click', function(){
		document.getElementsByTagName('link')[2].setAttribute('href', 'pictures/g_icon.png');
		document.getElementById('skills').style.backgroundColor = '#13CC72';
		document.getElementById('experience').style.backgroundColor = '#0F9D58';
	})
}