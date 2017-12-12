//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 6;
var mycenter = { lat: 43.826460, lng: 142.973599 };
var animals = [
  ['北海道上川郡', 43.826460, 142.973599,10]
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  