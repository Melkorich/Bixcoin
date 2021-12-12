$(function(){

  $(' .menu__btn').on('click', function() {
    $('.search-txt').toggleClass('search-text--active');
  });

  $('.menu__link, .header__navigation-lin').on('click', function() {
    $('.search-txt').removeClass('search-text--active');
  });

 
});