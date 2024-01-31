import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import InfoBox from "./InfoBox";
export default function SearchBox ({updateInfo}) {
    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e6934af95103fe6897cbe15cf8313c0b";

    let getWertherInfo = async () =>{
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await res.json();
        let result = {
            city:city,
            temp:jsonRes.main.temp,
            tempMax:jsonRes.main.temp_max,
            tempMin:jsonRes.main.temp_min,
            humidity:jsonRes.main.humidity,
            feelsLike:jsonRes.main.feels_like,
            weather:jsonRes.weather[0].description
        };
    return result;
    }

    let handleChange = (ev) =>{
        setCity(ev.target.value);
    }
    let handleSubmit = async (ev) =>{
        ev.preventDefault();
        console.log(city);
        setCity("");
       let info = await getWertherInfo();
       updateInfo(info);
    }

    return (
        <>
        <h3>Search City Weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} />
        <br />
        <br />
        <Button variant="contained" type="submit">Contained</Button>
        </form>
        </>
    )
}