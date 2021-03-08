import('quotes.js');

let done = true;   //is quote animation finished

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

const changeColors = function() {
	let n = Math.floor(Math.random() * colors.length);

	$('body, button, .share').animate({"background-color": colors[n]},500);
	$('#quote *, #author').animate({"color": colors[n]},500);
}

const getQuote = function() {

	done = false;	//set animation to not finished

	//set animation to finished 2sec after click
	setTimeout(function() {
		done = true;
	},2000);

	let n = Math.floor(Math.random() * quotes.length);

	//set text opacity to 0, update text, change color, set text opacity to 1
	$('#quote, #author').animate({opacity: 0}, 500, function() {
		$('#quote p').text(quotes[n].quote);
		$('#author').text('- ' + quotes[n].author);
	})

	changeColors();

	$('#quote, #author').animate({opacity: 1}, 500)
	//end

	//update share buttons
	$('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[n].quote + '" ' + quotes[n].author));
	$('#tumblr').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(quotes[n].author)+'&content=' + encodeURIComponent(quotes[n].quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
}


$(document).ready(function() {
	//on click, if animation finished, generate a quote
	$('button').click(function() {
		if(done) {getQuote()};
	});

	//generate a quote
	getQuote();
})