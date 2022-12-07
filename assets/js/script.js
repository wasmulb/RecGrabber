
var inputSearch = $('#input-search');
var cityName = inputSearch.val();
var btn = $('#btn');
//API
var apiKey = "219f127985msh142e87da4505be5p148cebjsn56aa6095e26c";
var queryUrl = 'https://trailapi-trailapi.p.rapidapi.com/activity/?q-city_cont=';

function recreationAPI() {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '219f127985msh142e87da4505be5p148cebjsn56aa6095e26c',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };

    fetch(queryUrl + cityName, options)

        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}


inputSearch.on('keyup', function(){
    cityName = inputSearch.val();

})

btn.on('click', function(e){
    e.preventDefault();
    recreationAPI();
    console.log(cityName)
})