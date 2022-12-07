var apiKey = "219f127985msh142e87da4505be5p148cebjsn56aa6095e26c";
var queryUrl = "https://trailapi-trailapi.p.rapidapi.com/trails/explore/?'{cityName}'";



//Grabbing Element from HTML
inputSearch = $('#input-search');
userInput = inputSearch.val()
btn = $('#btn');


function recreationAPI() {
    fetch(queryUrl, {


        headers: {
            apikey: "219f127985msh142e87da4505be5p148cebjsn56aa6095e26c"
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .then(function (data) {
            console.log(data);
        });
}


inputSearch.on('keyup', function(){
    userInput = inputSearch.val();
    recreationAPI();
})

btn.on('click', function(e){
    e.preventDefault();
})