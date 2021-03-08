window.onload = function(){

	setInterval(function(){
		document.getElementById('nav-mobile').style.top = document.getElementsByTagName('nav')[0].clientHeight + 'px';
		document.getElementById('main-pic').style.marginTop = document.getElementsByTagName('nav')[0].clientHeight + 'px';
		document.getElementById('main-pic').style.height = window.innerHeight - document.getElementsByTagName('nav')[0].clientHeight + 'px'
	},10)

	$('#nav-menu').click(function(){
		$('#nav-mobile').slideToggle();
	})



	const products = {
		product1: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_1.jpg',
					text: 'Doubles and Couples earrings no. 1<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 1, 2016<br><br>925 silver<br>90mm × 2mm × 15mm',
				page: '2 / 2'
			}
		},
		product2: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_2.jpg',
					text: 'Doubles and Couples earrings no. 2<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 2, 2016<br><br>925 silver<br>90mm × 15mm × 15mm',
				page: '2 / 2'
			}
		},
		product3: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_3.jpg',
					text: 'Doubles and Couples earrings no. 3<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 3, 2016<br><br>925 silver<br>30mm × 25mm × 15mm',
				page: '2 / 2'
			}
		},
		product4: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_4.jpg',
					text: 'Doubles and Couples earrings no. 4<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 4, 2016<br><br>925 silver<br>25mm × 25mm × 20mm',
				page: '2 / 2'
			}
		},
		product5: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_5.jpg',
					text: 'Doubles and Couples earrings no. 5<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 5, 2016<br><br>925 silver<br>7mm × 12mm × 12mm',
				page: '2 / 2'
			}
		},
		product6: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_6.jpg',
					text: 'Doubles and Couples earrings no. 6<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 6, 2016<br><br>porcelain, silk thread<br>5mm × 20mm × 12mm',
				page: '2 / 2'
			}
		},
		product7: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_7.jpg',
					text: 'Doubles and Couples earrings no. 7<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 7, 2016<br><br>925 silver<br>10mm × 30mm × 12mm',
				page: '2 / 2'
			}
		},
		product8: {
			pics: {
				pic1: {
					link: 'pictures/doubles-couples_earring_8.jpg',
					text: 'Doubles and Couples earrings no. 8<br>1 / 2'
				}
			},
			info: {
				text: 'Doubles and Couples earrings no. 8, 2016<br><br>925 silver<br>1mm × 12mm × 12mm',
				page: '2 / 2'
			}
		}
	}

	let n = 0;

	for(x in products) {

		document.getElementById('products').innerHTML += `<div class="product">
			<button class="left"></button>
			<button class="right"></button>
		</div>`;

		let p = document.getElementsByClassName('product')[n];
		n++;
		
		for(y in products[x]['pics']) {
			p.innerHTML += `<div class="product-pic slide" style="background-image: url('`+products[x]['pics'][y]['link']+`')">
				<p>`+products[x]['pics'][y]['text']+`</p>
			</div>`
		}

		p.innerHTML += `<div class="info slide">
			<p class="info-text">`+products[x]['info']['text']+`</p>
			<p class="info-page">`+products[x]['info']['page']+`</p>
		</div>`;

	}

	

	const setPrevNext = function(a) {
		document.getElementsByClassName('right')[a].addEventListener('click', function(){

			const slides = document.getElementsByClassName('product')[a].getElementsByClassName('slide');
			let orderedSlides = [];
			let active;
			for(x of slides) {orderedSlides.push(x)}
			
			for(y in orderedSlides) {
				if(window.getComputedStyle(orderedSlides[y]).getPropertyValue('display') === 'block') {
					$(orderedSlides[y]).fadeOut();
					let yPlus1 = Number(y) + 1;
					if(yPlus1>orderedSlides.length-1) {$(orderedSlides[0]).fadeIn()}
					else {$(orderedSlides[yPlus1]).fadeIn()}
					break;
				}
			}

		})

		document.getElementsByClassName('left')[a].addEventListener('click', function(){

			const slides = document.getElementsByClassName('product')[a].getElementsByClassName('slide');
			let orderedSlides = [];
			let active;
			for(x of slides) {orderedSlides.push(x)}
			
			for(y in orderedSlides) {
				if(window.getComputedStyle(orderedSlides[y]).getPropertyValue('display') === 'block') {
					$(orderedSlides[y]).fadeOut();
					let yMinus1 = Number(y) - 1;
					if(yMinus1<0) {$(orderedSlides[orderedSlides.length-1]).fadeIn()}
					else {$(orderedSlides[yMinus1]).fadeIn()}
					break;
				}
			}

		})
	}

	let a = 0;

	for(y in products) {
		setPrevNext(a);
		a++;
	}

}