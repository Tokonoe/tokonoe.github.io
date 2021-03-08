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
					link: 'pictures/partake_necklace_1_1.jpg',
					text: 'Partake necklace no. 1<br>1 / 3'
				},
				pic2: {
					link: 'pictures/partake_necklace_1_2.jpg',
					text: 'Partake necklace no. 1<br>2 / 3'
				}
			},
			info: {
				text: 'Partake necklace no. 1, 2017<br><br>Acrylic glass, stainless steel',
				page: '3 / 3'
			}
		},
		product2: {
			pics: {
				pic1: {
					link: 'pictures/partake_necklace_2_2.jpg',
					text: 'Partake necklace no. 2<br>1 / 4'
				},
				pic2: {
					link: 'pictures/partake_necklace_2_1.jpg',
					text: 'Partake necklace no. 2<br>2 / 4'
				},
				pic3: {
					link: 'pictures/partake_necklace_2_3.jpg',
					text: 'Partake necklace no. 2<br>3 / 4'
				}
			},
			info: {
				text: 'Partake necklace no. 2, 2017<br><br>Acrylic glass, stainless steel',
				page: '4 / 4'
			}
		},
		product3: {
			pics: {
				pic1: {
					link: 'pictures/partake_earring_1_1.jpg',
					text: 'Partake earrings no.1 ,  black<br>1 / 7'
				},
				pic2: {
					link: 'pictures/partake_necklace_1_2.jpg',
					text: 'Partake earrings no.1 ,  yellow<br>2 / 7'
				},
				pic3: {
					link: 'pictures/partake_necklace_1_3.jpg',
					text: 'Partake earrings no.1 ,  white<br>3 / 7'
				},
				pic4: {
					link: 'pictures/partake_necklace_1_4.jpg',
					text: 'Partake earrings no.1 ,  burgundy<br>4 / 7'
				},
				pic5: {
					link: 'pictures/partake_necklace_1_5.jpg',
					text: 'Partake earrings no.1 ,  blue<br>5 / 7'
				},
				pic6: {
					link: 'pictures/partake_necklace_1_6.jpg',
					text: 'Partake earrings no.1 ,  green<br>6 / 7'
				}
			},
			info: {
				text: 'Partake earrings no.1, 2017<br><br>Acrylic glass, 925 silver<br>40mm × 60mm × 10mm',
				page: '7 / 7'
			}
		},
		product4: {
			pics: {
				pic1: {
					link: 'pictures/partake_earring_2_1.jpg',
					text: 'Partake earrings no.2 ,  red<br>1 / 4'
				},
				pic2: {
					link: 'pictures/partake_necklace_2_2.jpg',
					text: 'Partake earrings no.2 ,  light blue<br>2 / 4'
				},
				pic3: {
					link: 'pictures/partake_necklace_2_3.jpg',
					text: 'Partake earrings no.2 ,  mint<br>3 / 4'
				}
			},
			info: {
				text: 'Partake earrings no.2, 2017<br><br>Acrylic glass, 925 silver<br>35mm × 45mm × 10mm',
				page: '4 / 4'
			}
		},
		product5: {
			pics: {
				pic1: {
					link: 'pictures/partake_ring.jpg',
					text: 'Partake ring no.1<br>1 / 2'
				}
			},
			info: {
				text: 'Partake ring no.1, 2017<br><br>Acrylic glass, 925 silver<br>40mm × 60mm × 10mm',
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