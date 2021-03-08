const circle = document.getElementById('circle');

//constantly set height of circle to be = to width
setInterval(function(){
	document.getElementById('circle').style.height = document.getElementById('circle').offsetWidth + 'px'; 
},1)

//put circle in center of screen
circle.style.left = window.innerWidth/2 - circle.offsetWidth/2 + 'px';
setTimeout(function(){circle.style.top = window.innerHeight/2 - circle.offsetHeight/2 + 'px';},1);



let circleWidth = 10;
let circleWidthpx = circle.offsetWidth*1.5;
let circleHeightpx;
let locked = false;
setTimeout(function(){circleHeightpx = circle.offsetHeight*1.5},1);

const teleport = function() {
	if(locked === false) {
		locked = true;

		let remove = setInterval(function(){
			circleWidth -= 0.2;
			circleWidth = Math.round(circleWidth * 100) / 100;
			circle.style.width = circleWidth + '%';
			if(circleWidth<0.2) {
				circle.style.left = Math.floor(Math.random()*(window.innerWidth-circleWidthpx)) + 'px';
				circle.style.top = Math.floor(Math.random()*(window.innerHeight-circleHeightpx)) + 'px';
				add();
			}
		},1)

		let add = function() {
			clearInterval(remove);
			let addInt = setInterval(function(){
				circleWidth += 0.2;
				circleWidth = Math.round(circleWidth * 100) / 100;
				circle.style.width = circleWidth + '%';
				if(circleWidth>9.8) {
					clearInterval(addInt);
					locked = false;
				}
			},1)
		}
	}
}


// 1- define condition variables 2- store condition variables and html elements 3- give event listener functions to elements
let inTL = inTC = inTR = inML = inMR = inBL = inBC = inBR = false;
let touchTL = touchTC = touchTR = touchML = touchMM = touchMR = touchBL = touchBC = touchBR = false;
let touchHover = [touchTL,touchTC,touchTR,touchML,touchMM,touchMR,touchBL,touchBC,touchBR]

const ins = [inTL, inTC, inTR, inML, inMR, inBL, inBC, inBR];

//circle movements
setInterval(function(){
	if(ins[0] || touchHover[0]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) + 1 + 'px'}
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) + 1 + 'px'}
	}
	if(ins[1] || touchHover[1]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) + 1 + 'px'}
	}
	if(ins[2] || touchHover[2]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) + 1 + 'px'}
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) - 1 + 'px'}
	}
	if(ins[3] || touchHover[3]) {
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) + 1 + 'px'}
	}
	if(ins[4] || touchHover[5]) {
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) - 1 + 'px'}
	}
	if(ins[5] || touchHover[6]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) - 1 + 'px'}
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) + 1 + 'px'}
	}
	if(ins[6] || touchHover[7]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) - 1 + 'px'}
	}
	if(ins[7] || touchHover[8]) {
		for(i=0;i<4;i++) {circle.style.top = Number(circle.style.top.replace('px','')) - 1 + 'px'}
		for(i=0;i<4;i++) {circle.style.left = Number(circle.style.left.replace('px','')) - 1 + 'px'}
	}
},1);

setInterval(function(){
	if(circle.getBoundingClientRect().top < 0) {teleport()}
	if(circle.getBoundingClientRect().left < 0) {teleport()}
	if(circle.getBoundingClientRect().right > window.innerWidth) {teleport()}
	if(circle.getBoundingClientRect().bottom > window.innerHeight) {teleport()}
},1)





if(!mobileAndTabletcheck()) {
	const pst = ['tl', 'tc', 'tr', 'ml', 'mr', 'bl', 'bc', 'br'];

	const addEventListener = function(i) {
		document.getElementById(pst[i]).addEventListener('mouseenter', function(e) {
			ins[i] = true;
		});
		document.getElementById(pst[i]).addEventListener('mouseleave', function(e) {
			ins[i] = false;
		});
	}

	for(i in ins) {addEventListener(i)}



	//teleport circle to random location if mouse enter center of circle or if circle goes outside window
	document.getElementById('mc').addEventListener('mouseenter', function() {teleport()});
}
else {
	setTimeout(function(){
		circle.addEventListener('touchstart', function(){teleport()})

		let pst;

		const findPst = function(){
			pst = [];

			for(i=0;i<9;i++) {
				let top = document.getElementsByClassName('side')[i].getBoundingClientRect().top;
				let bottom = document.getElementsByClassName('side')[i].getBoundingClientRect().bottom;
				let left = document.getElementsByClassName('side')[i].getBoundingClientRect().left;
				let right = document.getElementsByClassName('side')[i].getBoundingClientRect().right;

				pst.push([top,bottom,left,right]);
			}
		}

		setInterval(function(){
			findPst();
		},1)

		document.addEventListener('touchmove', function(e){
			for(i=0;i<9;i++) {
				if(e.touches[0].pageY > pst[i][0] && e.touches[0].pageY < pst[i][1] && e.touches[0].pageX > pst[i][2] && e.touches[0].pageX < pst[i][3]) {
					if(i === 4) {teleport()}
					else {touchHover[i] = true}
				}
				else {touchHover[i] = false}
			}
		})

		document.addEventListener('touchend', function(){
			touchTL = touchTC = touchTR = touchML = touchMR = touchBL = touchBC = touchBR = false;
		})
	},1)
}