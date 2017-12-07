$(function() {
  if (window.innerWidth < 600) {
    for (let index = 0; index < 3; index++) {
      $('.js-carousel-' + index).wrapAll('<div class=""></div>');
    }

    var slicks = $('.carousel').slick({
    infinite: true, // スライドをループさせるか
    autoplay: false,
    dots: true,
    slidesToShow: 1,
    appendArrows: $('#arrows')
    });
    //スライドボタン
    $('.slick-next').on('click', function () {
      slicks.slick('slickNext');
    });
    $('.slick-prev').on('click', function () {
      slicks.slick('slickPrev');
    });
  }
});