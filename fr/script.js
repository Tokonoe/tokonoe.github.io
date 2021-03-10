const elements = {
	non_original_projects: document.getElementById('non_original_projects'),
	responsive_non_original_btn: document.getElementsByClassName('btn')[3],
	responsive_original_btn: document.getElementsByClassName('btn')[4],
	responsive_contact_btn: document.getElementsByClassName('btn')[5],
	original_projects: document.getElementById('original_projects'),
	responsive_menu: document.getElementById('responsive_menu'),
	non_original_btn: document.getElementsByClassName('btn')[0],
	original_btn: document.getElementsByClassName('btn')[1],
	contact_btn: document.getElementsByClassName('btn')[2],
	non_original: document.getElementById('non_original'),
	project: document.getElementsByClassName('project'),
	icon: document.getElementsByTagName('link')[2],
	original: document.getElementById('original'),
	contact: document.getElementById('contact'),
	arrow: document.getElementById('arrow'),
	logo: document.getElementById('logo'),
	nav: document.getElementById('nav')
}

// non original projects
const NOP = {
	kimha: {
		id: 'kimha',
		title: '&zwnj;<br>kimha<br>&zwnj;'
	},
	calmaria: {
		id: 'calmaria',
		title: '&zwnj;<br>Calmaria<br>&zwnj;'
	},
	recipe_box: {
		id: 'recipe_box',
		title: '&zwnj;<br>Boîte à Recette<br>&zwnj;'
	},
	chore_door: {
		id: 'chore_door',
		title: '&zwnj;<br>La Porte des Corvées<br>&zwnj;'
	},
	pomodoro_clock: {
		id: 'pomodoro_clock',
		title: '&zwnj;<br>Minuteur Pomodoro<br>&zwnj;'
	},
	calculator: {
		id: 'calculator',
		title: '&zwnj;<br>Calculatrice<br>&zwnj;'
	},
	drum_machine: {
		id: 'drum_machine',
		title: '&zwnj;<br>Bo&#238te &#224 rythme<br>&zwnj;'
	},
	markdown_previewer: {
		id: 'markdown_previewer',
		title: 'Visionneuse de Markdown<br>&zwnj;'
	},
	random_quote_machine: {
		id: 'random_quote_machine',
		title: '&zwnj;<br>G&#233;n&#233;rateur de Citation<br>&zwnj;'
	},
	portfolio_2: {
		id: 'portfolio_2',
		title: '&zwnj;<br>Portfolio 2<br>&zwnj;'
	},
	portfolio_1: {
		id: 'portfolio_1',
		title: '&zwnj;<br>Portfolio 1<br>&zwnj;'
	},
	technical_documentation: {
		id: 'technical_documentation',
		title: 'Documentation Technique<br>&zwnj;'
	},
	product_landing: {
		id: 'product_landing',
		title: '&zwnj;<br>Page de Produit<br>&zwnj;'
	},
	survey_form: {
		id: 'survey_form',
		title: '&zwnj;<br>Formulaire de Sondage<br>&zwnj;'
	}
}

// original projects
const OP = {
	meteorites: {
		id: 'meteorites',
		title: '&zwnj;<br>Météorites<br>&zwnj;'
	},
	shy_ghost: {
		id: 'shy_ghost',
		title: '&zwnj;<br>Fantôme Timide<br>&zwnj;'
	},
	nuje: {
		id: 'nuje',
		title: '&zwnj;<br>N U J E<br>&zwnj;'
	},
	catch_me: {
		id: 'catch_me',
		title: '&zwnj;<br>Attrape moi si tu peux!<br>&zwnj;'
	},
	swipe: {
		id: 'swipe',
		title: '&zwnj;<br><br>&zwnj;'
	},
	parallax: {
		id: 'parallax',
		title: '&zwnj;<br>Effet de Parallaxe<br>&zwnj;'
	},
	iframe: {
		id: 'iframe',
		title: '&zwnj;<br>Iframe<br>&zwnj;'
	},
	password_validator: {
		id: 'password_validator',
		title: 'Validateur de Mot de Passe<br>&zwnj;'
	},
	super_magic_eight_ball: {
		id: 'super_magic_eight_ball',
		title: '&zwnj;<br>Super Magic 8-Ball<br>&zwnj;'
	},
	todo: {
		id: 'todo',
		title: '&zwnj;<br>Mémo 2<br>&zwnj;'
	},
	nine_pics: {
		id: 'nine_pics',
		title: '&zwnj;<br>Neuf Photos<br>&zwnj;'
	},
	loving_vincent: {
		id: 'loving_vincent',
		title: '&zwnj;<br>La Passion Van Gogh<br>&zwnj;'
	}
}



// ADD ALL PROJECTS TO PAGE

for(x in NOP) {

	let non_original_project = `
	<div id="` + NOP[x].id + `" class="project">
		<a href="non_original/` + NOP[x].id + `/index.html" target="_blank">` + NOP[x].title + `</a>
	</div>
	`

	elements.non_original_projects.innerHTML += non_original_project;
	elements.project[x].style.background = 'url("pictures/' + NOP[x].id + '.png") center/cover no-repeat';
}


for(x in OP) {

	let original_project = `
	<div id="` + OP[x].id + `" class="project">
		<a href="original/` + OP[x].id + `/index.html" target="_blank">` + OP[x].title + `</a>
	</div>
	`
	
	elements.original_projects.innerHTML += original_project;
	elements.project[x].style.background = 'url("pictures/' + OP[x].id + '.png") center/cover no-repeat';
}



// PROJECT HOVER FUNCTION

setTimeout(function() {
	for(x = 0; x < (elements.project.length); x++) {
		elements.project[x].children[0].style.transition = '.3s';
		elements.project[x].onmouseover = function() {this.children[0].style.opacity = 1}
		elements.project[x].onmouseleave = function() {this.children[0].style.opacity = 0}
	}
}, 500);



// RANDOM TAB ICON FUNCTION

elements.icon.setAttribute('href', '../pictures/logo_' + Math.floor((Math.random() * 6) + 1) + '.png');



// SET MARGIN-TOP OF ABOUT SECTION DYNAMICALLY

setInterval(function(){
	document.getElementById('about').style.marginTop = elements.nav.clientHeight + 'px';
},1)



/* NAVBAR BTN FUNCTIONS */

elements.logo.onclick = function() {window.scroll(0, 0)}

elements.non_original_btn.onclick = function() {
	window.scroll(0, elements.non_original.getBoundingClientRect().top + window.scrollY - elements.nav.clientHeight * 2);
}

elements.original_btn.onclick = function() {
	window.scroll(0, elements.original.getBoundingClientRect().top + window.scrollY - elements.nav.clientHeight * 2);
}

elements.contact_btn.onclick = function() {window.scroll(0, document.body.scrollHeight)}


// arrow btn function
elements.arrow.onclick = function() {window.scroll(0,0)}


// navbar shadow function
document.onscroll = function() {
	if(window.pageYOffset > window.innerHeight) {elements.nav.style.boxShadow = '0px -10px 20px 5px #555'}
	if(window.pageYOffset < window.innerHeight) {elements.nav.style.boxShadow = 'none'}
}



/* RESPONSIVE */

if(mobileAndTabletcheck()) {
	for(x = 0; x < (elements.project.length); x++) {
		elements.project[x].children[0].style.opacity = 1;
	}
}

setInterval(function(){
	elements.responsive_menu.style.top = elements.nav.clientHeight + 'px';
	if(window.innerWidth > 600) {elements.responsive_menu.style.display = 'none'}
},1)

document.getElementById('menu').onclick = function() {
	if(elements.responsive_menu.style.display === '' || elements.responsive_menu.style.display === 'none') {
		setTimeout(function(){
			elements.responsive_menu.style.display = 'block';
		},1)
	}
}

window.onclick = function() {elements.responsive_menu.style.display = 'none'}
window.onscroll = function() {elements.responsive_menu.style.display = 'none'}

elements.responsive_non_original_btn.onclick = function() {
	window.scroll(0, elements.non_original.getBoundingClientRect().top + window.scrollY - elements.nav.clientHeight * 2);
}

elements.responsive_original_btn.onclick = function() {
	window.scroll(0, elements.original.getBoundingClientRect().top + window.scrollY - elements.nav.clientHeight * 2);
}

elements.responsive_contact_btn.onclick = function() {window.scroll(0, document.body.scrollHeight)}

document.getElementsByClassName('project')[0].getElementsByTagName('a')[0].setAttribute('href', '/fr/non_original/kimha/en');
