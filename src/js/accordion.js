$(function () {
  //アニメーションをスムーズにするため高さを取得
  $('.filter__content').each(function () {
    $(this).css("height", $(this).height() + "px");
  });
  //コンテンツを隠す
  $('.filter__content').hide();
  //.filter__btnが押されたら
  $('.filter__btn').click(function () {
    //.filter__contentを開閉
    $(this).next('.filter__content').slideToggle('slow');
  });
});