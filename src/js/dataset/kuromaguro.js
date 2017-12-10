//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var animals = [
  ['日本海', 38.249844, 134.330201,20],
  ['太平洋', 36.007223, 147.087888,40],
];
//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  