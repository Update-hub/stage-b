//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 6;
var mycenter = { lat: 35.499138, lng: 138.683553 };
var animals = [
  ['西湖', 35.499138, 138.683553,10],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  