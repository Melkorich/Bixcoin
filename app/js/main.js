$(function(){

  $('.menu-search__btn').on('click', function() {
    $('.menu-search').toggleClass('menu-search--active');
  });

  $('.menu__btn').on('click', function() {
    $('.menu__txt').toggleClass('menu__txt--active');
  });

  // $('.header').on('click', function() {
  //   $('.menu__txt').removeClass('menu__txt--active');
  // });


 
});