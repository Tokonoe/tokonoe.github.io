
// CONSTANTS AND VARIABLES //

const alarm = new Audio('alarm.wav');

let break_ = 5;
let session = 25;
let current = 'session';
let on = false;
let sec = 1;
let current_break = break_;
let current_session = session;


// FUNCTIONS //


//change timer color if less than a minute
setInterval(function() {
	if(document.getElementById('display').innerHTML.slice(0,2) === '00') {document.getElementById('time').style.color = 'rgb(165, 13, 13)'}
	else {document.getElementById('time').style.color = 'white'}
}, 10)


//update timer every second
setInterval(function() {
	if(on) {
		sec -= 1;
		if(sec === -1) {sec = 0}

		if(document.getElementById('display').innerHTML.slice(0,2) === '00' && document.getElementById('display').innerHTML.slice(3,5) === '00' && current === 'session') {
			current = 'break_';
			current_session = session;
			sec = 0;
			alarm.play();
			document.getElementById('time_title').innerHTML = 'Pause';
		}
		else if(document.getElementById('display').innerHTML.slice(0,2) === '00' && document.getElementById('display').innerHTML.slice(3,5) === '00' && current === 'break_') {
			current = 'session';
			current_break = break_;
			sec = 0;
			alarm.play();
			document.getElementById('time_title').innerHTML = 'Session';
		}

		if(current === 'session') {
			display(current_session)

			if(sec === 0) {
				current_session -= 1;
				sec = 60;
			}
		}
		else {
			display(current_break)

			if(sec === 0) {
				current_break -= 1;
				sec = 60;
			}
		}
	}
}, 1000)


//time display
const display = function(x) {
	if(sec < 10) {
		document.getElementById('display').innerHTML = x + ':' + '0' + sec;

		if(x < 10) {document.getElementById('display').innerHTML = '0' + x + ':' + '0' + sec}
	}
	else if(x < 10) {document.getElementById('display').innerHTML = '0' + x + ':' + sec}
	else {document.getElementById('display').innerHTML = current_session + ':' + sec}
}


//on/off button
const power = function() {
	on ? document.getElementById('play').style.display = 'inline-block' : document.getElementById('play').style.display = 'none';
	on ? document.getElementById('pause').style.display = 'none' : document.getElementById('pause').style.display = 'inline-block';
	on ? on = false : on = true;
}


const reset = function() {
	sec = 1;
	on = false;
	break_ = 5;
	session = 25;
	current = 'session';
	current_break = break_;
	current_session = session;

	alarm.pause();
	alarm.currentTime = 0;

	document.getElementById('time_title').innerHTML = 'Session';
	document.getElementById('break_display').innerHTML = break_;
	document.getElementById('session_display').innerHTML = session;
	document.getElementById('display').innerHTML = session + ':' + '00';

	document.getElementById('pause').style.display = 'none';
	document.getElementById('play').style.display = 'inline-block';
}


//change time buttons function
const increase_decrease = function(break_session, current_, break_session_string, id_string, increase_decrease) {

	//increse/decrease variables value
	if(increase_decrease === 'increase' && break_session < 60 && !on) {
		if(break_session_string === 'break_') {break_ += 1}
		if(break_session_string === 'session') {session += 1}
		break_session += 1;
	}
	if(increase_decrease === 'decrease' && break_session > 1 && !on) {
		if(break_session_string === 'break_') {break_ -= 1}
		if(break_session_string === 'session') {session -= 1}
		break_session -= 1;
	}
	if(!on && break_session_string === 'break_') {current_break = break_session}
	if(!on && break_session_string === 'session') {current_session = break_session}


	//update html
	if(current === break_session_string && !on) {
		sec = 0;
		display(break_session);
	}
	if(break_session === break_) {document.getElementById(id_string).innerHTML = break_}
	if(break_session === session) {document.getElementById(id_string).innerHTML = session}
}


// ASSIGN FUNCTIONS TO ELEMENTS //

document.getElementById('power').onclick = power;
document.getElementById('reset').onclick = reset;
document.getElementById('break_up').onclick = function(){increase_decrease(break_, current_break, 'break_', 'break_display', 'increase')}
document.getElementById('break_down').onclick = function(){increase_decrease(break_, current_break, 'break_', 'break_display', 'decrease')};
document.getElementById('session_up').onclick = function(){increase_decrease(session, current_session, 'session', 'session_display', 'increase')}
document.getElementById('session_down').onclick = function(){increase_decrease(session, current_session, 'session', 'session_display', 'decrease')};