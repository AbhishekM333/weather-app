const search = async () => {
    let city_name = input_name.value;
    console.log(city_name);

    const date=new Date
    console.log(date);


    if (city_name) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=1cca1dba11b9319ce5813550544141af&units=metric`
      );
      response.json().then((items) => {
        console.log(items);

        let city = items.name;
        console.log(city);

        let country = items.sys.country;
        console.log(country);

        let main = items.weather[0].main;
        console.log(main);

        let temp = items.main.temp;
        console.log(temp);

        let feels = items.main.feels_like;
        console.log(feels);

        let pressure = items.main.pressure;
        console.log(pressure);

        let humidity = items.main.humidity;
        console.log(humidity);

        let wind = items.wind.speed;
        console.log(wind);

        let icon = items.weather[0].icon;
        console.log(icon);

        result.innerHTML = `
        <div class="results">

       <div class="heading">
        <h1>${city}</h1>
        <h4>${country}</h4>
        <p>${date}</p>
        </div>

       <div class="temp">
        <div>
        <h1>${temp} °C</h1>
      </div>
      <div class="temp_details">
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" class="poster">
        <h3>${main}</h3>
     </div>
     <div class="line">
    <hr>
    </div>
  </div>

<div class="details">
    <div class="feels">
      <div>feels</div>
      <div>
        <p>${feels}°C</p>
        </div>
    </div>
<div class="pressure">
    <div>pressure</div>
    <p>${pressure}</p>
</div>
<div class="humidity">
    <div>humidity</div>
    <p>${humidity}%</p>
</div>
<div class="wind">
    <div>wind</div>
    <p>${wind} Km/h</p>
</div>
</div>

</div>`
                    ;
      });
    }
  };