//動物ごとにjsファイル作成
//地図のセンターが変更する場合は originalcenterを定義
//動物のデータ　場所名　緯度、経度、範囲の大きさ
var myzoom = 5;
var mycenter ={ lat: 28.279828, lng: 129.382746 };
var animals = [
  ['奄美大島',28.279828,129.382746,10],
  ['沖縄北部',26.838486, 128.255593,10],
];

//モーダルを閉じる
$(".modal-header__btn-close").click(function(){
  parent.$.fn.colorbox.close();
  });
  