//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 4;
var mycenter = { lat: 43.553057, lng: 142.660991 };
var animals = [
  ['北海道の森林及び原野に分布', 43.553057, 142.660991,20],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  