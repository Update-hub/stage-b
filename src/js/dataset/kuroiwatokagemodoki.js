//動物ごとにjsファイル作成
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 8;
var mycenter ={ lat: 26.501339, lng: 127.955116 };
var animals = [
  ['沖縄島', 26.501339, 127.955116,20],
  ['瀬底島', 26.642671, 127.861409,5],
  ['古宇利島', 26.705809, 128.022147,5]
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  