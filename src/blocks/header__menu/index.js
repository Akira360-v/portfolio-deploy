import './header__menu.sass';

$('.navmenu').on('click', 'li', function() {
  console.log(1223);
  
  $('.navmenu li.active').removeClass('active');
  $(this).addClass('active');
  console.log(123);

});