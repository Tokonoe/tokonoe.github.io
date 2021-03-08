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
					link: 'pictures/core_necklace_1_1.jpg',
					text: 'Core necklace no. 1<br>1 / 3'
				},
				pic2: {
					link: 'pictures/core_necklace_1_2.jpg',
					text: 'Core necklace no. 1<br>2 / 3'
				}
			},
			info: {
				text: 'Core necklace no. 1, 2008<br><br>925 silver, steel thread<br>30mm × 30mm × 20mm',
				page: '3 / 3'
			}
		},
		product2: {
			pics: {
				pic1: {
					link: 'pictures/core_necklace_2.jpg',
					text: 'Core necklace no. 2<br>1 / 2'
				}
			},
			info: {
				text: 'Core necklace no. 2, 2015<br><br>polyamide, steel thread<br>40mm × 40mm × 35mm',
				page: '2 / 2'
			}
		},
		product3: {
			pics: {
				pic1: {
					link: 'pictures/core_ring_1.jpg',
					text: 'Core ring no. 1<br>1 / 2'
				}
			},
			info: {
				text: 'Core ring no. 1, 2015<br><br>polyamide<br>40mm × 40mm × 20mm',
				page: '2 / 2'
			}
		},
		product4: {
			pics: {
				pic1: {
					link: 'pictures/core_ring_2.jpg',
					text: 'Core ring no. 2<br>1 / 2'
				}
			},
			info: {
				text: 'Core ring no. 2, 2008<br><br>925 silver<br>40mm × 35mm × 15mm',
				page: '2 / 2'
			}
		},
		product5: {
			pics: {
				pic1: {
					link: 'pictures/core_ring_3.jpg',
					text: 'Core ring no. 3<br>1 / 2'
				}
			},
			info: {
				text: 'Core ring no. 3, 2008<br><br>925 silver<br>20mm × 50mm × 20mm',
				page: '2 / 2'
			}
		},
		product6: {
			pics: {
				pic1: {
					link: 'pictures/core_ring_4.jpg',
					text: 'Core ring no. 4<br>1 / 2'
				}
			},
			info: {
				text: 'Core ring no. 4, 2008<br><br>925 silver, gems<br>40mm × 35mm × 15mm',
				page: '2 / 2'
			}
		},
		product7: {
			pics: {
				pic1: {
					link: 'pictures/core_brooch_1_1.jpg',
					text: 'Core brooch no. 1<br>1 / 3'
				},
				pic2: {
					link: 'pictures/core_brooch_1_2.jpg',
					text: 'Core brooch no. 1<br>2 / 3'
				}
			},
			info: {
				text: 'Core brooch no. 1, 2015<br><br>polyamide, 925 silver<br>40mm × 45mm × 30mm',
				page: '3 / 3'
			}
		},
		product8: {
			pics: {
				pic1: {
					link: 'pictures/core_brooch_2.jpg',
					text: 'Core brooch no. 2<br>1 / 2'
				}
			},
			info: {
				text: 'Core brooch no. 2, 2015<br><br>polyamide, 925 silver<br>25mm × 95mm × 20mm',
				page: '2 / 2'
			}
		},
		product9: {
			pics: {
				pic1: {
					link: 'pictures/core_brooch_3.jpg',
					text: 'Core brooch no. 3<br>1 / 2'
				}
			},
			info: {
				text: 'Core brooch no. 3, 2015<br><br>polyamide, stainless steel<br>40mm × 35mm × 50mm',
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