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
					link: 'pictures/some_earring_1_1.jpg',
					text: 'Some O earrings no. 1 ,  navy blue<br>1 / 5'
				},
				pic2: {
					link: 'pictures/some_earring_1_2.jpg',
					text: 'Some O earrings no. 1 ,  fuchsia<br>2 / 5'
				},
				pic3: {
					link: 'pictures/some_earring_1_3.jpg',
					text: 'Some O earrings no. 1 ,  green<br>3 / 5'
				},
				pic4: {
					link: 'pictures/some_earring_1_4.jpg',
					text: 'Some O earrings no. 1 ,  yellow<br>4 / 5'
				}
			},
			info: {
				text: 'Some O earrings no. 1, 2016<br><br>925 silver, acrylic glass<br>8mm × 45mm × 10mm',
				page: '5 / 5'
			}
		},
		product2: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_2_1.jpg',
					text: 'Some O earrings no. 2 ,  white<br>1 / 4'
				},
				pic2: {
					link: 'pictures/some_earring_2_2.jpg',
					text: 'Some O earrings no. 2 ,  red<br>2 / 4'
				},
				pic3: {
					link: 'pictures/some_earring_2_3.jpg',
					text: 'Some O earrings no. 2 ,  green<br>3 / 4'
				}
			},
			info: {
				text: 'Some O earrings no. 2, 2016<br><br>925 silver, acrylic glass<br>15mm × 55mm × 10mm',
				page: '4 / 4'
			}
		},
		product3: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_3_1.jpg',
					text: 'Some O earrings no. 3 ,  light blue<br>1 / 4'
				},
				pic2: {
					link: 'pictures/some_earring_3_2.jpg',
					text: 'Some O earrings no. 3 ,  green<br>2 / 4'
				},
				pic3: {
					link: 'pictures/some_earring_3_3.jpg',
					text: 'Some O earrings no. 3 ,  fuchsia<br>3 / 4'
				}
			},
			info: {
				text: 'Some O earrings no. 3, 2016<br><br>925 silver, acrylic glass<br>15mm × 40mm × 10mm',
				page: '4 / 4'
			}
		},
		product4: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_4_1.jpg',
					text: 'Some O earrings no. 4 ,  mint<br>1 / 5'
				},
				pic2: {
					link: 'pictures/some_earring_4_2.jpg',
					text: 'Some O earrings no. 4 ,  fuchsia<br>2 / 5'
				},
				pic3: {
					link: 'pictures/some_earring_4_3.jpg',
					text: 'Some O earrings no. 4 ,  green<br>3 / 5'
				},
				pic4: {
					link: 'pictures/some_earring_4_4.jpg',
					text: 'Some O earrings no. 4 ,  navy blue<br>4 / 5'
				}
			},
			info: {
				text: 'Some O earrings no. 4, 2016<br><br>925 silver, acrylic glass<br>15mm × 40mm × 10mm',
				page: '5 / 5'
			}
		},
		product5: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_5.jpg',
					text: 'Some O earrings no. 5<br>1 / 2'
				}
			},
			info: {
				text: 'Some O earrings no. 5, 2016<br><br>925 silver<br>20mm × 20mm × 10mm',
				page: '2 / 2'
			}
		},
		product6: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_6.jpg',
					text: 'Some O earrings no. 6<br>1 / 2'
				}
			},
			info: {
				text: 'Some O earrings no. 6, 2016<br><br>925 silver<br>20mm × 20mm × 10mm',
				page: '2 / 2'
			}
		},
		product7: {
			pics: {
				pic1: {
					link: 'pictures/some_earring_7_1.jpg',
					text: 'Some T earrings no. 1 ,  violet<br>1 / 10'
				},
				pic2: {
					link: 'pictures/some_earring_7_2.jpg',
					text: 'Some T earrings no. 1 ,  perse<br>2 / 10'
				},
				pic3: {
					link: 'pictures/some_earring_7_3.jpg',
					text: 'Some T earrings no. 1 ,  copper<br>3 / 10'
				},
				pic4: {
					link: 'pictures/some_earring_7_4.jpg',
					text: 'Some T earrings no. 1 ,  azure<br>4 / 10'
				},
				pic5: {
					link: 'pictures/some_earring_7_5.jpg',
					text: 'Some T earrings no. 1 ,  beige<br>5 / 10'
				},
				pic6: {
					link: 'pictures/some_earring_7_6.jpg',
					text: 'Some T earrings no. 1 ,  blue<br>6 / 10'
				},
				pic7: {
					link: 'pictures/some_earring_7_7.jpg',
					text: 'Some T earrings no. 1 ,  light blue<br>7 / 10'
				},
				pic8: {
					link: 'pictures/some_earring_7_8.jpg',
					text: 'Some T earrings no. 1 ,  yellow<br>8 / 10'
				},
				pic9: {
					link: 'pictures/some_earring_7_9.jpg',
					text: 'Some T earrings no. 1 ,  light green<br>9 / 10'
				}
			},
			info: {
				text: 'Some T earrings no. 1, 2013<br><br>925 silver, glass beads<br>10mm × 15mm × 10mm',
				page: '10 / 10'
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