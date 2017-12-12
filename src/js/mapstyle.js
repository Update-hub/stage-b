//------------------------
//Google Map API初期設定関数
//------------------------
function initMap() {
  var map = new google.maps.Map(document.getElementById('map__canvas'), {
    zoom: myzoom,
    center: mycenter,
    mapTypeId: 'terrain'
  });
//円マーカーセット
  setMarkers(map);
//リサイズ完了時にMapのセンタリングを行う
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
  
//マーカー配置関数、動物配列animalsより場所名、緯度、経度、円の範囲を持ってくる
function setMarkers(map) {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var marker = new google.maps.Marker({
      position: { lat: animal[1], lng: animal[2] },
      map: map,
      icon: getCircle(animal[3]),
      title: animal[0]
    });
  }
}

//カスタムマーカー設定関数、引数は円の範囲
function getCircle(myscale) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: myscale,
    strokeColor: 'white',
    strokeWeight: .5
  };
}
