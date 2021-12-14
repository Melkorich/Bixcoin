$(function(){

  $('.menu-search__btn').on('click', function() {
    $('.menu-search').toggleClass('menu-search--active');
  });

  $('.menu__btn').on('click', function() {
    $('.menu__txt').toggleClass('menu__txt--active');
  });

  //варианты аккардиона на jquery

  //#1
  // $('.accordion__heading').on('click', function() {
  //   $(this).next('.accordion__content').slideToggle(200);
  // })

  //#2

  // $('.accordion__control').on('click', function() {
  //   $('.accordion__item').removeClass('accordion__item--active');
  //   $(this).parent('.accordion__item').toggleClass('accordion__item--active');
  // })


});

 //варианты аккардиона на js
  //#1

// document.querySelectorAll('.accordion__heading').forEach((item) =>
//   item.addEventListener('click', () => {
//     const parent = item.parentNode;

//     if (parent.classList.contains('accordion__item--active')) {
//         parent.classList.remove('accordion__item--active');
//     } else {
//       document.querySelectorAll('.accordion__item').forEach((child) => child.classList.remove('accordion__item--active'));
//     }

//     parent.classList.toggle('accordion__item--active');
//   })
// )

 //#2

// const accordions = document.querySelectorAll('.accordion__item');

// for(item of accordions) {
//   item.addEventListener('click', function() {
//     this.classList.toggle('active');
//   })
// }

// for(item of accordions) {
//   item.addEventListener('click', function() {
//     if(this.classList.contains('active')) {
//       this.classList.remove('active');
//     }
//     else {
//       for(el of accordions) {
//         el.classList.remove('active');
//       }
//       this.classList.add('active');
//     }
//   })
// }


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