import React from "react";
import WeatherForm from "./WeatherForm";

const WelcomeMessage = ({ onSubmit }) => {
    const today = new Date();
    const curHr = today.getHours();
    let greet = '';

    if (curHr >= 0 && curHr < 6) {
        greet = 'What are you doing that early?';
    } else if (curHr >= 6 && curHr < 12) {
        greet = 'Good Morning';
    } else if (curHr >= 12 && curHr < 17) {
        greet = 'Good Afternoon';
    } else {
        greet = 'Good Evening';
    }

    return (
        <div className="home">
            <div className="welcome relative top-1/4 p-4 rounded-lg shadow-md bg-gray-900 text-white">
                <div className="flex flex-col items-center mb-8">
                    <h2 className="text-2xl font-bold">Welcome to <i>Savera</i></h2>
                    <h3 className="text-lg font-semibold" id="greet">{greet}!</h3>
                </div>
                <WeatherForm onSubmit={onSubmit} />
            </div>
        </div>
    );
};

export default WelcomeMessage;






















// import React from "react";
// import WeatherForm from "./WeatherForm";

// const WelcomeMessage = ({ onSubmit }) => {
//     const today = new Date();
//     const curHr = today.getHours();
//     let greet = '';

//     if (curHr >= 0 && curHr < 6) {
//         greet = 'What are you doing that early?';
//     } else if (curHr >= 6 && curHr < 12) {
//         greet = 'Good Morning';
//     } else if (curHr >= 12 && curHr < 17) {
//         greet = 'Good Afternoon';
//     } else {
//         greet = 'Good Evening';
//     }

//     return (
//         <div className="home">
//             <div className="welcome">
//                 <h2 className="text">Welcome to <i>Savera</i></h2>
//                 <h3 className="text greet" id="greet">{greet}!</h3>
//                 <WeatherForm onSubmit={onSubmit} />
//             </div>
//         </div>
//     );
// };

// export default WelcomeMessage;



