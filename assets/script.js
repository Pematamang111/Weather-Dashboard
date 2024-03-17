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
    getTodayWeather(lat, lon);

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

            for( let i = 0; i < data.length; i++){
            const fiveDaysWeather = [];
           // if(dayjs(data.list[i].dt).diff(dayjs(), 'day') === dayjs() &&
           // dayjs(data.list[i].dt).diff(dayjs(), 'day') < 5 ){
                fiveDaysWeather.push(data.list[i].dt);
               // return fiveDaysWeather;
           // }
            console.log(fiveDaysWeather);

   
           //creating card for today's weather
             const todayWeather = document.createElement('h2');
             const todayTemp = document.createElement('p');
             const todayWind = document.createElement('p');
             const todayHumidity = document.createElement('p');

             todayWeather.innerHTML = data.list[1];
             todayTemp.innerHTML = data.list[1].main.temp;
             todayWind.innerHTML = data.list[1].wind;
             todayHumidity.innerHTML = data.list[1].main.humidity;
             console.log(todayWeather);
 
             weatherDetail.append(todayWeather);
             weatherDetail.append(todayTemp);
             weatherDetail.append(todayWind);
             weatherDetail.append(todayHumidity);


             //5 days forcast===========
           /* const day5head = document.createElement('h3');
            day5head.innerHTML = '5-Day Forecast:';
            dayFive.append(day5head);

            //nextday weather forecast
            const day1 = document.createElement('div');
            day1.style.backgroundColor = '#222831';
            day1.style.width = '150px';
            day1.style.height = '200px';

            //have to create date for after today date 
            // 9/14/2022 
            const day1Temp = document.createElement('p');
            const day1Wind = document.createElement('p');
            const day1Humidity = document.createElement('p');

            day1Temp.innerHTML = data.list[i].main.temp;
            day1Wind.innerHTML = data.list[i].wind;
            day1Humidity.innerHTML = data.list[i].main.humidity;

            dayFive.append(day1Temp);
            dayFive.append(day1Wind);
            dayFive.append(day1Humidity);

            //day after tomorrow forecast
            const day2 = document.createElement('div');
            day1.style.backgroundColor = '#222831';
            day1.style.width = '150px';
            day1.style.height = '200px';

            //have to create date for after today date 
            // 9/15/2022 
            const day2Temp = document.createElement('p');
            const day2Wind = document.createElement('p');
            const day2Humidity = document.createElement('p');

            day1Temp.innerHTML = data.list[i].main.temp;
            day1Wind.innerHTML = data.list[i].wind;
            day1Humidity.innerHTML = data.list[i].main.humidity;

            dayFive.append(day2Temp);
            dayFive.append(day2Wind);
            dayFive.append(day2Humidity);*/
            

         
        }
    })
    }


    function getTodayWeather(lat, lon){
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    
        fetch(weatherUrl)
        .then(function(response){
            return response.json();
        })
         .then(function(data){
             console.log(data);

            data.list[0].dt;

        const todayWeather = document.createElement('h2');
        const todayTemp = document.createElement('p');
        const todayWind = document.createElement('p');
        const todayHumidity = document.createElement('p');

        todayWeather.innerHTML = data.list[0];
        todayTemp.innerHTML = data.list[0].main.temp;
        todayWind.innerHTML = data.list[0].wind;
        todayHumidity.innerHTML = data.list[0].main.humidity;
        console.log(todayWeather);

        weatherDetail.append(todayWeather);
        weatherDetail.append(todayTemp);
        weatherDetail.append(todayWind);
        weatherDetail.append(todayHumidity);


        

          } )}


    
    

 






//userinterreaction===========================
searchButton.addEventListener('click', getApi);