//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 8;
var mycenter ={ lat: 24.307080, lng: 123.820844 };
var animals = [
  ['西表島',24.307080,123.820844,20]
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  