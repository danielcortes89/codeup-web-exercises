mapboxgl.accessToken = mapboxToken;
// let searchTerm = "San Antonio, Texas"
let start = {
    lng: -98.598606,
    lat: 29.609374
}



// CURRENT
const getCurrent = (coords) => {
    $.get(`http://api.openweathermap.org/data/2.5/weather`, {
        APPID: OPEN_WEATHER_APPID,
        // q:     "San Antonio, US",
        lat: coords.lat,
        lon: coords.lng,
        units: 'imperial'
    }).done((data) => {
        console.log(data);

        document.getElementById('currentCity').innerText = 'Current Location: ' + data.name

        makeCurrentDisplay(data)

        let iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        let iconImage = `<img src=${iconUrl} width="50" height="50">`

        // $('body').append(iconImage)
    })
}

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
    let metrics = $('#metrics')

    // while(metrics.hasChildNodes()){
    //     metrics.removeChild(metrics.firstChild)
    //
    // }
    metrics.html('')

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
        console.log(data)
        for(let i = 0; i < 40; i++){
            if(data.list[i].dt_txt.includes('21:00:00')){
                makefiveDayDisplay(data.list[i], data.city.name)
            }
        }
        // console.log(makefiveDayDisplay(data.list[0]))
    })
}




const makeCurrentDisplay = (data) => {
    let wind = data.wind.speed
    let { description, icon } = data.weather[0]
    let { sunrise, sunset } = data.sys
    let { temp, humidity, feels_like } = data.main

    console.log(sunrise)
    sunrise = new Date(sunrise * 1000)
    sunset = new Date(sunset * 1000)

    // HTML
    const chunk = document.createElement('div')
    const current = document.createElement('span')
    const cardBody = document.createElement('div')

    // CARD BODY COMPONENTS
    const innerContainer = document.createElement('div')
    const leftInner = document.createElement('div')
    const rightInner = document.createElement('div')
    const suns = document.createElement('div')

    const windDisplay = document.createElement('p')
    const descriptionDisplay = document.createElement('p')
    const iconDisplay = document.createElement('img')
    const sunriseDisplay = document.createElement('p')
    const sunsetDisplay = document.createElement('p')
    const tempDisplay = document.createElement('p')
    const humidDisplay = document.createElement('p')
    const feelDisplay = document.createElement('p')

    chunk.setAttribute('class', 'card  curr-disp my-3')

    current.innerText = 'Meanwhile in ' + data.name
    current.setAttribute('class', 'card-header')

    // LEFT INNER ITEMS
    tempDisplay.innerText = 'Temperature: ' + temp + 'F'

    windDisplay.innerText = 'Wind: ' + wind + 'MPH'

    humidDisplay.innerText = 'Humidity: ' + humidity + '%'

    feelDisplay.innerText = 'Feels Like: ' + feels_like + 'F'

    // RIGHT INNER ITEMS
    // MAKE RESPONSIVE WITH BETTER IMAGES
    iconDisplay.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`)

    descriptionDisplay.innerText = description

    sunriseDisplay.innerText = `Sunrise:  ${sunrise.getHours()}:${sunrise.getMinutes()}:${sunrise.getSeconds()} AM`
    sunsetDisplay.innerText = `Sunset:  ${sunset.getHours()}:${sunset.getMinutes()}:${sunset.getSeconds()} PM`

    suns.appendChild(sunriseDisplay)
    suns.appendChild(sunsetDisplay)

    innerContainer.setAttribute('class', 'row')
    leftInner.setAttribute('class', 'col-12 col-sm-6 leftCurr')
    leftInner.appendChild(tempDisplay)
    leftInner.appendChild(windDisplay)
    leftInner.appendChild(humidDisplay)
    leftInner.appendChild(feelDisplay)

    rightInner.setAttribute('class', 'col-12 col-sm-6 rightCurr')
    rightInner.appendChild(iconDisplay)
    rightInner.appendChild(descriptionDisplay)
    rightInner.appendChild(suns)

    innerContainer.appendChild(leftInner)
    innerContainer.appendChild(rightInner)

    cardBody.appendChild(innerContainer)

    chunk.appendChild(current)
    chunk.appendChild(cardBody)

    $('section').html(chunk)
}

const makefiveDayDisplay = (dayTime, loc) => {
    document.getElementById('currentCity').innerText = 'Current Location: ' + loc
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


    chunk.setAttribute('class', 'card five-unit')

    dateDisplay.innerText = date.replace('21:00:00', '')
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


getCurrent(start)
getFiveDay(start)


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.598606, 29.609374],
    zoom: 9
});

var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.598606, 29.609374])
    .addTo(map);

const getDataFromMarker = () => {
    let markerCoord = marker.getLngLat()
    console.log('move', markerCoord)

    getFiveDay(markerCoord)
    getCurrent(markerCoord)
}

marker.on('dragend', getDataFromMarker())


const inputField = document.getElementById('userSearch')

let takeUser = () => {
    console.log(inputField.value)
    geocode(inputField.value, mapboxToken).then((result) => {

        let lng = result[0]
        let lat = result[1]

        map.flyTo({
            center: result,
            zoom: 14,
            speed: 0.5,
            curve: 1
        });

        marker.setLngLat([lng, lat]).addTo(map)

        getDataFromMarker()
    })
}

$('button').click(takeUser)