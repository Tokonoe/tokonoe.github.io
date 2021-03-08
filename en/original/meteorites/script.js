window.onload = function(){

	document.getElementById('hearts_container').style.display = 'initial';
	document.getElementById('btn').style.left = window.innerWidth/2 - document.getElementById('btn').offsetWidth/2 + 'px';
	document.getElementById('btn').style.top = window.innerHeight/2 - document.getElementById('btn').offsetHeight/2 + 'px';



	let lives = 1;
	let gameOn = false;

	document.getElementById('heart_1').addEventListener('click', function(){
		if(gameOn === false) {
			lives = 1;
			document.getElementById('heart_1').setAttribute('src','pictures/heart_full.png');
			document.getElementById('heart_2').setAttribute('src','pictures/heart_empty.png');
			document.getElementById('heart_3').setAttribute('src','pictures/heart_empty.png');
		}
	})

	document.getElementById('heart_2').addEventListener('click', function(){
		if(gameOn === false) {
			lives = 2;
			document.getElementById('heart_1').setAttribute('src','pictures/heart_full.png');
			document.getElementById('heart_2').setAttribute('src','pictures/heart_full.png');
			document.getElementById('heart_3').setAttribute('src','pictures/heart_empty.png');
		}
	})

	document.getElementById('heart_3').addEventListener('click', function(){
		if(gameOn === false) {
			lives = 3;
			document.getElementById('heart_1').setAttribute('src','pictures/heart_full.png');
			document.getElementById('heart_2').setAttribute('src','pictures/heart_full.png');
			document.getElementById('heart_3').setAttribute('src','pictures/heart_full.png');
		}
	})



	document.getElementById('ground').style.height = window.innerHeight/10 + 'px';
	const groundTop = Math.round(document.getElementById('ground').getBoundingClientRect().top) + 2;

	if(window.innerWidth > window.innerHeight) {
		document.getElementById('landscape').style.top = groundTop - document.getElementById('landscape').offsetHeight + document.getElementById('ground').offsetHeight + 'px';
	}
	else {
		document.getElementById('landscape').style.top = groundTop - document.getElementById('landscape').offsetHeight + 'px';	
	}

	document.getElementById('hearts_instructions').style.bottom = window.innerHeight/10 + 10 + 'px';
	document.getElementById('heart_1').style.width = window.innerHeight/12 + 'px';
	document.getElementById('heart_2').style.width = window.innerHeight/12 + 'px';
	document.getElementById('heart_3').style.width = window.innerHeight/12 + 'px';




	let interval;
	let meteors = [];
	let timePassed = 0;
	let meteorID = 0;
	let score = 0;
	let rank = 'D';
	let timeNeeded = 499;
	let posIncrement = 1;
	let difficultyTimePassed = 0;
	let nLives = lives;
	let bestScore = 0;
	let bestRank = 'D';

	const update = function() {
		if(timePassed > timeNeeded) {
			timePassed = 0;

			let size = Math.floor(Math.random()*3);
			let position = Math.floor(Math.random() * (window.innerWidth-120));
			let meteor = document.createElement('div');
			meteor.setAttribute('id', meteorID)
			if(size === 0) {meteor.setAttribute('class', 'meteor small')}
			if(size === 1) {meteor.setAttribute('class', 'meteor medium')}
			if(size === 2) {meteor.setAttribute('class', 'meteor big')}
			document.getElementById('game').appendChild(meteor);
			document.getElementById(meteorID).style.left = position + 'px';

			meteors.push({id: meteorID, leftPos: position, topPos: -100})

			document.getElementById(meteorID).addEventListener('click', function() {
				this.remove();

				let size = this.className;
				size = size.replace('meteor ','')
				if(size === 'small') {score += 30}
				if(size === 'medium') {score += 20}
				if(size === 'big') {score += 10}		

				for(x in meteors) {
					if(this.id == meteors[x].id) {
						delete meteors[x];
					}
				}
			})

			document.getElementsByTagName('body')[0].appendChild(document.createTextNode('World'));

			meteorID += 1;
		} 

		for(x in meteors) {
			if(gameOn) {
				let pos = meteors[x].topPos;
				pos += posIncrement;
				meteors[x].topPos = pos;
				document.getElementById(meteors[x].id).style.top = pos + 'px';
			}

			if(gameOn && document.getElementById(meteors[x].id).getBoundingClientRect().bottom > groundTop) {
				if(nLives > 1) {
					nLives--;

					if(nLives === 2) {document.getElementById('heart_3').setAttribute('src', 'pictures/heart_empty.png')}
					if(nLives === 1) {document.getElementById('heart_2').setAttribute('src', 'pictures/heart_empty.png')}

					for(x in meteors) {
						if(meteors[x] !== undefined) {
							document.getElementById(meteors[x].id).remove();
							delete meteors[x]
							break;
						}
					}
				}
				else {
					document.getElementById('heart_1').setAttribute('src', 'pictures/heart_empty.png')
					gameOn = false;
					endGame();
				}
			}
		}

		document.getElementById('score').innerHTML = 'Score: ' + score; 

		timePassed += 1;
		difficultyTimePassed += 1;

		if(difficultyTimePassed % 7500 === 0) {posIncrement += 0.1}
		if(difficultyTimePassed % 3750 === 0 && timeNeeded > 50) {timeNeeded -= 50}
	}



	const startGame = function() {
		nLives = lives;
		gameOn = true;
		rank = 'D';
		score = 0;

		document.getElementById('btn').style.display = 'none';
		document.getElementById('score').style.display = 'block';
		document.getElementById('hearts_instructions').style.display = 'none';

		interval = setInterval(function(){update()},1);
	}



	const endGame = function() {

		clearInterval(interval);
		for(x in meteors) {document.getElementById(x).remove()}

		meteors = [];
		difficultyTimePassed = 0;
		timePassed = 0;
		meteorID = 0;
		timeNeeded = 499;
		posIncrement = 1;

		getRank();

		if(score > bestScore) {bestScore = score}

		if(rank === 'S') {bestRank = rank}
		else if(rank < bestRank && bestRank !== 'S') {bestRank = rank}

		document.getElementById('score').style.display = 'none';
		document.getElementById('game_over_score').innerHTML = 'Score: ' + score;
		document.getElementById('rank').innerHTML = 'Rank: ' + rank;
		document.getElementById('best_score').innerHTML = 'Best Score: ' + bestScore;
		document.getElementById('best_rank').innerHTML = 'Best Rank: ' + bestRank;
		document.getElementById('game_over_screen').style.display = 'flex';
	}



	const getRank = function() {
		let updatedScore = score - (500*(lives-1));
		if(updatedScore > 500) {rank = 'C'}
		if(updatedScore > 1000) {rank = 'B'}
		if(updatedScore > 1500) {rank = 'A'}
		if(updatedScore > 2000) {rank = 'S'}
	}



	const clouds = function() {
		let n = Math.floor(Math.random()*5)+3;

		for(i=0;i<n;i++) {
			let y = Math.floor(Math.random()*(window.innerHeight/3));
			let x = Math.floor(Math.random()*(window.innerWidth));
			let type = Math.floor(Math.random()*10);
			let n2 = Math.floor(Math.random()*2);
			let z = n2 === 1 ? -2 : 2;

			document.getElementById('game').innerHTML += '<img src="pictures/cloud_' + type + '.png" class="cloud"/>'
			document.getElementsByClassName('cloud')[i].style.left = x + 'px';
			document.getElementsByClassName('cloud')[i].style.top = y + 'px';
			document.getElementsByClassName('cloud')[i].style.zIndex = z;
			
			if(window.innerWidth > window.innerHeight) {
				document.getElementsByClassName('cloud')[i].style.width = '20%';
				document.getElementsByClassName('cloud')[i].style.height = '15%';
			}
			else {
				document.getElementsByClassName('cloud')[i].style.width = '20%';
				document.getElementsByClassName('cloud')[i].style.height = '5%';
			}
		}
	}

	clouds();



	document.getElementById('btn').addEventListener('mousedown', function() {
		startGame();
	})

	document.getElementById('continue').addEventListener('mousedown', function() {
		document.getElementById('game_over_screen').style.display = 'none';
		document.getElementById('btn').style.display = 'flex';

		if(lives === 3) {
			document.getElementById('heart_3').setAttribute('src', 'pictures/heart_full.png');
			document.getElementById('heart_2').setAttribute('src', 'pictures/heart_full.png');
			document.getElementById('heart_1').setAttribute('src', 'pictures/heart_full.png');
		}
		if(lives === 2) {
			document.getElementById('heart_2').setAttribute('src', 'pictures/heart_full.png');
			document.getElementById('heart_1').setAttribute('src', 'pictures/heart_full.png');
		}
		else {document.getElementById('heart_1').setAttribute('src', 'pictures/heart_full.png')}
	})

	document.getElementById('hearts_container').addEventListener('mousedown', function(){
		document.getElementById('hearts_instructions').style.display = 'none';
	});
}