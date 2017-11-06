$('.js-tab-trg').on('click', function () {
  var targetId = $(this).data('target');

  $('.js-tab-trg').removeClass('tab-item--active');
  $(this).addClass('tab-item--active');
  //$('.js-tab-content').removeClass('tab-content--active');
  //$('.js-tab-content--' + targetId).addClass('tab-content--active');
  return false;
});