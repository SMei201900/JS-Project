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
let dateandtime = document.querySelector(".time-and-date");
dateandtime.innerHTML = `${
	days[now.getDay()]
} ${now.getHours()}:${now.getMinutes()}`;
//returns the current day of the week and time

function weather(response) {
	document.querySelector("h2").innerHTML = response.data.name;
	//returns the location name

	document.querySelector(".theweather").innerHTML =
		response.data.weather[0].main;

	document.querySelector(".tempdigits").innerHTML = Math.round(
		response.data.main.temp
	);
	//the above provides the actual temperature number WITHOUT taking away the C and F

	let howhumid = response.data.main.humidity;
	document.querySelector(".theHumidity").innerHTML = `Humidity: ${howhumid}`;
	//the above provides the humidity value

	let velocityofwind = response.data.wind.speed;
	document.querySelector(
		".windSpeed"
	).innerHTML = `Wind Speed: ${velocityofwind}`;
	//the above provides the wind speed
}

function searchlocation(position) {
	let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(weather);
}

function currentlocation(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(searchlocation);
}

function lightblue(city) {
	let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(weather);
}
function darkblue(event) {
	event.preventDefault();
	let city = document.querySelector("#search-text-input").value;
	lightblue(city);
}

function conversionCtoF(event) {
	let initial = document.querySelector(".tempdigits").innerHTML;
	let fahrenheit = initial * (9 / 5) + 32;
	let fdegrees = Math.round(fahrenheit);
	document.querySelector(".tempdigits").innerHTML = fdegrees;
}

function conversionFtoC(event) {
	let initialvalue = document.querySelector(".tempdigits").innerHTML;
	let celsius = (5 / 9) * (initialvalue - 32);
	let cdegrees = Math.round(celsius);
	document.querySelector(".tempdigits").innerHTML = cdegrees;
}

let thebutton = document.querySelector("button");
thebutton.addEventListener("click", currentlocation);

let bluebutton = document.querySelector("#search-form");
bluebutton.addEventListener("submit", darkblue);

let cell = document.querySelector(".ren-to-cel");
cell.addEventListener("click", conversionFtoC);

let ren = document.querySelector(".cel-to-ren");
ren.addEventListener("click", conversionCtoF);
