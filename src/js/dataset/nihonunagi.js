//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 3;
var mycenter = { lat: 37.740720, lng: 136.962294 };
var animals = [
  ['日本全域（北海道以南）', 37.740720, 136.962294,50],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  