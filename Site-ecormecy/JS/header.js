mobileMenu = document.querySelector(".menuLink");
ulNav = document.querySelector(".ul-nav");
   
mobileMenu.onclick = function(){
    ulNav.classList.toggle("active")
}