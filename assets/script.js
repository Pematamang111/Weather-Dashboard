//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const selectInput = document.querySelector('#select');
const saveHistory = document.querySelector('#history');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';

//data==================================
let cityName = selectInput.value;

    let citiesArray = [];
    const setCity = localStorage.setItem('city', JSON.stringify(cityName));

    function saveCities(){
    const getCity = JSON.parse(localStorage.getItem(setCity));
    
    const createLi = document.createElement('li');
    createLi.style.backgroundColor = '#BBC3A4';
    createLi.innerHTML = getCity;
    citiesArray.push(getCity);
    saveHistory.append(textLi);

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

           const todayWeather = document.createElement('h2');
           const todayTemp = document.createElement('p');
           const todayWind = document.createElement('p');
           const todayHumidity = document.createElement('p');
   
           todayWeather.innerHTML = data.list[0];
           todayTemp.innerHTML = data.list[0].main.temp;
           todayWind.innerHTML = data.list[0].wind.speed;
           todayHumidity.innerHTML = data.list[0].main.humidity;
           console.log(todayWeather);
   
           weatherDetail.append(todayWeather);
           weatherDetail.append(todayTemp);
           weatherDetail.append(todayWind);
           weatherDetail.append(todayHumidity);
   
   
            
           //5 days forcast========================

            const day5head = document.createElement('h3');
            day5head.innerHTML = '5-Day Forecast:';
            dayFive.append(day5head);


             const day1Weather = document.createElement('h2');
             const day1Temp = document.createElement('p');
             const day1Wind = document.createElement('p');
             const day1Humidity = document.createElement('p');

             day1Weather.innerHTML = data.list[1];
             day1Temp.innerHTML = data.list[1].main.temp;
             day1Wind.innerHTML = data.list[1].wind.speed;
             day1Humidity.innerHTML = data.list[1].main.humidity;
 
             dayFive.append(day1Weather);
             dayFive.append(day1Temp);
             dayFive.append(day1Wind);
             dayFive.append(day1Humidity);
            
        
            const day2Temp = document.createElement('p');
            const day2Wind = document.createElement('p');
            const day2Humidity = document.createElement('p');

            day2Temp.innerHTML = data.list[2].main.temp;
            day2Wind.innerHTML = data.list[2].wind.speed;
            day2Humidity.innerHTML = data.list[2].main.humidity;

            dayFive.append(day2Temp);
            dayFive.append(day2Wind);
            dayFive.append(day2Humidity);

           
            const day3Temp = document.createElement('p');
            const day3Wind = document.createElement('p');
            const day3Humidity = document.createElement('p');

            day3Temp.innerHTML = data.list[3].main.temp;
            day3Wind.innerHTML = data.list[3].wind.speed;
            day3Humidity.innerHTML = data.list[3].main.humidity;

            dayFive.append(day3Temp);
            dayFive.append(day3Wind);
            dayFive.append(day3Humidity);


            
            const day4Temp = document.createElement('p');
            const day4Wind = document.createElement('p');
            const day4Humidity = document.createElement('p');

            day4Temp.innerHTML = data.list[4].main.temp;
            day4Wind.innerHTML = data.list[4].wind.speed;
            day4Humidity.innerHTML = data.list[4].main.humidity;

            dayFive.append(day4Temp);
            dayFive.append(day4Wind);
            dayFive.append(day4Humidity);


            const day5Temp = document.createElement('p');
            const day5Wind = document.createElement('p');
            const day5Humidity = document.createElement('p');

            day5Temp.innerHTML = data.list[5].main.temp;
            day5Wind.innerHTML = data.list[5].wind.speed;
            day5Humidity.innerHTML = data.list[5].main.humidity;

            dayFive.append(day5Temp);
            dayFive.append(day5Wind);
            dayFive.append(day5Humidity);
            

         
        
    })
    }


//userinterreaction===========================
searchButton.addEventListener('click', getApi);