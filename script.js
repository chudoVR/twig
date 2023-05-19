$(".autoplay").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.menu');
burgerEl.addEventListener('click', function () {
    burgerEl.classList.toggle('active');
    menuEl.classList.toggle('active');
});


const menuLink = document.querySelector('.menu');
menuLink.addEventListener('click', function () {
    menuLink.classList.toggle('active');
    burgerEl.classList.toggle('active');
});