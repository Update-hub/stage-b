$(function(){

    //該当モーダルとオーバーレイを表示
    $(コンテンツ + '.card').click(function(){
      $('.overlay').fadeIn();
      $(コンテンツ + '.modal').fadeIn();
    });

    //オーバーレイで閉じる
    $('.overlay').click(function(){
        $('.overlay').hide();
        $(コンテンツ + '.modal').hide();
    });

    /*
    //「閉じる」ボタンで閉じる
    $('.delete-button').click(function(){
        $('.overlay').hide();
        $(コンテンツ + '.modal').hide();
    });
    */
  
  });