// ===== SHOW MENU =====
const navMenu = document.getElementById('nav-menu'),
      showMenu = document.getElementById('btn-menu'),
      closeMenu = document.getElementById('btn-close'),
      sectionsHidden = document.querySelectorAll('.move, .background-abstraction');

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
