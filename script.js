let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateandtime = document.querySelector("h3");
dateandtime.innerHTML = `${
  days[now.getDay()]
} ${now.getHours()}:${now.getMinutes()}`;
//returns the current day of the week and time

/*
    function locationone(position) {
        let apiKey = "";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(//);
    }

    function currentlocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(locationone);
    }

    let thebutton = document.querySelector("button");
    thebutton.addEventListener("click", currentlocation);
*/