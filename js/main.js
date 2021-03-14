$(function () {
    $('.banner-section__slider').slick({
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="images/arrow-right.svg" alt=""></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false
                }
            }
        ]
    });


    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.product-slider').slick('setPosition');
    });


    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnPrev"><img src="images/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnNext"><img src="images/arrow-right-black.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.catalog__filter-items_btn').on('click', function () {
        $(this).toggleClass('catalog__filter-items_btn--active');
    });


    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        max_prefix: '5',
    });

    $('.filter-btn__send').on('click', function () {
        $(this).toggleClass('filter-btn__send--active');
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });
    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        spacing: "7px",
        normalFill: "#C4C4C4",
        starWidth: "23px",
        starHeight: "23px"
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    $('.footer__topdrop').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('footer__topdrop--active');
    });



    $('.aside__btn').on('click', function() {
        $(this).next().slideToggle();
    });

});