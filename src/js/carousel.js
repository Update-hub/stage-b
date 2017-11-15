$(function() {
    var slicks = $('.carousel').slick({
    infinite: true, // スライドをループさせるか
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    slidesToShow: 1,
    appendArrows: $('#arrows')
    });
    $('.slick-next').on('click', function () {
      slicks.slick('slickNext');
    });
    $('.slick-prev').on('click', function () {
      slicks.slick('slickPrev');
    });
});
