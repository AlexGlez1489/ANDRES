var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,  // Mostrar 3 cartas a la vez en pantallas grandes
    spaceBetween: 30,  // Espacio entre las cartas
    loop: true,  // Hacer el slider en bucle
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Configuraciones para móviles
      0: {
        slidesPerView: 1,  // 1 carta en pantallas pequeñas
        spaceBetween: 10,  // Menos espacio entre cartas en móviles
      },
      // Configuraciones para pantallas medianas
      768: {
        slidesPerView: 2,  // 2 cartas en pantallas medianas
        spaceBetween: 20,
      },
      // Configuraciones para pantallas grandes
      1024: {
        slidesPerView: 3,  // 3 cartas en pantallas grandes
        spaceBetween: 30,
      },
    },
  });


  
ScrollReveal({
    reset: true,
    distance: '10px',
    duration: 2000,
    delay: 200
   });

   ScrollReveal().reveal('.up', { origin: 'top'});
   ScrollReveal().reveal('.down', { origin: 'bottom'});
   ScrollReveal().reveal('.left',  { origin: 'left'});
   ScrollReveal().reveal('.right',  { origin: 'right'});

   /*==================== scroll sections active link ====================*/
const typed =  new Typed ('.multiple-text',{

   strings: ['Desarrollador Web FrontEnd Trainee!', 'Técnico en Computación'],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop:true

   } );

 

