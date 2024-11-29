import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric', // Temperature in Celsius
            },
        });
        return response.data;
    } catch (error) {
        console.error('API error, falling back to local JSON data:', error.message);
        let fallbackData;
        fallbackData = require('./weather_api_output.json');
        return fallbackData;
    }
};
