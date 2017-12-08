//Google Map初期設定関数
function initMap() {
  var mycenter = { lat: 37.740720, lng: 136.962294 };
  var map = new google.maps.Map(document.getElementById('map__canvas'), {
    zoom: 4,
    center: mycenter,
    mapTypeId: 'terrain'
  });
  //risize

  setMarkers(map);
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}
//生息地域緯度経度
var animals = [
  ['test1', 35.763889, 136.627278],
  ['test2', 35.764135, 139.424984],
  ['test3', 37.416819, 139.434060]
];
//マーカー配置関数
function setMarkers(map) {
  for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var marker = new google.maps.Marker({
      position: { lat: animal[1], lng: animal[2] },
      map: map,
      icon: getCircle(),
      title: animal[0]
    });
  }
}
//カスタムマーカー設定関数
function getCircle() {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: 15,
    strokeColor: 'white',
    strokeWeight: .5
  };
}
