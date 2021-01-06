mapboxgl.accessToken = mapboxToken;

$.get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${OPEN_WEATHER_APPID}`, {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US"
}).done((data) => {
    console.log(data);
})

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.598606, 29.609374],
    zoom: 12
});

// const makeTemplate = (item) => {
//     let { date, temperature, description, humidity, wind, pressure} = item
//
//     let chunk = document.createElement('div')
//     chunk.classList.add('card')
//     chunk.classList.add('my-4')
//     // chunk.classList.add('p-3')
//
//     let titleDisplay = document.createElement('p')
//     titleDisplay.classList.add('card-header')
//     titleDisplay.classList.add('bg-secondary')
//     titleDisplay.classList.add('text-light')
//     titleDisplay.innerText = title
//
//     const body = document.createElement('div')
//     body.classList.add('card-body')
//
//     let dateDisplay = document.createElement('p')
//     dateDisplay.innerText = date
//
//     let contentsDisplay = document.createElement('p')
//     contentsDisplay.innerText = contents
//
//     let categoriesDisplay = document.createElement('p')
//     categoriesDisplay.innerText = 'Categories: ' + categories.join(', ')
//
//     chunk.appendChild(titleDisplay)
//     body.appendChild(dateDisplay)
//     body.appendChild(contentsDisplay)
//     body.appendChild(categoriesDisplay)
//     chunk.appendChild(body)
//
//     target.appendChild(chunk)
// }



// var marker = new mapboxgl.Marker({
//     color: "#000000",
//     draggable: true
// })
//     .setLngLat([-98.4916, 29.4260])
//     .addTo(map)