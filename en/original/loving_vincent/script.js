let mail = document.getElementsByTagName('input')[0];
let mails = [];

let main = () => {
	let used = false;
	let valid = false;

	//check if mail already used
	for(i=0;i<mails.length;i++) {
		if(mail.value === mails[i]) {
			used = true;
		}
	}

	//check if mail is valid
	for(j=0;j<mail.value.length;j++) {
		if(mail.value[j] === '@') {
			for(k=j;k<mail.value.length;k++) {
				if(mail.value[k] === '.' && mail.value.length > 5) {valid = true}
			}
		}
	}

	//send response
	if(used === false && valid) {
		alert('Request send!');
		mails.push(mail.value);
		mail.value = '';
	}
	else {
		if(used) {
			alert('Email already used!');
			mail.value = '';
		}
		else {
			alert('Please enter a valid email.');
			mail.value = '';
		}
	}

}

//send request
document.getElementsByTagName('input')[1].onclick = main;
window.onkeydown = function(x){if (x.keyCode === 13) {main()}};