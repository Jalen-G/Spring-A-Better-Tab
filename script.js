var x = document.getElementById("location");

window.addEventListener('load', function load(event) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
})
function getWeather(position) {
    var lng = position.coords.longitude;
    var lat = position.coords.latitude;
}