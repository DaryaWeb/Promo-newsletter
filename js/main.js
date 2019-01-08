$(document).ready(function(){
    $('.slider-container').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        arrows: false,
    });
});