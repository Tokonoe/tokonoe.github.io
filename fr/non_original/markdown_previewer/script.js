document.getElementById('editor').innerHTML = 
`# Bienvenue sur ma Visionneuse de Markdown en React!

## Ça c'est un sous-titre...
### Et voilà d'autres trucs cool:
  
Voici un peu de code, \`<div></div>\`, entre 2 guillemets obliques.

\`\`\`
// Ça c'est du code multiligne:

function autreExemple(premièreLigne, dernièreLigne) {
  if (premièreLigne == '\`\`\`' && dernièreLigne == '\`\`\`') {
    return codeMultiligne;
  }
}
\`\`\`
  
Tu peux aussi mettre le texte en **gras**... whoa!
Ou en _italique_.
Ou... attention... **_les deux!_**
Et hésite pas à ~~barrer des trucs~~.

Il y a aussi des [liens](https://www.freecodecamp.com), et des
> Citations!

Et si tu veux faire des folies, même des tableaux:

En-tête Dingue | En-tête Incroyable | Encore un En-tête?
------------ | ------------- | ------------- 
Ton contenu peut | être là, et il | peut être là....
Et là. | Ok. | Je crois qu'on a compris.

- Et évidemment y a des listes.
  - Certaines sont à puces.
     - Avec des niveaux d'indentation différent.
        - Qui ressemblent à ça.


1. Et il y a des listes numérotées aussi.
1. Utilise que des 1 si tu veux! 
1. Mais la liste continue...
- Même si tu utilises des tirets ou des astérisques.
* Et pour couronner le tout, n'oublions pas les images intégrées:

![Logo React avec Texte](https://goo.gl/Umyytc)
`



//mark initial text
document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);



//on input mark text
document.oninput = function() {
	document.getElementById('preview').innerHTML = marked(document.getElementById('editor').value);
}



//add target attr to links
setInterval(function() {
	let counter = 0;

	for(i=0;i<document.getElementById('preview').innerHTML.length;i++) {
		if(document.getElementsByTagName('a')[i] !== undefined) {
			counter += 1;
		}
	}

	for(j=0;j<counter;j++) {
		document.getElementsByTagName('a')[j].setAttribute('target', '#')
	}

},100)



//toggle classes for maximized versions
document.getElementById('editor-max').onclick = function() {
	document.getElementById('editor-max').style.display = 'none';
	document.getElementById('editor-min').style.display = 'block';

	document.getElementById('preview-box').style.display = 'none';

	document.getElementById('editor').style.resize = 'none';

	document.getElementById('editor-box').setAttribute('class', 'max');
	document.getElementById('editor').setAttribute('class', 'maxbis');
}

document.getElementById('editor-min').onclick = function() {
	document.getElementById('editor-min').style.display = 'none';
	document.getElementById('editor-max').style.display = 'block';

	document.getElementById('preview-box').style.display = 'block';

	document.getElementById('editor').style.resize = 'vertical';

	document.getElementById('editor-box').removeAttribute('class');
	document.getElementById('editor').removeAttribute('class');
}

document.getElementById('preview-max').onclick = function() {
	document.getElementById('preview-max').style.display = 'none';
	document.getElementById('preview-min').style.display = 'block';

	document.getElementById('editor-box').style.display = 'none';

	document.getElementById('preview-box').setAttribute('class', 'max');
	document.getElementById('preview').setAttribute('class', 'maxbis');
}

document.getElementById('preview-min').onclick = function() {
	document.getElementById('preview-min').style.display = 'none';
	document.getElementById('preview-max').style.display = 'block';

	document.getElementById('editor-box').style.display = 'block';

	document.getElementById('preview-box').removeAttribute('class');
	document.getElementById('preview').removeAttribute('class');
}