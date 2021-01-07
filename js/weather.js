mapboxgl.accessToken = mapboxToken;
// let searchTerm = "San Antonio, Texas"
let start = {
    lng: -98.598606,
    lat: 29.609374
}



// CURRENT
$.get(`http://api.openweathermap.org/data/2.5/weather`, {
    APPID: OPEN_WEATHER_APPID,
    q:     "San Antonio, US",
    units: 'imperial'
}).done((data) => {
    console.log(data);

    let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    let iconImage = `<img src=${iconUrl} width="50" height="50">`

    $('body').append(iconImage)
})


// FORECAST

const getFiveDay = (coords) => {
    // $.get('http://api.openweathermap.org/data/2.5/forecast/daily', {
    //     appid: OPEN_WEATHER_APPID,
    //     q:  "San Antonio, Texas",
    //     cnt: '5'
    // }).done((data) => {
    //     console.log('FORECAST 5 DAY')
    //     console.log(data)
    // })
    $('#metrics').html()

    $.get(`http://api.openweathermap.org/data/2.5/forecast`, {
        // method: 'GET',
        appid: OPEN_WEATHER_APPID,
        // q:  "San Antonio, Texas",
        // lat: 29.609374,
        // lon: -98.598606,
        lat: coords.lat,
        lon: coords.lng,
        // lon: '',
        units: 'imperial'
    }).done((data) => {
        console.log('FORECAST 5 DAY')
        // console.log(data.list[0].dt_txt)
        for(let i = 0; i < 40; i++){
            if(data.list[i].dt_txt.includes('21:00:00')){
                makefiveDayDisplay(data.list[i])
            }
        }
        // console.log(makefiveDayDisplay(data.list[0]))
    })
}

// `http://api.openweathermap.org/data/2.5/forecast?lat=${-98.598606}&lon${29.609374}`
// [-98.598606, 29.609374]
// q:  "San Antonio, Texas",

const makefiveDayDisplay = (dayTime) => {
    // EXTRACT DATA
    let date = dayTime.dt_txt
    // let date = new Date(da)
    // console.log(date)
    let { main, weather, wind } = dayTime
    let { humidity, pressure } = main
    let temperature = main.temp
    let { icon, description } = weather[0]
    let { speed } = wind

    // HTML
    const chunk = document.createElement('div')
    const dateDisplay = document.createElement('p')
    const cardBody = document.createElement('div')
    // CARD BODY COMPONENTS
    const tempDisplay = document.createElement('p')
    const iconDisplay = document.createElement('img')
    const descriptionDisplay = document.createElement('p')
    const humidDisplay = document.createElement('p')
    const windDisplay = document.createElement('p')

    // let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    // let iconImage = `<img src=${iconUrl} width="50" height="50">`


    chunk.setAttribute('class', 'card')

    dateDisplay.innerText = date
        // + ' - ' + date.getMonth()
    dateDisplay.setAttribute('class', 'card-header')

    cardBody.setAttribute('class', 'card-body')

    tempDisplay.innerText = 'Temperature: ' + Math.floor(temperature) + ' F'

    iconDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)
    iconDisplay.setAttribute('width', '50')
    iconDisplay.setAttribute('height', '50')
    descriptionDisplay.innerText = 'Conditions: ' + description
    humidDisplay.innerText = humidity + '% Humidity'
    windDisplay.innerText = 'Wind: ' + speed + ' MPH'

    cardBody.appendChild(tempDisplay)
    cardBody.appendChild(iconDisplay)
    cardBody.appendChild(descriptionDisplay)
    cardBody.appendChild(humidDisplay)
    cardBody.appendChild(windDisplay)

    chunk.appendChild(dateDisplay)
    chunk.appendChild(cardBody)

    $('#metrics').append(chunk)

    return {
        date,
        speed,
        icon,
        description,
        temperature,
        humidity,
        pressure
    }
}

getFiveDay(start)


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.598606, 29.609374],
    zoom: 11
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.598606, 29.609374])
    .addTo(map);


const test = () => {
    let markerCoord = marker.getLngLat()


    console.log('move', markerCoord)
    getFiveDay(markerCoord)

}

marker.on('dragend', test)

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