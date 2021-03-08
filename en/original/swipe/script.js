// PRELOAD IMGS

const urls = ['pictures/red.jpg','pictures/blue.jpg','pictures/yellow.jpg','pictures/green.jpg'];

const preload = function(url) {
    var img=new Image();
    img.src=url;
}

for(let x in urls) {preload(urls[x])}

//



const squares = [blue, yellow, red, green];
let x = y = startX = startY = mouseX = mouseY = mouseStartX = mouseStartY = mouseDown = startPosition = undefined;



// SWIPE FUNCTIONS

const right_swipe = function() {
	if(margin.style.marginLeft === '') {margin.style.marginLeft = '-100%'}
	else if(margin.style.marginLeft === '-100%') {margin.style.marginLeft = '-200%'}
	else if(margin.style.marginLeft === '-200%') {margin.style.marginLeft = '-300%'}
}

const left_swipe = function() {
	if(margin.style.marginLeft === '-300%') {margin.style.marginLeft = '-200%'}
	else if(margin.style.marginLeft === '-200%') {margin.style.marginLeft = '-100%'}
	else if(margin.style.marginLeft === '-100%') {margin.style.marginLeft = ''}
}



// DETECT SWIPE & PREVIEW - MOUSE FUNCTIONS

document.addEventListener('mousedown', function(e) {
	mouseStartX = e.clientX;
	mouseStartY = e.clientY;

	mouseDown = true;
	mouseStart = e.clientX;
});

document.addEventListener('mousemove', function(e){
	mouseX = e.clientX;
	mouseY = e.clientY;	

	if(mouseDown && e.clientX < mouseStart) {
		red.style.transition = '0s';
		red.style.marginLeft = -(((mouseStart - e.clientX))/4) + 'px';
	}
	if(mouseDown && e.clientX > mouseStart) {
		red.style.transition = '0s';
		red.style.marginLeft = (((e.clientX - mouseStart))/4) + 'px';
	}
});

document.addEventListener('mouseup', function(e) {
	// if absolute values cause problemes change to fraction of screen size
	// remove Y conditions if that causes problems
	if(mouseStartX - mouseX > 200 && mouseStartY - mouseY < 100 && mouseStartY - mouseY > -100) {right_swipe()}
	if(mouseStartX - mouseX < -200 && mouseStartY - mouseY < 100 && mouseStartY - mouseY > -100) {left_swipe()}

	mouseDown = false;
	red.style.transition = '.5s';
	red.style.marginLeft = '0px';
});



// DETECT SWIPE & PREVIEW - TOUCH FUNCTIONS

document.addEventListener('touchstart', function(e) {
	startX = e.touches[0].clientX;
	startY = e.touches[0].clientY;

	mouseStart = e.touches[0].clientX;
});

document.addEventListener('touchmove', function(e){
	x = e.touches[0].clientX;
	y = e.touches[0].clientY;

	if(e.touches[0].clientX < mouseStart) {
		red.style.transition = '0s';
		red.style.marginLeft = -(((mouseStart - e.touches[0].clientX))/4) + 'px';
	}
	if(e.touches[0].clientX > mouseStart) {
		red.style.transition = '0s';
		red.style.marginLeft = (((e.touches[0].clientX - mouseStart))/4) + 'px';
	}
});

document.addEventListener('touchend', function(e) {
	// if absolute values cause problemes change to fraction of screen size
	// remove Y conditions if that causes problems
	if(startX - x > 100 && startY - y < 100 && startY - y > -100) {right_swipe()}
	if(startX - x < -100 && startY - y < 100 && startY - y > -100) {left_swipe()}
	x = y = startX = startY = 0;

	red.style.transition = '.5s';
	red.style.marginLeft = '0px';
});