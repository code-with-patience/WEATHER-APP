import { useEffect, useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp(){

    const API_url="https://api.openweathermap.org/data/2.5/weather";
    const API_key="38a1684d255e8634373c28e69a0019d5";

    const [weatherInfo,setWeatherInfo]=useState(null);
    const[error,setError]=useState(false);

   

    let getWeatherInitial=async(city)=>{
         try{
            let response= await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);   //we can send request to this url and this url provide some data to us
            let jsonResponse=await response.json();
            console.log(jsonResponse);
     
            
             setWeatherInfo(
              {
                  city:jsonResponse.name,
                   temp:jsonResponse.main.temp,
                  weather:jsonResponse.weather[0].main,
                  humidity:jsonResponse.main.humidity,
                  temp_max:jsonResponse.main.temp_max
              }
             );
         }
        catch(err){
              setError(true);
        }
           
        };

        useEffect(()=>{
            getWeatherInitial("Meerut");
                },[]);

                let updateInfo=(newInfo)=>{
                    setWeatherInfo(newInfo);
                }
                

    return(
        <>
            <h1 style={{color:"green"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            {weatherInfo ? (
            <InfoBox weather={weatherInfo} />
            ) : (
               error &&  <p style={{color:"red"}}>No such place exist. Thankyou!</p>
      )};
        </>
    );
}