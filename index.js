'use strict'

//самопечатающийся текст
let typed = new Typed('.home__text', {
    typeSpeed: 40,
    backSpeed: 50,
    startDelay: 500,
    loop: true,
    stringsElement: '.home__text-vision',
});

//свайпер
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
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
          slidesPerView: 1,
          loop: true,
        },
        
        // desktop >= 991
        949: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
        }
      },
    spaceBetween: 250,
    loop: true,
    speed: 500,
    effect: 'slider',
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: 2,
});

new Swiper('.swiper_two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        // mobile + tablet - 320-990
        320: {
          slidesPerView: 1,
          loop: true,
        },
        
        // desktop >= 991
        949: {
          slidesPerView: 2,
          slidesOffsetBefore: 0,
        }
      },
    spaceBetween: 200,
    loop: true,
    speed: 500,
    effect: 'slider',
    initialSlide: 2,
    centeredSlides: true,
    slidesPerView: 2,
});

//меню бургер
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

//валидация формы и отправка в тг
const token = '6610010186:AAF3ujwqn18MVJMQ8e7SWO0COaFMR_L9mEQ';
const chat_id = '-1002041151654';
const uri_api = `https://api.telegram.org/bot${ token }/sendMessage`;
const success = document.getElementById('success');

let form = document.querySelector('.form');
let formInputs = document.querySelectorAll('.form__input');
let inputPhone = document.querySelector('.form__tel'); 
//let inputErr = document.querySelector('.form__span');
let formSubmit = document.querySelector('.form__button');

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    let emtyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
                if (input.value === '') {
                    input.classList.add('form__input_error');
                    //inputErr.classList.add('form__span-vis');
                    console.log('oshibka')
                } else {
                    input.classList.remove('form__input_error');
                   // inputErr.classList.remove('form__span-vis');
                }
            })

    if (emtyInputs.length !== 0) {
        console.log('ne otpravil');
        return false;
    }

    let message = `<b>Новая Бронь!</b>\n`;
    message += `<b>Имя: </b> ${ this.name.value }\n`;
    message += `<b>Телефон: </b> ${ this.tel.value }\n`;
    message += `<b>Количество гостей: </b> ${ this.guest.value }\n`;
    message += `<b>Дата: </b> ${ this.date.value }\n`;
    message += `<b>Время: </b> ${ this.time.value }\n`;
    
    axios.post(uri_api, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        formSubmit.classList.add('form__button-none')
        this.name.value = '';
        this.tel.value = '';
        this.guest.value = '';
        this.date.value = '';
        this.time.value = '';
        success.innerHTML = 'Спасибо! Данные успешно отправлены.';
        success.style.display = 'block';
    }) 
    .catch((err) => {
        console.warn(err);
        
    })
    .finally(() => {
        console.log('the end')
    })
})

//Макса ввода телефона
window.addEventListener("DOMContentLoaded", function() {
function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(event) {
    var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });

    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
    var input = document.querySelector("#form__tel");
    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
});

// let form = document.querySelector('.form');
// let formInputs = document.querySelectorAll('.form__input');
// let inputPhone = document.querySelector('.form__tel');

// form.onsubmit = function () {
//     let phoneVal = inputPhone.value;

//     formInputs.forEach(function (input) {
//         if (input.value === '') {
//             input.classList.add('form__input_error');
//             comsole.log('oskaofkoasfkoa')
//         } else {
//             input.classList.remove('error');
//         }
//     })
// }

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
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