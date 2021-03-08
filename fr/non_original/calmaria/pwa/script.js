const set = function(){

	if(window.innerWidth < window.innerHeight) {
		document.getElementById('sun').style.width = '50%';
		document.getElementById('sun').style.height = document.getElementById('sun').clientWidth + 'px'; 
	}
	else {
		document.getElementById('sun').style.height = '90%';
		document.getElementById('sun').style.width = document.getElementById('sun').clientHeight + 'px'
	}

	document.getElementById('sun_hitbox').style.width = document.getElementById('sun').clientWidth + 'px'; 
	document.getElementById('sun_hitbox').style.height = document.getElementById('sun').clientHeight + 'px';
}

setInterval(function(){set()},10);

var seconds = 0;
var cycle = 0;
var steps = 0;
var on = false;
var interval;

const reset = function(){
	on = false;
	seconds = 0;
	cycle = 0;
	steps = 0;
	document.getElementById('bottomRight').innerHTML = '0' + seconds;
	document.getElementById('topRight').innerHTML = '0' + cycle;
	document.getElementById('bottomLeft').innerHTML = 'Tap<br>circle to<br>start'
	document.getElementById('sun').classList.remove('animate');
	clearInterval(interval);
}

const end = function() {
	document.getElementById('congrats').style.top = '0%';
	confetti.speed = 0;
	confetti.start(3000);
	setTimeout(function(){reset()},1000)
}

document.getElementById('sun_hitbox').addEventListener('click', function(){
	if(on) {reset()}
	else {
		on = true;
		seconds = 4;
		cycle = 4;
		document.getElementById('bottomRight').innerHTML = '0' + seconds;
		document.getElementById('topRight').innerHTML = '0' + cycle;
		document.getElementById('bottomLeft').innerHTML = 'Inhale<br>from your<br>nose';
		document.getElementById('sun').classList.add('animate');
		
		interval = setInterval(function(){
			seconds--;
			document.getElementById('bottomRight').innerHTML = '0' + seconds;
			document.getElementById('topRight').innerHTML = '0' + cycle;

			console.log(seconds, steps, cycle)

			if(seconds === 1 && steps === 0) {
				steps++;
				seconds = 8;
				setTimeout(function(){document.getElementById('bottomLeft').innerHTML = 'Hold<br/>your<br/>breath'},1000);
			}
			else if(seconds === 1 && steps === 1) {
				steps++;
				seconds = 9;
				setTimeout(function(){document.getElementById('bottomLeft').innerHTML = 'Exhale<br/>from your<br/>mouth'},1000);
			}
			else if(seconds === 1 && steps === 2) {
				cycle--;
				if(cycle === 0) {setTimeout(function(){end()},1000)}
				else {
					steps = 0;
					seconds = 5;
					setTimeout(function(){document.getElementById('bottomLeft').innerHTML = 'Inhale<br>from your<br>nose'},1000);
				}
			}
		},1000);
	}
})



document.getElementById('topRight').addEventListener('click', function(){
	document.getElementById('credits').style.top = '0%';
})

document.getElementsByClassName('close')[0].addEventListener('click', function(){
	document.getElementById('congrats').style.top = '100%';
})
document.getElementsByClassName('close')[1].addEventListener('click', function(){
	document.getElementById('credits').style.top = '100%';
})