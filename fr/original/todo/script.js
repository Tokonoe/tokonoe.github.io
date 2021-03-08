	/* DECLARE CONST */

//store things to do for each day of the week
const todo = [
['0','1','2','3','4'],
['5','6','7','8','9'],
['A','B','C','D','E'],
['F','G','H','I','J'],
['K','L','M','N','O'],
['P','Q','R','S','T'],
['U','V','W','X','Y']];


	/* DECLARE FUNCTION */

//display things to do for the specified day of the week
const getList = function(day) {
	$('#list').html('');
	for(i=0;i<todo[day].length;i++) {$('#list').append('<li>' + todo[day][i] + '</li>')}
	$('#list li').click(function() {$(this).toggleClass('checked')});
}


	/* ASSIGN FUNCTIONS */

//assign getList function to each week navbar btn
for(let i=0;i<7;i++) {
	$('.day_select:eq('+ i +')').click(function(){
		getList(i);
	})
}

//on clear btn click uncheck all list item, all counter item & clear notes
$('#clear').click(function(){
	$('li').removeClass('checked');
	$('#note').val('');
});


	/* INITIALIZE LIST */

//set list to monday todo
for(i=0;i<todo[0].length;i++) {$('#list').append('<li>' + todo[0][i] + '</li>')}
$('#list li').click(function() {$(this).toggleClass('checked')});




document.getElementById('cross').onclick = function() {
	document.getElementById('explanation').style.display = 'none';
}

document.getElementById('btn').onclick = function() {
	document.getElementById('explanation').style.display = 'none';
}