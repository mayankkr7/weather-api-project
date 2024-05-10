import React, { useState } from "react";

const WeatherForm = ({ onSubmit, error }) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
        setCity("");
    };

    return (
        <div className="flex flex-col items-center" id="homeSearch">
            <form onSubmit={handleSubmit}>
                <input
                    className="cityInput outline-none w-full border-none rounded-lg p-2 mb-2 text-center font-semibold bg-white text-black shadow-md transition-transform duration-200 hover:scale-95"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your Location"
                />
                <button className="location-button w-full border-none rounded-lg p-2 font-semibold bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 shadow-md transition-transform duration-200 hover:scale-95">
                    Check
                </button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default WeatherForm;

