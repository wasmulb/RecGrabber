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

        .then(function(response){
            return response.json();
        })
        .then(function(data){
            let cleanArray = Object.values(data).filter(function(item){
                return item.lat !== "0.0000";
            })

            let activitiesA={
                "camping":[],
                "hiking":[],
                "mountain biking":[]
            }
            for (let i = 0; i < cleanArray.length; i ++){
                if("camping" in cleanArray[i].activities){
                    activitiesA.camping.push(cleanArray[i]);
                }
                if("mountain biking" in cleanArray[i].activities){
                    activitiesA["mountain biking"].push(cleanArray[i]);
                }
                if ("hiking" in cleanArray[i].activities){
                    activitiesA.hiking.push(cleanArray[i]);
                }

            }
            console.log(activitiesA)
            console.log(cleanArray)


        })
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