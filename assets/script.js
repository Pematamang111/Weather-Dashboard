//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const selectInput = document.querySelector('#select');
const saveHistory = document.querySelector('#history');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';

//data==================================
const cityName = selectInput.value; 

/*const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const day = today.getDate();
    console.log(day);*/

    const today = dayjs();
    const formatDay = today.format('mm/dd/yyyy');
    weatherDetail.append(formatDay);
    
    const setCity = localStorage.setItem('city', JSON.stringify(cityName));
    const getCity = JSON.parse(localStorage.getItem(setCity));
    
    const createhead = document.querySelector('h2');
    const texthead = createhead.innerHTML = getCity + "" + formatDay;
    weatherDetail.append(texthead);

    const createLi = document.createElement('li');
    createLi.style.backgroundColor = '#BBC3A4';
    const textLi = createLi.innerHTML = getCity;
    saveHistory.append(textLi);

//function==============================
function getApi(){
const weatherUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`


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
            const day1Humadity = document.createElement('p');

            const day1TempValue = day1Temp.data[i]
            const day1WindValue = day1Wind.data[i]
            const day1HumadityValue = day1Humadity.data[i]

            dayFive.append(day1TempValue);
            dayFive.append(day1WindValue);
            dayFive.append(day1HumadityValue);

            //day after tomorrow forecast
            const day2 = document.createElement('div');
            day1.style.backgroundColor = '#222831';
            day1.style.width = '150px';
            day1.style.height = '200px';

            //have to create date for after today date 
            // 9/15/2022 
            const day2Temp = document.createElement('p');
            const day2Wind = document.createElement('p');
            const day2Humadity = document.createElement('p');

            const day2TempValue = day1Temp.data[i]
            const day2WindValue = day1Wind.data[i]
            const day2HumadityValue = day1Humadity.data[i]

            dayFive.append(day2TempValue);
            dayFive.append(day2WindValue);
            dayFive.append(day2HumadityValue);
            



    }
})
}

//userinterreaction===========================
searchButton.addEventListener('click', getApi);