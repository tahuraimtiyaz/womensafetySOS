let lastPosition = null;


function sendSOS() {
window.location.href = "alert.html";
}


if (navigator.geolocation) {
setInterval(() => {
navigator.geolocation.getCurrentPosition(showPosition);
}, 5000);
}


function showPosition(position) {
const lat = position.coords.latitude.toFixed(5);
const lon = position.coords.longitude.toFixed(5);


if (document.getElementById('lat')) {
document.getElementById('lat').innerText = lat;
document.getElementById('lon').innerText = lon;
document.getElementById('time').innerText = new Date().toLocaleString();


if (lastPosition) {
const moved = Math.abs(lastPosition.lat - lat) > 0.0001 || Math.abs(lastPosition.lon - lon) > 0.0001;
document.getElementById('movement').innerText = moved ? 'Moving' : 'Still';
}


lastPosition = { lat, lon };
}
}
