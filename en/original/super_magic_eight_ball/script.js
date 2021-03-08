const answers = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again',"Don't count on it",'My reply is no','My sources say no','Outlook not so good','Very doubtful'];
const where_answers = ['In your house', 'Home', 'In my house', 'In Los Angeles', 'In Mexico', 'In Paris', 'In New York', 'In Tokyo', 'In Pekin', 'In Barcelona', 'In your bed', 'On the moon', 'In China', 'In France', 'Here', 'Not Here', 'In a bunker', 'In a tower', 'Behind you'];
const when_answers = ['Never', 'Forever', 'Now', 'Today', 'In 1994', 'Yesterday', 'Last week', 'Next week', 'Last month', 'Next month', 'Last year', 'Next year', 'In a minute', '2 seconds ago', '23 years ago'];
const what_answers = ['Nothing', "You don't want to know", 'This is your question?', 'Oh wow.', 'How would I know that?', 'Ask your mom', "Ahah! I don't know.", 'Answer D'];
const how_answers = ["You don't want to know", 'This is your question?', 'Oh wow.', 'How would I know that?', 'Ask your mom', "Ahah! I don't know.", 'Answer D'];
const who_answers = ['Him', 'You know who', 'Her', 'You', 'Your mom', 'Your dad', 'Your dog', 'Sarah', 'Louis', 'Marc', 'Jane'];
const how_many_answers = ['One', 'Two', 'Three', 'Five', 'Ten', '399', '69', '42', '0', '0.1', 'A lot', 'None'];
const why_answers = ['Because', 'Because of you', 'Because Karma', "It's Jaylen's fault"];
const what_time_answers = ['9pm', '8:25', '1am', '2:23 PM', '6:12 AM'];

let test;

const answer = () => {

	try {clearTimeout(timeout)}
	catch {}

	let question = document.getElementById('question').value;	//store the question

	//send answer
	if(question.length > 2 && question.slice(-1) === "?") {

		if(question.slice(0,9).toLowerCase() === 'what time') {
			document.getElementById('answer').innerHTML = what_time_answers[Math.floor(Math.random() * what_time_answers.length)];
		}
		else if(question.slice(0,4).toLowerCase() === 'when') {
			document.getElementById('answer').innerHTML = when_answers[Math.floor(Math.random() * when_answers.length)];
		}
		else if(question.slice(0,8).toLowerCase() === 'how many') {
			document.getElementById('answer').innerHTML = how_many_answers[Math.floor(Math.random() * how_many_answers.length)];
		}
		else if(question.slice(0,3).toLowerCase() === 'who') {
			document.getElementById('answer').innerHTML = who_answers[Math.floor(Math.random() * who_answers.length)];
		}
		else if(question.slice(0,3).toLowerCase() === 'how') {
			document.getElementById('answer').innerHTML = how_answers[Math.floor(Math.random() * how_answers.length)];
		}
		else if(question.slice(0,5).toLowerCase() === 'where') {
			document.getElementById('answer').innerHTML = where_answers[Math.floor(Math.random() * where_answers.length)];
		}
		else if(question.slice(0,3).toLowerCase() === 'why') {
			document.getElementById('answer').innerHTML = why_answers[Math.floor(Math.random() * why_answers.length)];
		}
		else if(question.slice(0,4).toLowerCase() === 'what') {
			document.getElementById('answer').innerHTML = what_answers[Math.floor(Math.random() * what_answers.length)];
		}
		else {
			document.getElementById('answer').innerHTML = answers[Math.floor(Math.random() * answers.length)];
		}
	}
	else {
		alert('This is not a question.');
	}

	timeout = setTimeout(function(){document.getElementById('answer').innerHTML = ''},3000);	//empty answer box after 3sec
	document.getElementById('question').value = '';									//empty question box
	setTimeout(function(){document.getElementById('question').focus()},10)				//focus on input (with delay to avoid lag)
}

document.getElementById('submit').onclick = answer;		//call answer() on submit btn click
document.getElementById('question').onkeyup = function(x){	//call answer() on enter keypress
	if(x.which === 13) {answer()}
}