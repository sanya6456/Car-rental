$(document).ready(function(){

    //menu options
    $('.responsive-menu').hide();

    $('.fa-bars').click(function(){
        $('.responsive-menu').slideDown(500);
    });

    $('.exit-container').click(function(){
        $('.responsive-menu').slideUp(500);
    });

    //button active class in title section
    $('.title-btn').click(function(){
        $(this).addClass('active-button');
        $(this).siblings().removeClass('active-button');
    })

    //button active class in card section
    $('.card-btn').click(function(){
        $(this).addClass('active-button');
        $(this).siblings().removeClass('active-button');
    })


    //swiper initialize X < 794px  !!!
    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
    });



});

