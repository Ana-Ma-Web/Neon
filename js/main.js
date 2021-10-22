// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
			showMenu = document.getElementById('btn-menu'),
			closeMenu = document.getElementById('btn-close'),
			sectionsHidden = document.querySelectorAll('.move, .background-abstraction'),
			hueColor = document.getElementById('hue-color'),
			body = document.querySelector('body');

if(showMenu){
	showMenu.addEventListener('click', () =>{
			navMenu.classList.add('show-menu');
			showMenu.classList.remove('show-menu-btn');
			sectionsHidden.forEach((item => 
				item.classList.add('move-hidden')
			));
	})
}
if(closeMenu){
	closeMenu.addEventListener('click', () => {
			navMenu.classList.remove('show-menu');
			showMenu.classList.add('show-menu-btn');
			sectionsHidden.forEach((item => 
				item.classList.remove('move-hidden')
			));
	})
}

const sliders = document.querySelectorAll('.swiper');
sliders.forEach((el) => {
	let mySwiper = new Swiper(el, {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 1.1,
	});
	
});

