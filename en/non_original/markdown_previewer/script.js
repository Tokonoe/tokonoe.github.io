document.getElementById('editor').innerHTML = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
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