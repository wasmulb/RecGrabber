var apiKey = "eed7d646-5122-4f56-acec-03d9654afba8";
var baseUrl = "https://ridb.recreation.gov/api/v1";
var campsites = "/campsites";
var media = "/media";
var recareas = "/recareas";

fetch('https://ridb.recreation.gov/api/v1/campsites?limit=50&offset=0',{
    
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




  //just testing
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '219f127985msh142e87da4505be5p148cebjsn56aa6095e26c',
      'X-RapidAPI-Host': 'trailapi-trailapi.p.rapidapi.com'
    }
  };
  
  fetch('https://trailapi-trailapi.p.rapidapi.com/activity/?lat=47.6&limit=20&lon=122.3&radius=25&q-activities_activity_type_name_eq=hiking', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


//