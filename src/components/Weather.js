import React, { useState } from 'react';
import { getWeatherByCity } from '../WeatherService';
import ReactAnimatedWeather from 'react-animated-weather';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchWeather = async () => {
        setIsLoading(true);
        try {
            setError('');
            const data = await getWeatherByCity(city);
            setWeather(data);
        } catch (err) {
            setWeather(null);
            setError('Could not fetch weather data. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Function to map weather condition to icon
    const getWeatherIcon = (condition) => {
        switch (condition.toLowerCase()) {
            case 'clear sky':
                return 'CLEAR_DAY';
            case 'few clouds':
            case 'scattered clouds':
                return 'PARTLY_CLOUDY_DAY';
            case 'clouds':
                return 'CLOUDY';
            case 'rain':
                return 'RAIN';
            case 'snow':
                return 'SNOW';
            case 'thunderstorm':
                return 'WIND';
            case 'fog':
                return 'FOG';
            default:
                return 'PARTLY_CLOUDY_DAY'; // Default to partly cloudy
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="weather-input"
            />
            <button onClick={fetchWeather}>Get Weather</button>

            {isLoading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weather && (
                <div className="weather-card">
                    <h2>{weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Feels Like: {weather.main.feels_like}°C</p>
                    <p>Condition: {weather.weather[0].description}</p>
                    <p>Humidity: {weather.main.humidity}%</p>

                    {/* Use ReactAnimatedWeather component */}
                    <ReactAnimatedWeather
                        icon={getWeatherIcon(weather.weather[0].description)}
                        color="goldenrod"
                        size={100}
                        animate={true}
                    />
                </div>
            )}
        </div>
    );
};

export default Weather;