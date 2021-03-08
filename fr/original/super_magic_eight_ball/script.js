const answers = ['Essaye plus tard', 'Essaye encore', "Pas d'avis", "C'est ton destin", 'Le sort en est jeté', 'Une chance sur deux', 'Repose ta question', "D'après moi oui", "C'est certain", 'Oui, absolument', 'Tu peux compter dessus', 'Sans aucun doute', 'Très probablement', 'Oui', "C'est bien parti pour", "C'est non", 'Peu probablement', 'Faut pas rêver', "N'y compte pas", 'Impossible'];
const where_answers = ['Chez toi', 'À la maison', 'Chez moi', 'À Los Angeles', 'À Mexico', 'À Paris', 'À New York', 'À Tokyo', 'À Pékin', 'À Barcelone', 'Dans ton lit', 'Sur la lune', 'En Chine', 'Aux États-Unis', 'Là', 'Derrière toi', 'Pas là', 'Dans un bunker', 'Dans une tour'];
const when_answers = ['Jamais', 'Toujours', 'Maintenant', "Aujourd'hui", 'En 1994', 'Hier', 'La semaine dernière', 'La semaine prochaine', 'Le mois dernier', 'Le mois prochain', "L'année dernière", "L'année prochaine", 'Dans une minute', 'Y a 2 secondes', 'Y a 23 dans'];
const what_answers = ['Rien', "Tu veux pas savoir crois moi", "C'est ça ta question? Vraiment?", 'Oh wow.', 'Comment tu veux que je sache ça?', 'Demandes à ta mère', "Ahah! J'sais pas.", 'La réponse D.'];
const how_answers = ["Tu veux pas savoir crois moi", "C'est ça ta question? Vraiment?", 'Oh wow.', 'Comment tu veux que je sache ça?', 'Demandes à ta mère', "Ahah! J'sais pas.", 'La réponse D.'];
const who_answers = ['Lui', 'Tu sais très bien', 'Elle', 'Toi', 'Ta mère', 'Ton père', 'Ton chien', 'Sarah', 'Louis', 'Marc', 'Jeanne'];
const how_many_answers = ['1', 'Deux', 'Trois', 'Cinq', 'Dix', '399', '69', '42', '0', '0.1', 'Beaucoup'];
const why_answers = ['Parce-que', 'A cause de toi!', 'Karma', "C'est la faute de Jennifer ça"];
const what_time_answers = ['19h', '8:25', "1h du mat'", '14:23', '6:12'];
let test;

const answer = () => {

	try {clearTimeout(timeout)}
	catch {}

	let question = document.getElementById('question').value;	//store the question

	//send answer
	if(question.length > 2 && question.slice(-1) === "?") {

		if(question.slice(0,14).toLowerCase() === 'a quelle heure' || question.slice(0,14).toLowerCase() === 'à quelle heure') {
			document.getElementById('answer').innerHTML = what_time_answers[Math.floor(Math.random() * what_time_answers.length)];
		}
		else if(question.slice(0,5).toLowerCase() === 'quand') {
			document.getElementById('answer').innerHTML = when_answers[Math.floor(Math.random() * when_answers.length)];
		}
		else if(question.slice(0,7).toLowerCase() === 'combien') {
			document.getElementById('answer').innerHTML = how_many_answers[Math.floor(Math.random() * how_many_answers.length)];
		}
		else if(question.slice(0,3).toLowerCase() === 'qui') {
			document.getElementById('answer').innerHTML = who_answers[Math.floor(Math.random() * who_answers.length)];
		}
		else if(question.slice(0,2).toLowerCase() === 'ou' || question.slice(0,2).toLowerCase() === 'où') {
			document.getElementById('answer').innerHTML = where_answers[Math.floor(Math.random() * where_answers.length)];
		}
		else if(question.slice(0,7).toLowerCase() === 'comment') {
			document.getElementById('answer').innerHTML = how_answers[Math.floor(Math.random() * how_answers.length)];
		}
		else if(question.slice(0,8).toLowerCase() === 'pourquoi') {
			document.getElementById('answer').innerHTML = why_answers[Math.floor(Math.random() * why_answers.length)];
		}
		else if(question.slice(0,3).toLowerCase() === 'que' || question.slice(0,4).toLowerCase() === 'quel' || question.slice(0,6).toLowerCase() === 'quelle' || question.slice(0,13).toLowerCase() === "qu'est ce que" || question.slice(0,13).toLowerCase() === "qu'est-ce que" || question.slice(0,5).toLowerCase() === "quels" || question.slice(0,7).toLowerCase() === "quelles") {
			document.getElementById('answer').innerHTML = what_answers[Math.floor(Math.random() * what_answers.length)];
		}
		else {
			document.getElementById('answer').innerHTML = answers[Math.floor(Math.random() * answers.length)];
		}
	}
	else {
		alert("Ce n'est pas une question");
	}

	timeout = setTimeout(function(){document.getElementById('answer').innerHTML = ''},3000);	//empty answer box after 3sec
	document.getElementById('question').value = '';									//empty question box
	setTimeout(function(){document.getElementById('question').focus()},10)				//focus on input (with delay to avoid lag)
}

document.getElementById('submit').onclick = answer;		//call answer() on submit btn click
document.getElementById('question').onkeyup = function(x){	//call answer() on enter keypress
	if(x.which === 13) {answer()}
}
