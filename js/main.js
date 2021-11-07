// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
		showMenuBtn = document.getElementById('btn-menu'),
		closeMenuBtn = document.getElementById('btn-close'),
		sectionsHidden = document.querySelectorAll('.move, .background-abstraction'),
		hueColor = document.getElementById('hue-color'),
		body = document.querySelector('body'),
		navLink = document.querySelectorAll('.nav__link'),
		abstraction = document.getElementById('abstraction'),
		logo = document.getElementById('abstraction-logo');

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

function startAnimation () {
if (abstraction.className === 'animation-1') {
	abstraction.className = 'animation-2';
	}else if(abstraction.className === 'animation-2'){
		abstraction.className = 'animation-3';
	}else{
		abstraction.className = 'animation-1';
	}
}

if(logo){
	logo.addEventListener('click', () =>{
		startAnimation();
	})
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
		breakpoints:{
			576:{
				slidesPerView: 2
			},
		}
	});
});


document.querySelectorAll('.accordion__control').forEach((item) => 
	item.addEventListener('click', () => {
		item.parentNode.classList.toggle('is-open');
	})
)

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

function scrollUp() {
   const scrollUp = document.getElementById ('scroll-up')
   if (this.scrollY >= 300) scrollUp.classList.add ('show-scroll'); 
   else scrollUp.classList.remove ('show-scroll')
};

window.addEventListener('scroll', scrollUp)