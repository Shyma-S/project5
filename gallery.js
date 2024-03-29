// gallery section
const swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    loop: true,
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 40,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {

        640: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.75,
        },
        1080: {
            slidesPerView: 3.25,
        },
        1280: {
            slidesPerView: 3.75,
        },
    },
});