// import React, { useState } from "react";
// import { WeatherDetails, WeatherForm, WelcomeMessage} from "./index";

// const WeatherDisplay = () => {
//     const [weatherData, setWeatherData] = useState(null);

//     const handleWeatherData = (data) => {
//         setWeatherData(data);
//     };

//     return (
//         <div className="container">
//             {weatherData ? (
//                 <WeatherDetails weatherData={weatherData} />
//             ) : (
//                 <WelcomeMessage />
//             )}
//             <WeatherForm onSubmit={handleWeatherData} />
//         </div>
//     );
// };

// export default WeatherDisplay;

















// import React, { useState } from 'react';
// import axios from 'axios';
// import config from '../config/config';
// import { WeatherDetails, WeatherForm, WelcomeMessage} from "./index";

// const WeatherDisplay = () => {
//     const [city, setCity] = useState('');
//     const [weatherData, setWeatherData] = useState(null);
//     const [error, setError] = useState('');

//     const API_KEY = config.apiKey;
//     const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//             setWeatherData(response.data);
//             setError('');
//         } catch (error) {
//             setWeatherData(null);
//             setError('Error fetching weather data. Please try again.');
//         }
//     };

//     return (
//         <div className="container">
//             {error && <p className="error">{error}</p>}
//             {weatherData ? (
//                 <WeatherDetails weatherData={weatherData} />
//             ) : (
//                 <WelcomeMessage />
//             )}
//             <WeatherForm onSubmit={handleSubmit} city={city} setCity={setCity} />
//         </div>
//     );
// };

// export default WeatherDisplay;
