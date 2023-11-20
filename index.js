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
