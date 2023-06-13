import React, { useState, useEffect } from 'react';
import './App.css';
import weatherImage from './images/snowy.png';
import temparature from './images/temparature.png';
import humidity from './images/humidity.png';
import pressure from './images/pressure.png';
import uvindex from './images/uv-index.png';
import precipitation from './images/precipitation.png';
import windspeed from './images/windspeed.png';
import visibility from './images/visibility.png';
import cloudcover from './images/cloud-cover.png';

function App() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if (navigator.geolocation) {
      // Prompt the user to enable their current location
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          // Set the current location in the state
          setCurrentLocation({ latitude, longitude });
          // Fetch weather data for the current location
          fetchWeatherData(latitude, longitude);
        },
        error => {
          // Handle the error when the user denies access to their current location
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation API not supported in this browser');
    }
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    // API call to the backend to fetch weather data based on the current location
    const response = await fetch(`http://localhost:8000/api/weather?lat=${latitude}&lon=${longitude}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSearch = async () => {
    // API call to the backend to fetch weather data based on the location
    const response = await fetch(`http://localhost:8000/api/weather?location=${location}`);
    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="App">
      <h1>Weather Tracker</h1>
      {!weatherData && currentLocation && (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {currentLocation.latitude}</p>
          <p>Longitude: {currentLocation.longitude}</p>
        </div>
      )}
      <div>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div className="weather-data">
          <h2>Current Weather {location}</h2>
          <div className="weather-container">
            <div className="weather-row">
              <div className="weather-box">
                <img src={weatherImage} alt="Weather Icon" />
                {weatherData && weatherData.conditions && (
                  <h3>Condition: {weatherData.conditions.join(', ')}</h3>
                )}
              </div>

              <div className="weather-box">
              <img src={temparature} alt="Temperature Icon" />
                <h3>Temperature: {weatherData.temperature}°C</h3>
              </div>

              <div className="weather-box">
                <img src={humidity} alt="Humidity Icon" />
                <h3>Humidity: {weatherData.humidity}%</h3>
              </div>
            </div>
            
            <div className="weather-row">
              <div className="weather-box">
                <img src={pressure} alt="Pressure Icon" />
                <h3>Pressure: {weatherData.pressure}hPa</h3>
              </div>

              <div className="weather-box">
                <img src={precipitation} alt="Precipitation Icon" />
                <h3>Precipitation: {weatherData.precip}%</h3>
              </div>

              <div className="weather-box">
                <img src={cloudcover} alt="CloudCover Icon" />
                <h3>Cloud Cover: {weatherData.cloudcover}%</h3>
              </div>
            </div>

            <div className="weather-row">
              <div className="weather-box">
                <img src={windspeed} alt="WindSpeed Icon" />
                <h3>Wind Speed: {weatherData.wind_speed}km/h</h3>
              </div>

              <div className="weather-box">
                <img src={uvindex} alt="UVindex Icon" />
                <h3>UV Index: {weatherData.uv_index}</h3>
              </div>

              <div className="weather-box">
                <img src={visibility} alt="Visibility Icon" />
                <h3>Visibility: {weatherData.visibility}km</h3>
              </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;


