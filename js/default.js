$(document).ready(function () {
    
    $(window).scroll(function(){
        scrolledHeader();
    });

    window.onload = function(){
        carouselTextSlide();
    };

    //header on scroll
    function scrolledHeader(){
        var $header = $('.header');
        var $headerScroll = $(window).scrollTop();

        if($headerScroll > 40) {
            $header.addClass('scrolled position-fixed');
        }
        else {
            $header.removeClass('scrolled position-fixed ');
        }
    };

    //carousel text fade in 
    function carouselTextSlide() {
        var $contentCarouselItemCategory = $('.content__carousel-item-category');
        var $contentCarouselItemTitle = $('.content__carousel-item-title');
        var $contentCarouselItemSubtitle = $('.content__carousel-item-subtitle');
        var $contentCarouselItemDetails = $('.content__carousel-item-details');

        setTimeout(function(){
            $contentCarouselItemCategory.addClass('animated slideInLeft d-block');
            $contentCarouselItemTitle.addClass('animated slideInLeft d-block');
        }, 400);
        setTimeout(function(){
            $contentCarouselItemSubtitle.addClass('animated slideInLeft d-block');
            $contentCarouselItemDetails.addClass('animated fadeIn d-block');
        }, 700);
    };

});