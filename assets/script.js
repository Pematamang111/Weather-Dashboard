//dependencies=========================
const weatherDetail = document.querySelector('#weatherDetail');
const dayFive = document.querySelector('#dayFive');
const searchButton = document.querySelector('#search');
const selectInput = document.querySelector('#select');
const saveHistory = document.querySelector('#history');
const ulEl = document.querySelector('#history');
const apiKey = '7cb9b0e18cc07a883b919195c72f4dcd';

//data==================================

    let citiesArray = [];

    function saveCities(city){
    const citiesArray = JSON.parse(localStorage.getItem('cities')) || [];
    citiesArray.push(city);
    for (let index = 0; index < citiesArray.length; index++) {
        const city = citiesArray[index];
        const createLi = document.createElement('li');
        createLi.style.backgroundColor = '#BBC3A4';
        createLi.style.width = '200px';
        createLi.style.marginTop = '7px';
        createLi.style.paddingLeft = '10px';
        createLi.innerHTML = city;
        saveHistory.append(createLi);
        
    }

    localStorage.setItem('city', JSON.stringify(citiesArray));
}

//function==============================

function getApi(cityName){
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
        const iconCode = data.list[0].weather[0].icon;  // Extract icon code
       const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
       // const iconCode1 = data.list[1].weather[1].icon;  // Extract icon code
       //const iconUrl1 = `https://openweathermap.org/img/wn/${iconCode1}@2x.png`;
       // const iconCode2 = data.list[2].weather[2].icon;  // Extract icon code
       // const iconUrl2 = `https://openweathermap.org/img/wn/${iconCode2}@2x.png`;
       // const iconCode3 = data.list[3].weather[3].icon;  // Extract icon code
        //const iconUrl3 = `https://openweathermap.org/img/wn/${iconCode3}@2x.png`;
        //const iconCode4 = data.list[4].weather[4].icon;  // Extract icon code
        //const iconUrl4 = `https://openweathermap.org/img/wn/${iconCode4}@2x.png`;
        //const iconCode5 = data.list[5].weather[5].icon;  // Extract icon code
        //const iconUrl5 = `https://openweathermap.org/img/wn/${iconCode5}@2x.png`;
   
           //creating card for today's weather
           weatherDetail.innerHTML = " ";

           const todayWeather = document.createElement('h2');
           todayWeather.style.paddingTop = '10px';
           const todayIcon = document.createElement('img');
           const todayTemp = document.createElement('p');
           const todayWind = document.createElement('p');
           const todayHumidity = document.createElement('p');
           todayHumidity.style.paddingBottom = '10px';
   
           const currentDate = new Date();
           console.log(currentDate);
           todayWeather.innerHTML = data.city.name +" "+ currentDate.toLocaleDateString();
           todayIcon.setAttribute('src', iconUrl);
           todayTemp.innerHTML = 'Temp'+' '+ data.list[0].main.temp;
           todayWind.innerHTML = 'Wind Speed'+' '+data.list[0].wind.speed + ' '+'mph';
           todayHumidity.innerHTML = 'Humidity'+' '+ data.list[0].main.humidity + '%';
           console.log(todayWeather);
   
           weatherDetail.append(todayWeather);
           weatherDetail.append(todayIcon);
           weatherDetail.append(todayTemp);
           weatherDetail.append(todayWind);
           weatherDetail.append(todayHumidity);
   
   
            
           //5 days forcast========================
            dayFive.innerHTML = " "; 

            const day5head = document.createElement('h3');
            day5head.innerHTML = '5-Day Forecast:';
            day5head.style.color = 'white';
            day5head.style.fontFamily = 'Arial, Helvetica, sans-serif';
            day5head.style.fontSize = '25px';
            day5head.style.paddingTop = '10px';
            dayFive.append(day5head);


             const day1Weather = document.createElement('p');
             day1Weather.style.fontWeight = 'bold';
             //const day1Icon = document.createElement('img');
             const day1Temp = document.createElement('p');
             const day1Wind = document.createElement('p');
             const day1Humidity = document.createElement('p');
             day1Humidity.style.paddingBottom = '15px';
             const hrLine1 = document.createElement('hr');

             day1Weather.innerHTML = dayjs().add(1, 'day').format('YYYY-MM-DD');
             //day1Icon.setAttribute('src', iconUrl1);
             day1Temp.innerHTML = 'Temp'+' '+ data.list[1].main.temp;
             day1Wind.innerHTML = 'Wind Speed'+' '+ data.list[1].wind.speed + ' ' + 'mph';
             day1Humidity.innerHTML = 'Humidity'+' '+ data.list[1].main.humidity + '%';
 
             dayFive.append(day1Weather);
             //dayFive.append(day1Icon);
             dayFive.append(day1Temp);
             dayFive.append(day1Wind);
             dayFive.append(day1Humidity);
             dayFive.append(hrLine1);
            
            const day2Weather = document.createElement('p');
            day2Weather.style.fontWeight = 'bold';
            //const day2Icon = document.createElement('img');
            const day2Temp = document.createElement('p');
            const day2Wind = document.createElement('p');
            const day2Humidity = document.createElement('p');
            day2Humidity.style.paddingBottom = '15px';
            const hrLine2 = document.createElement('hr');
            
            day2Weather.innerHTML = dayjs().add(2, 'day').format('YYYY-MM-DD');
           // day2Icon.setAttribute('src', iconCode2);
            day2Temp.innerHTML = 'Temp'+' '+ data.list[2].main.temp;
            day2Wind.innerHTML = 'Wind Speed'+' '+ data.list[2].wind.speed + ' ' + 'mph';
            day2Humidity.innerHTML = 'Humidity'+' '+ data.list[2].main.humidity + '%';
            
            dayFive.append(day2Weather);
            //dayFive.append(day2Icon);
            dayFive.append(day2Temp);
            dayFive.append(day2Wind);
            dayFive.append(day2Humidity);
            dayFive.append(hrLine2);

            const day3Weather = document.createElement('p');
            day3Weather.style.fontWeight = 'bold';
            //const day3Icon = document.createElement('img');
            const day3Temp = document.createElement('p');
            const day3Wind = document.createElement('p');
            const day3Humidity = document.createElement('p');
            day3Humidity.style.paddingBottom = '15px';
            const hrLine3 = document.createElement('hr');
            
            day3Weather.innerHTML = dayjs().add(3, 'day').format('YYYY-MM-DD');
            //day3Icon.setAttribute('src', iconCode3);
            day3Temp.innerHTML = 'Temp'+' '+ data.list[3].main.temp;
            day3Wind.innerHTML = 'Wind Speed'+' '+ data.list[3].wind.speed + ' ' + 'mph';
            day3Humidity.innerHTML = 'Humidity'+' '+ data.list[3].main.humidity + '%';
            
            dayFive.append(day3Weather);
            //dayFive.append(day3Icon);
            dayFive.append(day3Temp);
            dayFive.append(day3Wind);
            dayFive.append(day3Humidity);
            dayFive.append(hrLine3);


            const day4Weather = document.createElement('p');
            day4Weather.style.fontWeight = 'bold';
            //const day4Icon = document.createElement('img');
            const day4Temp = document.createElement('p');
            const day4Wind = document.createElement('p');
            const day4Humidity = document.createElement('p');
            day4Humidity.style.paddingBottom = '15px';
            const hrLine4 = document.createElement('hr');
            
            day4Weather.innerHTML = dayjs().add(4, 'day').format('YYYY-MM-DD');
            //day4Icon.setAttribute('src', iconCode4);
            day4Temp.innerHTML = 'Temp'+' '+ data.list[4].main.temp;
            day4Wind.innerHTML = 'Wind Speed'+' '+ data.list[4].wind.speed + ' ' + 'mph';
            day4Humidity.innerHTML = 'Humidity'+' '+ data.list[4].main.humidity + '%';
            
            dayFive.append(day4Weather);
            //dayFive.append(day4Icon);
            dayFive.append(day4Temp);
            dayFive.append(day4Wind);
            dayFive.append(day4Humidity);
            dayFive.append(hrLine4);

            const day5Weather = document.createElement('p');
            day5Weather.style.fontWeight = 'bold';
            //const day5Icon = document.createElement('img');
            const day5Temp = document.createElement('p');
            const day5Wind = document.createElement('p');
            const day5Humidity = document.createElement('p');
            day5Humidity.style.paddingBottom = '15px';
            const hrLine5 = document.createElement('hr');
            
            day5Weather.innerHTML = dayjs().add(5, 'day').format('YYYY-MM-DD');
            //day5Icon.setAttribute('src', iconCode5);
            day5Temp.innerHTML = 'Temp'+' '+ data.list[5].main.temp;
            day5Wind.innerHTML = 'Wind Speed'+' '+ data.list[5].wind.speed + ' ' + 'mph';
            day5Humidity.innerHTML = 'Humidity'+' '+ data.list[5].main.humidity + '%';
            
            dayFive.append(day5Weather);
            //dayFive.append(day5Icon);
            dayFive.append(day5Temp);
            dayFive.append(day5Wind);
            dayFive.append(day5Humidity);
            dayFive.append(hrLine5);
            

         
        
    })
    }


//userinterreaction===========================
searchButton.addEventListener('click', () => getApi(selectInput.value));
ulEl.addEventListener('click', function(e){
   const eventLi = e.target.innerText;
    console.log(eventLi);
    getApi(eventLi);

})