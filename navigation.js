
$(document).ready(function(){
    getCoords()
})

function getCoords () {
    var coords = new URLSearchParams(window.location.search)
    if(coords.has('source') && coords.has('destination')){
        var source = coords.get('source')
        var destination = coords.get('destination')
        
        sourcelat = source.split(';')[0]
        sourcelong = source.split(';')[1]
        destinationlat = destination.split(';')[0]
        destinationlong = destination.split(';')[1]
        console.log(sourcelat)
        console.log(sourcelong)
        console.log(destinationlat)
        console.log(destinationlong)
    } else {
        alert('Please select both "source" and "destination"')
        window.history.back()
    }
}