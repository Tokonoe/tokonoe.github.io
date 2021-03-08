//replace all doc.getElemById.html with var
//CONST

const full = document.getElementById('full');
const single = document.getElementById('single');

const numValues = [
	{id: "one", value: 1},
	{id: "two", value: 2},
	{id: "three", value: 3},
	{id: "four", value: 4},
	{id: "five", value: 5},
	{id: "six", value: 6},
	{id: "seven", value: 7},
	{id: "eight", value: 8},
	{id: "nine", value: 9},
	{id: "zero", value: 0}
]

const opeValues = [
	{id: 'add', value: '+'},
	{id: 'subtract', value: '-'},
	{id: 'multiply', value: '&middot;'},
	{id: 'divide', value: '/'}
]

//FUNCTIONS

const reset = function() {
	full.innerHTML = '';
	single.innerHTML = 0;
}

const numbers = function() {
	for(i = 0; i < numValues.length; i++) {
		if(event.target.id === numValues[i].id) {
			let equal = false;

			//CHECK
			for(j = 0; j < full.innerHTML.length; j++) {
				if(full.innerHTML[j] === '=') {
					equal = true;
				}
			}

			//UPDATE
			if(single.innerHTML === '0') {
				//update full
				if(numValues[i].value !== 0) {
					full.innerHTML += numValues[i].value;
				}
				//update single
				single.innerHTML = numValues[i].value;
			}
			else if(equal) {
				single.innerHTML = numValues[i].value;
				full.innerHTML = numValues[i].value;
			} 
			else if(single.innerHTML.length >= 12 && single.innerHTML !== 'DIGIT LIMIT MET') {
				//if single digit limit met

				let val = single.innerHTML;						//store single
				single.innerHTML = 'DIGIT LIMIT MET';				//display msg
				setTimeout(function(){single.innerHTML = val},1000);	//display initial val
			}
			else if(single.innerHTML.length < 12 && full.innerHTML.length < 25) {
				//if operation/number not too long

				//update full
				full.innerHTML += numValues[i].value;
				//update single
				if(isNaN(parseInt(single.innerHTML))) {
					single.innerHTML = numValues[i].value;
				}
				else {single.innerHTML += numValues[i].value;}
			}
		}
	}
}

const operator = function() {
	for(i = 0; i < opeValues.length; i++) {
		if(event.target.id === opeValues[i].id && single.innerHTML !== 'DIGIT LIMIT MET' && single.innerHTML !== 'NAN') {
			let equal = false;
			let slice = 0;
			let ope = false;

			//CHECK
			for(j = 0; j < full.innerHTML.length; j++) {
				if(full.innerHTML[j] === '=') {
					equal = true;
					slice = j;
				}
				for(k = 0; k < opeValues.length; k++) {
					if(single.innerHTML === opeValues[k].value || single.innerHTML === 'X') {
						ope = true;
					}
				}
			}

			//UPDATE
			if(equal) {
				full.innerHTML = full.innerHTML.slice(slice+1, full.innerHTML.length) + opeValues[i].value;
				single.innerHTML = opeValues[i].value;
			}
			else if(!ope && full.innerHTML.length < 25) {
				full.innerHTML += opeValues[i].value; 
				single.innerHTML = opeValues[i].value;
			}
			else if(ope) {
				full.innerHTML = full.innerHTML.replace(/.$/, opeValues[i].value);
				single.innerHTML = opeValues[i].value;
			}
		}
	}
}

const equal = function() {
	let operation = full.innerHTML;
	let ope = false;
	let zero = true;
	let fixed = -3;
	let byZero = false;
	let oneOpe = false;
	let opeDotted = false;
	let resultDotted;
	let result;

	//CHECK
	for(i = 0; i < operation.length; i++) {
		if(operation[i] === '.') {opeDotted = true}
		if(operation[i] === '\267') {operation = operation.replace('\267', '*')}		//replace middot with mult ope
		if(operation[i] + operation[i+1] === '/0') {byZero = true}					//check for division by 0
		if(operation[i] + operation[i+1] + operation[i+2] === '/0.') {byZero = false}	//check for division by 0.

		fixed += 1;
	}

	for(j = 0; j < opeValues.length; j++) {
		//check for only one ope
		if(full.innerHTML === opeValues[j].value || full.innerHTML === '\267') {oneOpe = true}
		//check if last element is ope
		if(operation[operation.length-1] === opeValues[j].value || operation[operation.length-1] === '*') {ope = true}
	}

	//UPDATE

	//remove useless ope
	if(ope) {
		operation = operation.slice(0,operation.length-1);
		full.innerHTML = operation;
	}

	result = eval(operation); //calc result

	if(byZero) {
		full.innerHTML += '=INFINITY';
		single.innerHTML = 'INFINITY';
	}
	else if(oneOpe) {
		full.innerHTML += '=NAN';
		single.innerHTML = 'NAN';
	}
	else if(result.toString().length > operation.length) {
		//fix result
		if(opeDotted) {result = result.toFixed(fixed).toString()}

		//look for dot in result
		for(k = 0; k < result.length; k++) {
			if(result[k] === '.') {resultDotted = true}
		}

		//remove useless 0 of result
		while(zero) {
			if(result[result.length-1] === '0' && resultDotted) {
				result = result.substring(0, result.length-1)
			}
			else {zero = false}
		}	

		result = parseFloat(result);

		full.innerHTML += '=' + result;
		single.innerHTML = result;
	}
	else {
		full.innerHTML += '=' + result;
		single.innerHTML = result;	
	}
}

const dot = function() {
	let dotted = false;
	let equal = false;
	let ope = false;
	let msg = false;

	//CHECK
	//check msg
	if(single.innerHTML === 'DIGIT LIMIT MET') {msg = true}

	//check dotted && ope
	for(i = 0; i < single.innerHTML.length; i++) {
		//check dotted
		if(single.innerHTML[i] === '.') {dotted = true}

		//check ope
		for(j = 0; j < opeValues.length; j++) {
			if(single.innerHTML === opeValues[j].value) {ope = true}
		}
	}

	//check equal
	for(i = 0; i < full.innerHTML.length; i++) {
		if(full.innerHTML[i] === '=') {equal = true}
	}

	//UPDATE
	if(!msg && full.innerHTML.length < 25) {
		if(full.innerHTML === '') {
			full.innerHTML = '0';
		}
		if(!dotted && !ope) {
			full.innerHTML += '.';
			single.innerHTML += '.';
		}
		if(equal) {
			full.innerHTML = '0.';
			single.innerHTML = '0.';
		}
		if(ope) {
			full.innerHTML += '0.';
			single.innerHTML = '0.';
		}
	}
}

//ONCLICK

document.getElementById('reset').onclick = reset;
document.getElementById('dot').onclick = dot;
document.getElementById('equal').onclick = equal;

for (i = 0; i < document.getElementsByClassName('number').length; i++) {
	document.getElementById(numValues[i].id).onclick = numbers;
}

for (i = 0; i < document.getElementsByClassName('operator').length; i++) {
	document.getElementById(opeValues[i].id).onclick = operator;
}

//GENERAL ONCLICK

document.onclick = function() {
	if(single.innerHTML === '\267') {
		single.innerHTML = 'X';
	}
	if(full.innerHTML.length < 36) {
		full.style.fontSize = '125%';
	}
	if(full.innerHTML.length >= 36) {
		full.style.fontSize = '95%';
	}
}