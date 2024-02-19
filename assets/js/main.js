$(function(){


  $('.header .btn-menu').click(function(){
    $('.menu').addClass('on');
  })
  $('.menu .close').click(function(){
    $('.menu').removeClass('on');
  })

  var swiper = new Swiper(".result-slide", {
    effect: "fade"
});
    
}) //지우지마세요