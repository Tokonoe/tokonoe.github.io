
	/* VARIABLES */

let recipe_number_name = 0;
let recipe_number = 0;
let recipes_names = [];
let recipes_ings = [];


	/* FUNCTIONS */


const get_data = function() {
	let recipe_name = document.getElementById('recipe_name').value.trim();
	let ings_list = document.getElementById('ingredients').value.split(',');
	if(recipe_name === '') {recipe_name = 'Untitled'}
	hide_add_recipe_menu();

	add_recipe(recipe_name, ings_list)
}


const add_recipe = function(name, ings) {

	// ADD DATA TO ARRAYS
	recipes_names.push(name);
	recipes_ings.push([ings]);

	// RECIPE HTML
	let content = `
	<dl class="recipe" id="recipe_${recipe_number_name}">
		<dt class="recipe_name"><p class="recipe_name_p" tabindex="-1">${name}</p></dt>
		<dt class="ingredients">
			<p>Ingredients</p>
			<dl class="ings_list"></dl>
			<button class="delete_btn">Delete</button>
			<button class="edit_btn">Edit</button>
		</dt>
	</dl>
	`

	//ADD RECIPE, ADD INGREDIENTS TO RECIPE & HIDE INGREDIENTS
	document.getElementById('recipe_list').innerHTML += content;

	for(let i = 0; i < ings.length; i++) {
		document.getElementsByClassName('ings_list')[recipe_number].innerHTML += '<dl>' + ings[i] + '</dl>';
	}

	document.getElementById("recipe_"+recipe_number_name.toString()).children[1].style.display = 'none';


	//GIVE EDIT RECIPE & DELETE RECIPE FUNCTIONS TO ALL RECIPES
	for(let i = 0; i < recipe_number+1; i++) {
		document.getElementsByClassName('edit_btn')[i].onclick = edit_recipe;
		document.getElementsByClassName('delete_btn')[i].onclick = delete_recipe;
	}


	//TOGGLE INGREDIENTS DISPLAY FUNCTION
	$('.recipe_name_p').click(function(){
		if($(this).parent().next().css('display') === 'none') {
			$('.ingredients').slideUp(200);
			$(this).parent().next().slideDown(200);
		}
		else ($(this).parent().next().slideUp(200))
	});


	/* UPDATE VARIABLES */
	recipe_number_name++;
	recipe_number++
}


const edit_recipe = function() {
	let id = this.parentElement.parentElement.id;

	document.getElementById('title').innerHTML = 'Edit Recipe';
	document.getElementById('confirm_recipe').innerHTML = 'Edit Recipe';

	document.getElementById('recipe_name').value = recipes_names[parseInt(id[id.length-1])].replace(' zxcvbnm', '');
	document.getElementById('ingredients').value = recipes_ings[parseInt(id[id.length-1])];

	document.getElementById('add_recipe_box').style.display = 'block';
	$("#add_recipe_menu").animate({top: '30px', opacity: 1}, 200);
	document.body.style.overflow = 'hidden';

	document.getElementById('confirm_recipe').onclick = function(){confirm_edit(id)};
}


const delete_recipe = function() {
	let parentElement = this.parentElement.parentElement;

	recipes_names.splice(parentElement.id[parentElement.id.length-1], 1);
	recipes_ings.splice(parentElement.id[parentElement.id.length-1], 1);

	localStorage.removeItem('recipes_ings_'+parentElement.id[parentElement.id.length-1]);

	parentElement.remove();
	recipe_number--;

	for(x in recipes_names) {document.getElementsByClassName('recipe')[x].id = 'recipe_'+x}
}


const confirm_edit = function(id) {
	let edit_recipe_name;

	if(document.getElementById('recipe_name').value.trim() === '') {
		edit_recipe_name = 'Untitled';
	}
	else {
		edit_recipe_name = document.getElementById('recipe_name').value;
	}

	document.querySelector("#"+id+" .recipe_name").innerHTML = '<p class="recipe_name_p" tabindex="-1">' + edit_recipe_name + '</p>';
	document.querySelector("#"+id+" .ings_list").innerHTML = "";

	let ings = document.getElementById('ingredients').value.split(',');
	
	for(let i = 0; i < ings.length; i++) {
		document.getElementsByClassName('ings_list')[parseInt(id[id.length-1])].innerHTML += '<dl>' + ings[i] + '</dl>';
	}

	recipes_names[parseInt(id[id.length-1])] = edit_recipe_name;
	recipes_ings[parseInt(id[id.length-1])] = [ings];

	$('#'+id+' .recipe_name .recipe_name_p').click(function(){
		if($(this).parent().next().css('display') === 'none') {
			$('.ingredients').slideUp(200);
			$(this).parent().next().slideDown(200);
		}
		else ($(this).parent().next().slideUp(200))
	});

	hide_add_recipe_menu();
}


const hide_add_recipe_menu = function() {
	setTimeout(function(){
		document.getElementById('title').innerHTML = 'Add a Recipe';
		document.getElementById('confirm_recipe').innerHTML = 'Add Recipe';

		document.getElementById('confirm_recipe').onclick = get_data;

		document.getElementById('recipe_name').value = '';
		document.getElementById('ingredients').value = '';
	},100);

	setTimeout(function(){document.body.style.overflow = 'initial'},200);

	$("#add_recipe_menu").animate({top: '-50px', opacity: 0}, 200, function(){document.getElementById('add_recipe_box').style.display = 'none'});
}


/* LOAD RECIPES FROM LOCAL STORAGE */
const initialize = function() {
	if(localStorage.getItem('recipe_0') !== null) {
		for(x=0;x<localStorage.getItem('n');x++) {
			let split = localStorage.getItem('recipe_'+x.toString()).split('zXcVbNm');
			add_recipe(split[0], split[1].split(','))
		}
	}
}


/* SAVE RECIPES EACH CLICK */
document.onclick = function() {
	for(i=0; i<recipes_names.length; i++) {
		localStorage.setItem('recipe_'+i.toString(), recipes_names[i] + 'zXcVbNm' + recipes_ings[i]);
		localStorage.setItem('n', i+1);
	}
}


	/* INITALIZE THINGS */


/* LOAD RECIPES FROM LOCALSTORAGE */
initialize();


/* SET FUNCTIONS TO ELEMENTS */
document.getElementById('add_recipe').onclick = function() {
	document.getElementById('add_recipe_box').style.display = 'block';
	$("#add_recipe_menu").animate({top: '30px', opacity: 1}, 200);
	document.body.style.overflow = 'hidden';
};

document.getElementById('shadow').onclick = function(){hide_add_recipe_menu()};
document.getElementById('cross').onclick = function(){hide_add_recipe_menu()};
document.getElementById('close').onclick = function(){hide_add_recipe_menu()};
document.getElementById('confirm_recipe').onclick = function(){get_data()};


/* SET DEFAULT RECIPES IF NONE ARE SAVED */
if(document.getElementById("recipe_list").innerHTML === "") {
	add_recipe('Pumpkin Pie', ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']);
	add_recipe('Spaghetti', ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']);
	add_recipe('Onion Pie', ['Onion', 'Pie Crust', 'Sounds Yummy right?']);
}
