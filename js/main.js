// подсказки для форм (можноу удалить)

$(function(){
    var mr_input="input[type=text]";
    $(mr_input).each(function() {    $(this).data('stext',$(this).val());                                               });
    $(mr_input).focus(function(){	 $(this).val()==$(this).data('stext')  ?   $(this).val(''): "0";	               	});
    $(mr_input).blur(function() {    $(this).val().length<=0               ?   $(this).val($(this).data('stext')): "0"; });
});

$(document).ready(function() {

    // Проверка на тип устройства
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {
        $('video-background').addClass('hidden');
    } else {}
});


$(document).ready(function() {
    $('#fullpage').fullpage({
        responsiveHeight: 800,
        responsiveWidth: 1240,
        navigation: true,
        navigationPosition: 'right'
    });
});


$(".btn-popup").fancybox({
    'padding' : 0,
    'closeBtn' : false
});

$(".politic").fancybox({
    'padding' : 0
});


//  слайдер

$('.slider').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.portfolio-nav .prev').click(function(){
    $('.slider').slick('slickPrev');
});

$('.portfolio-nav .next').click(function(){
    $('.slider').slick('slickNext');

});
