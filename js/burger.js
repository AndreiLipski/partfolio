// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.nav-menu'),
//     menuItem = document.querySelectorAll('.nav-menu__list-item'),
//     hamburger = document.querySelector('.hamburger');
  
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('nav-menu_active');
        
//     });
  
//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('nav-menu_active');
//         })
//     })
//   })

const menu = document.querySelector('.nav-menu');
const hamb = document.querySelector('.hamburger');

document.addEventListener('click', showHamb);

function showHamb(event) {
    if (event.target.closest('.hamburger')){
        menu.classList.toggle('nav-menu_active');
        hamb.classList.toggle('hamburger_active');
    }
    if (!event.target.closest(".hamburger")){
        hamb.classList.remove("hamburger_active");
        menu.classList.remove("nav-menu_active");
    }
}