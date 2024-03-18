//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const selectInput = document.querySelector('#select');
const saveHistory = document.querySelector('#history');
const ulEl = document.querySelector('#history');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';

//data==================================
let cityName = selectInput.value;

    let citiesArray = [];

    function saveCities(city){
    const citiesArray = JSON.parse(localStorage.getItem('cities')) || [];
    citiesArray.push(city);
    for (let index = 0; index < citiesArray.length; index++) {
        const city = citiesArray[index];
        const createLi = document.createElement('li');
        createLi.style.backgroundColor = '#BBC3A4';
        createLi.style.width = '200px';
        createLi.innerHTML = city;
        saveHistory.append(createLi);
        
    }

    localStorage.setItem('city', JSON.stringify(citiesArray));
}

//function==============================

function getApi(){
const cityName = selectInput.value;
const latlonUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`


fetch(latlonUrl)
   .then(function(response){
       return response.json();
})
    .then(function(data){
        console.log(data);
    const lat = data[0].lat;
    const lon = data[0].lon;
    getWeather(lat, lon);

     saveCities(cityName);
    })
}

          
function getWeather(lat, lon){
   const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    
    fetch(weatherUrl)
    .then(function(response){
        return response.json();
    })
     .then(function(data){
         console.log(data);
        data.list[0].dt;
        data.list[1].dt;
        data.list[2].dt;
        data.list[3].dt;
        data.list[4].dt;
        data.list[5].dt;

   
           //creating card for today's weather
           weatherDetail.innerHTML = " ";

           const todayWeather = document.createElement('h2');
           const todayTemp = document.createElement('p');
           const todayWind = document.createElement('p');
           const todayHumidity = document.createElement('p');
   
           const currentDate = new Date();
           console.log(currentDate);
           todayWeather.innerHTML = data.city.name + "-" + currentDate.toLocaleString();
           todayTemp.innerHTML = 'Temp'+' '+ data.list[0].main.temp;
           todayWind.innerHTML = 'Wind'+' '+data.list[0].wind.speed;
           todayHumidity.innerHTML = 'Humidity'+' '+ data.list[0].main.humidity;
           console.log(todayWeather);
   
           weatherDetail.append(todayWeather);
           weatherDetail.append(todayTemp);
           weatherDetail.append(todayWind);
           weatherDetail.append(todayHumidity);
   
   
            
           //5 days forcast========================
            dayFive.innerHTML = " "; 

            const day5head = document.createElement('h3');
            day5head.innerHTML = '5-Day Forecast:';
            day5head.style.fontFamily = 'Arial, Helvetica, sans-serif';
            day5head.style.fontSize = '25px';
            dayFive.append(day5head);


             const day1Weather = document.createElement('p');
             day1Weather.style.fontWeight = 'bold';
             const day1Temp = document.createElement('p');
             const day1Wind = document.createElement('p');
             const day1Humidity = document.createElement('p');

             day1Weather.innerHTML = data.list[1].dt_txt;
             day1Temp.innerHTML = 'Temp'+' '+ data.list[1].main.temp;
             day1Wind.innerHTML = 'Wind'+' '+ data.list[1].wind.speed;
             day1Humidity.innerHTML = 'Humidity'+' '+ data.list[1].main.humidity;
 
             dayFive.append(day1Weather);
             dayFive.append(day1Temp);
             dayFive.append(day1Wind);
             dayFive.append(day1Humidity);
            
            const day2Weather = document.createElement('p');
            day2Weather.style.fontWeight = 'bold';
            const day2Temp = document.createElement('p');
            const day2Wind = document.createElement('p');
            const day2Humidity = document.createElement('p');
            
            day2Weather.innerHTML = data.list[2].dt_txt;
            day2Temp.innerHTML = 'Temp'+' '+ data.list[2].main.temp;
            day2Wind.innerHTML = 'Wind'+' '+ data.list[2].wind.speed;
            day2Humidity.innerHTML = 'Humidity'+' '+ data.list[2].main.humidity;
            
            dayFive.append(day2Weather);
            dayFive.append(day2Temp);
            dayFive.append(day2Wind);
            dayFive.append(day2Humidity);

            const day3Weather = document.createElement('p');
            day3Weather.style.fontWeight = 'bold';
            const day3Temp = document.createElement('p');
            const day3Wind = document.createElement('p');
            const day3Humidity = document.createElement('p');
            
            day3Weather.innerHTML = data.list[3].dt_txt;
            day3Temp.innerHTML = 'Temp'+' '+ data.list[3].main.temp;
            day3Wind.innerHTML = 'Wind'+' '+ data.list[3].wind.speed;
            day3Humidity.innerHTML = 'Humidity'+' '+ data.list[3].main.humidity;
            
            dayFive.append(day3Weather);
            dayFive.append(day3Temp);
            dayFive.append(day3Wind);
            dayFive.append(day3Humidity);


            const day4Weather = document.createElement('p');
            day4Weather.style.fontWeight = 'bold';
            const day4Temp = document.createElement('p');
            const day4Wind = document.createElement('p');
            const day4Humidity = document.createElement('p');
            
            day4Weather.innerHTML = data.list[4].dt_txt;
            day4Temp.innerHTML = 'Temp'+' '+ data.list[4].main.temp;
            day4Wind.innerHTML = 'Wind'+' '+ data.list[4].wind.speed;
            day4Humidity.innerHTML = 'Humidity'+' '+ data.list[4].main.humidity;
            
            dayFive.append(day4Weather);
            dayFive.append(day4Temp);
            dayFive.append(day4Wind);
            dayFive.append(day4Humidity);

            const day5Weather = document.createElement('p');
            day5Weather.style.fontWeight = 'bold';
            const day5Temp = document.createElement('p');
            const day5Wind = document.createElement('p');
            const day5Humidity = document.createElement('p');
            
            day5Weather.innerHTML = data.list[5].dt_txt;
            day5Temp.innerHTML = 'Temp'+' '+ data.list[5].main.temp;
            day5Wind.innerHTML = 'Wind'+' '+ data.list[5].wind.speed;
            day5Humidity.innerHTML = 'Humidity'+' '+ data.list[5].main.humidity;
            
            dayFive.append(day5Weather);
            dayFive.append(day5Temp);
            dayFive.append(day5Wind);
            dayFive.append(day5Humidity);
            

         
        
    })
    }


//userinterreaction===========================
searchButton.addEventListener('click', getApi);
ulEl.addEventListener('click', function(e){
   const eventLi = e.target.innerText;
    console.log(eventLi);
    getApi(eventLi);

})