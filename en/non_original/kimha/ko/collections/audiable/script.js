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
					link: 'pictures/audiable_necklace_1.jpg',
					text: 'Audiable necklace no. 1<br>1 / 2'
				}
			},
			info: {
				text: 'Audiable necklace no. 1, 2014<br><br>porcelain, silk thread<br>50mm × 30mm × 20mm',
				page: '2 / 2'
			}
		},
		product2: {
			pics: {
				pic1: {
					link: 'pictures/audiable_necklace_2.jpg',
					text: 'Audiable necklace no. 2<br>1 / 2'
				}
			},
			info: {
				text: 'Audiable necklace no. 2, 2014<br><br>porcelain, enamel, silk thread<br>50mm × 30mm × 20mm',
				page: '2 / 2'
			}
		},
		product3: {
			pics: {
				pic1: {
					link: 'pictures/audiable_necklace_3.jpg',
					text: 'Audiable necklace no. 3<br>1 / 2'
				}
			},
			info: {
				text: 'Audiable necklace no. 3, 2014<br><br>porcelain, enamel, silk thread<br>50mm × 30mm × 20mm',
				page: '2 / 2'
			}
		},
		product4: {
			pics: {
				pic1: {
					link: 'pictures/audiable_necklace_4.jpg',
					text: 'Audiable necklace no. 4<br>1 / 2'
				}
			},
			info: {
				text: 'Audiable necklace no. 4, 2014<br><br>porcelain, enamel, 925 silver<br>100mm × 80mm × 20mm',
				page: '2 / 2'
			}
		},
		product5: {
			pics: {
				pic1: {
					link: 'pictures/audiable_earrings_1_1.jpg',
					text: 'Audiable earrings no. 1<br>1 / 3'
				},
				pic2: {
					link: 'pictures/audiable_earrings_1_2.jpg',
					text: 'Audiable earrings no. 1<br>2 / 3'
				}
			},
			info: {
				text: 'Audiable earrings no. 1, 2014<br><br>porcelain, 925 silver<br>20mm × 15mm × 20mm',
				page: '3 / 3'
			}
		},
		product6: {
			pics: {
				pic1: {
					link: 'pictures/audiable_earrings_2_2.jpg',
					text: 'Audiable earrings no. 2<br>1 / 3'
				},
				pic2: {
					link: 'pictures/audiable_earrings_2_1.jpg',
					text: 'Audiable earrings no. 2<br>2 / 3'
				}
			},
			info: {
				text: 'Audiable earrings no. 2, 2014<br><br>porcelain, 925 silver<br>10mm × 10mm × 20mm',
				page: '3 / 3'
			}
		},
		product7: {
			pics: {
				pic1: {
					link: 'pictures/audiable_earrings_3.jpg',
					text: 'Audiable earrings no. 3<br>1 / 2'
				}
			},
			info: {
				text: 'Audiable earrings no. 3, 2014<br><br>porcelain, 925 silver<br>30mm × 40mm × 30mm',
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