//--------------------------------------------
//colorbox設定
//--------------------------------------------
function setcolorbox() {
  var modalWidth;
  var modalHeight;
  var width = window.innerWidth;
  if (width < 600) {
    modalWidth = width - 32;
    modalHeight = 1427;
  }
  else {
    modalWidth = width - 64;
    if (width < 768) {
      modalHeight =1540;
    }
    else if(width <1068){
      modalHeight =1290;
    }
    else if(width< 1284){
      modalHeight =1240;
    }
    else{
      modalHeight =1360;
    }
  }

  //インラインフレームにモーダルを表示
  $('.card-wrap-btn').colorbox({
    opacity: 0.7,
    iframe: true,
    returnFocus:false,
    innerWidth: modalWidth,   //幅の指定
    innerHeight: modalHeight //高さの指定
  });
}

//ページ読み込み時にcolorbox設定
$(window).on('load', function () {
  setcolorbox();
});

//リサイズ完了時にcolorbox設定
var timer = false;
$(window).resize(function () {
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    setcolorbox();
  }, 200);
});