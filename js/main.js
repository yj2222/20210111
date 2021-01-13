$(function(){
  // navigation event
  $('.spbtn').on('click', function(){
    $(this).toggleClass('active');
    $('nav.spnav').toggleClass('active');
  });
  // accordion menu
  let ddMenu = 'nav.spnav ul.dd-menu';
  $('nav.spnav li.dd-tgl').on('click', function(){
    $(ddMenu).not($(this).children(ddMenu)).slideUp();
    $(this).children(ddMenu).slideToggle();
  });
  // bxslider
  $(document).ready(function(){
    $('.bxslider').bxSlider({
      auto: true,
      speed: 1000,
      pause: 5000
    });
  });
  // scroll top
  $(window).scroll(function(){
    if($(window).scrollTop() >= 500){
      $('.scl-top').fadeIn();
    } else {
      $('.scl-top').fadeOut();
    }
  });
  $('.scl-top').on('click', function(){
    $('html').animate({scrollTop:0});
  });
});