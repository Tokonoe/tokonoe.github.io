const keys = [
{key: 'q', keycode: 81, url_1: 'bank_1/heater_1.mp3', url_2: 'bank_2/chord_1.mp3', name_1: 'Heater 1', name_2: 'Chord 1'},
{key: 'w', keycode: 87, url_1: 'bank_1/heater_2.mp3', url_2: 'bank_2/chord_2.mp3', name_1: 'Heater 2', name_2: 'Chord 2'},
{key: 'e', keycode: 69, url_1: 'bank_1/heater_3.mp3', url_2: 'bank_2/chord_3.mp3', name_1: 'Heater 3', name_2: 'Chord 3'},
{key: 'a', keycode: 65, url_1: 'bank_1/heater_4.mp3', url_2: 'bank_2/shaker.mp3', name_1: 'Heater 4', name_2: 'Shaker'},
{key: 's', keycode: 83, url_1: 'bank_1/clap.mp3', url_2: 'bank_2/open_hh.mp3', name_1: 'Clap', name_2: 'Open HH'},
{key: 'd', keycode: 68, url_1: 'bank_1/open_hh.mp3', url_2: 'bank_2/closed_hh.mp3', name_1: 'Open HH', name_2: 'Closed HH'},
{key: 'z', keycode: 90, url_1: 'bank_1/kick_n_hat.mp3', url_2: 'bank_2/punchy_kick.mp3', name_1: 'Kick n\' Hat', name_2: 'Punchy Kick'},
{key: 'x', keycode: 88, url_1: 'bank_1/kick.mp3', url_2: 'bank_2/side_stick.mp3', name_1: 'Kick', name_2: 'Side Stick'},
{key: 'c', keycode: 67, url_1: 'bank_1/closed_hh.mp3', url_2: 'bank_2/snare.mp3', name_1: 'Closed HH', name_2: 'Snare'}]

let q,w,e,a,s,d,z,x,c;
let key = [q,w,e,a,s,d,z,x,c]
let current_bank = 1;
let powered = false;
let volume_ = '0.3';

const play = function() {
	if(powered) {
		key[x].currentTime = 0;
		key[x].play();

		if(current_bank === 1) {document.getElementById('display').innerHTML = keys[x].name_1}
		else {document.getElementById('display').innerHTML = keys[x].name_2}

		let current = document.getElementById(keys[x].key);
		current.style.boxShadow = 'none';
		current.style.backgroundColor = 'orange';
		setTimeout(function(){
			current.style.boxShadow = 'black 3px 3px 5px';
			current.style.backgroundColor = 'gray'
		},100)
	}
	else {
		let current = document.getElementById(keys[x].key);
		current.style.boxShadow = 'none';
		setTimeout(function(){
			current.style.boxShadow = 'black 3px 3px 5px';
		},100)
	}
}

const power = function() {
	if(powered) {
		document.getElementById('on').style.backgroundColor = 'black';
		document.getElementById('off').style.backgroundColor = 'blue';
		document.getElementById('volume').disabled = true;
		document.getElementById('display').innerHTML = '&nbsp;';
		powered = false;
		for(x in key) {key[x] = null}
	}
	else {
		document.getElementById('on').style.backgroundColor = 'blue';
		document.getElementById('off').style.backgroundColor = 'black';
		document.getElementById('volume').disabled = false;
		powered = true;
		if(current_bank === 1) {for(x in key) {key[x] = new Audio(keys[x].url_1)}}
		if(current_bank === 2) {for(x in key) {key[x] = new Audio(keys[x].url_2)}}
	}
}

const volume = function() {
	if(powered) {
		for(x in key) {
			key[x].volume = document.getElementById('volume').value
		}
		setTimeout(function(){document.getElementById('display').innerHTML = '&nbsp;'},1000)
	}
}

const displayVolume = function() {
	document.getElementById('display').innerHTML = 'Volume: ' + Math.floor(document.getElementById('volume').value * 100);
	volume_ = document.getElementById('volume').value;
}

setInterval(function(){
	if(powered) {
		if(volume_ !== document.getElementById('volume').value) {displayVolume()}
	}
},1)

const bank = function() {
	if(current_bank === 1) {
		document.getElementById('bank_1').style.backgroundColor = 'black';
		document.getElementById('bank_2').style.backgroundColor = 'blue';
		document.getElementById('display').innerHTML = 'Smooth Piano Kit';
		current_bank = 2;
		for(x in key) {
			key[x] = new Audio(keys[x].url_2);
			key[x].volume = document.getElementById('volume').value;
		}
	}
	else {
		document.getElementById('bank_1').style.backgroundColor = 'blue';
		document.getElementById('bank_2').style.backgroundColor = 'black';
		document.getElementById('display').innerHTML = 'Heater Kit';
		current_bank = 1;
		for(x in key) {
			key[x] = new Audio(keys[x].url_1);
			key[x].volume = document.getElementById('volume').value;
		}
	}
}

document.onkeydown = function(i) {for(x in keys) {if(i.keyCode === keys[x].keycode) {play()}}}
document.onmouseup = function(e) {if(e.button === 0) {for(x in keys) {if(event.target.id === keys[x].key) {play()}}}}
document.getElementById('power').onclick = power;
document.getElementById('volume').onmouseup = volume;
document.getElementById('volume').addEventListener('touchend', function(){volume()})
document.getElementById('bank').onclick = function(){if(powered) {bank()}};

power();