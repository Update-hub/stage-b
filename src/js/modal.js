//--------------------------------------------
//colorbox設定
//--------------------------------------------
function setcolorbox() {
  var modalWidth;
  var modalHeight;
  var width = window.innerWidth;
  if (width < 600) {
    modalWidth = width - 32;
    modalHeight = 1600;
  }
  else {
    width = width - 64;
    modalWidth = width;
    if (width < 768) {
      modalHeight = 1800;
    }
    else if (width < 1068) {
      modalHeight = 1290;
    }
    else if (width < 1284) {
      modalHeight = 1240;
    }
    else {
      modalWidth = 1284;
      modalHeight = 1360;
    }
  }

  //インラインフレームにモーダルを表示
  $('.card-wrap-btn').colorbox({
    opacity: 0.7,
    iframe: true,
    returnFocus: false,
    innerWidth: modalWidth,   //幅の指定
    innerHeight: modalHeight, //高さの指定
    reposition: false,
    onComplete: function () {
      noscroll();
      setTimeout(function () {
        $.colorbox.position(0);
      }, 200);
    }
  });
}
//モーダル表示されたらスクロール禁止
function noscroll() {
  $(window).on('touchmove.noScroll', function (e) {
    e.preventDefault();
  });
}
//colorboxが閉じられたらスクロール禁止解除
$(window).bind('cbox_closed', function () {
  $(window).off('.noScroll');
});

//ページ読み込み時にcolorbox設定
$(window).on('load', function () {
  setcolorbox();
});

//リサイズ完了時にcolorbox設定
var timer = false;
var currentWidth = window.innerWidth;
$(window).resize(function () {
  if (currentWidth == window.innerWidth) {
    return;
  }
  currentWidth = window.innerWidth;
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    setcolorbox();
  }, 200);
});
