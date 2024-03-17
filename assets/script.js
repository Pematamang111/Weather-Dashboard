//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const selectInput = document.querySelector('#select');
const saveHistory = document.querySelector('#history');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';

//data==================================
let cityName = selectInput.value;

    /*const today = dayjs();
    const formatDay = today.format('mm/dd/yyyy');
    document.querySelector('nav').append(formatDay);*/
     
    const setCity = localStorage.setItem('city', JSON.stringify(cityName));
    const getCity = JSON.parse(localStorage.getItem(setCity));
    
   /* const createhead = document.querySelector('h2');
    const texthead = createhead.innerHTML = getCity + "" + formatDay;
    weatherDetail.append(texthead);*/

    const createLi = document.createElement('li');
    createLi.style.backgroundColor = '#BBC3A4';
    const textLi = createLi.innerHTML = getCity;
    saveHistory.append(textLi);

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

            for( let i = 0; i < 5; i++){
            const fiveDaysWeather = [];
            //if(dayjs(data[i].dt).diff(dayjs(), 'day') === dayjs() &&
            //dayjs(data[i].dt).diff(dayjs(), 'day') < 5 ){
                fiveDaysWeather.push(data.list[i].dt);
                return fiveDaysWeather;
           // }
            console.log(fiveDaysWeather);

   
           //creating card for today's weather
             const todayWeather = document.createElement('h2');
             const todayTemp = document.createElement('p');
             const todayWind = document.createElement('p');
             const todayHumidity = document.createElement('p');

             todayWeather.innerHTML = list;
             todayTemp.innerHTML = list.main.temp;
             todayWind.innerHTML = list.main;
             todayHumidity.innerHTML = list.main.humidity;
 
             weatherDetail.append(todayWeather);
             weatherDetail.append(todayTemp);
             weatherDetail.append(todayWind);
             weatherDetail.append(todayHumidity);


             //5 days forcast===========
            const day5head = document.createElement('h3');
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

            day1Temp.innerHTML = list.main.temp;
            day1Wind.innerHTML = list.wind;
            day1Humidity.innerHTML = list.main.humidity;

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

            day1Temp.innerHTML = list.main.temp;
            day1Wind.innerHTML = list.wind;
            day1Humidity.innerHTML = list.main.humidity;

            dayFive.append(day2Temp);
            dayFive.append(day2Wind);
            dayFive.append(day2Humidity);
            

         
        }
    })
    }
    

 






//userinterreaction===========================
searchButton.addEventListener('click', getApi);