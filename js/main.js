// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
		showMenuBtn = document.getElementById('btn-menu'),
		closeMenuBtn = document.getElementById('btn-close'),
		sectionsHidden = document.querySelectorAll('.move, .background-abstraction'),
		hueColor = document.getElementById('hue-color'),
		body = document.querySelector('body'),
		navLink = document.querySelectorAll('.nav__link');

function closeMenu (){
	navMenu.classList.remove('show-menu');
	showMenuBtn.classList.add('show-menu-btn');
	sectionsHidden.forEach((item => 
		item.classList.remove('move-hidden')
	));
}
function showMenu () {
	navMenu.classList.add('show-menu');
	showMenuBtn.classList.remove('show-menu-btn');
	sectionsHidden.forEach((item => 
		item.classList.add('move-hidden')
	));
}

if(showMenuBtn){
	showMenuBtn.addEventListener('click', () =>{
		showMenu();
	})
}
if(closeMenuBtn){
	closeMenuBtn.addEventListener('click', () => {
		closeMenu();
	})
}
if(navLink){
	navLink.forEach((el) => {
		el.addEventListener('click', () => {
			closeMenu();
		})
	})
}

const sliders = document.querySelectorAll('.swiper');
sliders.forEach((el) => {
	let mySwiper = new Swiper(el, {
		direction: 'horizontal',
		slidesPerView: 1,
		loop: true,
		spaceBetween: 5,
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
	});
	
});


document.querySelectorAll('.accordion__control').forEach((item) => 
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('is-open');
	})
)