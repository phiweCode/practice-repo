



function showweatherDetails(event) {
      event.preventDefault();
       const city = document.getElementById('city').value; 

      const apiKey = '43d7b8aa78dcf2bd2999901d274d122e'; // Replace 'YOUR_API_KEY' with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={${{apiKey}}}` 

       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        }) 

         document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
} 

