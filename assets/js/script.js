var baseUrl = "https://ridb.recreation.gov/api/v1"

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