$(function(){

  $('.menu-search__btn').on('click', function() {
    $('.menu-search').toggleClass('menu-search--active');
  }); 

  $('.menu__btn').on('click', function() {
    $('.menu__txt').toggleClass('menu__txt--active');
  });

  $('.menu__burger').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('body').toggleClass('scroll-block');
  })

  $('.menu__link').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
    $('.logo').removeClass('menu__list--active');
    $('.menu__burger').removeClass('menu__burger--active');
    $('body').removeClass('scroll-block');
  }); 

});



const accordion = document.querySelectorAll('.accordion__item');

accordion.forEach(el => {
  el.addEventListener('click', (e) => {
    const item = e.currentTarget;
    const content = item.querySelector('.accordion__content');

    document.querySelectorAll('.accordion__item').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.accordion__content').style.maxHeight = null;
    })

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
    else {
      content.style.maxHeight = null;
    } 
  });
});

AOS.init({
  disable: 'mobile',
  disable: 'phone', 
  offset: 100, 
  easing: 'ease', 
  once: true, 
  anchorPlacement: 'top-bottom'
});




