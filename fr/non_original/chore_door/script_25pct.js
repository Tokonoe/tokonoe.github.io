/* VARIABLES */

let robot_door = Math.round((Math.random()*2)+1)
let rand = Math.round(Math.random())
let current_streak = 0;
let best_streak = 0;
let door_left = 3;


/* FUNCTIONS */


const reset = function() {
	for(i=0;i<3;i++) {document.getElementsByClassName('door')[i].src = 'pictures/closed_door.png'}
	document.getElementById('btn').innerHTML = 'Good luck!';
	robot_door = Math.round((Math.random()*2)+1)
	rand = Math.round(Math.random());
	door_left = 3
	give_func()
}


//lose actions
const lose = function() {
	current_streak = 0;
	for(i=0;i<3;i++) {document.getElementsByClassName('door')[i].onclick = function(){return null}}

	document.getElementById('btn').innerHTML = 'Game over!<br>Play again?';
	document.getElementById('current_streak_display').innerHTML = current_streak;
	document.getElementById('best_streak_display').innerHTML = best_streak;
}


//win actions
const win = function() {
	current_streak += 1
	if (current_streak > best_streak) {best_streak = current_streak}

	document.getElementById('btn').innerHTML = 'You win!<br>Play again?';
	document.getElementById('current_streak_display').innerHTML = current_streak;
	document.getElementById('best_streak_display').innerHTML = best_streak;
}


//actions after a door is clicked
const open_door = function(n) {
	if(n == robot_door) {document.getElementById('door_' + n).src = 'pictures/robot.png'}
	else {
		if(rand == 0) {
			document.getElementById('door_' + n).src = 'pictures/space.png';
			rand = 1
		}
		else {
			document.getElementById('door_' + n).src = 'pictures/beach.png';
			rand = 0
		}
	}

	door_left -= 1;
	document.getElementById('door_'+n.toString()).onclick = null

	if(n == robot_door && door_left > 0) {lose()}
	else if(door_left == 0) {win()}
}


//give functions to doors
const give_func = function(){
	document.getElementById('door_1').onclick = function(){open_door(1)}
	document.getElementById('door_2').onclick = function(){open_door(2)}
	document.getElementById('door_3').onclick = function(){open_door(3)}
}


/* EXECUTION */

give_func()
document.getElementById('btn').onclick = function(){reset()}