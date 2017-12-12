//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 6;
var mycenter = { lat: 43.092322, lng: 144.357185 };
var animals = [
  ['釧路湿原', 43.092322, 144.357185,10],
  ['十勝平野', 43.029785, 143.030822,20],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  