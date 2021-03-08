/* VARIABLES */

let behind = ['beach', 'space', 'robot'];
let current_streak = 0;
let best_streak = 0;

/* TEST WINRATE
let Twin = 0;
let Tlose = 0;

const calc = function(){
	let win_per = (Twin/(Twin+Tlose))*100
  	let lose_per = (Tlose/(Twin+Tlose))*100
  	console.log('Win percentage: ' + Math.round(win_per) + '%.\nLose percentage: ' + Math.round(lose_per) + '%.')
}
*/


/* FUNCTIONS */

const reset = function() {
	behind = ['beach', 'space', 'robot'];
	for (i in behind) {document.getElementsByClassName('door')[i].setAttribute('src', 'pictures/closed_door.png')}
	document.getElementById('btn').innerHTML = 'Bonne chance!';
	give_func();
}


//actions after a door is clicked
const opened = function() {

	let win = true;

	//check if win
	for(i=0;i<3;i++) {
		if(document.getElementsByClassName('door')[i].getAttribute('src') === 'pictures/closed_door.png') {win = false}
	}
	
	//if win -> win actions else -> lose actions
	if(win) {
		current_streak += 1
		//Twin++
		document.getElementById('btn').innerHTML = 'Gagné!<br>Rejouer?';
		if (current_streak > best_streak) {best_streak = current_streak}
	}
	else {
		current_streak = 0;
		//Tlose++
		document.getElementById('btn').innerHTML = 'Perdu!<br>Rejouer?';
		for (i=0;i<3;i++) {document.getElementsByClassName('door')[i].onclick = function(){return null}}
	}
	
	//calc()
	//update streaks
	document.getElementById('current_streak_display').innerHTML = current_streak;
	document.getElementById('best_streak_display').innerHTML = best_streak;
}


//give doors element onclick function
const give_func = function() {
	for (i in behind) {document.getElementsByClassName('door')[i].onclick = function(){

		this.onclick = function(){return null}
		result = behind[Math.floor(Math.random()*behind.length)]

		if (result == 'beach' || result == 'space') {
			if (result == 'space') {behind.splice(behind.indexOf('space'), 1)}
			else {behind.splice(behind.indexOf('beach'), 1)}

  			result == 'beach' ? this.src = 'pictures/beach.png' : this.src = 'pictures/space.png'
		}
		else {
			behind.splice(behind.indexOf('robot'), 1);
			this.src = 'pictures/robot.png'
			opened()
		}
	}}
}


/* EXECUTION */

give_func()
document.getElementById('btn').onclick = function(){reset()}