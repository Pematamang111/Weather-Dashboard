//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';


//function==============================
function getApi(){
const weatherUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code},&limit=5&appid={apiKey}';

fetch(weatherUrl)
   .then(function(response){
       return response.json();
})
    .then(function(data){
        console.log(data);
        for( let i = 0; i < data.length; i++){
            const today = document.createElement('h2');
            const todayTemp = document.createElement('p');
            const todayWind = document.createElement('p');
            const todayHumidity = document.createElement('p');

            const todayValue = today.data[i]
            const todayTempValue = todayTemp.data[i]
            const todayWindValue = todayWind.data[i]
            const todayHumidityValue = todayHumidity.data[i]

            weatherDetail.append(todayValue);
            weatherDetail.append(todayTempValue);
            weatherDetail.append(todayWindValue);
            weatherDetail.append(todayHumidityValue);



    }
})
}

//userinterreaction===========================
searchButton.addEventListener('click', getApi);