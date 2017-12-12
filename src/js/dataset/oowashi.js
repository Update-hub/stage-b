//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 5;
var mycenter = { lat: 43.873782, lng: 143.458416 };
var animals = [
  ['北海道北部', 43.873782, 143.458416,50],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  