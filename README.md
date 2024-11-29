
# Weather App

A simple and interactive Weather App built with React.js that provides real-time weather data for any city around the world. The app uses the OpenWeatherMap API to fetch weather data and displays relevant information like temperature, humidity, weather conditions, and more. It also includes animated weather icons for a dynamic and engaging user experience.

## Features

- **City-based Weather**: Enter a city name to get the current weather details.
- **Real-time Weather Data**: Fetch live weather data from OpenWeatherMap API.
- **Dynamic Weather Icons**: Displays weather conditions with animated icons (clear sky, rain, snow, etc.).
- **Loading State**: Shows a loading indicator while fetching weather data.
- **Error Handling**: Displays error messages if the city name is invalid or data cannot be fetched.

## Technologies Used

- **React.js**: Frontend framework for building the user interface.
- **OpenWeatherMap API**: Provides weather data (temperature, humidity, weather conditions, etc.).
- **CSS Animations**: Used for weather condition animations like rain, snow, and clear sky.
- **Axios**: For making HTTP requests to the OpenWeatherMap API.

## Installation

To get started with the Weather App, follow the steps below:

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

   The app will be available at `http://localhost:3000/`.

## Usage

1. Open the app in your browser.
2. Enter the name of a city in the input field and click the "Get Weather" button.
3. View the current weather information for the city, including temperature, humidity, condition, and an animated weather icon.

## API Key

This project uses the [OpenWeatherMap API](https://openweathermap.org/) to fetch weather data. To get started, you'll need to:

1. Create an account at [OpenWeatherMap](https://openweathermap.org/api).
2. Obtain your personal API key.
3. Replace `YOUR_API_KEY` in your code (or store it securely in an `.env` file).

## Contributing

Feel free to fork the repository, make changes, and create pull requests. Contributions are always welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
