var inputSearch = $('#input-search');
var cityName = inputSearch.val();
var btn = $('#btn');
var resultsPage = $('#results-page')
var hikingColumn = $('#hiking-column')
var bikingColumn = $('#biking-column')
var campColumn = $('#camp-column')
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
                "biking":[]
            }
            for (let i = 0; i < cleanArray.length; i ++){
                if("camping" in cleanArray[i].activities){
                    activitiesA.camping.push(cleanArray[i]);
                }
                if("mountain biking" in cleanArray[i].activities){
                    activitiesA["biking"].push(cleanArray[i]);
                }
                if ("hiking" in cleanArray[i].activities){
                    activitiesA.hiking.push(cleanArray[i]);
                }

            }
            // Dynamically create divs
            var hikingDiv = document.createElement("h2")
            var campDiv = document.createElement("h2")
            var bikingDiv = document.createElement("h2")

            for(var i = 0; i<activitiesA.camping.length; i++){
              var campCard = document.createElement("div")
              var campName = document.createElement("p")
              var campDes = document.createElement("p")
              var campDir = document.createElement("p")
              campName.innerText = "Name: "
              campDes.innerText = "Description: "
              campDir.innerText = "Directions: "
              campColumn.append(campCard)
              campCard.append(campName)
              campCard.append(campDes)
              campCard.append(campDir)
                campCard.addEventListener('click',function(){
                    secondAPIFetch(activitiesA.biking[i].lat,activitiesA.biking[i].lon)
                })
            }

            for(var i = 0; i<activitiesA.hiking.length; i++){
              var hikingCard = document.createElement("div")
              var hikingName = document.createElement("p") 
              var hikingDes = document.createElement("p")
              var hikingDir = document.createElement("p")
              hikingName.innerText = "Name: "
              hikingDes.innerText = "Description: "
              hikingDir.innerText = "Directions: "
              hikingColumn.append(hikingCard)
              hikingCard.append(hikingName)
              hikingCard.append(hikingDes)
              hikingCard.append(hikingDir)
                hikingCard.addEventListener('click',function(){
                    secondAPIFetch(activitiesA.biking[i].lat,activitiesA.biking[i].lon)
                })
            }

            for(var i = 0; i<activitiesA.biking.length; i++){
              var bikingCard = document.createElement("div")
              var bikingName = document.createElement("p")
              var bikingDes = document.createElement("p")
              var bikingDir = document.createElement("p")
              bikingName.innerText = "Name: "
              bikingDes.innerText = "Description: "
              bikingDir.innerText = "Biking Results"
              bikingColumn.append(bikingCard)
              bikingCard.append(bikingName)
              bikingCard.append(bikingDes)
              bikingCard.append(bikingDir)
                bikingCard.addEventListener('click',function(){
                    secondAPIFetch(activitiesA.biking[i].lat,activitiesA.biking[i].lon)
                })
            }

            hikingDiv.innerText = "Hiking Results"
            campDiv.innerText = "Camping Results"
            bikingDiv.innerText = "Biking Results"

            console.log(activitiesA)
            console.log(cleanArray)


        })
        .catch(err => console.error(err));



}

function secondAPIFetch(lat, lon){
    var finalURL="" +lat +lon;
    console.log(lat,lon)
    // fetch(finalURL)
    //     .then(function(response){
    //         return response.json()
    //     })
    //     .then(function(data){
    //         console.log(data);
    //
    //     })
}

inputSearch.on('keyup', function(){
    cityName = inputSearch.val();

})

btn.on('click', function(e){
    e.preventDefault();
    recreationAPI();
    console.log(cityName)
})