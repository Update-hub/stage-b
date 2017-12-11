$(function() {
  if (window.innerWidth < 600) {
    for (let index = 0; index < 3; index++) {
      $('.js-carousel-' + index).wrapAll('<div class=""></div>');
    }
    let slicks = $('.js-carousel').slick({
    infinite: true, // スライドをループさせるか
    autoplay: false,
    dots: true,
    slidesToShow: 1,
    appendArrows: $('#arrows')
    });
  }
});