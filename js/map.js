ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [53.248363, 39.11333],
    zoom: 18,
    controls: [],
  });
  var placemark_inteh = new ymaps.Placemark([53.248363, 39.11333], {});
  myMap.geoObjects.add(placemark_inteh);
}
