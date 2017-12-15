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

  var touch_start_y;

  //インラインフレームにモーダルを表示
  $('.card-wrap-btn').colorbox({
    opacity: 0.7,
    iframe: true,
    returnFocus: false,
    innerWidth: modalWidth,   //幅の指定
    //innerHeight: modalHeight, //高さの指定
    height:'90%',
    reposition: true,
    onOpen:function(){
      current_scrollY = $(window).scrollTop();
      $('#background-wrap').css({
        position:'fixed',
        width:'100%',
        top: -1*current_scrollY,
      });
          $(window).on('touchmove.noscroll', function(event) {
         var current_y = event.originalEvent.changedTouches[0].screenY,
             height = $('.foriOS-wrap').outerHeight(),
              is_top = touch_start_y <= current_y && $('.foriOS-wrap')[0].scrollTop === 0,
              is_bottom = touch_start_y >= current_y && $('.foriOS-wrap')[0].scrollHeight - $('.foriOS-wrap')[0].scrollTop === height;
          // スクロール対応モーダルの上端または下端のとき
         if (is_top || is_bottom) {
            // スクロール禁止
           event.preventDefault();
          }
        });

    },
    onComplete: function () {
      nodrag();
      //$.colorbox.position(0);
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
  //$(window).off('.noScroll');
  //$(window).off('touchmove.noscroll');
  $('#background-wrap').attr({style:""});
  $('html,body').prop({scrollTop:current_scrollY});
});


//ページ読み込み時にcolorbox設定
$(window).on('load', function () {
  var current_scrollY;
  setcolorbox();
});

//リサイズ完了時にcolorbox設定
var timer = false;
var currentWidth = window.innerWidth;
$(window).resize(function () {
  var diff = currentWidth -window.innerWidth;
  var diffabs = Math.abs(diff);
  if (diffabs < 30) {
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
