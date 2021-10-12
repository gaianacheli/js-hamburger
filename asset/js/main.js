//mostrare e nascondere menu principale al click

//variabili

const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburger = document.querySelector('.fa-bars')
const closeHamburger = document.querySelector('.fa-times')

//mostra menu

hamburger.addEventListener('click' , function(){
    hamburgerMenu.className = "hamburger-menu active";
    
})

//chiudi menu

closeHamburger.addEventListener('click' , function(){
    hamburgerMenu.className = "hamburger-menu"
})

 



    
  
    
    