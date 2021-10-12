// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
      showMenu = document.getElementById('btn-menu'),
      closeMenu = document.getElementById('btn-close'),
      sectionsHidden = document.querySelectorAll('.section');

if(showMenu){
   showMenu.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
      showMenu.classList.remove('show-menu-btn');
      sectionsHidden.forEach((item => 
         item.classList.add('section-hidden')
         ));
      
   })
}
if(closeMenu){
   closeMenu.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
      showMenu.classList.add('show-menu-btn');
      sectionsHidden.forEach((item => 
         item.classList.remove('section-hidden')
         ));

   })
}
