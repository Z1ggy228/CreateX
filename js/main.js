// Jquery
$(function () {
    // MixItUp
    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    // Slider section team
    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        infinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
            [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3
                    }
                },

                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        draggable: true,
                        dots: true,
                        appendDots: $('.team__dots')
                    }
                }
            ]
    })

    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })

    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    // Slider section testimonials
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots')
    })

    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })

    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    // Accordion logic
    $('.program__accordion-link').on('click', function (e) {
        e.preventDefault()

        if ($(this).hasClass('program__accordion-link--active')) {
            $(this).removeClass('program__accordion-link--active')
            $(this).children('.program__accordion-text').slideUp()
        } else {
            $('.program__accordion-link').removeClass('program__accordion-link--active')
            $('.program__accordion-text').slideUp()
            $(this).addClass('program__accordion-link--active')
            $(this).children('.program__accordion-text').slideDown()
        }
    })

    // Checking the burger position
    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    }, 0);

    // Animation for links
    $(".header__nav-list a, .header__top-btn, .footer__go-top").on("click", function (e) {
        e.preventDefault()
        var id = $(this).attr('href'),
            top = $(id).offset().top
        $('body,html').animate({ scrollTop: top }, 500)
    })

    // Adding an "overlay"
    $('.burger, .overlay, .header__top a').on('click', function (e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('burger--close')
    });

    // Footer accordion
    $('.footer__top-title--acc').on('click', function () {
        $(this).next().slideToggle('')
    });
})

// Connecting Yandex map
let center = [58.60442062505395, 49.66742502453601]

function init() {
    let map = new ymaps.Map('info__map', {
        center: center,
        zoom: 13
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: './../images/icons/marker.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -50]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark)
}
ymaps.ready(init);