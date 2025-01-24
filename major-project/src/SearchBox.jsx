import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import "./Weather.css";

export default function SearchBox({updateInfo}){
     let[city,setCity]=useState("");
     let[error,setError]=useState(false);

      const API_url="https://api.openweathermap.org/data/2.5/weather";
      const API_key="38a1684d255e8634373c28e69a0019d5";
      
      let getWeather=async()=>{
      try{
        let response= await fetch(`${API_url}?q=${city}&appid=${API_key}&units=metric`);   //we can send request to this url and this url provide some data to us
        let jsonResponse=await response.json();
        console.log(jsonResponse);
 
        let result={
         country:jsonResponse.sys.country,
         city:jsonResponse.name,
         temp:jsonResponse.main.temp,
         temp_max:jsonResponse.main.temp_max,
          temp_min:jsonResponse.main.temp_min,
          weather:jsonResponse.weather[0].main,
          humidity:jsonResponse.main.humidity
        }
 
          console.log(result);
        //  console.log("hi  2"); //for understanding
          return result;
      }
      catch(err){
           throw err;
          
      }
      }

    let handleChange=(event)=>{
        setCity(event.target.value)
  
    }
    let handleSubmit=async(event)=>{
        try{
          event.preventDefault();
        console.log(city);
        setCity("");
        setError("");
       let newInfo=await getWeather();
       updateInfo(newInfo);
        }
        catch(err){
           setError(true);
        }
    }
    return(
        <>
          <h3>Search for WEATHER</h3>
          <form action="#" onSubmit={handleSubmit}>
               <TextField id="city" label="City Name*" variant="outlined" value={city} onChange={handleChange}/>
               <br /><br />
               <Button  variant="contained" type="submit">Search</Button>
               {error && <p style={{color:"red"}}>No such place exist. Thankyou!</p>}
              
          </form>
        </>
    );
}