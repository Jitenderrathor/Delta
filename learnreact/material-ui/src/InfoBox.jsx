import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function InfoBox({info}) {
   
    return (
        <>
            <h3> Weather App ({info.weather})</h3>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            FeelsLike : {info.feelsLike} <br />
                            Humidity : {info.humidity} <br />
                            Temprature : {info.temp}&deg;C <br />
                            Temp-Max : {info.tempMax}&deg;C <br />
                            Temp-Min : {info.tempMin}&deg;C <br />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}