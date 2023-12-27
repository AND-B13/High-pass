ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map("myMap", {
    center: [ 55.769535, 37.639985],
    zoom: 17,
    suppressMapOpenBlock: true,
    controls: []
  });

  const myPlacemark = new ymaps.Placemark([55.769535, 37.639985], {}, {
    iconLayout: 'default#image',
    iconImageHref: './img/location.svg',
    iconImageSize: [40, 40],
    iconImageOffset: [-3, -42]
  });
  myMap.geoObjects.add(myPlacemark);
}
