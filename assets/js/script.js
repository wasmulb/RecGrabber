//Global Variables
var inputSearch = $('#input-search');
var cityName = inputSearch.val();
var btn = $('#btn');
var resultsPage = $('#results-page');
var hikingColumn = $('#hiking-column');
var bikingColumn = $('#biking-column');
var campColumn = $('#camp-column');

//API Variables
var apiKey = "219f127985msh142e87da4505be5p148cebjsn56aa6095e26c";
var queryUrl = 'https://trailapi-trailapi.p.rapidapi.com/activity/?q-city_cont=';

function recreationAPI() {
    hikingColumn.empty();
    bikingColumn.empty();
    campColumn.empty();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '219f127985msh142e87da4505be5p148cebjsn56aa6095e26c',
            'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
        }
    };
    // Trails API call to grab data by city name
    fetch(queryUrl + cityName, options)

        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // Filters out place with latitude and longtitude that is equal to 0.0000
            let cleanArray = Object.values(data).filter(function(item){
                return item.name !== "0.0000";
            })
            // Storing needed information to the hashtable.
            let activitiesA={
                "camping":[],
                "hiking":[],
                "biking":[]
            }
            //Loop through object data and stores data that matches with conditional statement to the activitiesA
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
            var hikingDiv = document.createElement("h2");
            var campDiv = document.createElement("h2");
            var bikingDiv = document.createElement("h2");
            campColumn.append(campDiv);
            hikingColumn.append(hikingDiv);
            bikingColumn.append(bikingDiv);

            //Loop to create card, and stores information into the campCard. Then, calls google map api with the arg.
            for(var i = 0; i<activitiesA.camping.length; i++){
              var campCard = document.createElement("div");
              campCard.classList.add("rCard");
              var campName = document.createElement("h4");
              campName.classList.add ("name");
              var campDes = document.createElement("p");
              var campDir = document.createElement("p");
              campDir.classList.add("dir");
              campName.innerText =  activitiesA.camping[i].name;
              campDes.innerText = "Description: " +activitiesA.camping[i].description;
              campDir.innerText = "Click for directions!";
              campCard.append(campName);
              campCard.append(campDes);
              campCard.append(campDir);
                campCard.addEventListener('click',function(event){
                    var queryName = this.querySelector(".name").innerText;
                    secondAPIFetch(queryName);
            
                })
                campColumn.append(campCard);
            }

            //Loop to create card, and stores information into the hikingCard. Then, calls google map api with the arg.

            for(var i = 0; i<activitiesA.hiking.length; i++){
              var hikingCard = document.createElement("div");
              hikingCard.classList.add("rCard");
              var hikingName = document.createElement("h4");
              hikingName.classList.add ("name");
              var hikingDes = document.createElement("p");
              var hikingDir = document.createElement("p");
              hikingDir.classList.add("dir");
              hikingName.innerText =  activitiesA.hiking[i].name;
              hikingDes.innerText = "Description: " +activitiesA.hiking[i].description;
              hikingDir.innerText = "Click for directions!";
              hikingCard.append(hikingName);
              hikingCard.append(hikingDes);
              hikingCard.append(hikingDir);
                hikingCard.addEventListener('click',function(event){
                    var queryName = this.querySelector(".name").innerText;
                    secondAPIFetch(queryName);
                })
                hikingColumn.append(hikingCard);
            }

            //Loop to create card, and stores information into the bikingCard. Then, calls google map api with the arg.
            for(var i = 0; i<activitiesA.biking.length; i++){
              var bikingCard = document.createElement("div");
              bikingCard.classList.add("rCard");
              var bikingName = document.createElement("h4");
              bikingName.classList.add ("name");
              var bikingDes = document.createElement("p");
              var bikingDir = document.createElement("p");
              bikingDir.classList.add("dir");
              bikingName.innerText =  activitiesA.biking[i].name;
              bikingDes.innerText = "Description: " +activitiesA.biking[i].description;
              bikingDir.innerText = "Click for directions!";
              bikingCard.append(bikingName);
              bikingCard.append(bikingDes);
              bikingCard.append(bikingDir);
                bikingCard.addEventListener('click',function(event){
                    var queryName = this.querySelector(".name").innerText;
                  secondAPIFetch(queryName);

                })
                bikingColumn.append(bikingCard);
            }

            //InnerText to added title of the sections
            hikingDiv.innerText = "Hiking Results";
            campDiv.innerText = "Camping Results";
            bikingDiv.innerText = "Biking Results";

        })
        .catch(err => console.error(err));



}
// Once Card is clicked, it will trigger this google api call with the name and the location of the map.
function secondAPIFetch(name){
    console.log(name)
    var finalURL="https://www.google.com/maps/embed/v1/place?key=AIzaSyAkKP3neW1E5ARIwiRpMHc6pnfObzz3qpk&q="+name;
    window.open (finalURL);
}
// Stores user input to the cityName var
inputSearch.on('keyup', function(){
    cityName = inputSearch.val();

})
// When button "search" is clicked, it triggers trails API.
btn.on('click', function(e){

    e.preventDefault();
    recreationAPI();
    console.log(cityName);
    localStorage.setItem("cityName", JSON.stringify(cityName));
});


