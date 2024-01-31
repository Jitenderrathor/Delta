import { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    let [weatherInfo, setweatherInfo] = useState({
        city: "City",
        feelsLike: 15.16,
        humidity: 60,
        temp: 15.94,
        tempMax: 15.94,
        tempMin: 15.94,
        weather: "overcast clouds"
    });
    let updateInfo = (newInfo) =>{
        setweatherInfo(newInfo);
    }
    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}