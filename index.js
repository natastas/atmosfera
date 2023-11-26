'use strict'

let typed = new Typed('.home__text', {
    typeSpeed: 40,
    backSpeed: 50,
    startDelay: 500,
    loop: true,
    stringsElement: '.home__text-vision',
});

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    spaceBetween: 200,
    loop: true,
    centereSlide: true,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const burger = document.querySelector('.burger-menu');
const button = document.querySelector('.burger-menu__button')
const menu = document.querySelector('.burger-menu__nav');
const link = document.querySelector('.burger-menu__link');
const body = document.body;
const links = Array.from(menu.children);
const overlay = document.querySelector('.overlay');

button.addEventListener('click', openBurger);
overlay.addEventListener('click', closeBurger);

links.forEach((link) => {
    link.addEventListener('click', closeBurger);
});

function openBurger() {
    burger.classList.toggle('burger-menu_active');
    body.classList.toggle('body_noscroll');
    overlay.classList.toggle('overlay_active');
}

function closeBurger() {
    overlay.classList.remove('overlay_active');
    burger.classList.remove('burger-menu_active');
    body.classList.remove('body_noscroll');
} 

const token = '6610010186:AAF3ujwqn18MVJMQ8e7SWO0COaFMR_L9mEQ';
const chat_id = '-1002041151654';
const uri_api = `https://api.telegram.org/bot${ token }/sendMessage`;

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Новая Бронь!</b>\n`;
    message += `<b>Имя: </b> ${ this.name.value }\n`;
    message += `<b>Телефон: +7 </b> ${ this.tel.value }\n`;
    message += `<b>Количество гостей: </b> ${ this.guest.value }\n`;
    message += `<b>Дата: </b> ${ this.date.value }\n`;
    message += `<b>Время: </b> ${ this.time.value }\n`;
    
    axios.post(uri_api, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
})





// if (ScrollTrigger.isTouch !== 1) {

//     ScrollSmoother.create ({
//         wrapper: 'wrapper',
//         content: 'content',
//         smooth: 3,
//         effects: true,
//     })

//     gsap.fromTo('.advantages__block-left', { x: -100, opacity: 0 }, {
//         opacity: 1, x: 0,
//         scrollTrigger: {
//             trigger: '.advantages__icon',
//             start: '-850',
		
    
//         }
//     })

//     gsap.fromTo('.advantages__block-right', { x: +100, opacity: 0 }, {
//         opacity: 1, x: 0,
//         scrollTrigger: {
//             trigger: '.advantages__icon',
//             start: '-850',

//         }
//     })

//     gsap.fromTo('.footer', { y: -100, opacity: 0 }, {
//         opacity: 1, y: 0,
//         scrollTrigger: {
//             trigger: '.footer',
//             start: '-850',
    
//         }
//     })
// }