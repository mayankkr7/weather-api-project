import React, { useState } from "react";
import axios from "axios";
import config from "../config/config";
import WeatherDetails from "./WeatherDetails";
import WelcomeMessage from "./WelcomeMessage";
// import { WeatherDetails, WelcomeMessage, WeatherForm } from "./index";

const WeatherManager = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");

    const API_KEY = config.apiKey;
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const fetchWeatherData = async (city) => {
        try {
            const response = await axios.get(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
            setError("");
        } catch (error) {
            setWeatherData(null);
            setError("Error fetching Weather data. Enter name correctly.");
        }
    };

    return (
            <div className="mx-auto h-auto rounded-lg shadow-lg bg-gray-900 text-gray-300 p-8">
                {/* <WeatherForm onSubmit={fetchWeatherData} /> */}
                {error && <p className="error text-red-300">{error}</p>}
                {weatherData ? (
                    <WeatherDetails weatherData={weatherData} onSubmit={fetchWeatherData} />
                ) : (
                    <WelcomeMessage onSubmit={fetchWeatherData} />
                )}
            </div>
    );
};

export default WeatherManager;

