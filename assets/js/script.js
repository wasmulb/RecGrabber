var apiKey = "eed7d646-5122-4f56-acec-03d9654afba8";
var baseUrl = "https://ridb.recreation.gov/api/v1";
var campsites = "/campsites";
var media = "/media";
var recareas = "/recareas";


//Grabbing Element from HTML
inputSearch = $('#input-search');
userInput = inputSearch.val()
btn = $('#btn');


function recreationAPI() {
    fetch('https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0', {

        headers: {
            apikey: "eed7d646-5122-4f56-acec-03d9654afba8"
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

