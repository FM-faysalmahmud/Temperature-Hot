// DO NOT show API KEY NO YOUR JS FILE
const API_kEY = `3e6c08cb50b7756c91b84b07b87ed12e`;

const loadTemperature = (city) => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=3e6c08cb50b7756c91b84b07b87ed12e`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_kEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  // const temperature = document.getElementById("temperature");
  //  console.log(data.main.temp);
  // temperature.innerText = data.main.temp;
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].description);
  console.log(data.weather[0].description);
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id);
  temperature.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;

  // city set
  document.getElementById("city").innerText = city;

  loadTemperature(city);
});

loadTemperature("dhaka");
