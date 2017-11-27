//インレイ表示
$(function(){
  $('.js-menu-btn').on('click', function() {
    $('.js-nav').addClass('open');
    $('.nav-close').addClass('open');
   return false;
  });

  // このevent引数は使われていない
  $('.nav-close').on('click touchstart', function(event) {
    $('.js-nav').removeClass('open');
    $('.nav-close').removeClass('open');
    return false;
  });
  
  $('.js-nav').on('click touchstart', function(event) {
     event.stopPropagation();
  });
});



