import React from "react";
import WeatherForm from "./WeatherForm";

const WeatherDetails = ({ weatherData, onSubmit }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(weatherData.dt * 1000);
    const dayName = days[d.getDay()];
    const date = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return (
        <>
            <div className="flex relative flex-col">
                <div className="date-container absolute top-0 left-0 p-4">
                    <h2 className="date-dayname text-xl font-semibold">{dayName}</h2>
                    <h4 className="date-day text-lg">{date}-{month}-{year}</h4>
                    <i className="location-icon text-gray-300" data-feather="map-pin"><h4 className="location text-sm">{weatherData.name}, {weatherData.sys.country}</h4></i>
                </div>
                <div className="block mt-24 p-4">
                    <i className="weather-icon text-3xl text-yellow-300" data-feather="sun"></i>
                    <h1 className="weather-temp text-4xl font-bold">{weatherData.main.temp} °C</h1>
                    <h3 className="weather-desc text-yellow-200">{weatherData.weather[0].description}</h3>
                </div>
            </div>
            <div className="today-info-container mb-2">
                <div className="today-info p-4 rounded-lg shadow-md bg-gray-900">
                    <div className="feels_like">
                        <span className="title font-semibold">FEELS LIKE: </span>
                        <span className="value ml-1">{weatherData.main.feels_like} °C</span>
                    </div>
                    <div className="precipitation">
                        <span className="title font-semibold">PRESSURE: </span>
                        <span className="value ml-1">{weatherData.main.pressure} hPa</span>
                    </div>
                    <div className="humidity">
                        <span className="title font-semibold">HUMIDITY: </span>
                        <span className="value ml-1">{weatherData.main.humidity} %</span>
                    </div>
                    <div className="wind">
                        <span className="title font-semibold">WIND: </span>
                        <span className="value ml-1">{weatherData.wind.speed} m/s</span>
                    </div>
                    <div className="visibility">
                        <span className="title font-semibold">VISIBILITY: </span>
                        <span className="value ml-1">{weatherData.visibility} m</span>
                    </div>
                </div>
            </div>
            <WeatherForm onSubmit={onSubmit} />
        </>
    );
};

export default WeatherDetails;

