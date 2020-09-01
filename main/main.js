$(document).ready(function(){

    //menu options
    $('.responsive-menu').hide();

    $('.fa-bars').click(function(){
        $('.responsive-menu').slideDown(500);
    });

    $('.exit-container').click(function(){
        $('.responsive-menu').slideUp(500);
    });

    //button active class
    $('.title-btn').click(function(){
        $(this).addClass('active-button');
        $(this).siblings().removeClass('active-button');
    })

});