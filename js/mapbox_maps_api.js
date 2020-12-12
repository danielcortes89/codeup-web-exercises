// 29.609374
//
// -98.598606


// 0: -98.60634
// 1: 29.609685


// 0: -98.512909
// 1: 29.620389

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.598606, 29.609374],
    zoom: 12
});

// let marker = new mapboxgl.Marker({
//     color: "#FFF",
//         draggable: true
// }).setLngLat([-98.598606, 29.609374])
//     .setZoom(12)
//     .addTo(map);

var marker = new mapboxgl.Marker()
    .setLngLat([-98.598606, 29.609374])
    .setPopup(new mapboxgl.Popup()
        .setText("Latin")
        .addTo(map))
    .addTo(map);


let ruth = new mapboxgl.Marker()
    .setLngLat([-98.60634, 29.620389])
    .setPopup(new mapboxgl.Popup()
        .setText("Ruth")
        .addTo(map))
    .addTo(map)

let sake = new mapboxgl.Marker()
    .setLngLat([-98.512909, 29.620389])
    .setPopup(new mapboxgl.Popup()
        .setText("Sake")
        .addTo(map))
    .addTo(map)



// let popUp = new mapboxgl.Popup()
//     .setLngLat([-98.598606, 29.609374])
//     .setText("Latin")
//     .addTo(map)