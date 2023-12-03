
const btn = document.getElementById("fetchData");

function gotlocation(position ){
  console.log("position");

}
function showerror(){
    console.log("some error");
}




btn.addEventListener("click" , async()=>{
    navigator.geolocation.getCurrentPosition(gotlocation , showerror)


});
  



//   function getLocation() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   }
  
//   function showPosition(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
  
//     // Display map
//     initMap(latitude, longitude);
  
//     // Fetch weather data
//     fetchWeatherData(latitude, longitude);
//   }
  
//   function showError(error) {
//     const errorMsg = document.createElement('p');
//     errorMsg.textContent = "Error fetching location: " + error.message;
//     errorMsg.id = "errorMsg";
//     document.body.appendChild(errorMsg);
//   }
  
//   function initMap(latitude, longitude) {
//     const mapOptions = {
//       center: { lat: latitude, lng: longitude },
//       zoom: 10,
//     };
  
//     const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
//     const marker = new google.maps.Marker({
//       position: { lat: latitude, lng: longitude },
//       map: map,
//       title: 'Your Location'
//     });
//   }
  
//   function fetchWeatherData(latitude, longitude) {
//     const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
//     $.ajax({
//       url: apiUrl,
//       method: 'GET',
//       success: function(data) {
//         displayWeatherData(data);
//       },
//       error: function(error) {
//         console.log("Error fetching weather data:", error);
//       }
//     });
//   }
  
//   function displayWeatherData(data) {
//     const weatherDataDiv = document.getElementById('weatherData');
//     weatherDataDiv.innerHTML = '';
  
//     // Display relevant weather information here based on the structure of OpenWeatherMap API response
//     // Example: Temperature, Description, Humidity, etc.
//   }
  