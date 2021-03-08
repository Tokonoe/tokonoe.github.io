/* VAR & CONST */

const validation = document.getElementById('validation');
const password = document.getElementById('password');
const img = document.getElementsByTagName('img')[0];

let lowerCase, upperCase, eightChar, number;
let hidden = true;


/* FUNCTIONS */

//toggle password visibility
const showPass = () => {
	if(hidden) {
		hidden = false;
		password.setAttribute('type','text');
		img.setAttribute('src', 'show.png');
	}
	else {
		hidden = true;
		password.setAttribute('type','password');
		img.setAttribute('src', 'hide.png');
	}
	
	setTimeout(function(){password.focus()},5) //focus on password, with delay to avoid lag
}

//check password validity
const checkPass = function() {
	if(lowerCase && upperCase && eightChar && number) {
		validation.style.color = 'lime';
		validation.innerHTML = 'Votre mot de passe est s\351curis\351.';
	}
	else {
		validation.style.color = 'red';
		validation.innerHTML = 'Votre mot de passe doit au moins contenir ';

		if(lowerCase === false) {validation.innerHTML += '| 1 caract\350re en minuscule '}
		if(upperCase === false) {validation.innerHTML += '| 1 caract\350re en majuscule '}
		if(number === false) {validation.innerHTML += '| 1 chiffre '}
		if(eightChar === false) {validation.innerHTML += '| 8 caract\350res '}
	}
}


/* EVENTS */

window.onload = function() {
	password.onkeyup = function() {
		lowerCase = upperCase = eightChar = number = false;

		//check conditions
		for(i=0;i<password.value.length;i++) {
			if(password.value[i].match(/[a-z]/i) && password.value[i] === password.value[i].toLowerCase()) {lowerCase = true}
			if(password.value[i].match(/[a-z]/i) && password.value[i] === password.value[i].toUpperCase()) {upperCase = true}
			if(password.value[i].match(/[0-9]/)) {number = true} 
		}
		if(password.value.length > 7) {eightChar = true}

		checkPass();
	}

	img.onclick = function(){showPass()};
}