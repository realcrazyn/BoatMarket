$(function(){
    $('.banner-section__slider').slick({
        prevArrow:  '<button class="banner-section__slider-btn banner-section__slider-btnPrev"><img src="/images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnNext"><img src="/images/arrow-right.svg" alt=""></button>',
        dots: true
    });


    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
    
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:  '<button class="product-slider__slider-btn product-slider__slider-btnPrev"><img src="/images/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnNext"><img src="/images/arrow-right-black.svg" alt=""></button>'
    });

    $('.catalog__filter-items_btn').on('click', function(){
        $(this).toggleClass('catalog__filter-items_btn--active');
    });


	$('.filter-style').styler();

    $('.filter__item-drop').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
        hide_min_max: false,    // show/hide MIN and MAX labels
        hide_from_to: false, 
        force_edges: false, 
    });
    

});