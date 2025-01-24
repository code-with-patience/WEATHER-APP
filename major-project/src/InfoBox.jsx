import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Info } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({weather}){
   const cloud_URL='https://media.istockphoto.com/id/598222542/photo/sky-background.jpg?s=612x612&w=0&k=20&c=WBAiCExAztT4SzWh4hIgmQwTG7VMJ5o9oObXHszmm8A='

   const rain_URL='https://thumbs.dreamstime.com/b/long-awaited-cloud-rain-hot-desert-bright-clouds-above-dry-land-75524011.jpg'

   const hot_URL='https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg'

   const cold_URL='https://images.indianexpress.com/2023/12/India-cold-waves.jpg'
    return(
         <>
         <h3>Weather Information</h3>
         <br />
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        title="green iguana"
        image={
          weather.temp > 30 &&  weather.humidity < 70
          ?hot_URL
          :  weather.temp < 15
          ?cold_URL
          : weather.humidity > 80 
          ?rain_URL
          :cloud_URL
        }
              />
      <CardContent>
        <Typography gutterBottom variant="h5" component={"span"}>
          {weather.city} 
           {
              weather.temp>35 && weather.humidity<75
              ? <WbSunnyIcon />
              : weather.humidity>75 
              ?<ThunderstormIcon/>
              :<AcUnitIcon/>
          }
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature ={weather.temp}&deg;C</p>
          <p>City= {weather.city}</p>
          <p>Weather= {weather.weather}</p>
          <p>Humidity={weather.humidity}</p>
          <p>Temp_Max={weather.temp_max}</p>
          <p>Today Weather is <b>{weather.weather}</b> and Temperature be <b>{weather.temp}&deg;C</b></p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         </>
    );
}