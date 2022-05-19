let menuButton = document.querySelectorAll(".menu-btn");

let navLinks = document.querySelector(".nav-links");

let menu2 = document.querySelector('.btn02')
let menu4 = document.querySelector('.btn04')

menuButton.forEach((menu) => {
  menu.addEventListener('click', function(){
      navLinks.classList.toggle('mobile-menu')          
      
  })
});


