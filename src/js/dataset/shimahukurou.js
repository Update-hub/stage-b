//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 5;
var mycenter = { lat: 43.553057, lng: 142.660991 };
var animals = [
  ['北海道中部', 43.553057, 142.660991,30],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  