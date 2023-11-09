//Creacion de variables necesarias para la creacion de eventos
const nav = document.querySelector(".nav");
const menu_btn = document.querySelector(".menu-btn");
const menu = document.querySelector('.nav__link');

//Catalogo animacion de zapatos
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    strech: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});


//Animacion de carrusel principal
var swiper__carrusel = new Swiper(".Swiper__carrusel", {
  grabCursor: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Nav cambiar color y algunos atributos al bajar el scroll
window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});

//boton de menu, activa el menu lateral para dispositivos moviles
menu_btn.addEventListener('click', ()=> {
  menu.classList.toggle('active')
})
