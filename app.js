const weatherdata = document.getElementsByClassName("weatherdata");





const apikey = "a6347b783b7884ca7667688febb524ce";



async function checkweather(){
    const url =" https://api.openweathermap.org/data/2.5/weather?q=pune&appid=a6347b783b7884ca7667688febb524ce&units=metric"
    const response= await fetch(url );
   const result = await response.json();
    console.log(result);
   
    document.querySelector(".city").innerHTML=`City: ${result.name}`; 
    document.querySelector(".temp").innerHTML= `Temp: ${result.main.temp}`; 
    document.querySelector(".humitdity").innerHTML = `Humidity: ${result.main.humidity}`;
    document.querySelector(".pressure").innerHTML= `pressure: ${result.main.pressure}` ;
    document.querySelector(".latitude").innerHTML = ` Latitude: ${result.coord.lat }`;
    document.querySelector(".longitude").innerHTML=` Longitudinal: ${result.coord.lon}` ;
    
    
   
 
}
checkweather()


function getdata(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }else{
        weatherdata.innerHTML="geo not support";
    }
}

function showposition(data){
    console.log(data);
}





const latilongiRef = document.querySelector("#text3"); 
const map = document.getElementById("map");
function latitude_Longitude(latitude, longitude) {
    latilongiRef.innerHTML = `<span id="latgap">${latitude}</span> <span id="longgap">${longitude}</span>`;
    map.src = `https://maps.google.com/maps?q=${latitude}, ${longitude}&z=18&output=embed`;
  }
