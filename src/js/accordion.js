$(function () {
  //アニメーションをスムーズにするため高さを取得
  $('.filter__content').each(function () {
    $(this).css("height", $(this).height() + "px");
  });
  //コンテンツを隠す
  $('.filter__content').hide();
  //ボタンが押されたら
  $('.filter__btn').click(function () {
    //開閉し、次の.filter__contentに処理を引き継ぐ
    $(this).next('.filter__content').slideToggle('slow');
  });
});