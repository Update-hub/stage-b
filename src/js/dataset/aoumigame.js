//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 4;
var mycenter = { lat: 37.740720, lng: 136.962294 };
var animals = [
  ['東シナ海', 32.061513, 128.004204,30],
  ['フィリピン海', 31.736554, 134.004605,20],
  ['太平洋', 33.160427, 134.595580,10]
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  