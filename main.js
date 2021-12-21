mapboxgl.accessToken = 'pk.eyJ1Ijoib2tpaXJ1cyIsImEiOiJja3gzcXl2emkxdjA1MnVwMng1N3RsYnQ2In0.xHFddfBvmW6uZB6iaaIy9w'

var lat, long, destination

$(document).ready(function () {
    getLocation()
})

$(function () {
    $('#navigate-button').click(function () {
        window.location.href = `navigation.html?source=${lat};${long}&destination=${destination.lat};${destination.lng}`
    })
})

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success)
    } else {
        alert('Sorry, your browser does not support geolocation. Try using another browser!')
    }
}

function success(pos) {
    lat = pos.coords.latitude
    long = pos.coords.longitude

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        center: [long, lat],
        zoom: 18
    })

    map.addControl(

        new mapboxgl.GeolocateControl({
            positionOptions: { enableHighAccuracy: true },
            trackUserLocattion: true,
        })

    )

    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    )

    map.on('click', function (e) {
        destination = e.lngLat
    })

}

