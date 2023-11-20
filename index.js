let typed = new Typed('.home__text', {
    typeSpeed: 40,
    backSpeed: 50,
    startDelay: 500,
    loop: true,
    stringsElement: '.home__text-vision'
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

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create ({
        wrapper: 'wrapper',
        content: 'content',
        smooth: 3,
        effects: true,
    })

    gsap.fromTo('.advantages__block-left', { x: -100, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.advantages__icon',
            start: '-850',
		
    
        }
    })

    gsap.fromTo('.advantages__block-right', { x: +100, opacity: 0 }, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: '.advantages__icon',
            start: '-850',

        }
    })

    gsap.fromTo('.footer', { y: -100, opacity: 0 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
            trigger: '.footer',
            start: '-850',
    
        }
    })
}

const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.burger-menu__nav');
const link = document.querySelector('.burger-menu__link');
const body = document.body;
const links = Array.from(menu.children);

burger.addEventListener('click', openBurger);

links.forEach((link) => {
    link.addEventListener('click', closeBurger);
});

function openBurger() {
    burger.classList.toggle('burger-menu_active');
    body.classList.toggle('body_noscroll');
}

function closeBurger() {
    burger.classList.add('burger-menu_active');
    body.classList.add('body_noscroll');
} 
